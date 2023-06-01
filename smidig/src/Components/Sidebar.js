import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faLayerGroup, faVolumeHigh, faWandMagicSparkles, faTag } from '@fortawesome/free-solid-svg-icons';
import '../Assets/Styles/SideBar.css';

const Sidebar = ({setSelectedType}) => {
    const handleTypeClick = (type) => {
        setSelectedType(type);
    };

    return (
        <div id="sidebar" className="row">
            <div>
                <input id="searchSidebar" placeholder="search" type="search" />
            </div>
            <button className="sidebarItem">
                <div className="contentContainer">
                    <FontAwesomeIcon icon={faStar} />
                </div>
                Discover
            </button>
            <button className="sidebarItem" onClick={() => handleTypeClick('Overlay')}>
                <div className="contentContainer">
                    <FontAwesomeIcon icon={faLayerGroup} />
                </div>
                Overlays
            </button>
            <button className="sidebarItem" onClick={() => handleTypeClick('Sound')}>
                <div className="contentContainer">
                    <FontAwesomeIcon icon={faVolumeHigh} />
                </div>
                Sounds
            </button>
            <button className="sidebarItem" onClick={() => handleTypeClick('Effect')}>
                <div className="contentContainer">
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                </div>
                Effects
            </button>
            <button className="sidebarItem">
                <div className="contentContainer">
                    <FontAwesomeIcon icon={faTag} rotation={90} />
                </div>
                Free
            </button>
        </div>
    );
}

export default Sidebar;