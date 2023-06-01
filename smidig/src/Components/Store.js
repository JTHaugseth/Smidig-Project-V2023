import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import ShopItem from './ShopItem';

const Store = () => {
    const [storeItems, setStoreItems] = useState([]);
    const [selectedType, setSelectedType] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:5233/StoreItem`)
            .then(res => {
                setStoreItems(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar setSelectedType={setSelectedType}/>
                <Container className="shop-container col">
                    <Row>
                    {storeItems.filter((storeItem) => !selectedType || storeItem.type === selectedType).map((storeItem) => (
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