import '../../Assets/Styles/Homepage/LayersWindow.css';
import { ChevronDownIcon, ChevronRightIcon } from '../Icons';
import { useState } from 'react';

const LayersWindow = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    };

    return (
        <div className='home-tools-layers-container'>
            <p className='element-description'>Layers</p>
            <div className="layer-item-container">
                <div className="layer-item">
                    {isOpen ? (
                        <button className="chevron-button" onClick={toggleOpen}>
                            <ChevronRightIcon size={'sm'} />
                        </button>
                    ) : (
                        <button className="chevron-button" onClick={toggleOpen}>
                            <ChevronDownIcon size={'sm'} />
                        </button>
                    )}
                    Layer 1
                </div>
                <div className={`layer-subitems ${isOpen ? 'layer-subitem-hidden' : ''} `}>
                    <div className='layer-item-container'>
                        Subitem 1
                    </div>
                </div>
            </div>
            <div className="layer-item-container">
                Item 2
            </div>
        </div>
    );
}

export default LayersWindow;