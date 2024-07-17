import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import logo from './logo.svg';
import Homepage from './pages/Homepage/Homepage.jsx';
import ProfileSetup from './pages/Profile/ProfileSetup.jsx';
import Values from './pages/Values/Values.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/values">Values</Link>
              </li>
              <li>
                <Link to="/profilesetup">Profile Setup</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/values" element={<Values />} />
          <Route path="/profilesetup" element={<ProfileSetup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
