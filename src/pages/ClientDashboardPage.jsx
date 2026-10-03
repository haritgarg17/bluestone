import React, { useState } from 'react';
import { Shield, Eye, Download, Lock, CheckCircle2, Clock, MapPin, Building, FileText, ArrowRight, UserCheck } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ClientDashboardPage() {
  const {
    registrations,
    activeClientId,
    setActiveClientId,
    activeClient,
    triggerPayment,
    confirmFinalPayment,
    openProposalViewer
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchLogin = (e) => {
    e.preventDefault();
    const found = registrations.find(
      r => r.id.toLowerCase() === searchQuery.trim().toLowerCase() ||
           r.phone.includes(searchQuery.trim())
    );
    if (found) {
      setActiveClientId(found.id);
      setSearchQuery('');
    } else {
      alert("No registration found with that ID or Phone Number. Try selecting a demo profile below.");
    }
  };

  const handleTriggerFinalPayment = () => {
    if (!activeClient) return;
    triggerPayment({
      title: `Final Payment — ${activeClient.packageName}`,
      amount: activeClient.finalFee,
      registrationId: activeClient.id,
      clientName: activeClient.clientName,
      paymentType: 'final',
      onSuccess: () => {
        confirmFinalPayment(activeClient.id);
      }
    });
  };

  const handleDownloadFullDrawings = () => {
    const link = document.createElement('a');
    link.href = activeClient.proposalUrl || '/sample_blueprint.jpg';
    link.download = `Bluestone_${activeClient.id}_Approved_CAD_Masterplan.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!activeClient) {
    return (
      <div className="container" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h2>No client selected. Please choose a project from below.</h2>
      </div>
    );
  }

  // Milestones progression
  const milestones = [
    { key: 'registered', label: '1. Registration & Brief Lodged', isDone: true },
    { key: 'design_in_progress', label: `2. Drafting at ${activeClient.unitName}`, isDone: true },
    { key: 'proposal_ready', label: '3. Draft Proposal Ready', isDone: activeClient.status === 'proposal_ready' || activeClient.status === 'completed' },
    { key: 'final_payment', label: '4. Final Fee Settlement', isDone: activeClient.finalFeePaid },
    { key: 'completed', label: '5. Master Blueprint CAD Release', isDone: activeClient.finalDownloadReady }
  ];

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#FAF6F0', minHeight: '88vh', padding: '50px 0 80px' }}>
      <div className="container">
        {/* Top Demo Profile Quick-Switcher Bar */}
        <div
          style={{
            backgroundColor: '#0B1B2D',
            borderRadius: '14px',
            padding: '16px 20px',
            color: '#FAF6F0',
            marginBottom: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#D8A24A', fontWeight: 800 }}>
              Client Portal Switcher:
            </span>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {registrations.map((reg) => (
                <button
                  key={reg.id}
                  onClick={() => setActiveClientId(reg.id)}
                  style={{
                    backgroundColor: activeClientId === reg.id ? '#C1662F' : 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(216, 162, 74, 0.3)',
                    color: '#FAF6F0',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  {reg.clientName} ({reg.id} • {reg.status === 'completed' ? 'Paid' : reg.status === 'proposal_ready' ? 'Ready to Review' : 'Drafting'})
                </button>
              ))}
            </div>
          </div>

          {/* Search Lookup */}
          <form onSubmit={handleSearchLogin} style={{ display: 'flex', gap: '8px' }}>
            <input
              type="text"
              placeholder="Search Reg ID / Phone"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid rgba(216, 162, 74, 0.4)',
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#FAF6F0',
                fontSize: '12px',
                width: '180px'
              }}
            />
            <button
              type="submit"
              className="btn-primary"
              style={{ padding: '6px 14px', fontSize: '12px' }}
            >
              Lookup
            </button>
          </form>
        </div>

        {/* Client Welcome Card */}
        <div
          className="luxury-card"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #D5C2AD',
            padding: '32px',
            marginBottom: '32px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span className="navy-badge" style={{ backgroundColor: '#0B1B2D', color: '#FAF6F0' }}>
                  Reg ID: {activeClient.id}
                </span>
                <span style={{ fontSize: '11px', color: '#7D7065' }}>
                  Registered on: {activeClient.regFeeDate}
                </span>
              </div>
              <h1 style={{ fontSize: '28px', color: '#0B1B2D', margin: '4px 0 6px', fontWeight: 700 }}>
                Welcome, {activeClient.clientName}
              </h1>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '13.5px', color: '#584C42', flexWrap: 'wrap' }}>
                <span><MapPin size={14} color="#C1662F" style={{ display: 'inline', marginRight: '4px' }} /> {activeClient.address}, {activeClient.city}, {activeClient.state}</span>
                <span>&bull;</span>
                <span>Plot Size: <strong>{activeClient.plotSize}</strong></span>
              </div>
            </div>

            {/* Studio Unit Card */}
            <div
              style={{
                backgroundColor: '#FAF6F0',
                border: '1.5px solid #D8A24A',
                borderRadius: '12px',
                padding: '16px 20px',
                minWidth: '260px'
              }}
            >
              <span style={{ fontSize: '10.5px', textTransform: 'uppercase', color: '#8B4A2B', fontWeight: 800, letterSpacing: '0.08em' }}>
                Allocated Architectural Unit
              </span>
              <h3 style={{ fontSize: '17px', color: '#0B1B2D', margin: '2px 0 4px', fontWeight: 700 }}>
                {activeClient.unitName}
              </h3>
              <div style={{ fontSize: '12px', color: '#584C42' }}>
                Civil Execution: <strong>Bluestone Buildcon</strong>
              </div>
            </div>
          </div>

          {/* Milestone Status Tracker */}
          <div style={{ marginTop: '36px', paddingTop: '28px', borderTop: '1px solid #EADBCC' }}>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#0B1B2D', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Project Milestone Timeline
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '12px'
              }}
            >
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  style={{
                    backgroundColor: m.isDone ? '#FAF3E7' : '#FAF6F0',
                    border: m.isDone ? '1px solid #C1662F' : '1px solid #EADBCC',
                    borderRadius: '8px',
                    padding: '12px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px'
                  }}
                >
                  {m.isDone ? (
                    <CheckCircle2 size={18} color="#16A34A" style={{ flexShrink: 0 }} />
                  ) : (
                    <Clock size={18} color="#A39688" style={{ flexShrink: 0 }} />
                  )}
                  <span style={{ fontSize: '12px', fontWeight: m.isDone ? 700 : 500, color: m.isDone ? '#0B1B2D' : '#7D7065' }}>
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Interactive Section: Proposal Viewer / Payment / Download */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '28px'
          }}
        >
          {/* Left: Proposal Presentation & Actions */}
          <div
            className="luxury-card"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #D5C2AD',
              padding: '30px'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '20px', color: '#0B1B2D', margin: 0, fontWeight: 700 }}>
                Architectural Drawing Proposal
              </h3>
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: '4px',
                  backgroundColor: activeClient.finalFeePaid ? 'rgba(22,163,74,0.15)' : 'rgba(193,102,47,0.15)',
                  color: activeClient.finalFeePaid ? '#16A34A' : '#C1662F'
                }}
              >
                {activeClient.finalFeePaid ? 'Full Masterplan Unlocked' : 'Watermarked Preview Mode'}
              </span>
            </div>

            {activeClient.proposalUrl ? (
              <div>
                <p style={{ fontSize: '13.5px', color: '#584C42', marginBottom: '16px' }}>
                  Prepared by <strong>{activeClient.unitName}</strong> on {activeClient.proposalDate}.
                  {!activeClient.finalFeePaid && " In view-only mode. Clear final fee to download high-res CAD & municipal set."}
                </p>

                {/* Preview Thumbnail Box with Watermark Badge */}
                <div
                  style={{
                    position: 'relative',
                    height: '240px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    border: '1px solid #D5C2AD',
                    marginBottom: '20px',
                    cursor: 'pointer'
                  }}
                  onClick={() => openProposalViewer(activeClient)}
                >
                  <img
                    src={activeClient.proposalUrl}
                    alt="Proposal Preview"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {!activeClient.finalFeePaid && (
                    <div
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(11,27,45,0.4)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#FAF6F0',
                        gap: '8px'
                      }}
                    >
                      <Lock size={28} color="#D8A24A" />
                      <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                        View Watermarked Proposal
                      </span>
                      <span style={{ fontSize: '11px', color: '#D5C2AD' }}>Click to inspect high-precision floor plans</span>
                    </div>
                  )}
                  {activeClient.finalFeePaid && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '10px',
                        right: '10px',
                        backgroundColor: '#16A34A',
                        color: '#FFFFFF',
                        padding: '4px 10px',
                        borderRadius: '4px',
                        fontSize: '11px',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <CheckCircle2 size={13} /> Unlocked
                    </div>
                  )}
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  <button
                    onClick={() => openProposalViewer(activeClient)}
                    className="btn-secondary"
                    style={{ flex: 1, padding: '12px', fontSize: '13.5px' }}
                  >
                    <Eye size={15} /> Inspect Proposal
                  </button>

                  {activeClient.finalDownloadReady ? (
                    <button
                      onClick={handleDownloadFullDrawings}
                      className="btn-primary"
                      style={{ flex: 1, padding: '12px', fontSize: '13.5px', backgroundColor: '#16A34A', background: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)' }}
                    >
                      <Download size={15} /> Download Full CAD
                    </button>
                  ) : (
                    <button
                      onClick={handleTriggerFinalPayment}
                      className="btn-primary"
                      style={{ flex: 1, padding: '12px', fontSize: '13.5px' }}
                    >
                      <Lock size={15} /> Unlock CAD (₹{activeClient.finalFee?.toLocaleString('en-IN')})
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <div style={{ padding: '36px 16px', textAlign: 'center', backgroundColor: '#FAF6F0', borderRadius: '10px', border: '1px dashed #D5C2AD' }}>
                <Clock size={36} color="#C1662F" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '17px', color: '#0B1B2D', marginBottom: '6px' }}>
                  Architectural Drafting in Progress
                </h4>
                <p style={{ fontSize: '13px', color: '#584C42', maxWidth: '380px', margin: '0 auto' }}>
                  Our project architect at <strong>{activeClient.unitName}</strong> is actively developing your customized 2D spatial layouts and 3D elevations. Once uploaded, your proposal will appear here for review.
                </p>
              </div>
            )}
          </div>

          {/* Right: Commercial Summary & Turnkey Execution Handoff */}
          <div
            className="luxury-card"
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid #D5C2AD',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <h3 style={{ fontSize: '20px', color: '#0B1B2D', marginBottom: '16px', fontWeight: 700 }}>
                Commercial Summary
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px' }}>
                  <span style={{ color: '#7D7065' }}>Selected Package:</span>
                  <strong style={{ color: '#0B1B2D' }}>{activeClient.packageName}</strong>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px' }}>
                  <span style={{ color: '#7D7065' }}>Registration Token (Payment #1):</span>
                  <span style={{ color: '#16A34A', fontWeight: 700 }}>
                    ₹{activeClient.regFeePaid.toLocaleString('en-IN')} (Paid)
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13.5px' }}>
                  <span style={{ color: '#7D7065' }}>Final Release Fee (Payment #2):</span>
                  <span style={{ color: activeClient.finalFeePaid ? '#16A34A' : '#C1662F', fontWeight: 700 }}>
                    ₹{activeClient.finalFee.toLocaleString('en-IN')} {activeClient.finalFeePaid ? '(Paid)' : '(Pending)'}
                  </span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', paddingTop: '12px', borderTop: '1px solid #EADBCC' }}>
                  <strong style={{ color: '#0B1B2D' }}>Total Package Investment:</strong>
                  <strong style={{ color: '#0B1B2D' }}>
                    ₹{(activeClient.regFeePaid + activeClient.finalFee).toLocaleString('en-IN')}
                  </strong>
                </div>
              </div>

              {/* Bluestone Construction Guarantee Box */}
              <div
                style={{
                  backgroundColor: '#FAF3E7',
                  border: '1px solid #D8A24A',
                  borderRadius: '10px',
                  padding: '16px',
                  marginBottom: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <Shield size={16} color="#C1662F" />
                  <strong style={{ fontSize: '13px', color: '#0B1B2D' }}>
                    Next Step: Bluestone Turnkey Construction
                  </strong>
                </div>
                <p style={{ fontSize: '12.5px', color: '#584C42', margin: 0, lineHeight: 1.5 }}>
                  Once final drawings are released, Bluestone Buildcon's civil estimation team will prepare your guaranteed turnkey bill of quantities (BOQ) with scheduled foundation breakdown.
                </p>
              </div>
            </div>

            {!activeClient.finalFeePaid && activeClient.status === 'proposal_ready' && (
              <button
                onClick={handleTriggerFinalPayment}
                className="btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '14.5px' }}
              >
                Complete Payment #2 (₹{activeClient.finalFee?.toLocaleString('en-IN')})
              </button>
            )}

            {activeClient.finalFeePaid && (
              <div
                style={{
                  backgroundColor: 'rgba(22,163,74,0.1)',
                  border: '1px solid #16A34A',
                  color: '#15803D',
                  padding: '12px',
                  borderRadius: '8px',
                  textAlign: 'center',
                  fontSize: '13px',
                  fontWeight: 600
                }}
              >
                <CheckCircle2 size={16} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                Account Settled in Full &bull; Deliverables Active
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
