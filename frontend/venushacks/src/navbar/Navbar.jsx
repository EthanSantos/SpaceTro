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
        <nav className="bg-purple-300 py-0.5 px-2 rounded-full shadow-lg w-1/2 mx-auto">
            <div className="flex justify-around items-center h-full">
                <Link to='/home' className="text-sm font-semibold text-gray-800 hover:text-black">Home</Link>
                <Link to='/modulelist' className="text-sm font-semibold text-gray-800 hover:text-black">Modules</Link>
                <Link to='/profile' className="text-sm font-semibold text-gray-800 hover:text-black">Profile</Link>
                <Link to='/leaderboard' className="text-sm font-semibold text-gray-800 hover:text-black">Leaderboard</Link>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-0.5 px-2 rounded"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;