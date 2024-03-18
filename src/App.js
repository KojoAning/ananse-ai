// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Mainpage from './components/pages/page';
import './components/styles/global.css'
import Pagefooter from './components/footer';

function App() {
  return (
    <Router>
      <Mainpage/>
      <Routes>
        <Route path="/"  />
 
      </Routes>
      <Pagefooter/>
    </Router>
  );
}

export default App;
