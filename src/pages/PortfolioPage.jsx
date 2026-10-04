import React, { useState } from 'react';
import { Compass, Filter, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../data/initialData';
import { useApp } from '../context/AppContext';

export default function PortfolioPage() {
  const { navigateTo } = useApp();
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [unitFilter, setUnitFilter] = useState('All');
  const [activeModalItem, setActiveModalItem] = useState(null);

  const categories = ['All', 'Luxury Villa', 'Tropical Residential', 'Commercial'];
  const units = ['All', 'R S Design Studio', 'A S Home Planner', 'Bluestone Buildcon'];

  const filteredItems = PORTFOLIO_ITEMS.filter(item => {
    const matchCat = categoryFilter === 'All' || item.category.toLowerCase().includes(categoryFilter.toLowerCase());
    const matchUnit = unitFilter === 'All' || item.unit === unitFilter;
    return matchCat && matchUnit;
  });

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
              Architectural Concept Gallery
            </div>
            <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#0B1B2D', lineHeight: 1.15, marginBottom: '16px' }}>
              Crafted Architecture Across India
            </h1>
            <p style={{ fontSize: '16.5px', color: '#584C42', lineHeight: 1.6 }}>
              Explore bespoke residential and commercial blueprints created by <strong>R S Design Studio</strong> (North & West) and <strong>A S Home Planner</strong> (South & East), with civil execution by <strong>Bluestone Buildcon</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section style={{ padding: '32px 0 20px' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #D5C2AD',
              borderRadius: '14px',
              padding: '20px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}
          >
            {/* Unit Filter (Essential Requirement) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#0B1B2D', minWidth: '130px' }}>
                Filter by Studio / Unit:
              </span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {units.map((u) => (
                  <button
                    key={u}
                    onClick={() => setUnitFilter(u)}
                    style={{
                      padding: '7px 16px',
                      borderRadius: '8px',
                      border: unitFilter === u ? '1.5px solid #C1662F' : '1px solid #EADBCC',
                      backgroundColor: unitFilter === u ? '#FAF3E7' : '#FAF6F0',
                      color: unitFilter === u ? '#C1662F' : '#584C42',
                      fontWeight: unitFilter === u ? 700 : 500,
                      fontSize: '12.5px',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {u}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', borderTop: '1px dashed #EADBCC', paddingTop: '14px' }}>
              <span style={{ fontSize: '13px', fontWeight: 700, color: '#0B1B2D', minWidth: '130px' }}>
                Typology:
              </span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {categories.map((c) => (
                  <button
                    key={c}
                    onClick={() => setCategoryFilter(c)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: '6px',
                      border: categoryFilter === c ? '1.5px solid #0B1B2D' : '1px solid #EADBCC',
                      backgroundColor: categoryFilter === c ? '#0B1B2D' : '#FAF6F0',
                      color: categoryFilter === c ? '#FAF6F0' : '#584C42',
                      fontWeight: categoryFilter === c ? 700 : 500,
                      fontSize: '12px',
                      cursor: 'pointer'
                    }}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section style={{ padding: '24px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '32px'
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="luxury-card"
                style={{ backgroundColor: '#FFFFFF', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      left: '14px',
                      backgroundColor: 'rgba(11, 27, 45, 0.88)',
                      backdropFilter: 'blur(6px)',
                      color: '#FAF6F0',
                      padding: '5px 12px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 700
                    }}
                  >
                    {item.unit}
                  </div>

                  <div
                    style={{
                      position: 'absolute',
                      bottom: '14px',
                      right: '14px',
                      backgroundColor: 'rgba(193, 102, 47, 0.92)',
                      color: '#FFFFFF',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      fontWeight: 600
                    }}
                  >
                    {item.category}
                  </div>
                </div>

                <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <span style={{ fontSize: '12px', color: '#8B4A2B', fontWeight: 600 }}>
                      {item.area}
                    </span>
                    <h3 style={{ fontSize: '20px', color: '#0B1B2D', margin: '4px 0 10px', fontWeight: 700 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: '13.5px', color: '#584C42', lineHeight: 1.5, marginBottom: '20px' }}>
                      {item.description}
                    </p>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #EADBCC', paddingTop: '14px' }}>
                    <button
                      onClick={() => setActiveModalItem(item)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#0B1B2D',
                        fontSize: '13px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <Eye size={15} color="#C1662F" /> Inspect Design
                    </button>

                    <button
                      onClick={() => navigateTo('contact')}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#C1662F',
                        fontSize: '13px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      Commission Similar <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeModalItem && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 27, 45, 0.85)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="luxury-card"
            style={{
              maxWidth: '840px',
              width: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: '16px',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ position: 'relative', height: '420px' }}>
              <img
                src={activeModalItem.image}
                alt={activeModalItem.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setActiveModalItem(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(11, 27, 45, 0.8)',
                  color: '#FAF6F0',
                  border: 'none',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  cursor: 'pointer',
                  fontSize: '18px'
                }}
              >
                &times;
              </button>
            </div>

            <div style={{ padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <span className="navy-badge">{activeModalItem.unit}</span>
                <span style={{ fontSize: '13px', color: '#7D7065' }}>{activeModalItem.area}</span>
              </div>
              <h2 style={{ fontSize: '24px', color: '#0B1B2D', marginBottom: '10px' }}>
                {activeModalItem.title}
              </h2>
              <p style={{ fontSize: '15px', color: '#584C42', lineHeight: 1.6, marginBottom: '24px' }}>
                {activeModalItem.description} Built to withstand seismic forces with Grade M35 concrete framework and energy-neutral orientation.
              </p>
              <button
                onClick={() => {
                  setActiveModalItem(null);
                  navigateTo('contact');
                }}
                className="btn-primary"
                style={{ width: '100%', padding: '14px' }}
              >
                Inquire About a Design Like This <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
