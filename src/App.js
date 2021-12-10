import './App.css';
import Sidebar from './Sidebar';
import React from 'react'
import Chat from './Chat'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Login'
import {useState} from 'react';

function App() {
  const [user, setUser] = useState(null); // change 1 to null to see login screen

  return (
    <div className="app">
      { !user ? (
        <Login/>
      ) : (
          <div className="app__body">
          <Router>
            <Sidebar/>
            <Routes>
              <Route path="/rooms/:roomId" element ={ <Chat/>} />
              <Route path="/" element ={ <Chat/>} />
            </Routes>
            </Router>
          </div>
      )}

      
    </div>
  );
}

export default App;
