import React from 'react'
import './Home.css'
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <div className='title-screen'>

            <h1>Spacetro</h1>

            <div className='title-menu'>

                <Link to={'/login'} className='menu-option'>Login</Link>
                <Link to={'/signup'} className='menu-option'>Signup</Link>

            </div>
        </div>
    )
}

export default Home