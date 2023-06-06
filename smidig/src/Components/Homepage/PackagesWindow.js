import { OverlayIcon, SoundIcon, EffectsIcon } from "../Icons";
import { useState } from 'react';

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

const OverlayWindow = () => {
    return (
        <div className="packages-window">
            Overlay
        </div>
    );
}

const SoundWindow = () => {
    return (
        <div className="packages-window">
            Sound
        </div>
    );
}

const EffectsWindow = () => {
    return (
        <div className="packages-window">
            Effects
        </div>
    );
}

const PackagesWindow = () => {
    const [selected, setActive] = useState('overlay');

    const handleSelect = (selection) => {
        setActive(selection);
    };

    let content;
    let overlay = false;
    let sound = false;
    let effects = false;
    if (selected === 'overlay') {
        content = <OverlayWindow />;
        overlay = true;
    } else if (selected === 'sound') {
        content = <SoundWindow />;
        sound = true;
    } else if (selected === 'effects') {
        content = <EffectsWindow />;
        effects = true;
    }

    return (
        <div className='home-tools-packages-container position-relative'>
            <p className='element-description'>Packages</p>
            <div className="packages-window-container">
                <ul className="navbar-nav packages-toolbar-container">
                    <Overlay setActive={handleSelect} isActive={overlay} />
                    <Sound setActive={handleSelect} isActive={sound} />
                    <Effects setActive={handleSelect} isActive={effects} />
                </ul>
                <div className="packages-container">
                    {content}
                </div>
            </div>
        </div>
    );
};

export default PackagesWindow;