import React from 'react';
import './ModuleList.css';
import { Link } from 'react-router-dom'; // Import Link instead of useNavigation

const ModuleList = () => {
    return (
        <div className='learn-screen'>
            <div className='learn-block'>
                <Link to="/module" className='module'>
                    <img src="" alt="planet" />
                    <p>Module 1</p>
                    <h3>Venus</h3>
                </Link>

                <Link to="/module" className='module'>
                    <img src="" alt="planet" />
                    <p>Module 2</p>
                    <h3>Mars</h3>
                </Link>

                <Link to="/module" className='module'>
                    <img src="" alt="planet" />
                    <p>Module 3</p>
                    <h3>Jupiter</h3>
                </Link>

                <Link to="/module" className='module'>
                    <img src="" alt="planet" />
                    <p>Module 4</p>
                    <h3>Earth</h3>
                </Link>

                <Link to="/module" className='module'>
                    <img src="" alt="planet" />
                    <p>Module 5</p>
                    <h3>Pluto</h3>
                </Link>

                <Link to="/module" className='module'>
                    <img src="" alt="planet" />
                    <p>Module 6</p>
                    <h3>Saturn</h3>
                </Link>

                <Link to="/module" className='module'>
                    <img src="" alt="planet" />
                    <p>Module 7</p>
                    <h3>Uranus</h3>
                </Link>

                <Link to="/module" className='module'>
                    <img src="" alt="planet" />
                    <p>Module 8</p>
                    <h3>Neptune</h3>
                </Link>
            </div>
        </div>
    );
};

export default ModuleList;
