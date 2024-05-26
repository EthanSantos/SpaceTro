import {Link} from 'react-router-dom'
import  './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Spacetro</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/login' >Login</Link>
                <Link to='/learn' >Learn</Link>
                <Link to='/profile' >Profile</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;