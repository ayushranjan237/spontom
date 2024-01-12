import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import React from 'react';
import Login from './pages/login';

function App() {
  return (

    <div className='app'>
    <Routes>
      <Route path="/" element={<Home />} />
        
        <Route path="login" element={<Login />} />
       
      
    </Routes>
  
    </div>
  );
}

export default App;
