import { useState } from 'react';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Learn from './pages/learn/Learn';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './navbar/Navbar';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Router>

        <Navbar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/learn' element={<Learn />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>

      </Router>
    </div>
  );
};

export default App;
