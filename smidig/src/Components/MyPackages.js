import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import MyItems from './MyItems';

const MyPackages = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <Container className="shop-container col">
                    <Row>
                        <MyItems 
                            image="Image"
                            title="Super mega Ultra nigga pack"
                            description="This pack is super mega epic"
                        />
                        <MyItems 
                            image="Image"
                            title="Super mega Ultra nigga pack"
                            description="This pack is super mega epic"
                        />
                        <MyItems 
                            image="Image"
                            title="Super mega Ultra nigga pack"
                            description="This pack is super mega epic"
                        />
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default MyPackages;