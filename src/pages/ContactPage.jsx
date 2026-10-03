import React, { useState } from 'react';
import { Phone, Mail, MapPin, Compass, Building2, Send, CheckCircle2, Clock } from 'lucide-react';
import { BRAND_INFO } from '../data/initialData';
import { useApp } from '../context/AppContext';

const InstagramIcon = ({ size = 20, color = '#C1662F' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export default function ContactPage() {
  const { showToast } = useApp();
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    cityState: '',
    serviceInterest: 'both',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.phone) {
      alert("Please provide your name and phone number.");
      return;
    }
    setSubmitted(true);
    showToast("Enquiry transmitted to Bluestone Project Coordination desk!", "success");
  };

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#FAF6F0', minHeight: '88vh', paddingBottom: '80px' }}>
      {/* Header */}
      <section
        style={{
          padding: '72px 0 48px',
          backgroundColor: '#F3EBE0',
          borderBottom: '1px solid #EADBCC'
        }}
        className="blueprint-grid-bg"
      >
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
              PAN-India Client Coordination
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#0B1B2D', lineHeight: 1.15, marginBottom: '16px' }}>
              Connect with Bluestone Buildcon
            </h1>
            <p style={{ fontSize: '16.5px', color: '#584C42', lineHeight: 1.6 }}>
              Whether commissioning blueprints through <strong>R S Design Studio</strong> or <strong>A S Home Planner</strong>, or discussing ground mobilization with <strong>Bluestone Buildcon</strong>, our senior engineering advisors are available 7 days a week.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Contact Info + Form */}
      <section style={{ padding: '60px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'start'
            }}
          >
            {/* Left: Contact Channels & PAN-India Footprint */}
            <div>
              <h2 style={{ fontSize: '24px', color: '#0B1B2D', marginBottom: '20px', fontWeight: 700 }}>
                Corporate Contact Channels
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
                {/* Phone Card */}
                <div
                  className="luxury-card"
                  style={{
                    padding: '24px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EADBCC',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}
                >
                  <div style={{ backgroundColor: '#FAF3E7', padding: '12px', borderRadius: '10px', color: '#C1662F' }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7D7065', fontWeight: 700 }}>
                      Direct Helplines (Calling & WhatsApp)
                    </span>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: '#0B1B2D', marginTop: '4px' }}>
                      <a href="tel:+918004300830" style={{ color: '#0B1B2D', textDecoration: 'none' }}>+91 8004300830</a>
                    </div>
                    <div style={{ fontSize: '16px', fontWeight: 600, color: '#584C42', marginTop: '2px' }}>
                      <a href="tel:+919569956067" style={{ color: '#584C42', textDecoration: 'none' }}>+91 95699 56067</a>
                    </div>
                    <div style={{ fontSize: '12px', color: '#16A34A', marginTop: '4px', fontWeight: 600 }}>
                      Lines active 9:00 AM – 8:00 PM IST
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div
                  className="luxury-card"
                  style={{
                    padding: '24px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EADBCC',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}
                >
                  <div style={{ backgroundColor: '#FAF3E7', padding: '12px', borderRadius: '10px', color: '#C1662F' }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7D7065', fontWeight: 700 }}>
                      Official Email
                    </span>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#0B1B2D', marginTop: '4px' }}>
                      <a href="mailto:bluestone.bildcon@gmail.com" style={{ color: '#0B1B2D', textDecoration: 'none' }}>
                        bluestone.bildcon@gmail.com
                      </a>
                    </div>
                    <div style={{ fontSize: '12px', color: '#7D7065', marginTop: '2px' }}>
                      Drawings proposals, BOQ queries & vendor onboarding
                    </div>
                  </div>
                </div>

                {/* Instagram Card */}
                <div
                  className="luxury-card"
                  style={{
                    padding: '24px',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EADBCC',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}
                >
                  <div style={{ backgroundColor: '#FAF3E7', padding: '12px', borderRadius: '10px', color: '#C1662F' }}>
                    <InstagramIcon size={22} />
                  </div>
                  <div>
                    <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: '#7D7065', fontWeight: 700 }}>
                      Official Instagram
                    </span>
                    <div style={{ fontSize: '16px', fontWeight: 700, color: '#0B1B2D', marginTop: '4px' }}>
                      <a href="https://instagram.com/bluestone.buildcon" target="_blank" rel="noreferrer" style={{ color: '#C1662F', textDecoration: 'none' }}>
                        @bluestone.buildcon
                      </a>
                    </div>
                    <div style={{ fontSize: '12px', color: '#7D7065', marginTop: '2px' }}>
                      Daily on-site construction stories, walkthroughs & 3D renders
                    </div>
                  </div>
                </div>
              </div>

              {/* PAN-India Service Map Card */}
              <div
                className="luxury-card"
                style={{
                  backgroundColor: '#0B1B2D',
                  color: '#FAF6F0',
                  padding: '28px',
                  borderRadius: '16px',
                  border: '1px solid #D8A24A'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <MapPin size={20} color="#D8A24A" />
                  <h3 style={{ fontSize: '18px', color: '#FFFFFF', margin: 0 }}>
                    PAN-India Footprint & Operating Hubs
                  </h3>
                </div>
                <p style={{ fontSize: '13px', color: '#D5C2AD', lineHeight: 1.5, marginBottom: '16px' }}>
                  Headquartered in the National Capital Region (NCR) with architectural studio hubs in Jaipur and Bengaluru, servicing projects across North, South, East, and Western India.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <span className="navy-badge" style={{ backgroundColor: 'rgba(216,162,74,0.2)', color: '#D8A24A', borderColor: 'rgba(216,162,74,0.4)' }}>
                    Delhi NCR (Corporate HQ)
                  </span>
                  <span className="navy-badge" style={{ backgroundColor: 'rgba(216,162,74,0.2)', color: '#D8A24A', borderColor: 'rgba(216,162,74,0.4)' }}>
                    Jaipur (R S Design Studio)
                  </span>
                  <span className="navy-badge" style={{ backgroundColor: 'rgba(216,162,74,0.2)', color: '#D8A24A', borderColor: 'rgba(216,162,74,0.4)' }}>
                    Bengaluru (A S Home Planner)
                  </span>
                  <span className="navy-badge" style={{ backgroundColor: 'rgba(193,102,47,0.3)', color: '#FDBA74', borderColor: 'rgba(193,102,47,0.5)' }}>
                    Active Sites in 28 States
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Enquiry Form */}
            <div
              className="luxury-card"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #D5C2AD',
                borderRadius: '20px',
                padding: '36px'
              }}
            >
              <h3 style={{ fontSize: '22px', color: '#0B1B2D', marginBottom: '8px', fontWeight: 700 }}>
                Request Architectural / Civil Consultation
              </h3>
              <p style={{ fontSize: '13.5px', color: '#7D7065', marginBottom: '24px' }}>
                Fill out the details below and an engineer will connect with you within 2 business hours.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '48px 16px' }}>
                  <CheckCircle2 size={54} color="#16A34A" style={{ margin: '0 auto 16px' }} />
                  <h4 style={{ fontSize: '20px', color: '#0B1B2D', marginBottom: '8px' }}>
                    Consultation Request Received!
                  </h4>
                  <p style={{ fontSize: '14px', color: '#584C42', marginBottom: '24px' }}>
                    A senior project architect from Bluestone Buildcon will contact you shortly on <strong>{formState.phone}</strong>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-secondary"
                    style={{ padding: '10px 20px', fontSize: '13px' }}
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alok Singhal"
                      value={formState.name}
                      onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '14px', backgroundColor: '#FAF6F0' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98..."
                        value={formState.phone}
                        onChange={(e) => setFormState(prev => ({ ...prev, phone: e.target.value }))}
                        style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '14px', backgroundColor: '#FAF6F0' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="you@domain.com"
                        value={formState.email}
                        onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                        style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '14px', backgroundColor: '#FAF6F0' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                      Plot City & State
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Udaipur, Rajasthan or Kochi, Kerala"
                      value={formState.cityState}
                      onChange={(e) => setFormState(prev => ({ ...prev, cityState: e.target.value }))}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '14px', backgroundColor: '#FAF6F0' }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                      Nature of Interest
                    </label>
                    <select
                      value={formState.serviceInterest}
                      onChange={(e) => setFormState(prev => ({ ...prev, serviceInterest: e.target.value }))}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '13.5px', backgroundColor: '#FFFFFF' }}
                    >
                      <option value="both">Both Architectural Blueprints & Turnkey Civil Construction</option>
                      <option value="architectural_only">Architectural Design & 3D Elevations Only</option>
                      <option value="construction_only">Turnkey Civil Construction Only (Existing Drawing)</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                      Message or Project Dimensions
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share approximate plot size, number of floors, or specific timeline..."
                      value={formState.message}
                      onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '14px', backgroundColor: '#FAF6F0', lineHeight: 1.5 }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ width: '100%', padding: '14px', fontSize: '15px' }}
                  >
                    <Send size={15} /> Send Consultation Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
