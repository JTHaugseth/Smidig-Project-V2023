import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import levenshtein from 'fast-levenshtein';
import Sidebar from './Sidebar';
import ShopItem from './ShopItem';

const Store = () => {
    const [storeItems, setStoreItems] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [discoverFilter, setDiscoverFilter] = useState(true);
    const [freeFilter, setFreeFilter] = useState(false);
    const [title, setTitle] = useState('');
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:5233/StoreItem`)
            .then(res => {
                setStoreItems(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    const filterItems = (storeItem) => {
        if (selectedType && storeItem.type !== selectedType) {
            return false;
        }
        if (discoverFilter && parseInt(storeItem.rating.split('/')[0]) <= 3) {
            return false;
        }
        if (freeFilter && storeItem.price !== 0) {
            return false;
        }
        return true;
    }

    const sortItems = (items) => {
        return items.sort((a, b) => {
            const aStartsWithInput = a.title.toLowerCase().startsWith(searchInput.toLowerCase()) ? 0 : 1;
            const bStartsWithInput = b.title.toLowerCase().startsWith(searchInput.toLowerCase()) ? 0 : 1;
        
            if (aStartsWithInput !== bStartsWithInput) {
                return aStartsWithInput - bStartsWithInput;
            }
        
            const searchWords = searchInput.toLowerCase().split(' ');
            const aTitleWords = new Set(a.title.toLowerCase().split(' '));
            const bTitleWords = new Set(b.title.toLowerCase().split(' '));
        
            const aMatches = searchWords.filter(word => aTitleWords.has(word)).length;
            const bMatches = searchWords.filter(word => bTitleWords.has(word)).length;
    
            if (aMatches !== bMatches) {
                return bMatches - aMatches;
            }
        
            const aDistance = levenshtein.get(a.title.toLowerCase(), searchInput.toLowerCase());
            const bDistance = levenshtein.get(b.title.toLowerCase(), searchInput.toLowerCase());
        
            return aDistance - bDistance;
        });
    };
    

    useEffect(() => {
        let newTitle = '';
        if (selectedType) {
            newTitle += selectedType + ' ';
        }
        if (discoverFilter) {
            newTitle += 'Discover ';
        }
        if (freeFilter) {
            newTitle += 'Free ';
        }
        setTitle(newTitle.trim());
    }, [selectedType, discoverFilter, freeFilter]);

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar setSelectedType={setSelectedType} setDiscoverFilter={setDiscoverFilter} setFreeFilter={setFreeFilter} setSearchInput={setSearchInput}/>
                <Container className="shop-container col">
                    <h2 id="title">{title}</h2>
                    <Row>
                    {sortItems(storeItems.filter(filterItems)).map((storeItem) => (
                            <ShopItem
                                key={storeItem.id}
                                id={storeItem.id}
                                title={storeItem.title} 
                                type={storeItem.type}
                                shortDesc={storeItem.shortDesc}
                                longDesc={storeItem.longDesc}
                                price={`$${storeItem.price}`}
                                rating={storeItem.rating}
                                image={`http://localhost:5233/images/${storeItem.image}`}
                            />
                        ))}  
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Store;