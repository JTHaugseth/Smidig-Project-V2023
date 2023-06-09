import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SidebarMyPackages from './SidebarMyPackages';
import MyItems from './MyItems';

const MyPackages = () => {
  const [myItems, setMyItems] = useState([]);
  const [selectedType, setSelectedType] = useState(null);

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
      for (let id of ownedItems) {
        const itemData = await fetchItemData(id);
        items.push(itemData);
      }
      setMyItems(items);
    };
    fetchMyItems();
  }, []);

  const filterItems = (MyItems) => {
    if (selectedType && MyItems.type !== selectedType) {
      return false;
    }
    return true;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <SidebarMyPackages setSelectedType={setSelectedType} />
        <Container className="shop-container col">
          <Row>
            {myItems.filter(filterItems).map(item => (
              <Col key={item.id} md={4}>
                <MyItems
                  id={item.id}
                  image={`http://localhost:5233/images/${item.image}`}
                  title={item.title}
                  description={item.shortDesc}
                  removeItem={removeItem}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default MyPackages;