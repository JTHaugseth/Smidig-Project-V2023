import React, { useState, useRef } from 'react';
import { Icon } from '../Icons';

const SceneItem = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editableText, setEditableText] = useState(props.text);
    const clickCountRef = useRef(0);

    const handleDelete = (id) => {
        props.deleteScene(id);
    };

    const handleClick = () => {
        clickCountRef.current++;
        if (clickCountRef.current === 1) {
            setTimeout(() => {
                if (clickCountRef.current === 2) {
                    setIsEditing(true);
                }
                clickCountRef.current = 0;
            }, 300);
        }
        props.setActive(editableText);
    };

    const handleInputChange = (e) => {
        setEditableText(e.target.value);
    };

    const handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault(); // Prevent form submission (if wrapped in a form element)
            handleInputBlur();
        }
    };

    const handleInputBlur = () => {
        setIsEditing(false);
        const updatedScenes = props.scenes.map((scene) => {
            if (scene.name === props.text) {
                return {
                    ...scene,
                    name: editableText,
                };
            }
            return scene;
        });

        props.setScenes(updatedScenes);
        props.setActive(editableText);
    };

    const handleInputClick = (e) => {
        e.preventDefault(); // Prevent input from being deselected when clicked
        e.stopPropagation(); // Prevent the click event from propagating to the parent div
    };

    return (
        <div id={`item${props.id}`} className={`overlay-item ${props.additionalClass} position-relative`} onClick={handleClick}>
            <div className={`overlay-item-icon `}>{props.icon}</div>
            <div className={`overlay-item-text ${props.isActive ? 'vizrt-color-primary' : ''}`}>
                {isEditing ? (
                    <input
                        type="text"
                        value={editableText}
                        onChange={handleInputChange}
                        onBlur={handleInputBlur}
                        autoFocus
                        className="scene-item-input"
                        onClick={handleInputClick}
                        onKeyDown={handleInputKeyDown}
                    />
                ) : (
                    <span className={`overlay-item-text ${props.isActive ? 'vizrt-color-primary' : ''}`}>{editableText}</span>
                )}
            </div>
            <button className='scene-item-delete-btn' onClick={() => handleDelete(props.id)}>X</button>
        </div>
    );
}

const NewSceneItem = (props) => {
    const handleClick = () => {
        // checks if New Scene already exists in the scenes array if it does add 1 to the end of the name. If there is New Scene 1 then add 2 to the end of the name and so on.
        const newSceneName = props.scenes.some((scene) => scene.name === 'New Scene')
            ? `New Scene ${props.scenes.filter((scene) => scene.name.includes('New Scene')).length + 1}`
            : 'New Scene';

        // adds the new scene and sets the id to be 1 more than the last scene in the array
        const updatedScenes = [...props.scenes, { name: newSceneName, id: props.scenes[props.scenes.length - 1].id + 1 }];
        props.setScenes(updatedScenes);
        props.setActive(newSceneName);
    };

    return (
        <div className={`overlay-item overlay-item-new ${props.additionalClass} position-relative`} onClick={handleClick}>
            <div className='overlay-item-icon-new'>{props.icon}</div>
            <div className='overlay-item-text-new'>{props.text}</div>
        </div>
    );
}

const AllScenesItem = (props) => {
    return (
        <div className='overlay-item overlay-item-all position-relative'>
            <div className='overlay-item-icon-all'>{props.icon}</div>
            <div className='overlay-item-text-all'>{props.text}</div>
        </div>
    );
}

const AllScenesIcon = () => {
    return (
        <Icon urlLocation={'/#all_scenes'} width={'24.673'} height={'20.273'} path={'M3.20351 15.6205L5.76952 15.6205L5.76952 13.7072L3.31444 13.7072C2.40643 13.7072 1.91327 13.2371 1.91327 12.2883L1.91327 3.34023C1.91327 2.39139 2.40643 1.91327 3.31444 1.91327L16.3258 1.91327C17.2258 1.91327 17.735 2.39139 17.735 3.34023L17.735 5.37948L19.6482 5.37948L19.6482 3.17148C19.6482 1.08769 18.5463 0 16.4447 0L3.20351 0C1.08769 0 0 1.08769 0 3.17148L0 12.449C0 14.5408 1.08769 15.6205 3.20351 15.6205Z M8.14022 20.2615L21.4678 20.2615C23.5693 20.2615 24.673 19.1756 24.673 17.09L24.673 7.81425C24.673 5.73046 23.5693 4.64277 21.4678 4.64277L8.14022 4.64277C6.02265 4.64277 4.93496 5.73046 4.93496 7.81425L4.93496 17.09C4.93496 19.1836 6.02265 20.2615 8.14022 20.2615ZM8.25116 18.3482C7.34139 18.3482 6.84822 17.8799 6.84822 16.931L6.84822 7.98299C6.84822 7.03241 7.34139 6.55604 8.25116 6.55604L21.3488 6.55604C22.2506 6.55604 22.7598 7.03241 22.7598 7.98299L22.7598 16.931C22.7598 17.8799 22.2506 18.3482 21.3488 18.3482Z'} />
    );
}

