import React, { useState } from 'react';
import { Compass, Building2, Check, ArrowRight, ShieldCheck, Sparkles, HelpCircle, HardHat, FileCheck } from 'lucide-react';
import { SERVICE_PACKAGES } from '../data/initialData';
import { useApp } from '../context/AppContext';

export default function ServicesPage() {
  const { navigateTo } = useApp();
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture' | 'construction'

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#FAF6F0' }}>
      {/* Header Banner */}
      <section
        style={{
          padding: '72px 0 56px',
          backgroundColor: '#F3EBE0',
          borderBottom: '1px solid #EADBCC',
          position: 'relative'
        }}
        className="blueprint-grid-bg"
      >
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
              Specialized Service Portfolio
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                color: '#0B1B2D',
                lineHeight: 1.15,
                marginBottom: '18px'
              }}
            >
              Architectural Design & Turnkey Construction
            </h1>
            <p style={{ fontSize: '17px', color: '#584C42', lineHeight: 1.65 }}>
              Choose bespoke design blueprints crafted by our regional studios (<strong>R S Design Studio</strong> & <strong>A S Home Planner</strong>), or end-to-end civil construction managed by <strong>Bluestone Buildcon</strong>.
            </p>

            {/* Division Switcher Tabs */}
            <div
              style={{
                display: 'inline-flex',
                gap: '8px',
                padding: '6px',
                backgroundColor: '#FAF6F0',
                borderRadius: '12px',
                border: '1px solid #D5C2AD',
                marginTop: '28px'
              }}
            >
              <button
                onClick={() => setActiveTab('architecture')}
                style={{
                  padding: '10px 22px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: activeTab === 'architecture' ? '#C1662F' : 'transparent',
                  color: activeTab === 'architecture' ? '#FFFFFF' : '#584C42',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
              >
                <Compass size={16} /> Architectural Design Packages
              </button>

              <button
                onClick={() => setActiveTab('construction')}
                style={{
                  padding: '10px 22px',
                  borderRadius: '8px',
                  border: 'none',
                  backgroundColor: activeTab === 'construction' ? '#0B1B2D' : 'transparent',
                  color: activeTab === 'construction' ? '#FFFFFF' : '#584C42',
                  fontWeight: 700,
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.2s ease'
                }}
              >
                <Building2 size={16} /> Bluestone Construction Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: Architectural Packages (R S Design Studio & A S Home Planner) */}
      {activeTab === 'architecture' && (
        <section style={{ padding: '72px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <span className="navy-badge" style={{ marginBottom: '10px' }}>
                Offered by R S Design Studio & A S Home Planner (Split by Region)
              </span>
              <h2 style={{ fontSize: '28px', color: '#0B1B2D', marginBottom: '12px' }}>
                Curated Architectural Drawing Packages
              </h2>
              <p style={{ fontSize: '15px', color: '#584C42', lineHeight: 1.6 }}>
                Every tier follows our transparent two-stage payment protocol: pay a modest Registration Fee to begin drafting, preview the watermarked proposal, and clear the final fee only when satisfied to download master CAD drawings.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '28px',
                alignItems: 'stretch'
              }}
            >
              {SERVICE_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className="luxury-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '36px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    border: pkg.popular ? '2px solid #C1662F' : '1px solid #EADBCC',
                    transform: pkg.popular ? 'translateY(-6px)' : 'none',
                    boxShadow: pkg.popular ? '0 18px 40px rgba(193, 102, 47, 0.14)' : 'var(--shadow-sm)'
                  }}
                >
                  <div>
                    {pkg.popular && (
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          backgroundColor: '#C1662F',
                          color: '#FFFFFF',
                          fontSize: '10.5px',
                          fontWeight: 800,
                          textTransform: 'uppercase',
                          letterSpacing: '0.12em',
                          padding: '4px 10px',
                          borderRadius: '999px',
                          marginBottom: '14px'
                        }}
                      >
                        <Sparkles size={12} /> Most Popular Choice
                      </div>
                    )}

                    <h3 style={{ fontSize: '21px', color: '#0B1B2D', marginBottom: '6px', fontWeight: 700 }}>
                      {pkg.name}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#8B4A2B', fontWeight: 600, marginBottom: '20px' }}>
                      {pkg.tagline}
                    </p>

                    {/* Staged Pricing Display */}
                    <div
                      style={{
                        backgroundColor: '#FAF6F0',
                        borderRadius: '12px',
                        padding: '16px',
                        marginBottom: '24px',
                        border: '1px solid #EADBCC'
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '12px', color: '#7D7065' }}>Initial Registration Fee (#1):</span>
                        <strong style={{ fontSize: '17px', color: '#C1662F' }}>
                          ₹{pkg.regFee.toLocaleString('en-IN')}
                        </strong>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                        <span style={{ fontSize: '12px', color: '#7D7065' }}>Final Release Fee (#2):</span>
                        <strong style={{ fontSize: '15px', color: '#0B1B2D' }}>
                          ₹{pkg.finalFee.toLocaleString('en-IN')}
                        </strong>
                      </div>

                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '8px', borderTop: '1px dashed #D5C2AD' }}>
                        <span style={{ fontSize: '11px', textTransform: 'uppercase', color: '#584C42', fontWeight: 700 }}>Total Package:</span>
                        <span style={{ fontSize: '18px', fontWeight: 800, color: '#0B1B2D' }}>
                          ₹{pkg.totalFee.toLocaleString('en-IN')}
                        </span>
                      </div>
                    </div>

                    <div style={{ fontSize: '12.5px', color: '#584C42', fontStyle: 'italic', marginBottom: '18px' }}>
                      Best for: {pkg.recommendedFor}
                    </div>

                    {/* Features List */}
                    <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {pkg.features.map((feat, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#584C42', lineHeight: 1.5 }}>
                          <Check size={16} color="#C1662F" style={{ marginTop: '3px', flexShrink: 0 }} />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => navigateTo('register')}
                    className={pkg.popular ? "btn-primary" : "btn-secondary"}
                    style={{ width: '100%', padding: '12px', fontSize: '14px', fontWeight: 700 }}
                  >
                    Select & Register Plot <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Section 2: Construction Services (Bluestone Buildcon) */}
      {activeTab === 'construction' && (
        <section style={{ padding: '72px 0' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 48px' }}>
              <span className="navy-badge" style={{ marginBottom: '10px' }}>
                Delivered Exclusively by Bluestone Buildcon Parent Entity
              </span>
              <h2 style={{ fontSize: '28px', color: '#0B1B2D', marginBottom: '12px' }}>
                Turnkey Civil Construction & EPC Delivery
              </h2>
              <p style={{ fontSize: '15px', color: '#584C42', lineHeight: 1.6 }}>
                Once architectural blueprints are approved and municipal sanctions obtained, Bluestone Buildcon takes complete on-ground charge, from earth excavation and RCC casting to finishing and handover.
              </p>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '28px',
                marginBottom: '48px'
              }}
            >
              {[
                {
                  title: "Turnkey Residential EPC",
                  desc: "Comprehensive civil construction for villas, bungalows, and multi-storey residences with fixed-cost and milestone-linked billing.",
                  icon: Building2,
                  points: ["Foundation to key handover", "Grade 550D TMT rebar & M30+ concrete", "Dedicated site resident engineer"]
                },
                {
                  title: "Structural & RCC Civil Works",
                  desc: "Specialized seismic structural frame construction adhering strictly to Indian Standard codes (IS 456 & IS 1893).",
                  icon: HardHat,
                  points: ["Anti-termite sub-base treatment", "Waterproof basement tanking", "Cube testing lab reports at every pour"]
                },
                {
                  title: "Interior Fit-Outs & MEP Engineering",
                  desc: "Flawless execution of concealed conduit plumbing, 3-phase electrical busways, VRV HVAC, and bespoke architectural woodwork.",
                  icon: FileCheck,
                  points: ["Italian stone & hardwood finishes", "Vastu-aligned energy mapping", "Smart automation provisions"]
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="luxury-card"
                    style={{
                      padding: '36px 30px',
                      backgroundColor: '#FFFFFF',
                      borderTop: '4px solid #0B1B2D'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <Icon size={24} color="#C1662F" />
                      <h3 style={{ fontSize: '19px', color: '#0B1B2D', margin: 0, fontWeight: 700 }}>
                        {item.title}
                      </h3>
                    </div>

                    <p style={{ fontSize: '14px', color: '#584C42', lineHeight: 1.6, marginBottom: '20px' }}>
                      {item.desc}
                    </p>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#121D28' }}>
                          <Check size={14} color="#16A34A" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            <div
              style={{
                backgroundColor: '#0B1B2D',
                borderRadius: '16px',
                padding: '36px',
                color: '#FAF6F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '24px'
              }}
            >
              <div>
                <h3 style={{ fontSize: '22px', color: '#FFFFFF', margin: '0 0 6px' }}>
                  Have an Existing Architectural Drawing?
                </h3>
                <p style={{ fontSize: '14px', color: '#D5C2AD', margin: 0 }}>
                  Bluestone Buildcon undertakes turnkey construction for approved third-party blueprints as well.
                </p>
              </div>

              <button
                onClick={() => navigateTo('contact')}
                className="btn-primary"
                style={{ padding: '12px 28px', fontSize: '14px' }}
              >
                Request Construction BOQ Estimate
              </button>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
