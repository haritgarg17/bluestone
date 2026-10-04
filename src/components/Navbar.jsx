import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
