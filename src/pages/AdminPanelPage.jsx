import React, { useState } from 'react';
import { Shield, Upload, CheckCircle2, User, MapPin, Building, ArrowUpRight, Search, RefreshCw, Filter, FileText } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function AdminPanelPage() {
  const {
    registrations,
    adminUploadProposal,
    adminReassignUnit,
    adminUpdateStatus,
    navigateTo
  } = useApp();

  const [searchTerm, setSearchTerm] = useState('');
  const [filterUnit, setFilterUnit] = useState('all'); // 'all' | 'rs-design' | 'as-home'
  const [selectedRegForUpload, setSelectedRegForUpload] = useState(null);
  const [customNote, setCustomNote] = useState('');

  const filteredRegistrations = registrations.filter(reg => {
    const matchesSearch =
      reg.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      reg.phone.includes(searchTerm) ||
      reg.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesUnit = filterUnit === 'all' || reg.unitId === filterUnit;
    return matchesSearch && matchesUnit;
  });

  const handleUploadProposalSubmit = (id) => {
    adminUploadProposal(id, '/sample_blueprint.jpg', customNote || undefined);
    setSelectedRegForUpload(null);
    setCustomNote('');
  };

  return (
    <div className="animate-fade-in" style={{ backgroundColor: '#FAF6F0', minHeight: '88vh', padding: '50px 0 80px' }}>
      <div className="container">
        {/* Header Admin Banner */}
        <div
          style={{
            backgroundColor: '#0B1B2D',
            color: '#FAF6F0',
            padding: '28px 36px',
            borderRadius: '16px',
            marginBottom: '32px',
            border: '2px solid #D8A24A',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '20px'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Shield size={18} color="#D8A24A" />
              <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.14em', color: '#D8A24A', fontWeight: 800 }}>
                Operations & Directorate Control Portal
              </span>
            </div>
            <h1 style={{ fontSize: '26px', color: '#FFFFFF', margin: '4px 0 6px', fontWeight: 700 }}>
              Bluestone Buildcon Admin Hub
            </h1>
            <p style={{ fontSize: '13.5px', color: '#D5C2AD', margin: 0 }}>
              Manage PAN-India client registrations, supervise drawing proposals from R S Design Studio & A S Home Planner, and control final blueprint releases.
            </p>
          </div>

          {/* Quick Metrics */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '10px 18px', borderRadius: '8px', border: '1px solid rgba(216,162,74,0.3)', textAlign: 'center' }}>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#FAF6F0' }}>{registrations.length}</div>
              <div style={{ fontSize: '11px', color: '#D5C2AD' }}>Total Projects</div>
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '10px 18px', borderRadius: '8px', border: '1px solid rgba(216,162,74,0.3)', textAlign: 'center' }}>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#C1662F' }}>
                {registrations.filter(r => r.unitId === 'rs-design').length}
              </div>
              <div style={{ fontSize: '11px', color: '#D5C2AD' }}>R S Design</div>
            </div>

            <div style={{ backgroundColor: 'rgba(255,255,255,0.08)', padding: '10px 18px', borderRadius: '8px', border: '1px solid rgba(216,162,74,0.3)', textAlign: 'center' }}>
              <div style={{ fontSize: '22px', fontWeight: 800, color: '#D8A24A' }}>
                {registrations.filter(r => r.unitId === 'as-home').length}
              </div>
              <div style={{ fontSize: '11px', color: '#D5C2AD' }}>A S Home</div>
            </div>
          </div>
        </div>

        {/* Filter & Search Controls */}
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #D5C2AD',
            borderRadius: '12px',
            padding: '16px 20px',
            marginBottom: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flex: 1, minWidth: '280px' }}>
            <Search size={18} color="#7D7065" />
            <input
              type="text"
              placeholder="Search by client name, ID, phone number or city..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid #D5C2AD',
                fontSize: '13.5px',
                outline: 'none'
              }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '12.5px', color: '#584C42', fontWeight: 600 }}>Filter by Studio:</span>
            <select
              value={filterUnit}
              onChange={(e) => setFilterUnit(e.target.value)}
              style={{
                padding: '8px 12px',
                borderRadius: '8px',
                border: '1px solid #D5C2AD',
                fontSize: '13px',
                backgroundColor: '#FFFFFF'
              }}
            >
              <option value="all">All Studio Units</option>
              <option value="rs-design">R S Design Studio (North & West)</option>
              <option value="as-home">A S Home Planner (South & East)</option>
            </select>
          </div>
        </div>

        {/* Client Registrations Table / Card Matrix */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {filteredRegistrations.map((reg) => (
            <div
              key={reg.id}
              className="luxury-card"
              style={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #D5C2AD',
                padding: '24px',
                borderRadius: '14px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px', marginBottom: '16px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                    <span className="navy-badge" style={{ backgroundColor: '#0B1B2D', color: '#FAF6F0' }}>
                      {reg.id}
                    </span>
                    <span style={{ fontSize: '12px', color: '#7D7065' }}>
                      Registered: {reg.regFeeDate}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '20px', color: '#0B1B2D', margin: '2px 0 4px', fontWeight: 700 }}>
                    {reg.clientName}
                  </h3>
                  <div style={{ fontSize: '13px', color: '#584C42' }}>
                    Phone: <strong>{reg.phone}</strong> &bull; Location: {reg.city}, {reg.state} &bull; Plot: {reg.plotSize}
                  </div>
                </div>

                {/* Studio Unit Reassignment & Status */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '11px', color: '#7D7065', fontWeight: 600 }}>Assigned Studio:</span>
                    <select
                      value={reg.unitId}
                      onChange={(e) => adminReassignUnit(reg.id, e.target.value)}
                      style={{
                        padding: '4px 8px',
                        borderRadius: '6px',
                        border: '1px solid #C1662F',
                        fontSize: '12px',
                        fontWeight: 700,
                        backgroundColor: '#FAF6F0',
                        color: '#C1662F'
                      }}
                    >
                      <option value="rs-design">R S Design Studio</option>
                      <option value="as-home">A S Home Planner</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '11px', color: '#7D7065', fontWeight: 600 }}>Status:</span>
                    <select
                      value={reg.status}
                      onChange={(e) => adminUpdateStatus(reg.id, e.target.value)}
                      style={{
                        padding: '4px 8px',
                        borderRadius: '6px',
                        border: '1px solid #D5C2AD',
                        fontSize: '12px',
                        fontWeight: 600,
                        backgroundColor: '#FFFFFF',
                        color: reg.status === 'completed' ? '#16A34A' : '#0B1B2D'
                      }}
                    >
                      <option value="registered">Registered</option>
                      <option value="design_in_progress">Design in Progress</option>
                      <option value="proposal_ready">Proposal Ready for Review</option>
                      <option value="completed">Completed & Unlocked</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Requirement & Commercial Data */}
              <div
                style={{
                  backgroundColor: '#FAF6F0',
                  borderRadius: '10px',
                  padding: '14px 18px',
                  marginBottom: '18px',
                  fontSize: '13px',
                  lineHeight: 1.5,
                  border: '1px solid #EADBCC'
                }}
              >
                <div style={{ marginBottom: '6px' }}>
                  <strong style={{ color: '#0B1B2D' }}>Client Brief: </strong>
                  <span style={{ color: '#584C42' }}>{reg.requirements || 'Standard residential layout requirements.'}</span>
                </div>

                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', borderTop: '1px dashed #D5C2AD', paddingTop: '8px', marginTop: '8px' }}>
                  <span>Package: <strong>{reg.packageName}</strong></span>
                  <span>Payment #1: <strong style={{ color: '#16A34A' }}>₹{reg.regFeePaid.toLocaleString('en-IN')} (Paid)</strong></span>
                  <span>Payment #2: <strong style={{ color: reg.finalFeePaid ? '#16A34A' : '#C1662F' }}>₹{reg.finalFee.toLocaleString('en-IN')} {reg.finalFeePaid ? '(Settled)' : '(Pending Client Review)'}</strong></span>
                  <span>CAD Release: <strong style={{ color: reg.finalDownloadReady ? '#16A34A' : '#7D7065' }}>{reg.finalDownloadReady ? 'Active / Downloadable' : 'Protected'}</strong></span>
                </div>
              </div>

              {/* Admin Actions Bar */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                <div style={{ fontSize: '12px', color: '#7D7065' }}>
                  {reg.notes && <span>System Log: {reg.notes}</span>}
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  {/* Upload Proposal Button */}
                  <button
                    onClick={() => setSelectedRegForUpload(selectedRegForUpload === reg.id ? null : reg.id)}
                    style={{
                      background: 'none',
                      border: '1.5px solid #C1662F',
                      color: '#C1662F',
                      padding: '7px 14px',
                      borderRadius: '6px',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                  >
                    <Upload size={14} /> {reg.proposalUrl ? 'Re-Upload Drawing Proposal' : 'Upload Proposal Drawing'}
                  </button>

                  {/* View in Client Portal Button */}
                  <button
                    onClick={() => navigateTo('dashboard', reg.id)}
                    className="btn-navy"
                    style={{ padding: '7px 14px', fontSize: '12.5px' }}
                  >
                    <User size={13} /> View Client View <ArrowUpRight size={13} />
                  </button>
                </div>
              </div>

              {/* Expandable Upload Form */}
              {selectedRegForUpload === reg.id && (
                <div
                  style={{
                    marginTop: '16px',
                    padding: '16px',
                    backgroundColor: '#FAF3E7',
                    border: '1px solid #D8A24A',
                    borderRadius: '8px'
                  }}
                >
                  <h4 style={{ fontSize: '14px', color: '#0B1B2D', marginBottom: '8px' }}>
                    Upload Draft Architectural Proposal Set for {reg.clientName}
                  </h4>
                  <p style={{ fontSize: '12px', color: '#584C42', marginBottom: '12px' }}>
                    This proposal will become viewable in watermarked, view-only mode in the client's dashboard.
                  </p>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <input
                      type="text"
                      placeholder="Add architect notes for client (optional)"
                      value={customNote}
                      onChange={(e) => setCustomNote(e.target.value)}
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: '1px solid #D5C2AD',
                        fontSize: '13px'
                      }}
                    />
                    <button
                      onClick={() => handleUploadProposalSubmit(reg.id)}
                      className="btn-primary"
                      style={{ padding: '8px 16px', fontSize: '13px' }}
                    >
                      Publish Proposal to Client
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
