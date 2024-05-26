import React from 'react';
import './ModuleList.css';
import { Link } from 'react-router-dom'; // Import Link instead of useNavigation

const ModuleList = ({ setPlanet }) => {
    const planets = [
        { name: 'Mercury', module: 'Module 1', imageSrc: 'path/to/mercury.jpg' },
        { name: 'Venus', module: 'Module 2', imageSrc: 'path/to/venus.jpg' },
        { name: 'Earth', module: 'Module 3', imageSrc: 'path/to/earth.jpg' },
        { name: 'Mars', module: 'Module 4', imageSrc: 'path/to/mars.jpg' },
        { name: 'Jupiter', module: 'Module 5', imageSrc: 'path/to/jupiter.jpg' },
        { name: 'Saturn', module: 'Module 6', imageSrc: 'path/to/saturn.jpg' },
        { name: 'Uranus', module: 'Module 7', imageSrc: 'path/to/uranus.jpg' },
        { name: 'Neptune', module: 'Module 8', imageSrc: 'path/to/neptune.jpg' }
    ];

    return (
        <div className="learn-screen p-6">
            <div className="learn-block grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {planets.map((planet) => (
                    <Link
                        key={planet.name}
                        to="/module"
                        className="module bg-purple-300 p-4 rounded-lg shadow-md"
                        onClick={() => setPlanet(planet.name)}
                    >
                        <img src={planet.imageSrc} alt={planet.name} className="w-full h-32 object-cover rounded-t-lg" />
                        <div className="mt-2">
                            <p className="text-gray-600 text-sm">{planet.module}</p>
                            <h3 className="text-lg font-bold text-gray-800">{planet.name}</h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

    );
};

export default ModuleList;
