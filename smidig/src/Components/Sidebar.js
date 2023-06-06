import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faLayerGroup, faVolumeHigh, faWandMagicSparkles, faTag, faSearch, faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import '../Assets/Styles/SideBar.css';

const Sidebar = ({setSelectedType, setDiscoverFilter, setFreeFilter, setSearchInput}) => {
    const [activeButton, setActiveButton] = useState('Discover');
    const [showSearch, setShowSearch] = useState(false);
    const [searchActive, setSearchActive] = useState(false);

    const handleTypeClick = (type) => {
        setSelectedType(type);
        setDiscoverFilter(false);
        setFreeFilter(false);
        setActiveButton(type);
    };

    const handleSearchClick = () => {
        setShowSearch(true);
        setSearchActive(true);
        setDiscoverFilter(false);
        setFreeFilter(false);
        setSelectedType(null);
        setActiveButton('');
    };

    const handleBackClick = () => {
        setShowSearch(false);
        setSearchActive(false);
        setActiveButton('Discover');
        setDiscoverFilter(true);
        setSearchInput('');
    };

    return (
        <div id="sidebar" className={`row ${searchActive ? 'dimmed' : ''}`}>
            {showSearch && (
                <div>
                    <button className="sidebarItem searchActive" onClick={handleBackClick}>
                        <div className="contentContainer">
                            <FontAwesomeIcon icon={faArrowLeft} /> 
                        </div>
                        Back
                    </button>
                    <input 
                        id="searchSidebar" 
                        className="searchActive" 
                        placeholder="Search" 
                        type="search" 
                        onChange={e => setSearchInput(e.target.value)}
                    />
                </div>
            )}
            {!showSearch && 
                <button className="sidebarItem" onClick={handleSearchClick} disabled={searchActive}>
                    <div className="contentContainer">
                        <FontAwesomeIcon icon={faSearch} /> 
                    </div>
                    Search
                </button>
            }
            <button className={`sidebarItem ${activeButton === 'Discover' ? 'active' : ''}`} onClick={() => { setDiscoverFilter(true); setSelectedType(null); setFreeFilter(false); setActiveButton('Discover'); }} disabled={searchActive}>
                <div className="contentContainer">
                    <FontAwesomeIcon icon={faStar} />
                </div>
                Discover
            </button>
            <button className={`sidebarItem ${activeButton === 'Overlay' ? 'active' : ''}`} onClick={() => handleTypeClick('Overlay')} disabled={searchActive}>
                <div className="contentContainer">
                    <FontAwesomeIcon icon={faLayerGroup} />
                </div>
                Overlays
            </button>
            <button className={`sidebarItem ${activeButton === 'Sound' ? 'active' : ''}`} onClick={() => handleTypeClick('Sound')} disabled={searchActive}>
                <div className="contentContainer">
                    <FontAwesomeIcon icon={faVolumeHigh} /> 
                </div>
                Sounds
            </button>
            <button className={`sidebarItem ${activeButton === 'Effect' ? 'active' : ''}`} onClick={() => handleTypeClick('Effect')} disabled={searchActive}>
                <div className="contentContainer">
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                </div>
                Effects
            </button>
            <button className={`sidebarItem ${activeButton === 'Free' ? 'active' : ''}`} onClick={() => { setFreeFilter(true); setSelectedType(null); setDiscoverFilter(false); setActiveButton('Free'); }} disabled={searchActive}>
                <div className="contentContainer">
                    <FontAwesomeIcon icon={faTag} rotation={90} />
                </div>
                Free
            </button>
        </div>
    );
}

export default Sidebar;