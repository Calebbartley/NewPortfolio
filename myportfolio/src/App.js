
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './components/Home';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';





const App= ()=> {
  return (
    
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/AboutMe" element={<AboutMe/>} />
        </Routes>
      </Router>
    
  );
}
export default App;