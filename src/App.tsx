import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Features from './pages/Features'
import About from './pages/About'
import Calendar from './pages/Calendar'
import Colleges from './pages/Colleges'
import CollegePage from './pages/CollegePage'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/colleges/:id" element={<CollegePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
