import {Link} from 'react-router-dom'
import { supabase } from '../helper/supabaseClient'
import  './Navbar.css'

const Navbar = ({setUser}) => {

    const handleLogout = async () => {
        console.log("logged out")
        await supabase.auth.signOut();
        setUser(null);
    };
    
    return (
        <nav className="navbar">
            <h1>Spacetro</h1>
            <div className="links">
                <Link to='/home'>Home</Link>
                <Link to='/learn' >Learn</Link>
                <Link to='/profile' >Profile</Link>
                <button
                    onClick={handleLogout}
                    className="btn btn-primary"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}
 
export default Navbar;