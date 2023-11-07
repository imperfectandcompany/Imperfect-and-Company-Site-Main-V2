import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import HomePage from './components/templates/HomePage/HomePage';
import AboutUs from 'components/templates/AboutUs/AboutUs';
import Contact from 'components/templates/Contact/Contact';
import { motion } from 'framer-motion';
import Postogon from 'components/templates/Postogon/Postogon';
import Team from 'components/templates/Team/Team';

function NoiseEffect() {
  return (
    <motion.div
      className="noise"
      initial={{ opacity: 0, scale: 1.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
    ></motion.div>
  );
}


function App() {
  return (
    <Router>
      <div className="App">
      <NoiseEffect />
        <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/projects/postogon" element={<Postogon  />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
