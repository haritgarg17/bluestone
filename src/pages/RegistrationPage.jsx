import React, { useState } from 'react';
import { Check, ArrowRight, ArrowLeft, Upload, ShieldCheck, MapPin, Compass, Sparkles, Building2, UserCheck, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { INDIAN_STATES, SERVICE_PACKAGES } from '../data/initialData';

export default function RegistrationPage() {
  const { resolveStudioUnit, registerNewProject, triggerPayment, navigateTo } = useApp();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    clientName: '',
    phone: '',
    address: '',
    city: '',
    state: 'Maharashtra',
    plotSize: '3,000 Sq. Ft. (30 x 100 ft)',
    plotImage: null,
    plotImagePreview: null,
    requirements: '',
    packageId: 'executive'
  });

  const [createdRegistration, setCreatedRegistration] = useState(null);

  // Dynamic Territory Studio Routing
  const routedStudio = resolveStudioUnit(formData.state);
  const selectedPkg = SERVICE_PACKAGES.find(p => p.id === formData.packageId) || SERVICE_PACKAGES[1];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({
          ...prev,
          plotImage: file.name,
          plotImagePreview: event.target?.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleNext = () => {
    if (currentStep === 1) {
      if (!formData.clientName || !formData.phone || !formData.address) {
        alert("Please provide your name, contact phone number, and address.");
        return;
      }
    }
    if (currentStep === 2) {
      if (!formData.plotSize) {
        alert("Please specify your plot dimensions / size.");
        return;
      }
    }
    setCurrentStep(prev => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleTriggerRegistrationPayment = () => {
    // Open Razorpay Modal for Payment #1
    triggerPayment({
      title: `Registration Fee — ${selectedPkg.name}`,
      amount: selectedPkg.regFee,
      registrationId: 'NEW-REGISTRATION',
      clientName: formData.clientName,
      paymentType: 'reg',
      onSuccess: () => {
        const newRecord = registerNewProject(formData);
        setCreatedRegistration(newRecord);
        setCurrentStep(5); // Confirmation state
      }
    });
  };

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#FAF6F0', minHeight: '85vh', padding: '60px 0 80px' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        {/* Title Header */}
        <div style={{ textAlign: 'center', marginBottom: '36px' }}>
          <div className="eyebrow-badge" style={{ marginBottom: '12px' }}>
            <UserCheck size={13} /> Project Onboarding & Studio Allocation
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: '#0B1B2D', marginBottom: '10px' }}>
            Register Your Project
          </h1>
          <p style={{ fontSize: '15.5px', color: '#584C42' }}>
            Follow the 4-step wizard to register your plot, receive territorial architectural assignment, and initiate drafting.
          </p>
        </div>

        {/* Wizard Card */}
        <div
          className="luxury-card"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #D5C2AD',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 16px 40px rgba(11,27,45,0.08)'
          }}
        >
          {/* Progress Indicator Steps */}
          {currentStep <= 4 && (
            <div
              style={{
                backgroundColor: '#0B1B2D',
                padding: '20px 24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '8px',
                borderBottom: '2px solid #D8A24A'
              }}
            >
              {[
                { step: 1, label: "Client & Location" },
                { step: 2, label: "Plot Details" },
                { step: 3, label: "Brief & Package" },
                { step: 4, label: "Payment #1" }
              ].map((s) => {
                const isActive = currentStep === s.step;
                const isPassed = currentStep > s.step;
                return (
                  <div
                    key={s.step}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      gap: '4px'
                    }}
                  >
                    <div
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        backgroundColor: isPassed ? '#16A34A' : isActive ? '#C1662F' : 'rgba(255,255,255,0.12)',
                        color: '#FFFFFF',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 700,
                        border: isActive ? '2px solid #D8A24A' : 'none'
                      }}
                    >
                      {isPassed ? <Check size={14} /> : s.step}
                    </div>
                    <span
                      style={{
                        fontSize: '11px',
                        color: isActive ? '#FAF6F0' : '#D5C2AD',
                        fontWeight: isActive ? 700 : 500
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          )}

          {/* Form Content Body */}
          <div style={{ padding: '36px' }}>
            {/* STEP 1: Name, Contact, Address & Auto-Routing */}
            {currentStep === 1 && (
              <div className="animate-fade-in">
                <h3 style={{ fontSize: '20px', color: '#0B1B2D', marginBottom: '8px', fontWeight: 700 }}>
                  Step 1: Client & Project Location
                </h3>
                <p style={{ fontSize: '13.5px', color: '#7D7065', marginBottom: '24px' }}>
                  Your project's geographical address automatically tags drafting to our specialized regional architectural arm.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                      1. Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vikramaditya Rathore"
                      value={formData.clientName}
                      onChange={(e) => handleInputChange('clientName', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        border: '1px solid #D5C2AD',
                        fontSize: '14px',
                        backgroundColor: '#FAF6F0'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                      2. Contact Number (WhatsApp Enabled) *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98200 12345"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: '8px',
                        border: '1px solid #D5C2AD',
                        fontSize: '14px',
                        backgroundColor: '#FAF6F0'
                      }}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                    3. Project Plot Address & Location *
                  </label>
                  <input
                    type="text"
                    placeholder="Plot / Survey No., Street, Sector or Village Landmark"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid #D5C2AD',
                      fontSize: '14px',
                      backgroundColor: '#FAF6F0',
                      marginBottom: '12px'
                    }}
                  />

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', color: '#584C42', marginBottom: '4px' }}>City / Town</label>
                      <input
                        type="text"
                        placeholder="e.g. Jaipur, Pune, Bengaluru"
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '13.5px' }}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '12.5px', color: '#584C42', marginBottom: '4px' }}>State / Territory (Drives Studio Routing)</label>
                      <select
                        value={formData.state}
                        onChange={(e) => handleInputChange('state', e.target.value)}
                        style={{ width: '100%', padding: '10px 12px', borderRadius: '8px', border: '1px solid #D5C2AD', fontSize: '13.5px', backgroundColor: '#FFFFFF' }}
                      >
                        {INDIAN_STATES.map((s) => (
                          <option key={s.name} value={s.name}>
                            {s.name} ({s.zone} Zone)
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* Live Dynamic Routing Notification Badge */}
                <div
                  style={{
                    backgroundColor: '#FAF3E7',
                    border: '1.5px solid #D8A24A',
                    borderRadius: '12px',
                    padding: '16px 20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '24px'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Compass size={24} color="#C1662F" />
                    <div>
                      <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', color: '#8B4A2B', fontWeight: 800 }}>
                        Automatic Territorial Studio Routing
                      </span>
                      <h4 style={{ fontSize: '16px', color: '#0B1B2D', margin: '2px 0 0', fontWeight: 700 }}>
                        Project Allocated To: <span style={{ color: '#C1662F' }}>{routedStudio.unitName}</span>
                      </h4>
                      <p style={{ fontSize: '12px', color: '#584C42', margin: '2px 0 0' }}>
                        {routedStudio.reason}. Post-drawing execution will be managed by <strong>Bluestone Buildcon</strong>.
                      </p>
                    </div>
                  </div>

                  <span className="navy-badge" style={{ backgroundColor: '#0B1B2D', color: '#FAF6F0' }}>
                    {routedStudio.zone} Zone
                  </span>
                </div>
              </div>
            )}

            {/* STEP 2: Plot Size, Topography, File Upload */}
            {currentStep === 2 && (
              <div className="animate-fade-in">
                <h3 style={{ fontSize: '20px', color: '#0B1B2D', marginBottom: '8px', fontWeight: 700 }}>
                  Step 2: Plot Specifications & Land Photos
                </h3>
                <p style={{ fontSize: '13.5px', color: '#7D7065', marginBottom: '24px' }}>
                  Provide plot measurements and optionally attach demarcation papers, sketches, or site photos.
                </p>

                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                    4. Plot Dimensions / Size *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 40 x 60 ft (2,400 sq.ft.) or 1,200 sq. yards"
                    value={formData.plotSize}
                    onChange={(e) => handleInputChange('plotSize', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid #D5C2AD',
                      fontSize: '14px',
                      backgroundColor: '#FAF6F0'
                    }}
                  />
                  <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
                    {['30 x 50 ft (1,500 sq.ft.)', '40 x 60 ft (2,400 sq.ft.)', '50 x 80 ft (4,000 sq.ft.)', '1 Acre Farmhouse'].map(preset => (
                      <button
                        key={preset}
                        type="button"
                        onClick={() => handleInputChange('plotSize', preset)}
                        style={{
                          fontSize: '11px',
                          background: 'none',
                          border: '1px solid #D5C2AD',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          cursor: 'pointer',
                          color: '#584C42'
                        }}
                      >
                        {preset}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 5. Plot Image Upload */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                    5. Plot Image or Site Layout Sketch (Optional - JPG/PNG/PDF)
                  </label>

                  <label
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '32px 20px',
                      border: '2px dashed #C1662F',
                      borderRadius: '12px',
                      backgroundColor: '#FAF6F0',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <Upload size={32} color="#C1662F" style={{ marginBottom: '10px' }} />
                    <span style={{ fontSize: '14px', fontWeight: 600, color: '#0B1B2D' }}>
                      {formData.plotImage ? `Selected: ${formData.plotImage}` : 'Click or Drag Plot Plan / Site Photo Here'}
                    </span>
                    <span style={{ fontSize: '12px', color: '#7D7065', marginTop: '4px' }}>
                      Accepts JPG, PNG, or PDF up to 25MB
                    </span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleFileUpload}
                      style={{ display: 'none' }}
                    />
                  </label>

                  {formData.plotImagePreview && (
                    <div style={{ marginTop: '14px', display: 'flex', alignItems: 'center', gap: '14px', padding: '10px', backgroundColor: '#FFFFFF', borderRadius: '8px', border: '1px solid #EADBCC' }}>
                      <img
                        src={formData.plotImagePreview}
                        alt="Plot Preview"
                        style={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '6px' }}
                      />
                      <div style={{ fontSize: '12.5px', color: '#0B1B2D' }}>
                        <strong>Preview Loaded:</strong> {formData.plotImage}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* STEP 3: Requirements & Package Selection */}
            {currentStep === 3 && (
              <div className="animate-fade-in">
                <h3 style={{ fontSize: '20px', color: '#0B1B2D', marginBottom: '8px', fontWeight: 700 }}>
                  Step 3: Architectural Brief & Package Tier
                </h3>
                <p style={{ fontSize: '13.5px', color: '#7D7065', marginBottom: '24px' }}>
                  Describe your dream home layout, number of floors, and select your drawing deliverable scope.
                </p>

                {/* 6. Requirements */}
                <div style={{ marginBottom: '24px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '6px' }}>
                    6. Architectural Requirements & Spatial Vision *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="e.g. 4BHK G+1 Duplex, north-facing Vastu puja room, double height living room, open kitchen, 2 car parking porch, rooftop garden."
                    value={formData.requirements}
                    onChange={(e) => handleInputChange('requirements', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: '8px',
                      border: '1px solid #D5C2AD',
                      fontSize: '14px',
                      backgroundColor: '#FAF6F0',
                      lineHeight: 1.5
                    }}
                  />
                </div>

                {/* 7. Service Package Card Selector */}
                <div style={{ marginBottom: '20px' }}>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0B1B2D', marginBottom: '10px' }}>
                    7. Select Service Package Tier
                  </label>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {SERVICE_PACKAGES.map((pkg) => {
                      const isSelected = formData.packageId === pkg.id;
                      return (
                        <div
                          key={pkg.id}
                          onClick={() => handleInputChange('packageId', pkg.id)}
                          style={{
                            border: isSelected ? '2px solid #C1662F' : '1px solid #EADBCC',
                            borderRadius: '12px',
                            padding: '16px 20px',
                            backgroundColor: isSelected ? '#FAF3E7' : '#FFFFFF',
                            cursor: 'pointer',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            transition: 'all 0.15s ease'
                          }}
                        >
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <span style={{ fontSize: '15px', fontWeight: 700, color: '#0B1B2D' }}>
                                {pkg.name}
                              </span>
                              {pkg.popular && (
                                <span style={{ fontSize: '9.5px', background: '#C1662F', color: '#FFFFFF', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                                  Popular
                                </span>
                              )}
                            </div>
                            <div style={{ fontSize: '12.5px', color: '#584C42', marginTop: '2px' }}>
                              {pkg.tagline}
                            </div>
                          </div>

                          <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: '11px', color: '#7D7065' }}>Registration Token (#1)</div>
                            <strong style={{ fontSize: '17px', color: '#C1662F' }}>
                              ₹{pkg.regFee.toLocaleString('en-IN')}
                            </strong>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* STEP 4: Review & Payment #1 Execution */}
            {currentStep === 4 && (
              <div className="animate-fade-in">
                <h3 style={{ fontSize: '20px', color: '#0B1B2D', marginBottom: '8px', fontWeight: 700 }}>
                  Step 4: Review & Registration Fee Payment
                </h3>
                <p style={{ fontSize: '13.5px', color: '#7D7065', marginBottom: '24px' }}>
                  Verify your project brief. Paying the registration token triggers immediate allocation to {routedStudio.unitName}.
                </p>

                {/* Review Matrix Card */}
                <div
                  style={{
                    backgroundColor: '#FAF6F0',
                    border: '1px solid #EADBCC',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '28px'
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
                    <div>
                      <span style={{ fontSize: '11px', color: '#7D7065', textTransform: 'uppercase' }}>Client Name</span>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#0B1B2D' }}>{formData.clientName}</div>
                    </div>

                    <div>
                      <span style={{ fontSize: '11px', color: '#7D7065', textTransform: 'uppercase' }}>Contact Number</span>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#0B1B2D' }}>{formData.phone}</div>
                    </div>

                    <div>
                      <span style={{ fontSize: '11px', color: '#7D7065', textTransform: 'uppercase' }}>Location & State</span>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#0B1B2D' }}>{formData.city}, {formData.state}</div>
                    </div>

                    <div>
                      <span style={{ fontSize: '11px', color: '#7D7065', textTransform: 'uppercase' }}>Assigned Design Studio</span>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: '#C1662F' }}>{routedStudio.unitName}</div>
                    </div>

                    <div>
                      <span style={{ fontSize: '11px', color: '#7D7065', textTransform: 'uppercase' }}>Plot Size</span>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#0B1B2D' }}>{formData.plotSize}</div>
                    </div>

                    <div>
                      <span style={{ fontSize: '11px', color: '#7D7065', textTransform: 'uppercase' }}>Selected Package</span>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#0B1B2D' }}>{selectedPkg.name}</div>
                    </div>
                  </div>

                  {/* Pricing Breakdown */}
                  <div style={{ borderTop: '1px dashed #D5C2AD', paddingTop: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontSize: '11.5px', textTransform: 'uppercase', color: '#C1662F', fontWeight: 800 }}>
                        8. Registration Fee (Payment #1 Due Now)
                      </div>
                      <div style={{ fontSize: '12px', color: '#7D7065' }}>
                        Balance ₹{selectedPkg.finalFee.toLocaleString('en-IN')} payable only upon proposal review
                      </div>
                    </div>

                    <div style={{ fontSize: '26px', fontWeight: 800, color: '#0B1B2D', fontFamily: 'var(--font-sans)' }}>
                      ₹{selectedPkg.regFee.toLocaleString('en-IN')}
                    </div>
                  </div>
                </div>

                {/* Razorpay Trigger Action */}
                <button
                  onClick={handleTriggerRegistrationPayment}
                  className="btn-primary"
                  style={{ width: '100%', padding: '16px', fontSize: '16px', fontWeight: 700 }}
                >
                  <ShieldCheck size={18} /> Pay ₹{selectedPkg.regFee.toLocaleString('en-IN')} via Razorpay & Submit
                </button>
              </div>
            )}

            {/* STEP 5: Confirmation State */}
            {currentStep === 5 && createdRegistration && (
              <div className="animate-fade-in" style={{ textAlign: 'center', padding: '20px 10px' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: '#16A34A',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}
                >
                  <Check size={36} />
                </div>

                <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#C1662F', fontWeight: 800 }}>
                  Project Registration Confirmed
                </span>
                <h2 style={{ fontSize: '26px', color: '#0B1B2D', margin: '6px 0 10px' }}>
                  Welcome to Bluestone Buildcon, {createdRegistration.clientName}!
                </h2>
                <p style={{ fontSize: '15px', color: '#584C42', maxWidth: '600px', margin: '0 auto 24px' }}>
                  Your payment of <strong>₹{createdRegistration.regFeePaid.toLocaleString('en-IN')}</strong> has been successfully credited via Razorpay. Your project has been routed to <strong>{createdRegistration.unitName}</strong>.
                </p>

                {/* Reference ID Pill */}
                <div
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#0B1B2D',
                    color: '#FAF6F0',
                    padding: '12px 28px',
                    borderRadius: '10px',
                    border: '1px solid #D8A24A',
                    marginBottom: '32px'
                  }}
                >
                  <div style={{ fontSize: '11px', color: '#D5C2AD', textTransform: 'uppercase' }}>Your Registration ID</div>
                  <div style={{ fontSize: '24px', fontWeight: 800, color: '#D8A24A', letterSpacing: '0.08em' }}>
                    {createdRegistration.id}
                  </div>
                </div>

                <div style={{ backgroundColor: '#FAF6F0', border: '1px dashed #D5C2AD', borderRadius: '10px', padding: '16px 20px', maxWidth: '600px', margin: '0 auto 28px', fontSize: '13.5px', color: '#584C42', lineHeight: 1.5 }}>
                  A designated project architect from <strong>{createdRegistration.unitName}</strong> has been allocated to your plot and will contact you directly on <strong>{createdRegistration.phone}</strong> within 2 business hours with your initial spatial zoning draft.
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => navigateTo('home')}
                    className="btn-primary"
                    style={{ padding: '14px 30px', fontSize: '14.5px' }}
                  >
                    Return to Homepage
                  </button>

                  <button
                    onClick={() => navigateTo('portfolio')}
                    className="btn-secondary"
                    style={{ padding: '14px 24px', fontSize: '14.5px' }}
                  >
                    Explore Design Portfolio <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* Navigation Buttons for Steps 1-3 */}
            {currentStep <= 3 && (
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '36px', paddingTop: '20px', borderTop: '1px solid #EADBCC' }}>
                {currentStep > 1 ? (
                  <button
                    onClick={handleBack}
                    className="btn-secondary"
                    style={{ padding: '10px 20px', fontSize: '13.5px' }}
                  >
                    <ArrowLeft size={14} /> Previous
                  </button>
                ) : <div />}

                <button
                  onClick={handleNext}
                  className="btn-primary"
                  style={{ padding: '12px 28px', fontSize: '14px' }}
                >
                  Next Step <ArrowRight size={14} />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
