import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLayerGroup, faVolumeHigh, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import '../Assets/Styles/SideBar.css';

const SidebarMyPackages = ({ setSelectedType }) => {
  const [activeButton, setActiveButton] = useState('Overlay');

  const handleTypeClick = (type) => {
    setSelectedType(type);
    setActiveButton(type);
  };

  return (
    <div id="sidebar">
      <button
        className={`sidebarItem ${activeButton === 'Overlay' ? 'active' : ''}`}
        onClick={() => handleTypeClick('Overlay')}>
        <div className="contentContainer">
          <FontAwesomeIcon icon={faLayerGroup} />
        </div>
        Overlays
      </button>

      <button
        className={`sidebarItem ${activeButton === 'Sound' ? 'active' : ''}`}
        onClick={() => handleTypeClick('Sound')}>
        <div className="contentContainer">
          <FontAwesomeIcon icon={faVolumeHigh} />
        </div>
        Sounds
      </button>

      <button
        className={`sidebarItem ${activeButton === 'Effect' ? 'active' : ''}`}
        onClick={() => handleTypeClick('Effect')}>
        <div className="contentContainer">
          <FontAwesomeIcon icon={faWandMagicSparkles} />
        </div>
        Effects
      </button>
    </div>
  );
};

export default SidebarMyPackages;