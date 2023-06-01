import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';



const ShopItem = (props) => {
  return (
    <Col md={3} className="custom-col">
      <div id="product-details" className='flex-grow-1'>
        <img src={props.image} alt="Image1" className="product-image" />
          <h3 className='packtitle'>{props.title}</h3>
          <p className='desccard'>{props.description}</p>
      
       </div>
    </Col>
  );
}

export default ShopItem;