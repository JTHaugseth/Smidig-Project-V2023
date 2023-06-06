import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../Assets/Styles/ShopItem.css';


const ShopItem = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    localStorage.setItem('currentItemId', props.id)
    navigate('/store/shopItems'); 
  };

  return (
    <Col md={3} className="custom-col">
      <div id="product-details" className='flex-grow-1'>
        <img src={props.image} alt="Product" className="product-image" />
        <h3 className='packtitle'>{props.title}</h3>
        <p className='desccard'>{props.shortDesc}</p>
      </div>
      {props.price !== '$0' ? (
        <Button onClick={handleClick}>{props.price}</Button>
        ) : (
          <Button onClick={handleClick}>Free</Button>
        )}
    </Col>
  ); 
}

export default ShopItem;