import { useLocation } from 'react-router-dom';

// pass in: urlLocation={'/'} width={''} height={''} path={''} when creating icon
const Icon = (props) => {
    const location = useLocation();
    var isActive = location.pathname === props.urlLocation;

    if (props.isActive !== undefined) {
        isActive = props.isActive;
    }

    return (
        <svg
            version="1.1"
            width={props.width}
            height={props.height}
            viewBox={`0 0 ${props.width} ${props.height}`}
            fill={isActive ? 'var(--vizrt-color-primary)' : 'var(--vizrt-color-text-primary)'}
        >
            <g>
                <rect height={props.height} opacity="0" width={props.width} x="0" y="0" />
                <path d={props.path} />
            </g>
        </svg>
    );
}

const SceneIcon = (props) => {
    return (
        <Icon isActive={props.isActive} width={'23.1293'} height={'18.2316'} path={'M3.20351 18.2316L19.9258 18.2316C22.0416 18.2316 23.1293 17.1519 23.1293 15.0682L23.1293 3.17499C23.1293 1.08945 22.0416 0.00351548 19.9258 0.00351548L3.20351 0.00351548C1.0957 0.00351548 0 1.08945 0 3.17499L0 15.0682C0 17.1519 1.0957 18.2316 3.20351 18.2316ZM3.31444 16.3184C2.40643 16.3184 1.91327 15.8482 1.91327 14.8994L1.91327 3.34198C1.91327 2.39315 2.40643 1.91678 3.31444 1.91678L19.8148 1.91678C20.7149 1.91678 21.216 2.39315 21.216 3.34198L21.216 14.8994C21.216 15.8482 20.7149 16.3184 19.8148 16.3184Z'} />
    );
}

export { Icon };