import React from 'react';
import { Phone, Mail, MapPin, Award, CheckCircle2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/initialData';
import { useApp } from '../context/AppContext';
import BrandLogo from './BrandLogo';

const InstagramIcon = ({ size = 16, color = '#D8A24A' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function Footer() {
  const { navigateTo } = useApp();

  return (
    <footer
      style={{
        backgroundColor: '#0B1B2D',
        color: '#FAF6F0',
        position: 'relative',
        zIndex: 10,
        borderTop: '3px solid #D8A24A',
        paddingTop: '64px',
        paddingBottom: '32px'
      }}
    >
      <div className="container">
        {/* Top 3-Brand Umbrella Showcase Banner */}
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            border: '1px solid rgba(216, 162, 74, 0.25)',
            borderRadius: '16px',
            padding: '24px 32px',
            marginBottom: '56px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'center'
          }}
        >
          <div>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#D8A24A', fontWeight: 800 }}>
              The Bluestone Corporate Group Structure
            </span>
            <h3 style={{ fontSize: '20px', color: '#FAF6F0', margin: '6px 0', fontWeight: 600 }}>
              Three Connected Brands. One Unified Quality Standard.
            </h3>
            <p style={{ fontSize: '13px', color: '#D5C2AD', margin: 0, lineHeight: 1.5 }}>
              Architectural designs crafted by our dual regional studios; turnkey civil construction executed unconditionally under Bluestone Buildcon across India.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(11,27,45,0.4)', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C1662F' }} />
              <div>
                <strong style={{ color: '#FAF6F0', fontSize: '13px' }}>Bluestone Buildcon</strong>
                <span style={{ color: '#D5C2AD', fontSize: '11.5px', marginLeft: '6px' }}>&bull; Turnkey Civil & EPC Execution</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(11,27,45,0.4)', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D8A24A' }} />
              <div>
                <strong style={{ color: '#FAF6F0', fontSize: '13px' }}>R S Design Studio</strong>
                <span style={{ color: '#D5C2AD', fontSize: '11.5px', marginLeft: '6px' }}>&bull; Architectural Studio (North & West India)</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(11,27,45,0.4)', padding: '10px 14px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#D8A24A' }} />
              <div>
                <strong style={{ color: '#FAF6F0', fontSize: '13px' }}>A S Home Planner</strong>
                <span style={{ color: '#D5C2AD', fontSize: '11.5px', marginLeft: '6px' }}>&bull; Architectural Studio (South, East & Central India)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '40px',
            marginBottom: '48px'
          }}
        >
          {/* Column 1: Brand & Ethos */}
          <div>
            <BrandLogo variant="on-dark" size="large" />
            <p style={{ fontSize: '13.5px', color: '#D5C2AD', marginTop: '18px', lineHeight: 1.6 }}>
              Bluestone Buildcon is a modern engineering, architectural, and construction company delivering tech-enabled luxury residences, commercial spaces, and villas across all 28 States & 8 Union Territories.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
              <span className="navy-badge" style={{ backgroundColor: 'rgba(216,162,74,0.15)', color: '#D8A24A', borderColor: 'rgba(216,162,74,0.3)' }}>
                <Award size={13} /> Modern PropTech Innovation
              </span>
              <span className="navy-badge" style={{ backgroundColor: 'rgba(193,102,47,0.15)', color: '#FDBA74', borderColor: 'rgba(193,102,47,0.3)' }}>
                <CheckCircle2 size={13} /> Tech-Driven Civil EPC
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FAF6F0', fontSize: '15px', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { id: 'home', label: 'Home Page' },
                { id: 'about', label: 'Company Profile & Group' },
                { id: 'portfolio', label: 'Design Concepts Portfolio' },
                { id: 'projects', label: 'Construction Case Studies' },
                { id: 'reviews', label: 'Client Reviews & Ratings' },
                { id: 'contact', label: 'Contact Us & Hubs' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => navigateTo(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#D5C2AD',
                      fontSize: '13.5px',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'color 0.15s ease'
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#D8A24A')}
                    onMouseLeave={(e) => (e.target.style.color = '#D5C2AD')}
                  >
                    <ArrowUpRight size={13} color="#C1662F" /> {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details (Explicitly required in brief) */}
          <div>
            <h4 style={{ color: '#FAF6F0', fontSize: '15px', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Direct Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '13.5px', color: '#D5C2AD' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <Phone size={16} color="#D8A24A" style={{ marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div><a href="tel:+918004300830" style={{ color: '#FAF6F0', textDecoration: 'none', fontWeight: 600 }}>+91 8004300830</a></div>
                  <div><a href="tel:+919569956067" style={{ color: '#FAF6F0', textDecoration: 'none', fontWeight: 600 }}>+91 95699 56067</a></div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="#D8A24A" style={{ flexShrink: 0 }} />
                <a href="mailto:bluestone.bildcon@gmail.com" style={{ color: '#FAF6F0', textDecoration: 'none' }}>
                  bluestone.bildcon@gmail.com
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <InstagramIcon size={16} color="#D8A24A" />
                <a
                  href="https://instagram.com/bluestone.buildcon"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#FAF6F0', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                >
                  @bluestone.buildcon <ArrowUpRight size={12} color="#C1662F" />
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginTop: '4px' }}>
                <MapPin size={16} color="#D8A24A" style={{ marginTop: '2px', flexShrink: 0 }} />
                <span style={{ lineHeight: 1.4 }}>
                  NCR Corporate Office & Site Mobilization Facilities
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Brand Commitment & Action */}
          <div>
            <h4 style={{ color: '#FAF6F0', fontSize: '15px', fontWeight: 700, marginBottom: '18px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              The Bluestone Guarantee
            </h4>
            <p style={{ fontSize: '13px', color: '#D5C2AD', lineHeight: 1.5, marginBottom: '16px' }}>
              Transparent 2-stage milestone pricing, guaranteed on-time handover, zero cost overruns, and dedicated project architects assigned by territory.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button
                onClick={() => navigateTo('contact')}
                className="btn-primary"
                style={{ padding: '11px 16px', fontSize: '13px', justifyContent: 'center' }}
              >
                Schedule Engineering Consultation
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Tagline */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            fontSize: '12px',
            color: '#7D7065'
          }}
        >
          <div>
            &copy; {new Date().getFullYear()} <strong>Bluestone Buildcon</strong>. All rights reserved. Architectural arms: <strong>R S Design Studio</strong> & <strong>A S Home Planner</strong>.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>Turnkey Civil Delivery</span>
            <span>•</span>
            <span>Razorpay Secured Gateway</span>
            <span>•</span>
            <span>IS 456:2000 Civil Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
