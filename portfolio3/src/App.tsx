import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Works from './components/pages/Works';
import ScrollToTop from './components/modules//ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/works/*' element={<Works />} />
          </Routes>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
