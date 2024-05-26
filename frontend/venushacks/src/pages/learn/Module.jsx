import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Module = () => {
    const { planet } = useParams(); // Get the planet name from the URL

    const planetImages = {
        mercury: "mercury_image.jpg",
        venus: "venus_image.jpg",
        mars: "mars_image.jpg"
    };

    const imageUrl = planetImages[planet] || "default_image.jpg"; // Fallback image

    return (
        <div>
            <div className='module-block'>
                <Link to='/learn'>
                    <img src="learn.png" alt="Learn icon" />
                    {/* <p>Learn</p> */}
                </Link>
                <div>
                    <img src={imageUrl} alt={`${planet} icon`} />
                </div>
                <Link to='/quiz'>
                    <img src="test.png" alt="Quiz icon" />
                    {/* <p>Quiz</p> */}
                </Link>
            </div>
        </div>
    );
};

export default Module;
