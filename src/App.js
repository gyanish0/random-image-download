import React from 'react';
import './App.css';
import RandomImages from './components/RandomImages';
import { Routes, Route } from "react-router-dom";
import MainImages from "./pages/MainImages";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<RandomImages />} />
        <Route path="/main" element={<MainImages />} />
      </Routes>
    </div>
  );
}

export default App;
