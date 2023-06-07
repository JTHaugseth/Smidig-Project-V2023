import { useState, useEffect } from 'react';
import SceneNavbar from './Homepage/SceneNavbar';
import '../Assets/Styles/Homepage/Home.css';
import PackagesWindow from './Homepage/PackagesWindow';
import SceneWindow from './Homepage/SceneWindow';
import LayersWindow from './Homepage/LayersWindow';

const Home = () => {
    const [currentScene, setCurrentScene] = useState({
        sceneName: 'Scene 1',
        layers: [
            {
                layerName: 'Layer 1',
                layerType: 'Image',
                layerImage: 'https://i.imgur.com/2ZQqYkK.png',
                layerHierarchy: 1,
                layerPosition: {
                    x: 0,
                    y: 0
                },
                layerSize: {
                    width: 100,
                    height: 100
                },
                layerRotation: 0,
                layerOpacity: 100,
                layerVisibility: true
            },
        ]
    });

    const [myItems, setMyItems] = useState([]);

    const fetchItemData = async (id) => {
      const res = await fetch(`http://localhost:5233/StoreItem/${id}`);
      const itemData = await res.json();
      return itemData;
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

    return (
        <>
            {/* Render the SceneNavbar component */}
            <SceneNavbar />

            <div className='home-container'>
                {/* Container for the "Tools" and "Scene" sections */}
                <div className='home-tools-container'>
                    <p className='element-description'>Tools</p>
                    <PackagesWindow myItems={myItems}/>
                    <LayersWindow />
                </div>
                {/* Container for the "Scene" section */}
                <SceneWindow />
            </div>
        </>
    );
}

export default Home;