import React from 'react'
import './Learn.css'
import { useNavigate } from 'react-router'

const Learn = () => {

    const navigate = useNavigate()

    const handleModule = () => {
        navigate('/module')
    }

    return (
        <div className='learn-screen'>
            <div className='learn-block'>
                <div className='module' onClick={handleModule}>
                    <img src="" alt="planet" />
                    <p>Module 1</p>
                    <h3>Venus</h3>
                </div>

                <div className='module' onClick={handleModule}>
                    <img src="" alt="planet" />
                    <p>Module 2</p>
                    <h3>Mars</h3>
                </div>

                <div className='module' onClick={handleModule}>
                    <img src="" alt="planet" />
                    <p>Module 3</p>
                    <h3>Jupiter</h3>
                </div>
            </div>
        </div>
    )
}

export default Learn