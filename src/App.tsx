import React from 'react';
import './App.css';
import Home from './pages/Home';
import RandomQuestionPage from './pages/RandomQuestionPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/randomQuestion" element={<RandomQuestionPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
