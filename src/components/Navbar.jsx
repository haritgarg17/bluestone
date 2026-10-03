import React, { useState, useEffect } from 'react';
import { Phone, ArrowRight, Menu, X, Sparkles, Mail } from 'lucide-react';
import { useApp } from '../context/AppContext';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const { currentPage, navigateTo } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Company Profile' },
    { id: 'services', label: 'Services & Packages' },
    { id: 'register', label: 'Client Registration' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'projects', label: 'Projects' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id) => {
    navigateTo(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`header-glass ${isScrolled ? 'header-scrolled' : ''}`}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      {/* Top micro-announcement bar with live pulse */}
      <div
        style={{
          backgroundColor: '#0B1B2D',
          color: '#FAF6F0',
          fontSize: '11px',
          padding: isScrolled ? '4px 0' : '7px 0',
          borderBottom: '1px solid rgba(216, 162, 74, 0.25)',
          transition: 'all 0.25s ease'
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '8px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
            <span className="pulse-indicator" />
            <span
              style={{
                backgroundColor: '#C1662F',
                color: '#FFFFFF',
                fontSize: '8.5px',
                fontWeight: 800,
                padding: '1.5px 7px',
                borderRadius: '3px',
                letterSpacing: '0.09em',
                textTransform: 'uppercase'
              }}
            >
              PAN-INDIA NETWORK
            </span>
            <span style={{ color: '#D5C2AD', fontSize: '11px', letterSpacing: '0.02em' }}>
              Bluestone Buildcon &bull; R S Design Studio &bull; A S Home Planner
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
            <a
              href="tel:+918004300830"
              style={{
                color: '#D8A24A',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                fontWeight: 700,
                letterSpacing: '0.02em',
                fontSize: '11.5px',
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => (e.target.style.color = '#FFFFFF')}
              onMouseLeave={(e) => (e.target.style.color = '#D8A24A')}
            >
              <Phone size={12} /> +91 8004300830
            </a>

            <span style={{ color: 'rgba(216, 162, 74, 0.4)', fontSize: '10px' }}>|</span>

            <a
              href="mailto:bluestone.bildcon@gmail.com"
              style={{
                color: '#FAF6F0',
                textDecoration: 'none',
                fontSize: '11px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                opacity: 0.9,
                transition: 'opacity 0.2s ease'
              }}
              onMouseEnter={(e) => (e.target.style.opacity = '1')}
              onMouseLeave={(e) => (e.target.style.opacity = '0.9')}
            >
              <Mail size={11} color="#D8A24A" /> bluestone.bildcon@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className="container"
        style={{
          padding: isScrolled ? '10px 24px' : '15px 24px',
          transition: 'padding 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Brand Logo */}
          <div
            onClick={() => handleNavClick('home')}
            style={{ cursor: 'pointer', transition: 'transform 0.2s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <BrandLogo size={isScrolled ? 'normal' : 'large'} />
          </div>

          {/* Desktop Nav Items */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '26px'
            }}
            className="desktop-nav"
          >
            {navItems.map((item) => {
              const active = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13.5px',
                    fontWeight: active ? 700 : 500,
                    color: active ? '#C1662F' : '#121D28',
                    cursor: 'pointer',
                    position: 'relative',
                    padding: '8px 2px',
                    transition: 'color 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                    letterSpacing: '0.01em'
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.target.style.color = '#C1662F';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.target.style.color = '#121D28';
                  }}
                >
                  {item.label}
                  {active && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '1px',
                        left: 0,
                        right: 0,
                        height: '2.5px',
                        background: 'linear-gradient(90deg, #C1662F 0%, #D8A24A 100%)',
                        borderRadius: '2px',
                        boxShadow: '0 2px 6px rgba(193, 102, 47, 0.4)'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => handleNavClick('register')}
              className="btn-primary"
              style={{
                padding: isScrolled ? '10px 22px' : '12px 26px',
                fontSize: '13.5px',
                fontWeight: 700,
                borderRadius: '10px'
              }}
            >
              <Sparkles size={14} color="#FBF0D9" />
              <span>Register Your Project</span>
              <ArrowRight size={14} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              style={{
                background: 'transparent',
                border: '1px solid var(--border-strong)',
                borderRadius: '8px',
                padding: '8px',
                cursor: 'pointer',
                display: 'none'
              }}
              className="mobile-toggle-btn"
            >
              {mobileMenuOpen ? <X size={22} color="#0B1B2D" /> : <Menu size={22} color="#0B1B2D" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: '16px 0',
              borderTop: '1px solid var(--border-subtle)',
              marginTop: '12px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              animation: 'fadeIn 0.25s ease-out'
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                style={{
                  background: currentPage === item.id ? '#FAF6F0' : 'none',
                  border: 'none',
                  textAlign: 'left',
                  padding: '10px 14px',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '15px',
                  fontWeight: currentPage === item.id ? 700 : 500,
                  color: currentPage === item.id ? '#C1662F' : '#121D28',
                  cursor: 'pointer'
                }}
              >
                {item.label}
              </button>
            ))}

            <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px dashed #D5C2AD' }}>
              <button
                onClick={() => handleNavClick('register')}
                className="btn-primary"
                style={{ width: '100%', padding: '13px', fontSize: '14.5px', justifyContent: 'center' }}
              >
                Register Your Project
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 1060px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-toggle-btn {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
}
