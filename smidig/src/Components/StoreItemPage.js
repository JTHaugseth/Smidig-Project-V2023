import React, { useEffect, useState } from 'react';
import '../Assets/Styles/StoreItemPage.css';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const StoreItemPage = () => {
  const [storeItem, setStoreItem] = useState(null);
  const [isOwned, setIsOwned] = useState(false);

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

  return (
    <div className="container-fluid storeItemContainer">
      <div className='row'>
        <div className="col-md-5 infobox">
          <button className="back-button">Back</button>
          {storeItem && <h1 className='single-title'>{storeItem.title}</h1>}
          {storeItem && <p>{storeItem.longDesc}</p>}
          {storeItem && <p>{storeItem.rating}</p>}
        </div>
        <div className='col-md-7 image-box'>
          {storeItem && <img src={`http://localhost:5233/images/${storeItem.image}`} alt="Product" className="single-image" />}
          <p></p>
          <div className='background-buy'>
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