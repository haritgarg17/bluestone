import React from 'react';
import { Building2, Compass, ShieldCheck, MapPin, Award, CheckCircle2, Layers, Users, Sparkles, ArrowRight } from 'lucide-react';
import { BRAND_INFO, INDIAN_STATES } from '../data/initialData';
import { useApp } from '../context/AppContext';

export default function AboutPage() {
  const { navigateTo } = useApp();

  const northWestStates = INDIAN_STATES.filter(s => s.unitId === 'rs-design');
  const southEastStates = INDIAN_STATES.filter(s => s.unitId === 'as-home');

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
          <div style={{ maxWidth: '780px' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
              Company Profile & Strategic Vision
            </div>
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
                color: '#0B1B2D',
                lineHeight: 1.15,
                marginBottom: '18px'
              }}
            >
              Architectural Mastery & Modern Engineering Across India
            </h1>
            <p style={{ fontSize: '17px', color: '#584C42', lineHeight: 1.65 }}>
              Founded as a new-age tech-enabled construction and architectural company to eliminate contractor opacity, <strong>Bluestone Buildcon</strong> bridges the gap between digital architectural blueprint design and on-ground civil execution with radical transparency, milestone escrows, and certified engineering standards.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section style={{ padding: '72px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              marginBottom: '64px'
            }}
          >
            <div
              className="luxury-card"
              style={{
                padding: '36px',
                backgroundColor: '#FFFFFF',
                borderLeft: '5px solid #C1662F'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Compass size={24} color="#C1662F" />
                <h3 style={{ fontSize: '20px', color: '#0B1B2D', margin: 0 }}>Our Mission</h3>
              </div>
              <p style={{ fontSize: '15px', color: '#584C42', lineHeight: 1.65 }}>
                To empower Indian homeowners and institutional developers with flawless, climatically responsive architectural blueprints, followed by zero-compromise turnkey civil construction that honors budgets, timelines, and seismic safety standards.
              </p>
            </div>

            <div
              className="luxury-card"
              style={{
                padding: '36px',
                backgroundColor: '#FFFFFF',
                borderLeft: '5px solid #D8A24A'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <Sparkles size={24} color="#D8A24A" />
                <h3 style={{ fontSize: '20px', color: '#0B1B2D', margin: 0 }}>Our Vision</h3>
              </div>
              <p style={{ fontSize: '15px', color: '#584C42', lineHeight: 1.65 }}>
                To establish Bluestone Buildcon as India's foremost household brand for comprehensive estate creation, harmonizing regional architectural identities through dedicated studios with national construction excellence.
              </p>
            </div>
          </div>

          {/* Group Structure Deep-Dive */}
          <div
            className="luxury-card"
            style={{
              padding: '48px 40px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #EADBCC',
              borderRadius: '20px',
              marginBottom: '64px'
            }}
          >
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
              <div className="eyebrow-badge" style={{ marginBottom: '12px' }}>
                <Layers size={13} /> The Multi-Brand Architecture
              </div>
              <h2 style={{ fontSize: '28px', color: '#0B1B2D', marginBottom: '12px' }}>
                Understanding Our Group Structure
              </h2>
              <p style={{ fontSize: '15px', color: '#584C42', lineHeight: 1.6 }}>
                To ensure localized design intelligence, local municipal code familiarity, and rapid drafting turnaround, our architectural division operates under two specialized regional arms, backed unconditionally by our construction parent brand.
              </p>
            </div>

            {/* Visual Hierarchy Diagram */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
              {/* Parent Box */}
              <div
                style={{
                  backgroundColor: '#0B1B2D',
                  color: '#FAF6F0',
                  padding: '24px 36px',
                  borderRadius: '14px',
                  textAlign: 'center',
                  maxWidth: '520px',
                  width: '100%',
                  border: '2px solid #D8A24A',
                  boxShadow: '0 10px 30px rgba(11,27,45,0.15)'
                }}
              >
                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#D8A24A', fontWeight: 800 }}>
                  Parent Operating Entity
                </span>
                <h3 style={{ fontSize: '24px', color: '#FFFFFF', margin: '4px 0 6px' }}>
                  Bluestone Buildcon
                </h3>
                <p style={{ fontSize: '13px', color: '#D5C2AD', margin: 0 }}>
                  Turnkey Civil Engineering, Structural Procurement & On-Site Construction (PAN India)
                </p>
              </div>

              {/* Connecting Stems */}
              <div style={{ height: '30px', width: '2px', backgroundColor: '#C1662F' }} />

              {/* Sub-Units Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '24px',
                  width: '100%'
                }}
              >
                {/* R S Design Studio */}
                <div
                  style={{
                    backgroundColor: '#FAF6F0',
                    border: '1.5px solid #D5C2AD',
                    borderRadius: '14px',
                    padding: '28px',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#C1662F', textTransform: 'uppercase' }}>
                      Architectural Arm #1
                    </span>
                    <span className="navy-badge">North & West India</span>
                  </div>
                  <h4 style={{ fontSize: '20px', color: '#0B1B2D', marginBottom: '8px' }}>
                    R S Design Studio
                  </h4>
                  <p style={{ fontSize: '13.5px', color: '#584C42', lineHeight: 1.5, marginBottom: '16px' }}>
                    Delivers identical design, 2D floor plans, 3D visualization, and structural detailing specifically allocated to clients from Northern & Western India.
                  </p>
                  <div style={{ fontSize: '12px', color: '#7D7065', fontWeight: 600, marginBottom: '8px' }}>
                    Allocated States:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {northWestStates.map(s => (
                      <span key={s.name} style={{ fontSize: '11px', backgroundColor: '#FFFFFF', border: '1px solid #EADBCC', padding: '3px 8px', borderRadius: '4px', color: '#121D28' }}>
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>

                {/* A S Home Planner */}
                <div
                  style={{
                    backgroundColor: '#FAF6F0',
                    border: '1.5px solid #D5C2AD',
                    borderRadius: '14px',
                    padding: '28px',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#8B4A2B', textTransform: 'uppercase' }}>
                      Architectural Arm #2
                    </span>
                    <span className="navy-badge">South, East & Central India</span>
                  </div>
                  <h4 style={{ fontSize: '20px', color: '#0B1B2D', marginBottom: '8px' }}>
                    A S Home Planner
                  </h4>
                  <p style={{ fontSize: '13.5px', color: '#584C42', lineHeight: 1.5, marginBottom: '16px' }}>
                    Offers the exact same architectural packages, drawing specifications, and turnaround standards for clients with plots located in Southern, Eastern, and Central regions.
                  </p>
                  <div style={{ fontSize: '12px', color: '#7D7065', fontWeight: 600, marginBottom: '8px' }}>
                    Allocated States:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {southEastStates.map(s => (
                      <span key={s.name} style={{ fontSize: '11px', backgroundColor: '#FFFFFF', border: '1px solid #EADBCC', padding: '3px 8px', borderRadius: '4px', color: '#121D28' }}>
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Crucial Explanatory Box */}
            <div
              style={{
                backgroundColor: '#FAF3E7',
                border: '1px solid #D8A24A',
                borderRadius: '12px',
                padding: '20px 24px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px'
              }}
            >
              <ShieldCheck size={24} color="#C1662F" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <strong style={{ color: '#0B1B2D', fontSize: '14.5px', display: 'block', marginBottom: '4px' }}>
                  Unified Handover to Bluestone Buildcon Construction
                </strong>
                <p style={{ fontSize: '13.5px', color: '#584C42', margin: 0, lineHeight: 1.5 }}>
                  Regardless of whether your drawings are prepared by <strong>R S Design Studio</strong> or <strong>A S Home Planner</strong>, civil execution on ground is performed under the single, trusted banner of <strong>Bluestone Buildcon</strong>. This ensures seamless continuity with zero friction between drawing and construction.
                </p>
              </div>
            </div>
          </div>

          {/* PAN-India Service Footprint Banner */}
          <div
            style={{
              backgroundColor: '#0B1B2D',
              borderRadius: '20px',
              padding: '48px 40px',
              color: '#FAF6F0',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '36px',
              alignItems: 'center'
            }}
          >
            <div>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.16em', color: '#D8A24A', fontWeight: 800 }}>
                PAN-India Service Guarantee
              </span>
              <h2 style={{ fontSize: '28px', color: '#FFFFFF', margin: '8px 0 14px' }}>
                Engineering Capacity in Every Corner of India
              </h2>
              <p style={{ fontSize: '14.5px', color: '#D5C2AD', lineHeight: 1.6, marginBottom: '24px' }}>
                Whether you possess an ancestral plot in Jaipur, an urban parcel in Bengaluru, or an estate in Lucknow, our regional studio models and centralized construction procurement team mobilize with unmatched speed.
              </p>
              <button
                onClick={() => navigateTo('register')}
                className="btn-primary"
                style={{ padding: '12px 28px', fontSize: '14px' }}
              >
                Register Your Land Plot <ArrowRight size={14} />
              </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(216,162,74,0.2)' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#D8A24A' }}>28</div>
                <div style={{ fontSize: '12px', color: '#FAF6F0', fontWeight: 600 }}>Indian States Active</div>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(216,162,74,0.2)' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#C1662F' }}>8</div>
                <div style={{ fontSize: '12px', color: '#FAF6F0', fontWeight: 600 }}>Union Territories</div>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(216,162,74,0.2)' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#FAF6F0' }}>100%</div>
                <div style={{ fontSize: '12px', color: '#FAF6F0', fontWeight: 600 }}>Vastu Compliant Drafting</div>
              </div>
              <div style={{ backgroundColor: 'rgba(255,255,255,0.06)', padding: '20px', borderRadius: '12px', border: '1px solid rgba(216,162,74,0.2)' }}>
                <div style={{ fontSize: '28px', fontWeight: 800, color: '#4ADE80' }}>Zero</div>
                <div style={{ fontSize: '12px', color: '#FAF6F0', fontWeight: 600 }}>Structural Defects Record</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
