// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import Offers from "./components/Offers";
import About from "./components/About";
import Footer from "./components/Footer";
import './index.css'; 

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar /> {/* Navbar visible on all pages */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} /> {/* HomePage route */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/offers" element={<Offers />} />
          </Routes>
        </div>
        <Footer /> {/* Footer visible on all pages */}
      </div>
    </Router>
  );
};
export default App;
