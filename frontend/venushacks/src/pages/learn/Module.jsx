import React from 'react';
import { Link } from 'react-router-dom';

const Module = () => {

    return (
        <div>
            <div className='module-block'>
                <Link to='/learn'>
                    <img src="image1.jpg" alt="Learn icon" />
                    <p>Learn</p>
                </Link>
                <div>
                    <img src="image2.jpg" alt="Planet icon" />
                </div>
                <Link to='/quiz'>
                    <img src="image3.jpg" alt="Quiz icon" />
                    <p>Quiz</p>
                </Link>
            </div>
        </div>
    );
};

export default Module;