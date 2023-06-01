import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../Assets/Styles/ShopItem.css';


const ShopItem = (props) => {
  return (
    <Col md={3} className="custom-col">
      <div id="product-details" className='flex-grow-1'>
        <img src={props.image} alt="Product" className="product-image" />
        <h3 className='packtitle'>{props.title}</h3>
        <p className='desccard'>{props.shortDesc}</p>
      </div>
      <Button>{props.price}</Button>
    </Col>
  );
}

export default ShopItem;