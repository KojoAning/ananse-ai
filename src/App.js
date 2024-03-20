// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mainpage from './components/pages/page';
import './components/styles/global.css'
import Pagefooter from './components/footer';
import Login from './components/pages/login';
import Signup from './components/pages/signup';
import Dashboard from './components/pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Mainpage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
      </Routes>
     
    </Router>
  );
}

export default App;
