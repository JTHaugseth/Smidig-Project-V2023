import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Assets/Styles/Navbar.css';
import { HomeIcon, MyPackagesIcon, StoreIcon, AILearningIcon, HelpIcon } from './Icons';

const Navbar = () => {
    // const [isNavOpen, setIsNavOpen] = useState(false);

    // const handleNavToggle = () => {
    //     setIsNavOpen(!isNavOpen);
    // };

    return (
        <div>
            <nav id="navbar-main" className="navbar navbar-expand-lg navbar-custom">
                <div className="container-fluid">
                    {/* Comment out because the page is useless in mobie view anyway
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={handleNavToggle}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav"> */}
                    <div>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link d-flex" to="/"                            >
                                    <div className='icon-container'>
                                        <HomeIcon urlLocation={'/'} />
                                    </div>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link d-flex" to="/my_packages"                            >
                                    <div className='icon-container'>
                                        <MyPackagesIcon urlLocation={'/my_packages'}/>
                                    </div>
                                    My Packages
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link d-flex" to="/store"                            >
                                    <div className='icon-container'>
                                        <StoreIcon urlLocation={'/store'}/>
                                    </div>
                                    Store
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link d-flex" to="/ai_learning"                            >
                                    <div className='icon-container'>
                                        <AILearningIcon urlLocation={'/ai_learning'}/>
                                    </div>
                                    AI Learning
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link d-flex nav-link-inactive" to="/help"                            >
                                    <div className='icon-container'>
                                        <HelpIcon urlLocation={'/help'}/>
                                    </div>
                                    Help
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="navbar-spacer"></div>
        </div>

    );
}

export default Navbar;
