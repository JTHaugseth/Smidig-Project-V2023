import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Shopitem from './ShopItem';

const Store = () => {
    const [storeItems, setStoreItems] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5233/StoreItem`)
            .then(res => {
                setStoreItems(res.data);
            })
            .catch(err => console.error(err));
    }, []);

    return (
        <div class="container-fluid">
            <div class="row">
                <Sidebar />
                <Container className="shop-container col">
                    <Row>
                        
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Store;