import './App.css';
import Sidebar from './Sidebar';
import React from 'react'
import Chat from './Chat'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <Sidebar/>
          <Routes>
            <Route path="/rooms/:roomId" element ={ <Chat/>} />
            <Route path="/" element ={ <Chat/>} />
          </Routes>
          </Router>
      </div>
    </div>
  );
}

export default App;
