import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar, faLayerGroup, faVolumeHigh, faWandMagicSparkles, faTag } from '@fortawesome/free-solid-svg-icons';




const Sidebar = () => {
    return (
        <div id="sidebar" className="row">
        <div className="sidebarItem"><input id="searchSidebar"  type="search" 
        /></div>
        <img />
        <div className="sidebarItem"><FontAwesomeIcon icon={faStar} /><p>Discover</p></div>
        <div className="sidebarItem"><FontAwesomeIcon icon={faLayerGroup} /><p>Overlays</p></div>
        <div className="sidebarItem"><FontAwesomeIcon icon={faVolumeHigh} /><p>Sounds</p></div>
        <div className="sidebarItem"><FontAwesomeIcon icon={faWandMagicSparkles} /><p>Effects</p></div>
        <div className="sidebarItem"><FontAwesomeIcon icon={faTag} rotation={90} /><p>Free</p></div>
        
        </div>
    );
}

export default Sidebar;