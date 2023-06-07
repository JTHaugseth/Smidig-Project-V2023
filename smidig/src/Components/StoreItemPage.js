import React, { useEffect, useState } from 'react';
import '../Assets/Styles/StoreItemPage.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import StarRating from './StarRating';


const StoreItemPage = () => {
  const [storeItem, setStoreItem] = useState(null);
  const [isOwned, setIsOwned] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    const currentItemId = localStorage.getItem('currentItemId');
    const ownedItems = JSON.parse(localStorage.getItem('ownedItems')) || [];

    if (!ownedItems.includes(currentItemId)) {
      ownedItems.push(currentItemId);
      localStorage.setItem('ownedItems', JSON.stringify(ownedItems));
      setIsOwned(true);
    }
  }

  useEffect(() => {
    const currentItemId = localStorage.getItem('currentItemId');
    const ownedItems = JSON.parse(localStorage.getItem('ownedItems')) || [];

    setIsOwned(ownedItems.includes(currentItemId));

    axios.get(`http://localhost:5233/StoreItem/${currentItemId}`)
      .then(res => {
        setStoreItem(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const backButton = () => {
    navigate('/store/'); 
  };

  return (
    <div className="container-fluid storeItemContainer">
      <div className='row'>
        <div className="col-md-5 infobox">
          <button className="back-button" onClick={backButton}>Back</button>
          {storeItem && <h1 className='single-title'>{storeItem.title}</h1>}
          {storeItem && <p id="long-desc">{storeItem.longDesc}</p>}
          {storeItem && <StarRating rating={storeItem.rating} />}
        </div>
        <div className='col-md-7 image-box'>
          {storeItem && <img src={`http://localhost:5233/images/${storeItem.image}`} alt="Product" className="single-image" />}
          <p></p>
          <div className='background-buy'>
            {!isOwned && storeItem && <p id="price-label">{storeItem.price}</p>}
            <button className='btn btn-success' id="buy-button" onClick={handleClick}>
              {isOwned ? 'Owned' : 'Buy'}
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreItemPage;