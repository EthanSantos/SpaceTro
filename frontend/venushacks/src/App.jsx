import { useEffect, useState } from 'react';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import Learn from './pages/learn/Learn';
import ModuleList from './pages/learn/ModuleList';
import Module from './pages/learn/Module';
import Quiz from './pages/learn/Quiz';
import { BrowserRouter as Router, Routes, useLocation, Route, Navigate } from 'react-router-dom';
import Navbar from './navbar/Navbar';
import ProtectedRoute from './helper/ProtectedRoute';

const App = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/' && <Navbar setUser={setUser} />}

      <Routes>
        <Route path="/" element={<Login user={user} setUser={setUser} />} />
        <Route path="/home" element={<ProtectedRoute user={user}><Home /></ProtectedRoute>} />
        <Route path="/module" element={<ProtectedRoute user={user}><Module /></ProtectedRoute>} />
        <Route path="/quiz" element={<ProtectedRoute user={user}><Quiz /></ProtectedRoute>} />
        <Route path="/learn" element={<ProtectedRoute user={user}><Learn /></ProtectedRoute>} />
        <Route path="/modulelist" element={<ProtectedRoute user={user}><ModuleList /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute user={user}><Profile user={user} /></ProtectedRoute>} />
      </Routes>
    </div>
  );
};

export default App;
