import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Features from "./components/Features";
import Team from "./components/Team";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Details from "./components/Details"; // Add a Contact component (assuming you create it)

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Clients />
              <Details />
              <Features />
              <Team />
              <Blog />
            </>
          }
        />
        <Route path="/features" element={<Features />} />
        <Route path="/blog" element={<Blog />} />
         {/* Define the Contact route */}
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
