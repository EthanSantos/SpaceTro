import React from 'react';
import './Learn.css';
import { Link } from 'react-router-dom';

const Learn = () => {
    return (
        <div className="learn-screen">
            <div className="learn-block">
                <Link to="/module/mercury" className="module">
                    <img src="mercury.png" alt="planet" />
                    <div className="text-container">
                        <p>Module 1</p>
                        <h3>Mercury</h3>
                    </div>
                </Link>

                <Link to="/module/venus" className="module">
                    <img src="venus.png" alt="planet" />
                    <div className="text-container">
                        <p>Module 2</p>
                        <h3>Venus</h3>
                    </div>
                </Link>

                <Link to="/module/mars" className="module">
                    <img src="mars.png" alt="planet" />
                    <div className="text-container">
                        <p>Module 3</p>
                        <h3>Mars</h3>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Learn;
