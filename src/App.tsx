import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import HomePage from './components/templates/HomePage/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" Component={HomePage} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
