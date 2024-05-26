import { useEffect, useState } from 'react';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Learn from './pages/learn/Learn';
import { BrowserRouter as Router, Routes, useLocation, Route, useNavigate } from 'react-router-dom';
import Navbar from './navbar/Navbar';

const App = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to login if user is null and not on login page
    if (!user && location.pathname !== '/') {
      navigate('/');
    }
  }, [user, location.pathname, navigate]);

  return (
    <div>
      {location.pathname !== '/' && <Navbar setUser={setUser} />}

      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default App;
