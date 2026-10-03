import React from 'react';

export default function BrandLogo({ variant = 'default', size = 'normal' }) {
  const isDark = variant === 'on-dark';
  const logoHeight = size === 'large' ? 48 : size === 'small' ? 32 : 40;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: size === 'large' ? '12px' : '10px',
        textDecoration: 'none'
      }}
    >
      {/* Official Company Logo */}
      <div
        style={{
          height: `${logoHeight}px`,
          width: `${logoHeight}px`,
          borderRadius: '8px',
          overflow: 'hidden',
          backgroundColor: '#FFFFFF',
          padding: '2px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: isDark ? '0 2px 8px rgba(0,0,0,0.3)' : '0 2px 6px rgba(11,27,45,0.1)',
          border: isDark ? '1px solid rgba(216,162,74,0.4)' : '1px solid #EADBCC',
          flexShrink: 0
        }}
      >
        <img
          src="/bluestone_logo.jpg"
          alt="Bluestone Buildcon Logo"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </div>

      {/* Brand Typography */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: size === 'large' ? '22px' : '18px',
            fontWeight: 900,
            letterSpacing: '0.07em',
            color: isDark ? '#FAF6F0' : '#0B1B2D',
            lineHeight: 1.05,
            textTransform: 'uppercase'
          }}
        >
          BLUESTONE
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '1px' }}>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: size === 'large' ? '10px' : '8.5px',
              fontWeight: 700,
              letterSpacing: '0.3em',
              color: isDark ? '#D8A24A' : '#7D7065',
              lineHeight: 1,
              textTransform: 'uppercase'
            }}
          >
            BUILDCON
          </span>
          <span
            style={{
              width: '3px',
              height: '3px',
              borderRadius: '50%',
              backgroundColor: '#C1662F',
              display: 'inline-block'
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: '7.5px',
              fontWeight: 800,
              letterSpacing: '0.12em',
              color: '#C1662F',
              textTransform: 'uppercase'
            }}
          >
            PAN INDIA
          </span>
        </div>
      </div>
    </div>
  );
}
