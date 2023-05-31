import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import MyItems from './MyItems';

const MyPackages = () => {
    return (
        <div class="container fluid">
            <div class="row">
                <Sidebar />
                <Container className="shop-container col">
                    <Row>
                        <MyItems 
                            image="Image"
                            title="Super mega Ultra nigga pack"
                            description="This pack is super mega epic"
                            price="$42"
                        />
                        <MyItems 
                            image="Image"
                            title="Super mega Ultra nigga pack"
                            description="This pack is super mega epic"
                            price="$42"
                        />
                        <MyItems 
                            image="Image"
                            title="Super mega Ultra nigga pack"
                            description="This pack is super mega epic"
                            price="$42"
                        />
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default MyPackages;