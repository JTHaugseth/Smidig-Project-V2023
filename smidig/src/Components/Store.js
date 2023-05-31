import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Shopitem from './ShopItem';

const Store = () => {
    return (
        <div class="container-fluid">
            <div class="row">
                <Sidebar />
                <Container className="shop-container col">
                    <Row>
                            <Shopitem
                                image="kuk"
                                title="Super mega Ultra nigga pack"
                                description="This pack is super mega epic"
                                price="$42"
                            />
                            <Shopitem
                                image="kuk"
                                title="Cool pack"
                                description="Just dance to the rhythm of this cool pack"
                                price="$42"
                            />
                            <Shopitem
                                image="kuk"
                                title="Cool pack1"
                                description="Just dance to the rhythm of this cool pack"
                                price="$42"
                            />
                            <Shopitem
                                image="kuk"
                                title="Cool pack1"
                                description="Just dance to the rhythm of this cool pack"
                                price="$42"
                            />
                            <Shopitem
                                image="kuk"
                                title="Cool pack1"
                                description="Just dance to the rhythm of this cool pack"
                                price="$42"
                            />
                            <Shopitem
                                image="kuk"
                                title="Cool pack1"
                                description="Just dance to the rhythm of this cool pack"
                                price="$42"
                            />
                            <Shopitem
                                image="kuk"
                                title="Cool pack1"
                                description="Just dance to the rhythm of this cool pack"
                                price="$42"
                            />
                            <Shopitem
                                image="kuk"
                                title="Cool pack1"
                                description="Just dance to the rhythm of this cool pack"
                                price="$42"
                            />
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Store;