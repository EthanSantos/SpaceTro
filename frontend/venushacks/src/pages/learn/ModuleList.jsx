import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mars from '../../assets/mars.png'

const planets = [
    { name: 'Mercury', module: 'Module 1', imageSrc: mars },
    { name: 'Venus', module: 'Module 2', imageSrc: mars },
    { name: 'Earth', module: 'Module 3', imageSrc: mars },
    { name: 'Mars', module: 'Module 4', imageSrc: mars },
    { name: 'Jupiter', module: 'Module 5', imageSrc: mars },
    { name: 'Saturn', module: 'Module 6', imageSrc: mars },
    { name: 'Uranus', module: 'Module 7', imageSrc: mars },
    { name: 'Neptune', module: 'Module 8', imageSrc: mars }
];

const ModuleList = ({ setPlanet, setTopic }) => {
    const [index, setIndex] = useState(0)
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
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
                &#8592; {/* Left Arrow Unicode */}
            </button>
            <div className="learn-block grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-4">
                {filterPlanets.map((planet) => (
                    <button
                        key={planet.name}
                        className="module bg-purple-300 rounded-lg shadow-md aspect-square flex flex-col items-center justify-center"
                        onClick={() => handlePlanetClick(planet.name)}
                    >
                        <div className="relative w-full h-full flex items-center justify-center">
                            <img src={planet.imageSrc} alt={planet.name} className="w-full h-full object-cover rounded-lg" />
                        </div>
                        <div className="mt-2 p-4 text-center">
                            <p className="text-gray-600 text-sm">{planet.module}</p>
                            <h3 className="text-lg font-bold text-gray-800">{planet.name}</h3>
                        </div>
                    </button>
                ))}
            </div>
            <button
                onClick={increment}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
                &#8594; {/* Right Arrow Unicode */}
            </button>
        </div>




    );
};

export default ModuleList;
