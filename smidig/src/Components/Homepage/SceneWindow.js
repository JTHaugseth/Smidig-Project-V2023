import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import '../../Assets/Styles/Homepage/SceneWindow.css';

const SceneWindow = (props) => {
    const [zoom, setZoom] = useState(0.6);
    const zoomableWindowRef = useRef(null);
    const zoomableWindowContainerRef = useRef(null);
    const [positions, setPositions] = useState([]);

    // Set the positions of the draggable elements to props.packageItems.position
    useEffect(() => {
        props.packageItems.forEach((item, index) => {
            setPositions((prevPositions) => {
                const newPositions = [...prevPositions];
                newPositions[index] = item.position;
                return newPositions;
            });
        });

    }, []);


    // Zoom in and out with ctrl + scroll
    useEffect(() => {
        const handleScroll = (event) => {
            if (event.ctrlKey) {
                event.preventDefault();
                if (event.deltaY > 0) {
                    setZoom((prev) => prev - 0.1);
                } else if (event.deltaY < 0) {
                    setZoom((prev) => prev + 0.1);
                }
            }
        };

        document.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            document.removeEventListener('wheel', handleScroll);
        };
    }, []);

    // Update the positions of the draggable elements when the zoom changes
    const handleDrag = (index, event, ui) => {
        const { deltaX, deltaY } = ui;
        const scaledDeltaX = deltaX / zoom;
        const scaledDeltaY = deltaY / zoom;

        // Update the position of the specific draggable element
        setPositions((prevPositions) => {
            const newPositions = [...prevPositions];
            newPositions[index] = {
                x: newPositions[index].x + scaledDeltaX,
                y: newPositions[index].y + scaledDeltaY,
            };
            return newPositions;
        });
    };


    const DraggableItem = (props) => {
        return (
            <Draggable
                position={props.position}
                onDrag={(event, ui) => handleDrag(props.index, event, ui)}
                bounds='parent'>
                {/* <div className={props.class}>{props.text}</div> */}
                <div className="example-item-3">Test</div>
            </Draggable>
        );
    };

    return (
        <>
            <div className="home-scene-container position-relative">
                <p className="element-description">Scene</p>
                <div className="zoomable-window-container" ref={zoomableWindowContainerRef}>
                    <div className="zoomable-window" style={{ zoom }} ref={zoomableWindowRef}>
                        {props.packageItems.map((item, index) => (
                            item.selected && (
                                <Draggable
                                    position={positions[index]}
                                    onDrag={(event, ui) => handleDrag(index, event, ui)}
                                    bounds='parent'
                                    key={index}
                                >
                                    <div className='example-item' style={item.style}>
                                        {item.text}
                                    </div>
                                </Draggable>
                            )
                        ))}

                    </div>
                </div>
            </div>
        </>
    );
};

export default SceneWindow;
