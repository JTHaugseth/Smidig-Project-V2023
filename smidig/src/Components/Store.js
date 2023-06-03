import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import ShopItem from './ShopItem';

const Store = () => {
    const [storeItems, setStoreItems] = useState([]);
    const [selectedType, setSelectedType] = useState(null);
    const [discoverFilter, setDiscoverFilter] = useState(true);
    const [freeFilter, setFreeFilter] = useState(false);

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
        if (discoverFilter && parseInt(storeItem.rating.split('/')[0]) <= 7) {
            return false;
        }
        if (freeFilter && storeItem.price !== 0) {
            return false;
        }
        return true;
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar setSelectedType={setSelectedType} setDiscoverFilter={setDiscoverFilter} setFreeFilter={setFreeFilter}/>
                <Container className="shop-container col">
                    <Row>
                    {storeItems.filter(filterItems).map((storeItem) => (
                            <ShopItem
                                key={storeItem.id}
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