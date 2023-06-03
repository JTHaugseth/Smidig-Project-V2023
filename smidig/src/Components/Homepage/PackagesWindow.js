import React from "react";
import { Icon } from "../Icons";
import { useState } from 'react';

const ToolbarItem = (props) => {
    const handleClick = () => {
        props.setActive(props.item);
    };

    return (
        <li className={`packages-toolbar-item ${props.isActive ? 'option-active' : ''}`} onClick={handleClick}        >
            <div className="nav-link d-flex">
                <div className="icon-container">
                    <Icon isActive={props.isActive} width={props.width} height={props.height} path={props.path} />
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
        width={'20.2105'}
        height={'22.4531'}
        path={'M16.7143 13.249L10.1293 16.8359L3.57207 13.2115L1.18515 14.5941C0.355467 15.0742 0 15.4848 0 16.0982C0 16.718 0.355467 17.1285 1.18515 17.6103L8.78066 22.0105C9.2916 22.3068 9.68378 22.4531 10.1053 22.4531C10.5187 22.4531 10.9207 22.3068 11.4299 22.0105L19.0174 17.6103C19.8471 17.1285 20.2105 16.718 20.2105 16.0982C20.2105 15.4848 19.8471 15.0742 19.0174 14.5941Z M14.7633 9.78593L17.6889 11.4504C17.7359 11.4717 17.7617 11.4992 17.7617 11.5463C17.7617 11.5916 17.7359 11.6129 17.6889 11.6404L10.5016 15.7338C10.3541 15.8147 10.2314 15.86 10.1053 15.86C9.9791 15.86 9.85644 15.8147 9.70097 15.7338L2.51366 11.6404C2.47459 11.6129 2.44881 11.5916 2.44881 11.5463C2.44881 11.4992 2.47459 11.4717 2.51366 11.4504L5.65878 9.65527L3.8291 8.51016L1.18515 10.0342C0.355467 10.5223 0 10.9266 0 11.5463C0 12.166 0.355467 12.5685 1.18515 13.0504L8.78066 17.4586C9.2916 17.7549 9.68378 17.9012 10.1053 17.9012C10.5187 17.9012 10.9207 17.7549 11.4299 17.4586L19.0174 13.0504C19.8471 12.5685 20.2105 12.166 20.2105 11.5463C20.2105 10.9266 19.8471 10.5223 19.0174 10.0342L16.5793 8.6166ZM10.1053 13.0586C10.5187 13.0586 10.9207 12.9141 11.4299 12.616L19.0174 8.21581C19.8471 7.73573 20.2105 7.32343 20.2105 6.70371C20.2105 6.09199 19.8471 5.68145 19.0174 5.19961L11.4299 0.799416C10.9207 0.503128 10.5187 0.356839 10.1053 0.356839C9.68378 0.356839 9.2916 0.503128 8.78066 0.799416L1.18515 5.19961C0.355467 5.68145 0 6.09199 0 6.70371C0 7.32343 0.355467 7.73573 1.18515 8.21581L8.78066 12.616C9.2916 12.9141 9.68378 13.0586 10.1053 13.0586ZM10.1053 11.0272C9.9791 11.0272 9.85644 10.9818 9.70097 10.8992L2.51366 6.79961C2.47459 6.77832 2.44881 6.75078 2.44881 6.70371C2.44881 6.66465 2.47459 6.63711 2.51366 6.61582L9.70097 2.5162C9.85644 2.43358 9.9791 2.39003 10.1053 2.39003C10.2314 2.39003 10.3541 2.43358 10.5016 2.5162L17.6889 6.61582C17.7359 6.63711 17.7617 6.66465 17.7617 6.70371C17.7617 6.75078 17.7359 6.77832 17.6889 6.79961L10.5016 10.8992C10.3541 10.9818 10.2314 11.0272 10.1053 11.0272Z'}
        text="Overlays"
    />
);

const Sound = (props) => (
    <ToolbarItem
        isActive={props.isActive}
        setActive={props.setActive}
        item="sound"
        width={'22.6142'}
        height={'17.4789'}
        path={'M2.15644 12.892L4.93105 12.892C5.01015 12.892 5.08124 12.916 5.14609 12.9746L9.43613 16.8144C9.94355 17.2678 10.3348 17.4789 10.8475 17.4789C11.5603 17.4789 12.1074 16.9496 12.1074 16.2287L12.1074 1.30976C12.1074 0.588865 11.5603 0.00976562 10.8314 0.00976562C10.3258 0.00976562 9.98086 0.233398 9.43613 0.724022L5.14609 4.53008C5.07949 4.58692 5.01015 4.6127 4.93105 4.6127L2.15644 4.6127C0.724607 4.6127 0 5.36387 0 6.88007L0 10.6344C0 12.1488 0.732614 12.892 2.15644 12.892ZM2.31972 11.1727C1.99706 11.1727 1.84159 11.0154 1.84159 10.6928L1.84159 6.81991C1.84159 6.49101 1.99706 6.33378 2.31972 6.33378L5.37441 6.33378C5.63886 6.33378 5.83944 6.27968 6.06405 6.0746L9.97461 2.51502C10.0199 2.46795 10.0688 2.44217 10.1354 2.44217C10.2055 2.44217 10.2658 2.49276 10.2658 2.5824L10.2658 14.9C10.2658 14.9897 10.2055 15.0518 10.1354 15.0518C10.0848 15.0518 10.0279 15.0225 9.97461 14.9754L6.06405 11.4318C5.83944 11.233 5.63886 11.1727 5.37441 11.1727Z M15.4275 13.067C15.8306 13.3338 16.374 13.2443 16.6728 12.816C17.4599 11.7682 17.9267 10.2779 17.9267 8.73457C17.9267 7.19121 17.4599 5.70898 16.6728 4.64961C16.374 4.22481 15.8306 4.12559 15.4275 4.40215C14.9516 4.71426 14.8666 5.28867 15.2396 5.83495C15.7797 6.60214 16.0844 7.6457 16.0844 8.73457C16.0844 9.82343 15.7699 10.8572 15.2396 11.6342C14.8746 12.1867 14.9516 12.7469 15.4275 13.067Z M19.322 15.6773C19.7607 15.9566 20.3013 15.8494 20.6054 15.4062C21.8765 13.6101 22.6142 11.2064 22.6142 8.73457C22.6142 6.26269 21.8845 3.84297 20.6054 2.06114C20.3013 1.61973 19.7607 1.51251 19.322 1.7918C18.8623 2.08164 18.7967 2.65312 19.1344 3.15898C20.1742 4.67519 20.7736 6.67206 20.7736 8.73457C20.7736 10.7971 20.1582 12.7762 19.1344 14.3084C18.8047 14.8142 18.8623 15.3875 19.322 15.6773Z'}
        text="Sounds"
    />
);

const Effects = (props) => (
    <ToolbarItem
        isActive={props.isActive}
        setActive={props.setActive}
        item="effects"
        width={'21.677'}
        height={'20.1711'}
        path={'M19.5902 19.6603C20.0619 20.1418 20.8705 20.1418 21.3279 19.6603C21.7933 19.1691 21.7933 18.3978 21.3279 17.9226L12.0461 8.5957C11.5762 8.12402 10.7676 8.12402 10.3084 8.5957C9.83496 9.08691 9.84472 9.86796 10.3084 10.3414ZM14.0596 12.9004L11.1314 9.966C10.9328 9.76737 10.8619 9.53339 11.0623 9.34277C11.2334 9.16542 11.4754 9.21679 11.6838 9.42519L14.6111 12.356Z M7.57382 19.9045C7.77421 19.9045 7.92226 19.7617 7.95155 19.548C8.2623 16.9195 8.38573 16.8371 11.0736 16.4162C11.3086 16.3754 11.4531 16.2549 11.4531 16.0385C11.4531 15.8318 11.3086 15.6935 11.1197 15.659C8.39823 15.1389 8.26054 15.1521 7.95155 12.5271C7.92226 12.3135 7.77421 12.1707 7.57382 12.1707C7.36367 12.1707 7.21738 12.3135 7.19433 12.5174C6.85781 15.1937 6.76816 15.2834 4.02968 15.659C3.83906 15.682 3.69277 15.8318 3.69277 16.0385C3.69277 16.2451 3.8373 16.3736 4.02793 16.4162C6.77343 16.9461 6.8498 16.9443 7.19433 19.5693C7.21738 19.7617 7.36718 19.9045 7.57382 19.9045ZM2.87363 11.2914C3.02968 11.2914 3.12539 11.1797 3.15292 11.0316C3.46562 9.13573 3.48769 9.03788 5.48222 8.70057C5.6373 8.66776 5.74726 8.57557 5.74726 8.42128C5.74726 8.26522 5.6373 8.16503 5.49101 8.14022C3.48417 7.78085 3.47792 7.68476 3.15292 5.80292C3.12363 5.65487 3.02968 5.54941 2.87363 5.54941C2.71757 5.54941 2.62187 5.65487 2.59258 5.80116C2.27988 7.70585 2.25957 7.80194 0.258006 8.14022C0.10996 8.16327 0 8.26522 0 8.42128C0 8.57557 0.108203 8.66776 0.256249 8.70057C2.25957 9.05018 2.26054 9.14979 2.59258 11.0351C2.62363 11.1797 2.71757 11.2914 2.87363 11.2914ZM8.25507 4.8955C8.38984 4.8955 8.46601 4.81132 8.4873 4.6828C8.81581 3.06581 8.79452 3.01952 10.4844 2.68398C10.6199 2.65917 10.7103 2.57851 10.7103 2.45175C10.7103 2.31523 10.6199 2.23457 10.4914 2.20976C8.78749 1.86191 8.79648 1.8209 8.4873 0.220702C8.46777 0.0921869 8.38984 0 8.25507 0C8.11855 0 8.04414 0.0921869 8.02109 0.218944C7.69082 1.83496 7.71914 1.89531 6.02051 2.20976C5.89199 2.22929 5.79805 2.31523 5.79805 2.45175C5.79805 2.57851 5.88848 2.65917 6.01699 2.68398C7.71914 3.03183 7.70664 3.0746 8.02109 4.68632C8.04062 4.81132 8.11855 4.8955 8.25507 4.8955ZM16.5887 8.36913C16.743 8.36913 16.8387 8.26718 16.8715 8.11913C17.2158 6.22675 17.2027 6.12538 19.1972 5.78007C19.3603 5.75527 19.464 5.65507 19.464 5.50077C19.464 5.34472 19.3603 5.25253 19.206 5.21972C17.1992 4.86835 17.1789 4.77402 16.8715 2.89043C16.8422 2.74062 16.743 2.63066 16.5887 2.63066C16.4326 2.63066 16.3387 2.74062 16.3076 2.88867C15.9773 4.7916 15.9764 4.90527 13.9748 5.21972C13.8267 5.24726 13.7133 5.34472 13.715 5.50077C13.7168 5.65507 13.8232 5.75527 13.973 5.78007C15.9764 6.13593 15.9949 6.23378 16.3076 8.12089C16.3351 8.26718 16.4326 8.36913 16.5887 8.36913Z'}
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
    );
};

export default PackagesWindow;