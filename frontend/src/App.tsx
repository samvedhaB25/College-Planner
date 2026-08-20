import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Features from './pages/Features'
import About from './pages/About'
import Calendar from './pages/Calendar'
import Colleges from './pages/Colleges'
import CollegePage from './pages/CollegePage'
import Essays from './pages/Essays'
import Login from './pages/Login'
import { AuthProvider } from './context/AuthContext'
import './App.css'

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/colleges" element={<Colleges />} />
        <Route path="/login" element={<Login />} />
        <Route path="/colleges/:id" element={<CollegePage />} />
        <Route path="/essays" element={<Essays />} />
      </Routes>
    </BrowserRouter>

    </AuthProvider>
    
  );
}