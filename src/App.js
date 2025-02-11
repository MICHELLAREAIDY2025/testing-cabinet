// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Navbar />  {/* Navbar is placed here to be visible on all pages */}

      <Routes>
        <Route path="/" element={<HomePage />} />  HomePage route
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};
export default App;
