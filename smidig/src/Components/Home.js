import SceneNavbar from './Homepage/SceneNavbar';
import '../Assets/Styles/Home.css';
import PackagesWindow from './Homepage/PackagesWindow';

const Home = () => {
    return (
        <>
            {/* Render the SceneNavbar component */}
            <SceneNavbar />

            <div className='home-container'>
                {/* Container for the "Tools" and "Scene" sections */}
                <div className='home-tools-container position-relative'>
                    <p className='element-description'>Tools</p>

                    {/* Container for the "Packages" section */}
                    <div className='home-tools-packages-container position-relative'>
                        <p className='element-description'>Packages</p>
                        <PackagesWindow />
                    </div>

                    {/* Container for the "Layers" section */}
                    <div className='home-tools-layers-container position-relative'>
                        <p className='element-description'>Layers</p>
                    </div>

                </div>
                {/* Container for the "Scene" section */}
                <div className='home-scene-container position-relative'>
                    <p className='element-description'>Scene</p>
                </div>
            </div>
        </>
    );
}

export default Home;
