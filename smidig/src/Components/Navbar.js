import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/Styles/Navbar.css';

// pass in: urlLocation={'/'} width={''} height={''} path={''} when creating icon
const Icon = (props) => {
    const location = useLocation();
    const isActive = location.pathname === props.urlLocation;
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

const HomeIcon = () => {
    return (
        <Icon urlLocation={'/'} width={'23.8344'} height={'22.5111'} path={'M9.10682 19.5993L14.7258 19.5993L14.7258 12.5462C14.7258 12.0899 14.431 11.7935 13.9748 11.7935L9.86932 11.7935C9.40507 11.7935 9.10682 12.0899 9.10682 12.5462ZM5.28495 20.8706L18.4996 20.8706C19.976 20.8706 20.8463 20.0181 20.8463 18.5788L20.8463 7.7579L18.933 6.44639L18.933 17.9938C18.933 18.6128 18.5965 18.9573 17.9953 18.9573L5.78924 18.9573C5.18006 18.9573 4.84354 18.6128 4.84354 17.9938L4.84354 6.4544L2.93027 7.7579L2.93027 18.5788C2.93027 20.0181 3.79882 20.8706 5.28495 20.8706ZM0 9.84501C0 10.3491 0.379294 10.7792 0.99804 10.7792C1.30136 10.7792 1.57167 10.6222 1.81015 10.4263L11.51 2.28817C11.7723 2.05594 12.0799 2.05594 12.3439 2.28817L22.0385 10.4263C22.2707 10.6222 22.541 10.7792 22.8443 10.7792C23.4053 10.7792 23.8344 10.4309 23.8344 9.86903C23.8344 9.53915 23.7068 9.28408 23.4596 9.07314L13.2953 0.529978C12.4601-0.176659 11.4018-0.176659 10.5586 0.529978L0.38281 9.0749C0.127538 9.28584 0 9.57294 0 9.84501ZM18.0875 5.11553L20.8463 7.4372L20.8463 2.72334C20.8463 2.28311 20.5658 2.00264 20.1256 2.00264L18.81 2.00264C18.3777 2.00264 18.0875 2.28311 18.0875 2.72334Z'}
        />
    );
};

const MyPackagesIcon = () => {
    return (
        <Icon urlLocation={'/my_packages'} height={"21.4254"} width={"19.9709"} path={"M10.701 21.4254C10.7957 21.4041 10.8824 21.3643 10.9789 21.3111L18.541 17.0611C19.4896 16.5295 19.9709 15.9688 19.9709 14.5738L19.9709 6.78536C19.9709 6.5293 19.9531 6.32305 19.9051 6.1293L10.701 11.3285ZM9.26992 21.4254L9.26992 11.3285L0.0658208 6.1293C0.0160158 6.32305 0 6.5293 0 6.78536L0 14.5738C0 15.9688 0.489258 16.5295 1.42988 17.0611L9 21.3111C9.08672 21.3643 9.1752 21.4041 9.26992 21.4254ZM9.98945 10.06L14.1383 7.73536L4.8252 2.47852L1.30273 4.45977C1.07207 4.58399 0.882226 4.70997 0.715429 4.867ZM15.6275 6.90763L19.2555 4.867C19.0984 4.70997 18.9086 4.58399 18.6779 4.45977L11.8273 0.609576C11.2193 0.266021 10.5973 0.0822324 9.99121 0.0822324C9.37539 0.0822324 8.75332 0.266021 8.14531 0.609576L6.27187 1.66231Z"} />
    );
};

const StoreIcon = () => {
    return (
        <Icon urlLocation={'/store'} width={'19.9709'} height={'21.4254'} path={'M0 17.257C0 19.3488 1.0957 20.4285 3.20351 20.4285L14.6906 20.4285C16.5529 20.4285 17.6486 19.3408 17.6486 17.257L17.6486 7.16014C17.6486 5.07636 16.5449 3.98866 14.4451 3.98866L13.0461 3.98866C13.0025 1.80781 11.1346 0 8.82031 0C6.50605 0 4.6461 1.80781 4.59453 3.98866L3.20351 3.98866C1.0957 3.98866 0 5.06835 0 7.16014ZM1.91327 17.0963L1.91327 7.32088C1.91327 6.37029 2.40643 5.90193 3.31444 5.90193L14.3262 5.90193C15.2262 5.90193 15.7354 6.37029 15.7354 7.32088L15.7354 17.0963C15.7354 18.0451 15.2262 18.5152 14.5717 18.5152L3.31444 18.5152C2.40643 18.5152 1.91327 18.0451 1.91327 17.0963ZM6.44628 3.98866C6.48983 2.72265 7.48202 1.70409 8.82031 1.70409C10.1586 1.70409 11.1588 2.72265 11.1943 3.98866Z'} />
    );
};

const AILearningIcon = () => {
    return (
        <Icon urlLocation={'/ai_learning'} width={'26.1654'} height={'22.066'} path={'M0 10.3258C0 13.9799 2.50996 16.4117 6.26171 16.4117C9.95663 16.4117 12.4355 14.224 12.4355 10.9428C12.4355 9.56796 11.958 8.46034 11.1398 7.7664C10.7469 7.4373 10.5119 7.32734 10.1385 7.32734C9.62421 7.32734 9.25898 7.65175 9.25898 8.11718C9.25898 8.64764 9.52637 8.76581 10.0512 9.24979C10.4385 9.62381 10.6553 10.1976 10.6553 10.9117C10.6553 13.1316 8.9166 14.6119 6.29277 14.6119C3.60058 14.6119 1.81132 12.8973 1.81132 10.316C1.81132 8.80331 2.59061 7.39159 3.8705 6.62069L2.95742 5.05937C1.12246 6.15918 0 8.16933 0 10.3258ZM2.63672 5.14296C2.63672 7.40858 4.21718 9.00702 6.67304 9.00702C7.15976 9.00702 7.57382 8.59472 7.57382 8.10624C7.57382 7.60976 7.15976 7.19746 6.67304 7.19746C5.29452 7.19746 4.44804 6.34374 4.44804 5.14296C4.44804 3.81952 5.53964 2.89042 7.01484 2.89042C7.75058 2.89042 8.52109 3.13612 9.22421 3.64628L10.2846 2.17011C9.2746 1.43379 8.12382 1.08086 7.02636 1.08086C4.57871 1.08086 2.63672 2.76523 2.63672 5.14296ZM7.91035 4.8371C7.89433 5.41698 8.28359 5.81151 8.80136 5.81151C9.30136 5.81151 9.67909 5.47558 9.70214 4.91601C9.76874 3.10976 11.0742 1.7998 12.909 1.7998C14.0111 1.7998 14.9809 2.38417 15.3707 3.24921C15.4717 3.42812 15.623 3.45194 15.8508 3.39433C16.159 3.31171 16.5098 3.2664 16.849 3.2664C18.5725 3.28417 20.1728 4.58398 20.1728 6.60898C20.1728 11.1328 13.7469 10.6045 13.7469 15.151C13.7469 17.3519 15.4627 18.7433 17.7486 18.7433C17.9496 18.7433 18.1684 18.7353 18.3836 18.7273C18.6521 20.4367 19.7568 22.0058 21.4516 22.0058C23.9211 22.0058 25.225 19.1109 25.225 16.0463C25.225 14.6863 25.1478 13.8016 25.0512 12.9586L23.2469 13.4578C23.3383 14.2742 23.4252 15.033 23.4252 16.025C23.4252 18.4349 22.5443 20.1945 21.4516 20.1945C20.3373 20.1945 19.8473 18.6851 19.8473 17.3891C19.8473 17.2369 19.7465 17.1299 19.5588 17.1379C19.3187 17.1379 18.9969 17.1379 18.7123 17.1379C16.8234 17.1379 15.5986 16.5281 15.5986 15.0935C15.5986 11.6652 21.9824 12.3439 21.9824 6.60898C21.9824 3.55195 19.7119 1.45508 17.0646 1.45508C16.8834 1.45508 16.6328 1.48262 16.3787 1.54043C15.5641 0.580664 14.2947 0 12.9187 0C10.0768 0 8.0082 1.99433 7.91035 4.8371ZM19.5125 14.5455C19.5125 15.0482 19.9098 15.4117 20.416 15.448C23.857 15.6769 26.1654 13.641 26.1654 10.374C26.1654 7.69296 24.2301 5.63672 21.3459 5.27793L21.0543 7.09706C23.0322 7.07011 24.3541 8.38436 24.3541 10.374C24.3541 12.5318 22.7885 13.8373 20.4301 13.6465C19.9238 13.6021 19.5125 14.0437 19.5125 14.5455ZM14.5615 15.6709C13.9766 15.8971 13.2887 16.0123 12.6346 16.0123C11.1301 16.0123 9.6033 15.4381 8.97283 14.5264L7.36464 15.7586C8.4287 16.9904 10.2701 17.8201 12.4369 17.8201C13.3045 17.8201 14.2557 17.6853 15.183 17.3971ZM11.2 8.87304L11.8117 10.5965C14.3746 10.125 15.5853 8.53807 15.566 6.14218C15.559 5.64745 15.1396 5.2414 14.6432 5.2414C14.1484 5.2414 13.7441 5.64745 13.7547 6.14218C13.7758 7.7455 13.0641 8.63573 11.2 8.87304Z'} />
    );
};

const HelpIcon = () => {
    return (
        <Icon urlLocation={'/help'} width={'20.1767'} height={'20.1812'} path={'M10.0875 20.175C15.6141 20.175 20.1767 15.606 20.1767 10.0875C20.1767 4.56094 15.606 0 10.0795 0C4.56269 0 0 4.56094 0 10.0875C0 15.606 4.5707 20.175 10.0875 20.175ZM10.0875 18.1879C5.59237 18.1879 1.9951 14.5826 1.9951 10.0875C1.9951 5.59237 5.58437 1.9871 10.0795 1.9871C14.5746 1.9871 18.1897 5.59237 18.1897 10.0875C18.1897 14.5826 14.5826 18.1879 10.0875 18.1879Z M9.8666 12.0352C10.3988 12.0352 10.7473 11.7191 10.7719 11.3242C10.7736 11.2869 10.7754 11.2381 10.7789 11.2088C10.8053 10.7023 11.1441 10.3613 11.782 9.9455C12.7486 9.31699 13.3697 8.75761 13.3697 7.61913C13.3697 5.99628 11.9068 5.06464 10.1728 5.06464C8.49843 5.06464 7.36504 5.83379 7.06621 6.74804C7.00859 6.91308 6.97578 7.07812 6.97578 7.25468C6.97578 7.72578 7.34043 8.0164 7.73476 8.0164C8.08964 8.0164 8.33437 7.86366 8.52597 7.60995L8.6789 7.40546C9.01015 6.87597 9.47226 6.58788 10.0615 6.58788C10.8535 6.58788 11.3805 7.05702 11.3805 7.71835C11.3805 8.34023 10.9721 8.6414 10.1471 9.21601C9.45098 9.70078 8.94121 10.2025 8.94121 11.0893C8.94121 11.123 8.94121 11.1631 8.94121 11.1969C8.94121 11.7486 9.27539 12.0352 9.8666 12.0352ZM9.85234 15.0244C10.4785 15.0244 10.9932 14.5682 10.9932 13.9525C10.9932 13.3387 10.4865 12.8807 9.85234 12.8807C9.21816 12.8807 8.70625 13.3449 8.70625 13.9525C8.70625 14.5602 9.22617 15.0244 9.85234 15.0244Z'} />
    );
};

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-custom">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={handleNavToggle}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link d-flex"
                                activeClassName="active"
                                exact
                                to="/"
                            >
                                <div className='icon-container'>
                                    <HomeIcon />
                                </div>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link d-flex"
                                activeClassName="active"
                                to="/my_packages"
                            >
                                <div className='icon-container'>
                                    <MyPackagesIcon />
                                </div>
                                My Packages
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link d-flex"
                                activeClassName="active"
                                to="/store"
                            >
                                <div className='icon-container'>
                                    <StoreIcon />
                                </div>
                                Store
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link d-flex"
                                activeClassName="active"
                                to="/ai_learning"
                            >
                                <div className='icon-container'>
                                    <AILearningIcon />
                                </div>
                                AI Learning
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link d-flex nav-link-inactive"
                                activeClassName="active"
                                to="/help"
                            > 
                                <div className='icon-container'>
                                    <HelpIcon />
                                </div>
                                Help
                            </NavLink>
                        </li>                        
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
