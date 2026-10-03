import React, { useState } from 'react';
import { Star, ShieldCheck, MessageSquare, Plus, CheckCircle2, User } from 'lucide-react';
import { TESTIMONIALS } from '../data/initialData';
import { useApp } from '../context/AppContext';

export default function ReviewsPage() {
  const { showToast } = useApp();
  const [reviewsList, setReviewsList] = useState(TESTIMONIALS);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [newReview, setNewReview] = useState({
    name: '',
    city: '',
    project: '',
    rating: 5,
    studioTagged: 'R S Design Studio (Drawings) + Bluestone Buildcon (Execution)',
    quote: ''
  });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) {
      alert("Please enter your name and review quote.");
      return;
    }
    const created = {
      id: `test-${Date.now()}`,
      ...newReview
    };
    setReviewsList([created, ...reviewsList]);
    setShowReviewModal(false);
    showToast("Thank you! Your verified client review has been recorded.", "success");
    setNewReview({
      name: '',
      city: '',
      project: '',
      rating: 5,
      studioTagged: 'R S Design Studio (Drawings) + Bluestone Buildcon (Execution)',
      quote: ''
    });
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ maxWidth: '720px' }}>
              <div className="eyebrow-badge" style={{ marginBottom: '14px' }}>
                Client Endorsements & Ratings
              </div>
              <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', color: '#0B1B2D', lineHeight: 1.15, marginBottom: '16px' }}>
                Stories of Trust Across India
              </h1>
              <p style={{ fontSize: '16.5px', color: '#584C42', lineHeight: 1.6 }}>
                Read genuine reflections from property owners who designed their estates with <strong>R S Design Studio</strong> or <strong>A S Home Planner</strong>, and entrusted groundbreaking civil construction to <strong>Bluestone Buildcon</strong>.
              </p>
            </div>

            <button
              onClick={() => setShowReviewModal(true)}
              className="btn-primary"
              style={{ padding: '12px 24px', fontSize: '14px' }}
            >
              <Plus size={16} /> Submit Project Review
            </button>
          </div>
        </div>
      </section>

      {/* Aggregate Score Bar */}
      <section style={{ padding: '32px 0 24px' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: '#0B1B2D',
              borderRadius: '14px',
              padding: '24px 32px',
              color: '#FAF6F0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '20px',
              border: '1px solid #D8A24A'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontSize: '42px', fontWeight: 800, color: '#D8A24A', lineHeight: 1 }}>
                4.96
              </div>
              <div>
                <div style={{ display: 'flex', gap: '4px', marginBottom: '4px' }}>
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={18} fill="#D8A24A" color="#D8A24A" />
                  ))}
                </div>
                <div style={{ fontSize: '12px', color: '#D5C2AD' }}>
                  Based on 340+ Verified Pan-India Civil & Architectural Audits
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', fontSize: '13px', color: '#D5C2AD' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#10B981" /> 100% Milestone Compliance
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckCircle2 size={16} color="#10B981" /> Zero Structural Defects
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section style={{ padding: '24px 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '28px'
            }}
          >
            {reviewsList.map((t) => (
              <div
                key={t.id}
                className="luxury-card"
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: '1px solid #EADBCC'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#D8A24A" color="#D8A24A" />
                      ))}
                    </div>
                    <span className="navy-badge" style={{ fontSize: '10px' }}>
                      <ShieldCheck size={12} color="#16A34A" /> Verified Client
                    </span>
                  </div>

                  <p style={{ fontSize: '14.5px', color: '#584C42', fontStyle: 'italic', lineHeight: 1.65, marginBottom: '24px' }}>
                    "{t.quote}"
                  </p>
                </div>

                <div style={{ paddingTop: '18px', borderTop: '1px solid #EADBCC' }}>
                  <h4 style={{ fontSize: '16px', color: '#0B1B2D', margin: '0 0 2px', fontWeight: 700 }}>
                    {t.name}
                  </h4>
                  <div style={{ fontSize: '12.5px', color: '#7D7065' }}>
                    {t.city} &bull; {t.project}
                  </div>
                  <div style={{ fontSize: '11px', color: '#C1662F', fontWeight: 600, marginTop: '6px' }}>
                    {t.studioTagged}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Review Submission Modal */}
      {showReviewModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(11, 27, 45, 0.8)',
            backdropFilter: 'blur(8px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setShowReviewModal(false)}
        >
          <div
            className="luxury-card"
            style={{
              backgroundColor: '#FFFFFF',
              maxWidth: '540px',
              width: '100%',
              padding: '32px',
              borderRadius: '16px'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '20px', color: '#0B1B2D', margin: 0, fontWeight: 700 }}>
                Submit Your Bluestone Experience
              </h3>
              <button
                onClick={() => setShowReviewModal(false)}
                style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer' }}
              >
                &times;
              </button>
            </div>

            <form onSubmit={handleReviewSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Major General R. V. Pillai"
                  value={newReview.name}
                  onChange={(e) => setNewReview(prev => ({ ...prev, name: e.target.value }))}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '13.5px' }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                    City & State *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Chandigarh, Punjab"
                    value={newReview.city}
                    onChange={(e) => setNewReview(prev => ({ ...prev, city: e.target.value }))}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '13.5px' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                    Project Type
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 5,000 sq.ft. Modern Villa"
                    value={newReview.project}
                    onChange={(e) => setNewReview(prev => ({ ...prev, project: e.target.value }))}
                    style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '13.5px' }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                  Studio & Unit Involved
                </label>
                <select
                  value={newReview.studioTagged}
                  onChange={(e) => setNewReview(prev => ({ ...prev, studioTagged: e.target.value }))}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '13px', backgroundColor: '#FFFFFF' }}
                >
                  <option value="R S Design Studio (Drawings) + Bluestone Buildcon (Execution)">R S Design Studio + Bluestone Buildcon</option>
                  <option value="A S Home Planner (Drawings) + Bluestone Buildcon (Execution)">A S Home Planner + Bluestone Buildcon</option>
                  <option value="R S Design Studio (Drawings Only)">R S Design Studio (Drawings Only)</option>
                  <option value="A S Home Planner (Drawings Only)">A S Home Planner (Drawings Only)</option>
                  <option value="Bluestone Buildcon Turnkey Construction Only">Bluestone Buildcon Turnkey Construction Only</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                  Your Review / Experience *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share how the drawings proposal or civil execution was handled..."
                  value={newReview.quote}
                  onChange={(e) => setNewReview(prev => ({ ...prev, quote: e.target.value }))}
                  style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '13.5px', lineHeight: 1.5 }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ padding: '12px', fontSize: '14px', marginTop: '8px' }}
              >
                Submit Verified Review
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
