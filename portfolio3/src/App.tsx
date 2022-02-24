import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Works from './components/pages/Works';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/works/*' element={<Works />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
