import { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
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
        </Routes>

      </Router>
    </div>
  );
};

export default App;
