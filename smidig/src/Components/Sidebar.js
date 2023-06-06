import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faLayerGroup, faVolumeHigh, faWandMagicSparkles, faTag, faSearch, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import '../Assets/Styles/SideBar.css';

const Sidebar = ({setSelectedType, setDiscoverFilter, setFreeFilter}) => {
    const [activeButton, setActiveButton] = useState('Discover');
    const [showSearch, setShowSearch] = useState(false);

    const handleTypeClick = (type) => {
        setSelectedType(type);
        setDiscoverFilter(false);
        setFreeFilter(false);
        setActiveButton(type);
    };

    return (
        <div id="sidebar" className="row">
            
            {showSearch && (
                    <div>
                        <button className="sidebarItem" onClick={() => setShowSearch(false)}>
                            <div className="contentContainer">
                                <FontAwesomeIcon icon={faArrowLeft} /> 
                            </div>
                            Back
                        </button>
                        <input id="searchSidebar" placeholder="Search" type="search" />
                    </div>
                )}
                {!showSearch && 
                    <button className="sidebarItem" onClick={() => setShowSearch(true)}>
                        <div className="contentContainer">
                            <FontAwesomeIcon icon={faSearch} /> 
                        </div>
                        Search
                    </button>
            }
            <button className={`sidebarItem ${activeButton === 'Discover' ? 'active' : ''}`} onClick={() => { setDiscoverFilter(true); setSelectedType(null); setFreeFilter(false); setActiveButton('Discover'); }}>
                <div className="contentContainer">
                    <FontAwesomeIcon icon={faStar} />
                </div>
                Discover
            </button>
            <button className={`sidebarItem ${activeButton === 'Overlay' ? 'active' : ''}`} onClick={() => handleTypeClick('Overlay')}>
                <div className="contentContainer">
                    <FontAwesomeIcon icon={faLayerGroup} />
                </div>
                Overlays
            </button>
            <button className={`sidebarItem ${activeButton === 'Sound' ? 'active' : ''}`} onClick={() => handleTypeClick('Sound')}>
                <div className="contentContainer">
                    <FontAwesomeIcon icon={faVolumeHigh} /> 
                </div>
                Sounds
            </button>
            <button className={`sidebarItem ${activeButton === 'Effect' ? 'active' : ''}`} onClick={() => handleTypeClick('Effect')}>
                <div className="contentContainer">
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                </div>
                Effects
            </button>
            <button className={`sidebarItem ${activeButton === 'Free' ? 'active' : ''}`} onClick={() => { setFreeFilter(true); setSelectedType(null); setDiscoverFilter(false); setActiveButton('Free'); }}>
                <div className="contentContainer">
                    <FontAwesomeIcon icon={faTag} rotation={90} />
                </div>
                Free
            </button>
        </div>
    );
}

export default Sidebar;