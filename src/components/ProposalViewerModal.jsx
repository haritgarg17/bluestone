import React, { useState } from 'react';
import { X, Lock, Download, CheckCircle, ShieldAlert, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function ProposalViewerModal() {
  const { proposalViewer, closeProposalViewer, triggerPayment, confirmFinalPayment } = useApp();
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!proposalViewer.isOpen || !proposalViewer.registration) return null;

  const reg = proposalViewer.registration;
  const isPaid = reg.finalFeePaid;

  const handlePayFinal = () => {
    triggerPayment({
      title: `Final Drawing Release — ${reg.packageName}`,
      amount: reg.finalFee,
      registrationId: reg.id,
      clientName: reg.clientName,
      paymentType: 'final',
      onSuccess: () => {
        confirmFinalPayment(reg.id);
      }
    });
  };

  const handleDownloadUnlocked = () => {
    // Generate a downloadable simulated CAD/PDF blueprint package
    const link = document.createElement('a');
    link.href = reg.proposalUrl || '/sample_blueprint.jpg';
    link.download = `Bluestone_${reg.id}_Approved_Master_Drawings.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(11, 27, 45, 0.88)',
        backdropFilter: 'blur(10px)',
        zIndex: 9990,
        display: 'flex',
        flexDirection: 'column',
        padding: '16px'
      }}
    >
      {/* Top Controls Header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 20px',
          backgroundColor: '#0B1B2D',
          borderRadius: '12px 12px 0 0',
          borderBottom: '1px solid rgba(216, 162, 74, 0.3)',
          color: '#FAF6F0'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#D8A24A', fontWeight: 700 }}>
                {reg.unitName}
              </span>
              <span style={{ fontSize: '10px', background: isPaid ? 'rgba(22, 163, 74, 0.2)' : 'rgba(193, 102, 47, 0.25)', color: isPaid ? '#4ADE80' : '#FDBA74', padding: '2px 8px', borderRadius: '4px' }}>
                {isPaid ? 'Unlocked Master Drawings' : 'Protected Draft Proposal (View-Only)'}
              </span>
            </div>
            <h2 style={{ fontSize: '17px', margin: '2px 0 0', color: '#FFFFFF', fontWeight: 600 }}>
              Proposal: {reg.clientName} • {reg.plotSize}
            </h2>
          </div>
        </div>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* Zoom controls */}
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: '8px', padding: '2px' }}>
            <button
              onClick={() => setZoomLevel(prev => Math.max(0.8, prev - 0.2))}
              style={{ background: 'none', border: 'none', color: '#FAF6F0', padding: '6px', cursor: 'pointer' }}
              title="Zoom Out"
            >
              <ZoomOut size={16} />
            </button>
            <span style={{ fontSize: '11px', padding: '0 6px', color: '#D5C2AD' }}>{Math.round(zoomLevel * 100)}%</span>
            <button
              onClick={() => setZoomLevel(prev => Math.min(1.8, prev + 0.2))}
              style={{ background: 'none', border: 'none', color: '#FAF6F0', padding: '6px', cursor: 'pointer' }}
              title="Zoom In"
            >
              <ZoomIn size={16} />
            </button>
          </div>

          {/* Pay or Download button */}
          {!isPaid ? (
            <button
              onClick={handlePayFinal}
              className="btn-primary"
              style={{ padding: '8px 16px', fontSize: '13px' }}
            >
              <Lock size={14} /> Pay Final ₹{reg.finalFee?.toLocaleString('en-IN')} to Unlock Download
            </button>
          ) : (
            <button
              onClick={handleDownloadUnlocked}
              className="btn-primary"
              style={{ padding: '8px 16px', fontSize: '13px', backgroundColor: '#16A34A', background: 'linear-gradient(135deg, #16A34A 0%, #15803D 100%)' }}
            >
              <Download size={14} /> Download High-Res Blueprint CAD/PDF
            </button>
          )}

          <button
            onClick={closeProposalViewer}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: 'none',
              borderRadius: '8px',
              color: '#FAF6F0',
              padding: '8px',
              cursor: 'pointer'
            }}
          >
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Viewer Canvas Container */}
      <div
        style={{
          flex: 1,
          backgroundColor: '#1E1A16',
          position: 'relative',
          overflow: 'auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          userSelect: 'none'
        }}
        onContextMenu={(e) => {
          if (!isPaid) {
            e.preventDefault();
            alert("Right-click and downloads are protected until final payment is completed.");
          }
        }}
      >
        <div
          style={{
            position: 'relative',
            maxWidth: '1100px',
            width: '100%',
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'center center',
            transition: 'transform 0.2s ease',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
            borderRadius: '4px',
            overflow: 'hidden'
          }}
        >
          {/* Blueprint Image */}
          <img
            src={reg.proposalUrl || '/sample_blueprint.jpg'}
            alt="Architectural Blueprint Drawing Proposal"
            style={{
              width: '100%',
              display: 'block',
              pointerEvents: isPaid ? 'auto' : 'none'
            }}
          />

          {/* Heavy Diagonal Watermark if UNPAID */}
          {!isPaid && (
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                pointerEvents: 'none',
                overflow: 'hidden'
              }}
            >
              {[1, 2, 3, 4].map((n) => (
                <div
                  key={n}
                  style={{
                    transform: 'rotate(-25deg)',
                    fontSize: '28px',
                    fontWeight: 900,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'rgba(193, 102, 47, 0.42)',
                    textShadow: '0 0 10px rgba(255,255,255,0.7)',
                    whiteSpace: 'nowrap',
                    fontFamily: 'var(--font-sans)',
                    border: '3px dashed rgba(193, 102, 47, 0.45)',
                    padding: '8px 24px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(250, 246, 240, 0.15)'
                  }}
                >
                  DRAFT PROPOSAL • VIEW ONLY • UNPAID PREVIEW • {reg.unitName}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Floating Notice Bar if unpaid */}
        {!isPaid && (
          <div
            style={{
              position: 'fixed',
              bottom: '32px',
              backgroundColor: 'rgba(11, 27, 45, 0.95)',
              border: '1px solid #D8A24A',
              color: '#FAF6F0',
              padding: '12px 24px',
              borderRadius: '999px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
              zIndex: 10000
            }}
          >
            <ShieldAlert size={18} color="#D8A24A" />
            <span style={{ fontSize: '13px' }}>
              Watermarked view-only mode. Ready to proceed? Clear Final Payment (₹{reg.finalFee?.toLocaleString('en-IN')}) to download printable CAD & PDF.
            </span>
            <button
              onClick={handlePayFinal}
              className="btn-primary"
              style={{ padding: '6px 16px', fontSize: '12px' }}
            >
              Pay Now
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
