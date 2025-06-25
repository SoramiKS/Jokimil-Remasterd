import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Order from './pages/Order';
import Footer from './components/Footer';
import TranslateWidget from './components/TranslateWidget';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
        </Routes>
        <Footer />
        <TranslateWidget />
      </div>
    </Router>
  );
}

export default App;