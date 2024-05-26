import { useState, useEffect } from 'react'
import axios from 'axios';

const Leaderboard = ({ user }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        console.log("getting leaderboard")
        try {
            const response = await axios.get('http://localhost:5000/api/leaderboard');
            const processedData = response.data.map(entry => ({
                ...entry,
                email: entry.email.split('@')[0]
            }));
            setData(processedData);
            console.log(processedData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="container mx-auto p-4 max-w-md">
            {data ? (
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h1 className="text-2xl font-bold mb-4 text-center">Leaderboard</h1>
                    <ul className="divide-y divide-gray-200">
                        {data.map((entry, index) => (
                            <li key={index} className="py-4 flex justify-between items-center">
                                <span className="text-lg font-medium">{index + 1}.</span>
                                <span className="text-lg font-medium">{entry.email}</span>
                                <span className="text-lg">{entry.progress}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p className="text-center text-gray-500">Loading...</p>
            )}
        </div>
    );
}

export default Leaderboard
