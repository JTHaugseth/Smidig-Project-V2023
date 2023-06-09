import { useState, useEffect } from 'react';
import SceneNavbar from './Homepage/SceneNavbar';
import '../Assets/Styles/Homepage/Home.css';
import PackagesWindow from './Homepage/PackagesWindow';
import SceneWindow from './Homepage/SceneWindow';
// import LayersWindow from './Homepage/LayersWindow';
import EditWindow from './Homepage/EditWindow';

const Home = () => {
    const [myItems, setMyItems] = useState([]);
    const [packageItems, setPackageItems] = useState([
        {
            id: 0,
            name: 'Header',
            selected: true,
            position: { x: 0, y: 0 },
            text: 'User123 - 1000 followers',
            style: {
                height: '50px',
                width: '100%',
                backgroundColor: 'rgb(122, 4, 63)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            },
        },
        {
            id: 1,
            name: 'Icon frame',
            selected: true,
            position: { x: 20, y: 746 },
            text: '',
            style: {
                width: '300px',
                height: '300px',
                border: '16px solid rgb(122, 4, 63)',
                borderRadius: '16px',
            }

        },
        {
            id: 2,
            name: 'Sub counter',
            selected: true,
            position: { x: 20, y: 60 },
            text: 'SubCount: 69/420',
            style: {
                height: '60px',
                backgroundColor: 'rgb(122, 4, 63)',
                padding: '0 16px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
            }
        },
        {
            id: 3,
            name: 'Social media',
            selected: true,
            position: { x: 1600, y: 990 },
            text: 'youtube.com/User123',
            style: {
                fontSize: '24px',
                height: '60px',
                backgroundColor: 'rgb(122, 4, 63)',
                padding: '0 16px',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
            }
        },
    ]);

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
                    <PackagesWindow myItems={myItems} />
                    {/* <LayersWindow /> */}
                    <EditWindow packageItems={packageItems} setPackageItems={setPackageItems} />
                </div>
                {/* Container for the "Scene" section */}
                <SceneWindow packageItems={packageItems} />
            </div>
        </>
    );
}

export default Home;