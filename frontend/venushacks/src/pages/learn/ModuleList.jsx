import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './ModuleList.css';

const planets = [
    { name: 'Mercury', module: 'Module 1', imageSrc: "mercury.png" },
    { name: 'Venus', module: 'Module 2', imageSrc: "venus.png" },
    { name: 'Earth', module: 'Module 3', imageSrc: "earth.png" },
    { name: 'Mars', module: 'Module 4', imageSrc: "mars.png" },
    { name: 'Jupiter', module: 'Module 5', imageSrc: "jupiter.png" },
    { name: 'Saturn', module: 'Module 6', imageSrc: "saturn.png" },
    { name: 'Uranus', module: 'Module 7', imageSrc: "uranus.png" },
    { name: 'Neptune', module: 'Module 8', imageSrc: "neptune.png" }
];

const ModuleList = ({ setPlanet }) => {
    const [index, setIndex] = useState(0);
    const [filterPlanets, setFilterPlanets] = useState(planets.slice(0, 3));
    const navigate = useNavigate();

    useEffect(() => {
        setFilterPlanets(planets.slice(index, index + 3));
    }, [index]);

    const increment = () => {
        if (index < planets.length - 3) {
            setIndex(index + 1);
        }
    };

    const decrement = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const handlePlanetClick = (planetName) => {
        setPlanet(planetName);
        navigate('/module');
    };

    return (
        <div className="p-6 flex justify-center items-center space-x-4">
            <button
                onClick={decrement}
                className="arrow-button"
            >
                &#8592; {/* Left Arrow Unicode */}
            </button>
            <div className="learn-block grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4">
                {filterPlanets.map((planet) => (
                    <button
                        key={planet.name}
                        className="module bg-purple-300 rounded-lg shadow-md flex flex-col items-center justify-center"
                        onClick={() => handlePlanetClick(planet.name)}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img src={planet.imageSrc} alt={planet.name} className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="text-container mt-4">
                            <p>{planet.module}</p>
                            <h3>{planet.name}</h3>
                        </div>
                    </button>
                ))}
            </div>
            <button
                onClick={increment}
                className="arrow-button"
            >
                &#8594; {/* Right Arrow Unicode */}
            </button>
        </div>
    );
};

export default ModuleList;
