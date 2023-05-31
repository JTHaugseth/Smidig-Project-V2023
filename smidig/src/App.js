import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import MyPackages from './Components/MyPackages';
import Store from './Components/Store';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/my_packages" element={<MyPackages />} />
        <Route path="store" element={<Store />} />
        <Route path="ai_learning" element={<Store />} />
      </Routes>
    </>
  );
}

export default App;