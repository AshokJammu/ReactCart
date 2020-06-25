import React from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import MainApplication from './components/MainApplication'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <MainApplication />
    </div>
    </BrowserRouter>
  );
}

export default App;
