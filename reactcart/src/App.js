import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import Routes from './components/Routes';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar/>
        <Routes/>
    </div>
    </BrowserRouter>
  );
}

export default App;
