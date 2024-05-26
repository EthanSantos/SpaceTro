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
        <nav className="bg-purple-300 py-1 px-4 rounded-full shadow-lg w-full sm:w-3/4 lg:w-1/2 mx-auto">
            <div className="flex flex-col sm:flex-row justify-around items-center h-full space-y-2 sm:space-y-0 sm:space-x-4">
                <Link to='/home' className="text-sm font-semibold text-gray-800 hover:text-black">Home</Link>
                <Link to='/modulelist' className="text-sm font-semibold text-gray-800 hover:text-black">Modules</Link>
                <Link to='/profile' className="text-sm font-semibold text-gray-800 hover:text-black">Profile</Link>
                <Link to='/leaderboard' className="text-sm font-semibold text-gray-800 hover:text-black">Leaderboard</Link>
                <button
                    onClick={handleLogout}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;