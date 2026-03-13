// =============================
// src/App.tsx
// =============================

import TrustedPartners from './TrustedPartners'
import HeroSection from './Hero';
import Projects from './Projects';
import Contact from './Contact';
import Services from './Services';


import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, ArrowUpRight, ArrowLeft } from 'lucide-react';
import AboutUs from './AboutUs';
import Certifications from './Certifications';

const Home = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);

      // Update active section based on scroll
      const sections = ['home', 'hero', 'work', 'about us'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setCurrentPage('home');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }, 100);
  };



  const goToHome = () => {
    setCurrentPage('home');
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  // Render home page
  return (
    <div style={{
      fontFamily: '"Tahoma", inter, serif',
      backgroundColor: '#FFFFFF',
      color: '#2A2A2A',
      minHeight: '50vh',
      position: 'relative'
    }}>

      {/* Hero Section */}
    <section
        id="hero"
        style={{
            minHeight: "70vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "clamp(5rem, 12vw, 6rem) clamp(1rem, 5vw, 2rem) clamp(3rem, 8vw, 4rem)",
            position: "relative",  // ⭐ changed from absolute → relative
            overflow: "hidden",
        }}>
        <HeroSection />
    </section>
      <section><TrustedPartners/></section>

      
      {/* Project Section */}
      <Projects/>
      <Services/>
      <AboutUs/>
      <Certifications/>
      <Contact/>

      {/* ══ FOOTER ══ */}
        <div style={{
          borderTop: "1px solid #dce8f5",
          padding: "24px 48px",
          textAlign: "center",
          fontSize: "12px",
          color: "#6e90b0",
          letterSpacing: "1px",
        }}>
          © 2026, All rights reserved to NU Associates
        </div>

    
      

      {/* Styles */}
      <style>{`

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          
          .mobile-menu-btn {
            display: block !important;
          }
          
          .mobile-menu {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
