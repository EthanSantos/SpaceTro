import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Module = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null); // Initial state

  // Function to handle planet selection (replace with your actual logic)
  const handlePlanetSelection = (planetName) => {
    setSelectedPlanet(planetName);
  };

  return (
    <div>
      <div className='module-block'>
        <Link to='/learn'>
          <img src="learn.png" alt="Learn icon" />
          {/* <p>Learn</p> */}
        </Link>
        <div>
          {/* Conditionally render the image based on selectedPlanet */}
          {selectedPlanet && (
            <img
              src={`planets/${selectedPlanet}.jpg`} // Dynamic image path
              alt={`Planet ${selectedPlanet} icon`}
            />
          )}
        </div>
        <Link to='/quiz'>
          <img src="test.png" alt="Quiz icon" />
          {/* <p>Quiz</p> */}
        </Link>
      </div>

      {/* Add your planet selection logic here (replace with your implementation) */}
      <div>
        <h2>Choose a Planet:</h2>
        <button onClick={() => handlePlanetSelection('Earth')}>Earth</button>
        <button onClick={() => handlePlanetSelection('Mars')}>Mars</button>
        {/* Add buttons for other planets */}
      </div>
    </div>
  );
};

export default Module;
