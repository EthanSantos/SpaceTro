import { useState, useEffect } from 'react'
import axios from "axios";
import './Profile.css'

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
        <div className='profile-screen'>
            <div className='p1'>
                <h1>Hi {user.email}!</h1>
                {data ? (
                    <>
                        <h2>Progress: {data.progress}</h2>
                        <div className='p2'>
                            <img src="" alt="user icon" />
                            <div className='p3'>
                                <div className='p4'>
                                    <div className='p5'>
                                        <h2>Rank</h2>
                                    </div>
                                    <div className='p5'>
                                        <h2>Ongoing Module</h2>
                                    </div>
                                </div>
                                <div className='p6'>
                                    <h2>Progress</h2>
                                    <input type="range" value={data.progress} readOnly />
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default Profile