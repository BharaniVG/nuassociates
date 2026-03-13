import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";

import NUICON from "../assets/nuicon.webp";

import { Menu, X } from 'lucide-react';


const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: "Home",          path: "/" },
    { label: "About Us",      path: "/about-us" },
    { label: "Services",      path: "/services" },
    { label: "Portfolio",     path: "/projects" },
    { label: "Certifications",path: "/certifications" },
    { label: "Contact",       path: "/contact" },
  ];

  const { pathname } = useLocation();

  return (
    <div style={{
      fontFamily: '"Tahoma", Inter, sans-serif',
      backgroundColor: '#FFFFFF',
      color: '#2A2A2A',
      minHeight: '10vh',
      position: 'relative'
    }}>

      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #E8E3D8',
        zIndex: 1000,
        padding: '0 clamp(1rem, 5vw, 2rem)',
        height: '70px',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '100%',
        }}>

          {/* Logo only — no duplicate text */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            <img
              src={NUICON}
              alt="NU Associates"
              style={{
                height: '44px',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </Link>

          {/* Desktop Menu */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2.5rem',
          }} className="desktop-menu">
            {links.map(({ label, path }) => {
              const active = pathname === path;
              return (
                <Link key={path} to={path} style={{
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: '600',
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: '#0f2d52',
                  borderBottom: active ? '2px solid #0f2d52' : '2px solid transparent',
                  paddingBottom: '4px',
                  transition: 'color 0.2s ease, border-color 0.2s ease',
                  whiteSpace: 'nowrap',
                }}>
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              display: 'none',
              color: '#0f2d52',
            }}
            className="mobile-menu-btn"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div
            style={{
              position: 'absolute',
              top: '70px',
              left: 0,
              right: 0,
              backgroundColor: '#FFFFFF',
              borderBottom: '1px solid #E8E3D8',
              padding: '1rem 2rem',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            }}
            className="mobile-menu"
          >
            {links.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.85rem 0',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#0f2d52',
                  borderBottom: '1px solid #E8E3D8',
                }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

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

        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
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

export default NavBar;