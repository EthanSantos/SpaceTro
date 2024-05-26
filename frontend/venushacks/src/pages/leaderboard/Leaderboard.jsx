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
        <div className='leaderboard'>
            {data ? (
                <div>
                    <h1>Leaderboard</h1>
                    <ul>
                        {data.map((entry, index) => (
                            <li key={index}>
                                {index+1}. {entry.email} {entry.progress}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Leaderboard
