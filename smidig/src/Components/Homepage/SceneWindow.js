import React, { useState, useEffect, useRef } from 'react';
import Draggable from 'react-draggable';
import '../../Assets/Styles/Homepage/SceneWindow.css';

const SceneWindow = (props) => {
    const [zoom, setZoom] = useState(0.7);
    const zoomableWindowRef = useRef(null);
    const zoomableWindowContainerRef = useRef(null);
    const draggableRef = useRef(null);
    const [positions, setPositions] = useState([{ x: 0, y: 0 }, { x: 0, y: 0 }]);

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


    // Handles dragging items
    const handleDrag = (e, index) => {
        const { deltaX, deltaY } = e;
        const zoomFactor = 1 / zoom;
        const adjustedDeltaX = deltaX * zoomFactor;
        const adjustedDeltaY = deltaY * zoomFactor;

        const windowWidth = zoomableWindowRef.current.offsetWidth;
        const windowHeight = zoomableWindowRef.current.offsetHeight;
        const itemWidth = draggableRef.current.offsetWidth;
        const itemHeight = draggableRef.current.offsetHeight;

        const maxX = windowWidth - itemWidth;
        const maxY = windowHeight - itemHeight;

        let newPositionX = positions[index].x + adjustedDeltaX;
        let newPositionY = positions[index].y + adjustedDeltaY;

        if (newPositionX < 0) {
            newPositionX = 0;
        } else if (newPositionX > maxX) {
            newPositionX = maxX;
        }

        if (newPositionY < 0) {
            newPositionY = 0;
        } else if (newPositionY > maxY) {
            newPositionY = maxY;
        }

        // Updates the position of the item being dragged
        const newPositions = [...positions];
        newPositions[index] = { x: newPositionX, y: newPositionY };
        setPositions(newPositions);

    };

    return (
        <>
            <div className="home-scene-container position-relative">
                <p className="element-description">Scene</p>
                <div className="zoomable-window-container" ref={zoomableWindowContainerRef}>
                    <div className="zoomable-window" style={{ zoom }} ref={zoomableWindowRef}>
                        <Draggable
                            bounds="parent"
                            position={positions[0]}
                            onDrag={(e) => handleDrag(e, 0)}
                            nodeRef={draggableRef}
                        >
                            <div className="example-item" ref={draggableRef}></div>
                        </Draggable>
                        <Draggable
                            bounds="parent"
                            position={positions[1]}
                            onDrag={(e) => handleDrag(e, 1)}
                            nodeRef={draggableRef}
                        >
                            <div className="example-item example-item-0" ref={draggableRef}></div>
                        </Draggable>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SceneWindow;
