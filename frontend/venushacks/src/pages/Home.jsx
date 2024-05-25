import React from 'react'

const Home = () => {
    return (
        <div>
            {/* <h1 className="text-2xl font-bold mb-4">Welcome, {user.email}!</h1> */}
            <h1>Hello</h1>
            <div className="absolute top-4 right-4">
                <button
                    // onClick={handleLogout}
                    className="btn btn-blue"
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Home