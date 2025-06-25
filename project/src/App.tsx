import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import About from './pages/About';
import Order from './pages/Order';
import Footer from './components/Footer';
import GTranslateWidget from './components/GTranslateWidget'; // Import widget

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white relative">
        <Navbar />

        {/* GTranslate di pojok kiri bawah */}
        <div className="fixed bottom-4 left-4 z-[1000]">
          <GTranslateWidget />
        </div>

        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/order" element={<Order />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
