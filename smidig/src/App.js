import React from 'react';
import './Assets/Styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import MyPackages from './Components/MyPackages';
import Store from './Components/Store';
import Help from './Components/Help';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my_packages" element={<MyPackages />} />
        <Route path="store" element={<Store />} />
        <Route path="ai_learning" element={<Store />} />
        <Route path="help" element={<Help />} />
      </Routes>
    </>
  );
}

export default App;