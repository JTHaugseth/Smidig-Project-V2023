import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './Sidebar';
import MyItems from './MyItems';

const MyPackages = () => {
    const [myItems, setMyItems] = useState([]);

    const fetchItemData = async (id) => {
        const res = await fetch(`http://localhost:5233/StoreItem/${id}`);
        const itemData = await res.json();
        return itemData;
    };

    const removeItem = (id) => {
        let ownedItems = JSON.parse(localStorage.getItem('ownedItems')) || [];
        ownedItems = ownedItems.filter(itemID => itemID !== id);
        localStorage.setItem('ownedItems', JSON.stringify(ownedItems));
        setMyItems(myItems.filter(item => item.id !== id));
    };

    useEffect(() => {
        const ownedItems = JSON.parse(localStorage.getItem('ownedItems')) || [];

        const fetchMyItems = async () => {
            const items = [];
            for(let id of ownedItems) {
                const itemData = await fetchItemData(id);
                items.push(itemData);
            }
            setMyItems(items);
        };
        fetchMyItems();
    }, []);

    return (
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <Container className="shop-container col">
              <Row>
                {myItems.map(item => (
                  <MyItems 
                    key={item.id}
                    id={item.id}
                    image={`http://localhost:5233/images/${item.image}`}
                    title={item.title}
                    description={item.shortDesc}
                    removeItem={removeItem}
                  />
                ))}
              </Row>
            </Container>
          </div>
        </div>
      );
}

export default MyPackages;