const NewSceneIcon = () => {
    return (
        <Icon urlLocation={'/#new_scene'} width={'30.1955'} height={'21.8195'} path={'M10.5279 20.0336L23.992 20.0336C26.1078 20.0336 27.1955 18.9459 27.1955 16.8621L27.1955 4.97695C27.1955 2.89141 26.1078 1.80547 23.992 1.80547L7.26973 1.80547C5.16192 1.80547 4.06622 2.8834 4.06622 4.97695L4.06622 10.4547C4.38086 10.4061 4.70078 10.376 5.01621 10.376C5.3414 10.376 5.66132 10.4061 5.97948 10.4582L5.97948 5.13593C5.97948 4.1871 6.47265 3.71874 7.38066 3.71874L23.8811 3.71874C24.7811 3.71874 25.2822 4.1871 25.2822 5.13593L25.2822 16.7014C25.2822 17.6502 24.7811 18.1203 23.8811 18.1203L11.2496 18.1203C11.135 18.8035 10.8832 19.4504 10.5279 20.0336Z M5.02597 21.8195C7.75195 21.8195 10.0519 19.5418 10.0519 16.7918C10.0519 14.0436 7.78574 11.7676 5.02597 11.7676C2.26621 11.7676 0 14.0436 0 16.7918C0 19.5578 2.26621 21.8195 5.02597 21.8195Z M5.02597 19.9781C4.62422 19.9781 4.36348 19.7156 4.36348 19.3174L4.36348 17.4578L2.50742 17.4578C2.11719 17.4578 1.84668 17.1953 1.84492 16.7936C1.84316 16.3936 2.11191 16.1311 2.50742 16.1311L4.36348 16.1311L4.36348 14.2865C4.36348 13.8865 4.62422 13.6178 5.02597 13.6143C5.42773 13.6125 5.68847 13.883 5.68847 14.2865L5.68847 16.1311L7.53828 16.1311C7.93828 16.1311 8.20703 16.3936 8.20703 16.7936C8.20703 17.1953 7.93828 17.4578 7.53828 17.4578L5.68847 17.4578L5.68847 19.3174C5.68847 19.7156 5.42773 19.9781 5.02597 19.9781Z'} />
    );
}

const SceneIcon = (props) => {
    return (
        <Icon isActive={props.isActive} width={'23.1293'} height={'18.2316'} path={'M3.20351 18.2316L19.9258 18.2316C22.0416 18.2316 23.1293 17.1519 23.1293 15.0682L23.1293 3.17499C23.1293 1.08945 22.0416 0.00351548 19.9258 0.00351548L3.20351 0.00351548C1.0957 0.00351548 0 1.08945 0 3.17499L0 15.0682C0 17.1519 1.0957 18.2316 3.20351 18.2316ZM3.31444 16.3184C2.40643 16.3184 1.91327 15.8482 1.91327 14.8994L1.91327 3.34198C1.91327 2.39315 2.40643 1.91678 3.31444 1.91678L19.8148 1.91678C20.7149 1.91678 21.216 2.39315 21.216 3.34198L21.216 14.8994C21.216 15.8482 20.7149 16.3184 19.8148 16.3184Z'} />
    );
}

// Makes a scene item for each scene in the scenes array
const SceneRenderer = (props) => {
    return (
        <div className='scene-renderer-container'>
            <div>
                {props.scenes.map((scene, index) => {
                    const isActive = (props.selected === scene.name);
                    return (
                        <SceneItem deleteScene={props.deleteScene} id={scene.id} scenes={props.scenes} setScenes={props.setScenes} setActive={props.setActive} isActive={isActive} item={scene.name} textOverflowFade={'overflow-fade'} key={index} icon={<SceneIcon isActive={isActive} />} text={scene.name} />
                    );
                })}
            </div>
            <div className='scene-renderer-container-fade'></div>
        </div>
    );
}

const SceneNavbar = () => {
    const [scenes, setScenes] = useState([
        {
            id: 0,
            name: 'Scene 1',
        },
        {
            id: 1,
            name: 'Scene 2',
        },
        {
            id: 2,
            name: 'Scene 3',
        },
    ]);
    
    const deleteScene = (id) => {
        const newScenes = scenes.filter((item) => item.id !== id);
        setScenes(newScenes);
    };

    const [selected, setActive] = useState(scenes[0].name);
    const handleSelect = (selection) => {
        setActive(selection);
    };

    return (
        <>
            <div className="scene-navbar">
                <div className='overlay-item-container'>
                    <AllScenesItem  setActive={handleSelect}  icon={<AllScenesIcon />} text={'All Scenes'} selected={selected} />
                    <div className="vertical-separator"></div>
                    <SceneRenderer setActive={handleSelect} deleteScene={deleteScene} scenes={scenes} setScenes={setScenes} selected={selected} />
                    <NewSceneItem setActive={handleSelect} scenes={scenes} setScenes={setScenes} additionalClass="color-inactive" icon={<NewSceneIcon />} text={'New'} />
                </div>
            </div>
        </>
    );
}

export default SceneNavbar;