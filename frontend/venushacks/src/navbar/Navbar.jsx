import { Link } from 'react-router-dom'
import { supabase } from '../helper/supabaseClient'
import './Navbar.css'

const Navbar = ({ setUser }) => {

    const handleLogout = async () => {
        console.log("logged out")
        await supabase.auth.signOut();
        setUser(null);
    };

    return (
        <nav className="navbar-container">
            <div className="navbar">
                <Link to='/home' className="text-sm font-semibold text-gray-800 hover:text-black">Home</Link>
                <Link to='/modulelist' className="text-sm font-semibold text-gray-800 hover:text-black">Modules</Link>
                <Link to='/profile' className="text-sm font-semibold text-gray-800 hover:text-black">Profile</Link>
                <Link to='/leaderboard' className="text-sm font-semibold text-gray-800 hover:text-black">Leaderboard</Link>
                <button
                    onClick={handleLogout}
                    className="nav-button"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;