import React from 'react'
import './Profile.css'

const Profile = ({user}) => {
    return (
        <div className='profile-screen'>
            <div className='p1'>
                <h1>Hi {user.email}!</h1>

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
                            <input type="range" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile