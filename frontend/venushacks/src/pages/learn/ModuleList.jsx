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
            </div>
        </div>
    );
};

export default ModuleList;
