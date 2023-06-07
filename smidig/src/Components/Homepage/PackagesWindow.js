import { OverlayIcon, SoundIcon, EffectsIcon } from "../Icons";
import { useState } from 'react';
import MyItems from "../MyItems";
import '../../Assets/Styles/Homepage/PackagesWindow.css';

const ToolbarItem = (props) => {
    const handleClick = () => {
        props.setActive(props.item);
    };

    return (
        <li className={`packages-toolbar-item ${props.isActive ? 'option-active' : ''}`} onClick={handleClick}        >
            <div className="nav-link d-flex">
                <div className="icon-container">
                    {props.icon}
                </div>
                <div className={`options-text ${props.isActive ? 'vizrt-color-primary' : ''}`}>
                    {props.text}
                </div>
            </div>
        </li>
    );
};

const Overlay = (props) => (
    <ToolbarItem
        isActive={props.isActive}
        setActive={props.setActive}
        item="overlay"
        icon={<OverlayIcon isActive={props.isActive} />}
        text="Overlays"
    />
);

const Sound = (props) => (
    <ToolbarItem
        isActive={props.isActive}
        setActive={props.setActive}
        item="sound"
        icon={<SoundIcon isActive={props.isActive} />}
        text="Sounds"
    />
);

const Effects = (props) => (
    <ToolbarItem
        isActive={props.isActive}
        setActive={props.setActive}
        item="effects"
        icon={<EffectsIcon isActive={props.isActive} />}
        text="Effects"
    />
);

const Packages = (props) => {
    return (
        <>
            {props.myItems
                .filter(item => item.type === props.filter)
                .map(item => (
                    <div className="packages-window-content-item">
                        <h6>{item.title}</h6>
                        <img src={`http://localhost:5233/images/${item.image}`} alt={item.title} />
                    </div>
                ))}
        </>
    );
}

const PackagesWindow = (props) => {
    const [selected, setActive] = useState('overlay');
    const { myItems } = props;

    const handleSelect = (selection) => {
        setActive(selection);
    };

    let filter;
    let overlay = false;
    let sound = false;
    let effects = false;
    if (selected === 'overlay') {
        filter = 'Overlay'
        overlay = true;
    } else if (selected === 'sound') {
        filter = 'Sound'
        sound = true;
    } else if (selected === 'effects') {
        filter = 'Effects'
        effects = true;
    }

    return (
        <div className='home-tools-packages-container position-relative'>
            {/* <p className='element-description'>Packages</p> */}
            <div className="packages-window-container">
                <ul className="navbar-nav packages-toolbar-container">
                    <Overlay setActive={handleSelect} isActive={overlay} />
                    <Sound setActive={handleSelect} isActive={sound} />
                    <Effects setActive={handleSelect} isActive={effects} />
                </ul>
                <div className="packages-window-content-container">
                    {myItems.length === 0 ? (
                        <p>Loading...</p>
                    ) : (
                        <Packages myItems={myItems} filter={filter} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default PackagesWindow;