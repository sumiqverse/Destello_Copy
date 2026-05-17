import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Journals from './pages/Journals'
import Works from './pages/Works'
import About from './pages/About'
import Expertise from './pages/Expertise'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/works" element={<Works />} />
      <Route path="/expertise" element={<Expertise />} />
      <Route path="/journals" element={<Journals />} />
    </Routes>
  );
}

export default App
