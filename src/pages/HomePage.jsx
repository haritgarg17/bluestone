import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Compass, Building2, ShieldCheck, MapPin, Award, Layers, Sparkles, FileText, Download, ChevronRight, HelpCircle, Check, ChevronDown } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BRAND_INFO, PORTFOLIO_ITEMS, TESTIMONIALS } from '../data/initialData';

export default function HomePage() {
  const { navigateTo } = useApp();

  // Hero Interactive Slider State
  const [heroSlide, setHeroSlide] = useState(0);


  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState(null);

  const heroSlides = [
    {
      title: "The Sandstone Courtyard Villa",
      unit: "R S Design Studio",
      execution: "Bluestone Buildcon Civil Directorate",
      image: "/hero_villa.jpg",
      tag: "North & West Zone Lead"
    },
    {
      title: "Tropical Lily Reflection Residence",
      unit: "A S Home Planner",
      execution: "Bluestone Buildcon Coastal Division",
      image: "/as_bungalow.jpg",
      tag: "South & East Zone Lead"
    },
    {
      title: "Cantilevered Horizon Residence",
      unit: "R S Design Studio",
      execution: "Bluestone Buildcon Turnkey Division",
      image: "/rs_villa.jpg",
      tag: "Western Territory Benchmark"
    },
    {
      title: "High-Rise Commercial & Structural EPC",
      unit: "Bluestone Buildcon",
      execution: "Turnkey Heavy Civil Works",
      image: "/bluestone_construction.jpg",
      tag: "Civil Construction Mastery"
    }
  ];


  const faqs = [
    {
      q: "How does the two-stage payment protect client funds?",
      a: "Unlike traditional contractors who demand large upfront sums, Bluestone Buildcon requires only an initial nominal registration fee to begin drafting. Your assigned studio (R S Design Studio or A S Home Planner) crafts the blueprint, and you inspect the full watermarked proposal before paying the balance. You retain total financial control at every milestone."
    },
    {
      q: "How is my project allocated between R S Design Studio and A S Home Planner?",
      a: "Our system automatically routes your project based on the location of your plot. Northern and Western states are allocated to R S Design Studio, while Southern, Eastern, and Central regions are allocated to A S Home Planner. Both studios provide identical, top-tier architectural deliverables with deep local microclimate and vastu expertise."
    },
    {
      q: "Can I commission architectural drawings without committing to civil construction?",
      a: "Yes, absolutely! You can choose any of our architectural design packages (Basic, Executive 3D, or Royal Masterplan). Once final payments clear, you receive fully unlocked, sanction-ready municipal and CAD blueprints. If you decide to proceed with construction, Bluestone Buildcon seamlessly takes over on ground."
    },
    {
      q: "What civil construction quality standards does Bluestone Buildcon guarantee?",
      a: "All turnkey civil executions follow rigorous Indian Standard codes (IS 456:2000 for reinforced concrete, IS 1893 for seismic resistance). We use certified Grade 550D TMT rebars, M30+ concrete mixes with cube testing lab audits, and provide an engineer-supervised Zero Cost Overrun contract."
    }
  ];

  return (
    <div className="animate-fade-in" style={{ position: 'relative' }}>
      {/* 1. ULTRA-LUXURY HERO SECTION */}
      <section
        style={{
          position: 'relative',
          minHeight: '92vh',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#FAF6F0',
          overflow: 'hidden',
          padding: '64px 0 76px'
        }}
        className="blueprint-grid-bg"
      >
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '52px',
              alignItems: 'center'
            }}
          >
            {/* Left Column: Editorial Typography & Actions */}
            <div style={{ maxWidth: '640px' }}>
              <div className="eyebrow-badge" style={{ marginBottom: '20px' }}>
                <Sparkles size={13} /> Architectural & Construction Excellence
              </div>

              <h1
                style={{
                  fontSize: 'clamp(2.5rem, 4.8vw, 4.1rem)',
                  lineHeight: 1.1,
                  fontWeight: 700,
                  color: '#0B1B2D',
                  marginBottom: '22px',
                  letterSpacing: '-0.02em'
                }}
              >
                Where Visionary Design <br />
                <span style={{ color: '#C1662F', fontStyle: 'italic' }}>Meets Precision Ground Execution.</span>
              </h1>

              <p
                style={{
                  fontSize: '17.5px',
                  color: '#584C42',
                  lineHeight: 1.65,
                  marginBottom: '36px'
                }}
              >
                <strong>Bluestone Buildcon</strong> is a premier, tech-enabled enterprise revolutionizing Indian estate creation. We combine bespoke architectural drafting from our regional arms — <strong>R S Design Studio</strong> & <strong>A S Home Planner</strong> — with transparent, zero-compromise turnkey civil construction across all 28 States.
              </p>

              {/* Action Triggers */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '44px' }}>
                <button
                  onClick={() => navigateTo('contact')}
                  className="btn-primary"
                  style={{ padding: '16px 36px', fontSize: '15.5px' }}
                >
                  <span>Start Your Project Consultation</span>
                  <ArrowRight size={16} />
                </button>

                <button
                  onClick={() => navigateTo('portfolio')}
                  className="btn-secondary"
                  style={{ padding: '15px 30px', fontSize: '15.5px' }}
                >
                  Explore Portfolio
                </button>
              </div>

              {/* Trust Matrix Chips */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '16px',
                  paddingTop: '28px',
                  borderTop: '1px solid #EADBCC'
                }}
              >
                <div>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#0B1B2D', fontFamily: 'var(--font-sans)', lineHeight: 1 }}>
                    Next-Gen
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#7D7065', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '6px', fontWeight: 600 }}>
                    PropTech Civil Enterprise
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#C1662F', fontFamily: 'var(--font-sans)', lineHeight: 1 }}>
                    100%
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#7D7065', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '6px', fontWeight: 600 }}>
                    2-Stage Milestone Escrow
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '26px', fontWeight: 800, color: '#D8A24A', fontFamily: 'var(--font-sans)', lineHeight: 1 }}>
                    Nationwide
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#7D7065', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: '6px', fontWeight: 600 }}>
                    All 28 States Covered
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Luxury Showcase Card */}
            <div style={{ position: 'relative' }}>
              <div
                className="luxury-card shimmer-card-border"
                style={{
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '2px solid #FAF6F0',
                  boxShadow: '0 24px 70px rgba(11, 27, 45, 0.18)',
                  backgroundColor: '#0B1B2D'
                }}
              >
                {/* Active Slide Image */}
                <div style={{ position: 'relative', height: '490px', overflow: 'hidden' }}>
                  <img
                    src={heroSlides[heroSlide].image}
                    alt={heroSlides[heroSlide].title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
                      display: 'block'
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(11,27,45,0.15) 0%, rgba(11,27,45,0.85) 100%)',
                      pointerEvents: 'none'
                    }}
                  />

                  {/* Floating Stat Chip 1: Vastu & Seismic Code */}
                  <div
                    className="animate-float"
                    style={{
                      position: 'absolute',
                      top: '24px',
                      left: '24px',
                      backgroundColor: 'rgba(250, 246, 240, 0.94)',
                      backdropFilter: 'blur(12px)',
                      color: '#0B1B2D',
                      padding: '8px 16px',
                      borderRadius: '10px',
                      border: '1px solid #D8A24A',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '11.5px',
                      fontWeight: 700
                    }}
                  >
                    <ShieldCheck size={16} color="#16A34A" />
                    <span>IS 456 Seismic & Vastu Aligned</span>
                  </div>

                  {/* Floating Stat Chip 2: 2-Stage Escrow Protection */}
                  <div
                    className="animate-float-delayed"
                    style={{
                      position: 'absolute',
                      top: '80px',
                      right: '24px',
                      backgroundColor: 'rgba(11, 27, 45, 0.92)',
                      backdropFilter: 'blur(12px)',
                      color: '#FAF6F0',
                      padding: '8px 16px',
                      borderRadius: '10px',
                      border: '1px solid rgba(216, 162, 74, 0.4)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '11.5px',
                      fontWeight: 600
                    }}
                  >
                    <Sparkles size={14} color="#D8A24A" />
                    <span>Zero Financial Risk Escrow</span>
                  </div>

                  {/* Bottom Image Info Bar */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '72px',
                      left: '24px',
                      right: '24px',
                      color: '#FAF6F0'
                    }}
                  >
                    <span
                      style={{
                        fontSize: '10.5px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.14em',
                        color: '#D8A24A',
                        fontWeight: 800,
                        backgroundColor: 'rgba(11,27,45,0.7)',
                        padding: '3px 8px',
                        borderRadius: '4px'
                      }}
                    >
                      {heroSlides[heroSlide].tag}
                    </span>

                    <h3 style={{ fontSize: '22px', margin: '8px 0 4px', color: '#FFFFFF', fontWeight: 700 }}>
                      {heroSlides[heroSlide].title}
                    </h3>

                    <div style={{ fontSize: '12.5px', color: '#D5C2AD' }}>
                      {heroSlides[heroSlide].unit} &bull; {heroSlides[heroSlide].execution}
                    </div>
                  </div>
                </div>

                {/* Interactive Slide Switcher Tabs */}
                <div
                  style={{
                    backgroundColor: '#0B1B2D',
                    padding: '12px 16px',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '6px',
                    borderTop: '1px solid rgba(216, 162, 74, 0.25)'
                  }}
                >
                  {heroSlides.map((s, idx) => {
                    const active = heroSlide === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setHeroSlide(idx)}
                        style={{
                          background: active ? '#C1662F' : 'rgba(255,255,255,0.06)',
                          border: active ? '1px solid #D8A24A' : '1px solid rgba(255,255,255,0.08)',
                          color: active ? '#FFFFFF' : '#D5C2AD',
                          padding: '8px 6px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: active ? 700 : 500,
                          cursor: 'pointer',
                          textAlign: 'center',
                          transition: 'all 0.2s ease',
                          lineHeight: 1.2
                        }}
                      >
                        {idx === 0 ? "Courtyard Villa" : idx === 1 ? "Tropical Residence" : idx === 2 ? "Terrace Villa" : "Commercial Hub"}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONTINUOUS LUXURY MARQUEE TICKER */}
      <section
        style={{
          backgroundColor: '#0B1B2D',
          color: '#FAF6F0',
          padding: '16px 0',
          borderTop: '2px solid #D8A24A',
          borderBottom: '1px solid rgba(216, 162, 74, 0.25)',
          overflow: 'hidden'
        }}
      >
        <div className="marquee-container">
          <div className="marquee-content">
            {[
              "⚡ IS 456:2000 Structural Standards",
              "🏛️ Dual Studio Architectural Network: R S Design Studio & A S Home Planner",
              "🔒 Razorpay Secured 2-Stage Escrow Protection",
              "📐 100% Vastu-Compliant Spatial Planning",
              "🇮🇳 Active Mobilization in all 28 States & 8 UTs",
              "🏗️ Zero Contractor Opacity & Guaranteed Fixed Pricing",
              "✨ 3D Photorealistic Exterior & Twilight Elevations",
              "⚡ IS 456:2000 Structural Standards",
              "🏛️ Dual Studio Architectural Network: R S Design Studio & A S Home Planner",
              "🔒 Razorpay Secured 2-Stage Escrow Protection",
              "📐 100% Vastu-Compliant Spatial Planning",
              "🇮🇳 Active Mobilization in all 28 States & 8 UTs",
              "🏗️ Zero Contractor Opacity & Guaranteed Fixed Pricing"
            ].map((item, i) => (
              <span key={i} style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.04em', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#D8A24A' }}>&bull;</span> {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. GROUP STRUCTURE SECTION */}
      <section style={{ padding: '84px 0', backgroundColor: '#F3EBE0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 52px' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '12px' }}>
              <Layers size={13} /> The Bluestone Ecosystem
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', color: '#0B1B2D', marginBottom: '14px', fontWeight: 700 }}>
              Three Connected Brands Under One Roof
            </h2>
            <p style={{ fontSize: '16px', color: '#584C42', lineHeight: 1.6 }}>
              A seamless division of architectural specializations backed by centralized civil engineering.
              Your project is paired with our regional architectural studio, then constructed by Bluestone Buildcon.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
              gap: '28px'
            }}
          >
            {/* Unit 1: Parent Brand */}
            <div
              className="luxury-card"
              style={{
                padding: '36px 30px',
                borderTop: '5px solid #C1662F',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span className="navy-badge">Parent Brand &bull; Turnkey EPC</span>
                  <Building2 size={26} color="#C1662F" />
                </div>
                <h3 style={{ fontSize: '23px', marginBottom: '8px', color: '#0B1B2D', fontWeight: 700 }}>
                  Bluestone Buildcon
                </h3>
                <div style={{ fontSize: '12px', color: '#C1662F', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
                  Civil Construction & Turnkey EPC Execution
                </div>
                <p style={{ fontSize: '14px', color: '#584C42', lineHeight: 1.6, marginBottom: '20px' }}>
                  The bedrock of our organization. Takes verified architectural blueprints from concept into concrete reality across all Indian states with in-house structural engineers and stringent QA/QC.
                </p>
              </div>

              <div style={{ paddingTop: '18px', borderTop: '1px solid #EADBCC' }}>
                <span style={{ fontSize: '12px', color: '#7D7065', fontWeight: 600 }}>Territory: </span>
                <span style={{ fontSize: '12px', color: '#0B1B2D', fontWeight: 700 }}>All 28 States & 8 UTs Across India</span>
              </div>
            </div>

            {/* Unit 2: R S Design Studio */}
            <div
              className="luxury-card"
              style={{
                padding: '36px 30px',
                borderTop: '5px solid #D8A24A',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span className="navy-badge">Architectural Arm &bull; North & West</span>
                  <Compass size={26} color="#D8A24A" />
                </div>
                <h3 style={{ fontSize: '23px', marginBottom: '8px', color: '#0B1B2D', fontWeight: 700 }}>
                  R S Design Studio
                </h3>
                <div style={{ fontSize: '12px', color: '#8B4A2B', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
                  Master Architectural & Spatial Planning
                </div>
                <p style={{ fontSize: '14px', color: '#584C42', lineHeight: 1.6, marginBottom: '20px' }}>
                  Drafts bespoke 2D architectural layouts, 3D daytime and twilight elevations, municipal sanction plans, and structural drawings for projects situated across Northern and Western India.
                </p>
              </div>

              <div style={{ paddingTop: '18px', borderTop: '1px solid #EADBCC' }}>
                <span style={{ fontSize: '12px', color: '#7D7065', fontWeight: 600 }}>Territory: </span>
                <span style={{ fontSize: '12px', color: '#0B1B2D', fontWeight: 700 }}>Rajasthan, Maharashtra, Delhi NCR, Gujarat, Punjab, UP & more</span>
              </div>
            </div>

            {/* Unit 3: A S Home Planner */}
            <div
              className="luxury-card"
              style={{
                padding: '36px 30px',
                borderTop: '5px solid #8B4A2B',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                backgroundColor: '#FFFFFF'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <span className="navy-badge">Architectural Arm &bull; South, East & Central</span>
                  <Sparkles size={26} color="#8B4A2B" />
                </div>
                <h3 style={{ fontSize: '23px', marginBottom: '8px', color: '#0B1B2D', fontWeight: 700 }}>
                  A S Home Planner
                </h3>
                <div style={{ fontSize: '12px', color: '#8B4A2B', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
                  Tropical Modernism & Vastu-Compliant Design
                </div>
                <p style={{ fontSize: '14px', color: '#584C42', lineHeight: 1.6, marginBottom: '20px' }}>
                  Crafts identical high-tier architectural deliverables with deep expertise in regional topography, coastal climate, and vastu-spatial orientation for projects in Southern, Eastern, and Central India.
                </p>
              </div>

              <div style={{ paddingTop: '18px', borderTop: '1px solid #EADBCC' }}>
                <span style={{ fontSize: '12px', color: '#7D7065', fontWeight: 600 }}>Territory: </span>
                <span style={{ fontSize: '12px', color: '#0B1B2D', fontWeight: 700 }}>Karnataka, Tamil Nadu, Telangana, Kerala, Bengal, MP & more</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 5. THE 4-STEP CLIENT ROADMAP */}
      <section style={{ padding: '84px 0', backgroundColor: '#F3EBE0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 52px' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '12px' }}>
              <ShieldCheck size={13} /> Transparent Client Journey
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.8rem)', color: '#0B1B2D', marginBottom: '14px', fontWeight: 700 }}>
              From First Registration to Final Groundbreaking
            </h2>
            <p style={{ fontSize: '15px', color: '#584C42' }}>
              A secure, staged commercial framework engineered to protect both the client and the architectural studio.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '24px'
            }}
          >
            {[
              {
                step: '01',
                title: 'Register & Initial Fee',
                desc: 'Submit plot dimensions, location & brief. Pay the initial Registration Fee (#1) via Razorpay. Your project is automatically routed to R S Design Studio or A S Home Planner.',
                icon: FileText,
                badge: 'Payment #1'
              },
              {
                step: '02',
                title: 'Studio Drafts Proposal',
                desc: 'Our senior architects draft bespoke 2D floor plans, spatial zoning, and 3D architectural elevations customized for your plot geometry.',
                icon: Compass,
                badge: 'Dedicated Architect'
              },
              {
                step: '03',
                title: 'Inspect Watermarked Proposal',
                desc: 'Inspect the detailed architectural design proposal and 3D elevation visuals prepared by your assigned studio with comprehensive room zoning.',
                icon: ShieldCheck,
                badge: 'Protected Preview'
              },
              {
                step: '04',
                title: 'Final Payment & Blueprint Release',
                desc: 'Approve the design and clear the Final Payment (#2). Instantly unlock full-resolution CAD files, municipal drawings, and seamless Bluestone construction handover.',
                icon: Download,
                badge: 'Payment #2 Unlocks CAD'
              }
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="luxury-card"
                  style={{
                    padding: '32px 24px',
                    position: 'relative',
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #EADBCC'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-serif)',
                        fontSize: '32px',
                        fontWeight: 700,
                        color: '#D8A24A',
                        lineHeight: 1
                      }}
                    >
                      {item.step}
                    </span>
                    <span
                      style={{
                        fontSize: '10px',
                        fontWeight: 800,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: '#C1662F',
                        backgroundColor: '#FAF6F0',
                        padding: '4px 8px',
                        borderRadius: '4px',
                        border: '1px solid #EADBCC'
                      }}
                    >
                      {item.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '18px', color: '#0B1B2D', marginBottom: '10px', fontWeight: 700 }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '13.5px', color: '#584C42', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <button
              onClick={() => navigateTo('contact')}
              className="btn-primary"
              style={{ padding: '15px 36px' }}
            >
              Consult Our Architectural & Civil Team
            </button>
          </div>
        </div>
      </section>

      {/* 6. FEATURED DESIGNS & CIVIL SPOTLIGHTS */}
      <section style={{ padding: '84px 0', backgroundColor: '#FAF6F0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
            <div>
              <div className="eyebrow-badge" style={{ marginBottom: '10px' }}>
                <Award size={13} /> Curated Design Portfolio
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', color: '#0B1B2D', margin: 0, fontWeight: 700 }}>
                Signature Architectural Deliverables
              </h2>
            </div>

            <button
              onClick={() => navigateTo('portfolio')}
              className="btn-secondary"
              style={{ padding: '10px 20px', fontSize: '13.5px' }}
            >
              View Full Gallery &bull; 40+ Concepts
            </button>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}
          >
            {PORTFOLIO_ITEMS.slice(0, 3).map((item) => (
              <div key={item.id} className="luxury-card" style={{ backgroundColor: '#FFFFFF' }}>
                <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1.0)')}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      backgroundColor: 'rgba(11, 27, 45, 0.88)',
                      backdropFilter: 'blur(6px)',
                      color: '#FAF6F0',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontSize: '11px',
                      fontWeight: 700
                    }}
                  >
                    {item.unit}
                  </div>
                </div>

                <div style={{ padding: '24px' }}>
                  <div style={{ fontSize: '11.5px', color: '#C1662F', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                    {item.category}
                  </div>
                  <h3 style={{ fontSize: '19px', color: '#0B1B2D', marginBottom: '8px', fontWeight: 700 }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '13.5px', color: '#584C42', lineHeight: 1.5, marginBottom: '16px' }}>
                    {item.description}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '12px', borderTop: '1px solid #EADBCC', fontSize: '12.5px', color: '#7D7065' }}>
                    <span>Plot Area: <strong>{item.area}</strong></span>
                    <button
                      onClick={() => navigateTo('portfolio')}
                      style={{ background: 'none', border: 'none', color: '#C1662F', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                    >
                      View Specs <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FREQUENTLY ASKED QUESTIONS ACCORDION */}
      <section style={{ padding: '80px 0', backgroundColor: '#F3EBE0' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '12px' }}>
              <HelpCircle size={13} /> Client Clarity
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', color: '#0B1B2D', fontWeight: 700, marginBottom: '12px' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '15.5px', color: '#584C42' }}>
              Everything you need to know about our multi-brand architecture and turnkey civil execution.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {faqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="luxury-card"
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    border: isOpen ? '1.5px solid #C1662F' : '1px solid #D5C2AD',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '20px 24px',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      fontSize: '16px',
                      fontWeight: 700,
                      color: isOpen ? '#C1662F' : '#0B1B2D'
                    }}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease',
                        flexShrink: 0
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div style={{ padding: '0 24px 22px', fontSize: '14.5px', color: '#584C42', lineHeight: 1.65, borderTop: '1px dashed #EADBCC', paddingTop: '16px' }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. CLIENT TESTIMONIALS */}
      <section style={{ padding: '84px 0', backgroundColor: '#FAF6F0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px' }}>
            <div className="eyebrow-badge" style={{ marginBottom: '12px' }}>
              Verified Client Experiences
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.2vw, 2.6rem)', color: '#0B1B2D', marginBottom: '12px', fontWeight: 700 }}>
              Trusted by Homeowners Across India
            </h2>
            <p style={{ fontSize: '15px', color: '#584C42' }}>
              Hear how our integrated architectural drawing proposals and turnkey civil construction save time, costs, and stress.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="luxury-card"
                style={{
                  padding: '32px 28px',
                  backgroundColor: '#FFFFFF',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid #EADBCC'
                }}
              >
                <div>
                  <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} style={{ color: '#D8A24A', fontSize: '18px' }}>&#9733;</span>
                    ))}
                  </div>
                  <p style={{ fontSize: '14.5px', color: '#584C42', fontStyle: 'italic', lineHeight: 1.6, marginBottom: '20px' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ paddingTop: '16px', borderTop: '1px solid #EADBCC' }}>
                  <h4 style={{ fontSize: '15.5px', color: '#0B1B2D', margin: 0, fontWeight: 700 }}>
                    {t.name}
                  </h4>
                  <div style={{ fontSize: '12.5px', color: '#7D7065', marginTop: '2px' }}>
                    {t.city} &bull; {t.project}
                  </div>
                  <div style={{ fontSize: '11px', color: '#C1662F', fontWeight: 600, marginTop: '6px' }}>
                    Unit: {t.studioTagged}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CALL TO ACTION BANNER */}
      <section
        style={{
          padding: '76px 0',
          backgroundColor: '#0B1B2D',
          color: '#FAF6F0',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(216, 162, 74, 0.18) 0%, transparent 60%)',
            pointerEvents: 'none'
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '780px' }}>
          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.16em', color: '#D8A24A', fontWeight: 800 }}>
            Architectural Design & Execution
          </span>
          <h2 style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.1rem)', color: '#FAF6F0', margin: '14px 0 20px', fontWeight: 700 }}>
            Ready to Build Your Architectural Vision?
          </h2>
          <p style={{ fontSize: '16.5px', color: '#D5C2AD', lineHeight: 1.6, marginBottom: '32px' }}>
            Register your plot details today to initiate architectural drafts with <strong>R S Design Studio</strong> or <strong>A S Home Planner</strong>, backed by the construction strength of <strong>Bluestone Buildcon</strong>.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <button
              onClick={() => navigateTo('contact')}
              className="btn-primary"
              style={{ padding: '16px 38px', fontSize: '15.5px', fontWeight: 700 }}
            >
              <span>Schedule Consultation</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => navigateTo('contact')}
              className="btn-secondary"
              style={{ color: '#FAF6F0', borderColor: 'rgba(216, 162, 74, 0.5)', padding: '15px 32px' }}
            >
              Contact Our Engineers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
