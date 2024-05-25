import { useState } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
