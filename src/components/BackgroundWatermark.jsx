import React from 'react';

export default function BackgroundWatermark() {
  const contactText = "BLUESTONE BUILDCON • +91 8004300830 • +91 95699 56067 • bluestone.bildcon@gmail.com • @bluestone.buildcon • PAN-INDIA";
  const rows = Array.from({ length: 18 });

  return (
    <div
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        overflow: 'hidden',
        userSelect: 'none'
      }}
      aria-hidden="true"
    >
      {/* 1. Official Company Watermark Logos Across Canvas */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '120px 80px',
          opacity: 0.038,
          mixBlendMode: 'multiply',
          padding: '80px',
          alignItems: 'center',
          justifyItems: 'center',
          transform: 'rotate(-8deg) scale(1.08)'
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            style={{
              width: '280px',
              height: '280px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img
              src="/bluestone_logo.jpg"
              alt=""
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                filter: 'contrast(1.2)'
              }}
            />
          </div>
        ))}
      </div>

      {/* 2. Repeating Subtle Contact Info Watermark Rows */}
      <div
        style={{
          position: 'absolute',
          width: '200%',
          height: '200%',
          top: '-50%',
          left: '-50%',
          transform: 'rotate(-20deg)',
          display: 'flex',
          flexDirection: 'column',
          gap: '90px',
          opacity: 0.035
        }}
      >
        {rows.map((_, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              whiteSpace: 'nowrap',
              gap: '60px',
              fontFamily: 'var(--font-sans)',
              fontSize: '12px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#0B1B2D',
              fontWeight: 800,
              transform: i % 2 === 0 ? 'translateX(0)' : 'translateX(-100px)'
            }}
          >
            <span>{contactText}</span>
            <span>•</span>
            <span>{contactText}</span>
            <span>•</span>
            <span>{contactText}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
