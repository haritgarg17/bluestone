import React from 'react';
import { Building2, Calendar, CheckCircle2, Ruler, HardHat, ArrowRight } from 'lucide-react';
import { CONSTRUCTION_PROJECTS } from '../data/initialData';
import { useApp } from '../context/AppContext';

export default function ProjectsPage() {
  const { navigateTo } = useApp();

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
              Civil Execution Case Studies
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#0B1B2D', lineHeight: 1.15, marginBottom: '16px' }}>
              Landmark Construction Sites
            </h1>
            <p style={{ fontSize: '16.5px', color: '#584C42', lineHeight: 1.6 }}>
              Inspect ongoing and commissioned turnkey construction case studies delivered under the <strong>Bluestone Buildcon</strong> parent brand across India.
            </p>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section style={{ padding: '48px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {CONSTRUCTION_PROJECTS.map((proj, idx) => (
              <div
                key={proj.id}
                className="luxury-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #D5C2AD',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                  alignItems: 'center'
                }}
              >
                {/* Image Side */}
                <div style={{ position: 'relative', height: '100%', minHeight: '340px' }}>
                  <img
                    src={proj.image}
                    alt={proj.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '18px',
                      left: '18px',
                      backgroundColor: 'rgba(11, 27, 45, 0.9)',
                      backdropFilter: 'blur(8px)',
                      color: '#FAF6F0',
                      padding: '6px 14px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: 700,
                      border: '1px solid rgba(216,162,74,0.3)'
                    }}
                  >
                    {proj.stage}
                  </div>
                </div>

                {/* Case Study Content */}
                <div style={{ padding: '40px 36px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#C1662F', fontWeight: 800 }}>
                      Architectural Arm: {proj.architecturalUnit}
                    </span>
                  </div>

                  <h2 style={{ fontSize: '26px', color: '#0B1B2D', marginBottom: '16px', fontWeight: 700 }}>
                    {proj.title}
                  </h2>

                  {/* Matrix specs */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(2, 1fr)',
                      gap: '14px',
                      padding: '16px',
                      backgroundColor: '#FAF6F0',
                      borderRadius: '10px',
                      border: '1px solid #EADBCC',
                      marginBottom: '24px'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                      <Building2 size={16} color="#C1662F" />
                      <span>Built-up: {proj.builtArea}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                      <Ruler size={16} color="#C1662F" />
                      <span>Plot: {proj.plotSize}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                      <Calendar size={16} color="#C1662F" />
                      <span>{proj.timeline}</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px' }}>
                      <HardHat size={16} color="#C1662F" />
                      <span>{proj.executionLead}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <h4 style={{ fontSize: '14px', color: '#0B1B2D', marginBottom: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Civil Engineering Highlights
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 28px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {proj.highlights.map((h, hIdx) => (
                      <li key={hIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: '#584C42', lineHeight: 1.4 }}>
                        <CheckCircle2 size={15} color="#16A34A" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigateTo('contact')}
                    className="btn-primary"
                    style={{ padding: '12px 24px', fontSize: '13.5px' }}
                  >
                    Consult On Your Construction Project <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
