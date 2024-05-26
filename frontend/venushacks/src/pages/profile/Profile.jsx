import { useState, useEffect } from 'react'
import axios from "axios";
import './Profile.css'
import astronaut from '../../assets/Astronaut.png'

const Profile = ({ user }) => {
    const [data, setData] = useState(null); // Use null instead of an empty array to check for no data

    useEffect(() => {
        if (user) { // Ensure user is defined before calling fetchData
            fetchData();
        }
    }, [user]);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/profile', {
                params: { user_id: user.id },
            });
            setData(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold">Hi {user.email.split('@')[0]}!</h1>
                {data ? (
                    <>
                        <div className="mt-4">
                            <img src={astronaut} alt="user icon" className="w-24 h-24 mx-auto rounded-full border-2 border-gray-300" />
                            <h2 className="text-xl mt-2">Progress: {data.progress}</h2>
                            <div className="mt-4">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="text-center">
                                        <h2 className="text-lg font-semibold">Rank</h2>
                                    </div>
                                    <div className="text-center">
                                        <h2 className="text-lg font-semibold">Ongoing Module</h2>
                                    </div>
                                </div>
                                <div>
                                    <h2 className="text-lg font-semibold mb-2">Progress</h2>
                                    <input type="range" value={data.progress} readOnly className="w-full" />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p className="text-gray-500">Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Profile