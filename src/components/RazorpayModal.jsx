import React, { useState } from 'react';
import { X, ShieldCheck, QrCode, CreditCard, Landmark, Smartphone, CheckCircle, Loader2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RazorpayModal({ modalConfig, onClose }) {
  const { isOpen, title, amount, registrationId, clientName, paymentType, onSuccess } = modalConfig;
  const [selectedMethod, setSelectedMethod] = useState('upi');
  const [upiId, setUpiId] = useState('bluestone.client@okaxis');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSimulatePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // fallback
      }
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        if (onSuccess) onSuccess();
      }, 1400);
    }, 1200);
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(11, 27, 45, 0.72)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px'
      }}
    >
      <div
        className="luxury-card"
        style={{
          width: '100%',
          maxWidth: '520px',
          backgroundColor: '#FFFFFF',
          borderRadius: '16px',
          border: '1px solid #D5C2AD',
          boxShadow: '0 25px 60px rgba(11, 27, 45, 0.3)',
          overflow: 'hidden'
        }}
      >
        {/* Gateway Header */}
        <div
          style={{
            backgroundColor: '#0B1B2D',
            color: '#FFFFFF',
            padding: '20px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderBottom: '2px solid #D8A24A'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ width: '44px', height: '44px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#FFFFFF', padding: '2px', flexShrink: 0 }}>
              <img src="/bluestone_logo.jpg" alt="Bluestone Buildcon" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.16em', color: '#D8A24A', fontWeight: 800 }}>
                  Razorpay Checkout Gateway
                </span>
                <span style={{ fontSize: '9px', background: 'rgba(216,162,74,0.2)', padding: '2px 6px', borderRadius: '4px', color: '#FAF6F0' }}>
                  Secure 256-bit
                </span>
              </div>
              <h3 style={{ fontSize: '18px', color: '#FFFFFF', margin: '2px 0 0', fontWeight: 700 }}>
                Bluestone Buildcon
              </h3>
              <p style={{ fontSize: '12px', color: '#D5C2AD', margin: 0 }}>
                Ref: <strong style={{ color: '#FAF6F0' }}>{registrationId || 'BB-NEW'}</strong>
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div style={{ fontSize: '11px', color: '#D5C2AD', textTransform: 'uppercase' }}>Amount to Pay</div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#FAF6F0', fontFamily: 'var(--font-sans)' }}>
              ₹{Number(amount || 0).toLocaleString('en-IN')}
            </div>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: '#FAF6F0',
              cursor: 'pointer',
              marginLeft: '12px',
              padding: '4px'
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Gateway Body */}
        <div style={{ padding: '24px' }}>
          {isSuccess ? (
            <div style={{ textAlign: 'center', padding: '36px 12px' }}>
              <CheckCircle size={64} color="#16A34A" style={{ margin: '0 auto 16px' }} />
              <h3 style={{ fontSize: '20px', color: '#0B1B2D', marginBottom: '8px' }}>
                Payment Successfully Verified!
              </h3>
              <p style={{ fontSize: '14px', color: '#584C42', marginBottom: '16px' }}>
                Transaction Reference: <strong style={{ color: '#C1662F' }}>RZP_{Math.random().toString(36).substring(2, 9).toUpperCase()}</strong>
              </p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#15803D' }}>
                <ShieldCheck size={16} /> Instant Confirmation Logged with Bluestone Core
              </div>
            </div>
          ) : isProcessing ? (
            <div style={{ textAlign: 'center', padding: '48px 16px' }}>
              <Loader2 size={48} color="#C1662F" className="animate-spin" style={{ margin: '0 auto 18px' }} />
              <h4 style={{ fontSize: '18px', color: '#0B1B2D', marginBottom: '8px' }}>
                Connecting to Banking Network...
              </h4>
              <p style={{ fontSize: '13.5px', color: '#7D7065' }}>
                Please do not refresh or press back. Authorizing ₹{Number(amount).toLocaleString('en-IN')}.
              </p>
            </div>
          ) : (
            <>
              {/* Payment Purpose Banner */}
              <div
                style={{
                  backgroundColor: '#FAF6F0',
                  border: '1px solid #EADBCC',
                  borderRadius: '8px',
                  padding: '12px 16px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', color: '#C1662F', fontWeight: 700 }}>
                    {paymentType === 'reg' ? 'Stage 1: Client Project Registration Fee' : 'Stage 2: Final Blueprint Release Payment'}
                  </div>
                  <div style={{ fontSize: '13.5px', fontWeight: 600, color: '#0B1B2D' }}>
                    {title || 'Architectural Services Retainer'}
                  </div>
                </div>
                <div style={{ fontSize: '12px', color: '#584C42', fontWeight: 500 }}>
                  Client: {clientName || 'Valued Client'}
                </div>
              </div>

              {/* Payment Method Selector */}
              <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
                {[
                  { id: 'upi', label: 'UPI / QR Code', icon: Smartphone },
                  { id: 'card', label: 'Cards (Debit/Credit)', icon: CreditCard },
                  { id: 'netbanking', label: 'NetBanking', icon: Landmark }
                ].map((tab) => {
                  const Icon = tab.icon;
                  const active = selectedMethod === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedMethod(tab.id)}
                      style={{
                        flex: 1,
                        padding: '10px 8px',
                        border: active ? '1.5px solid #C1662F' : '1px solid #EADBCC',
                        borderRadius: '8px',
                        backgroundColor: active ? '#FAF6F0' : '#FFFFFF',
                        color: active ? '#C1662F' : '#584C42',
                        fontWeight: 600,
                        fontSize: '12px',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <Icon size={18} />
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Selected Method Details */}
              {selectedMethod === 'upi' && (
                <div style={{ backgroundColor: '#FDFBF7', border: '1px dashed #D5C2AD', borderRadius: '10px', padding: '16px', textAlign: 'center', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                    <QrCode size={40} color="#0B1B2D" />
                    <div style={{ textAlign: 'left' }}>
                      <div style={{ fontSize: '12px', fontWeight: 700, color: '#0B1B2D' }}>Scan & Pay with Any UPI App</div>
                      <div style={{ fontSize: '11px', color: '#7D7065' }}>Google Pay, PhonePe, Paytm, BHIM</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="username@upi"
                      style={{
                        flex: 1,
                        padding: '10px 14px',
                        borderRadius: '8px',
                        border: '1px solid #D5C2AD',
                        fontSize: '13px',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>
              )}

              {selectedMethod === 'card' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <input
                    type="text"
                    defaultValue="4532 •••• •••• 8820"
                    placeholder="Card Number"
                    style={{ padding: '10px 14px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '13px' }}
                  />
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input
                      type="text"
                      defaultValue="08/29"
                      placeholder="MM/YY"
                      style={{ flex: 1, padding: '10px 14px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '13px' }}
                    />
                    <input
                      type="password"
                      defaultValue="•••"
                      placeholder="CVV"
                      style={{ width: '90px', padding: '10px 14px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '13px' }}
                    />
                  </div>
                </div>
              )}

              {selectedMethod === 'netbanking' && (
                <div style={{ marginBottom: '20px' }}>
                  <select
                    defaultValue="hdfc"
                    style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '13px', backgroundColor: '#FFFFFF' }}
                  >
                    <option value="hdfc">HDFC Bank</option>
                    <option value="icici">ICICI Bank</option>
                    <option value="sbi">State Bank of India</option>
                    <option value="axis">Axis Bank</option>
                    <option value="kotak">Kotak Mahindra Bank</option>
                  </select>
                </div>
              )}

              {/* Pay Button */}
              <button
                onClick={handleSimulatePayment}
                className="btn-primary"
                style={{ width: '100%', padding: '14px', fontSize: '15px', fontWeight: 700 }}
              >
                Pay ₹{Number(amount).toLocaleString('en-IN')} Securely
              </button>

              {/* Footer Trust Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '14px',
                  marginTop: '16px',
                  fontSize: '11px',
                  color: '#7D7065'
                }}
              >
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                  <ShieldCheck size={14} color="#16A34A" /> RBI Authorized
                </span>
                <span>•</span>
                <span>PCI-DSS Level 1</span>
                <span>•</span>
                <span>Instant Receipt</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
