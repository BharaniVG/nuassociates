// App.jsx
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Certifications from "./components/Certifications";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}


export default function App() {
  return (
    <BrowserRouter>
     <NavBar />                      {/* always visible */}
     <ScrollToTop />
     <Routes>
        <Route path="/"         element={<Home />} />
        <Route path="/work"     element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact"  element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/certifications" element={<Certifications />} />
      </Routes>
    </BrowserRouter>
  );
}