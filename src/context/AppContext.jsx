import React, { createContext, useContext, useState, useEffect } from 'react';
import { INITIAL_REGISTRATIONS, INDIAN_STATES, SERVICE_PACKAGES } from '../data/initialData';

const AppContext = createContext(null);

const STORAGE_KEY_REGISTRATIONS = 'bluestone_registrations_v1';
const STORAGE_KEY_ACTIVE_CLIENT = 'bluestone_active_client_v1';

export function AppProvider({ children }) {
  const [currentPage, setCurrentPage] = useState('home');
  const [registrations, setRegistrations] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_REGISTRATIONS);
      return saved ? JSON.parse(saved) : INITIAL_REGISTRATIONS;
    } catch {
      return INITIAL_REGISTRATIONS;
    }
  });

  const [activeClientId, setActiveClientId] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY_ACTIVE_CLIENT);
      return saved || 'BB-2026-0493'; // Default to the proposal ready demo client
    } catch {
      return 'BB-2026-0493';
    }
  });

  // Payment Modal State (Razorpay flow)
  const [paymentModal, setPaymentModal] = useState({
    isOpen: false,
    title: '',
    amount: 0,
    registrationId: '',
    paymentType: 'reg', // 'reg' | 'final'
    clientName: '',
    onSuccess: null
  });

  // Proposal Viewer Modal State (watermarked preview)
  const [proposalViewer, setProposalViewer] = useState({
    isOpen: false,
    registration: null
  });

  // Global Toast
  const [toast, setToast] = useState(null);

  // Sync to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_REGISTRATIONS, JSON.stringify(registrations));
    } catch (e) {
      console.error("Failed to save to localStorage", e);
    }
  }, [registrations]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ACTIVE_CLIENT, activeClientId);
    } catch (e) {
      console.error("Failed to save active client", e);
    }
  }, [activeClientId]);

  const showToast = (message, type = 'success') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 4500);
  };

  const navigateTo = (page, param) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (param && page === 'dashboard') {
      setActiveClientId(param);
    }
  };

  // Automated Unit Determination based on State
  const resolveStudioUnit = (stateName) => {
    const match = INDIAN_STATES.find(s => s.name.toLowerCase() === (stateName || '').toLowerCase());
    if (match && match.unitId === 'as-home') {
      return {
        unitId: 'as-home',
        unitName: 'A S Home Planner',
        zone: match.zone,
        reason: `${stateName} falls under South, East & Central Zone`
      };
    }
    // Default or North/West
    return {
      unitId: 'rs-design',
      unitName: 'R S Design Studio',
      zone: match ? match.zone : 'North & West',
      reason: `${stateName || 'Default Territory'} falls under North & West Zone`
    };
  };

  // Add new client registration
  const registerNewProject = (formData) => {
    const newId = `BB-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const unitInfo = resolveStudioUnit(formData.state);
    const selectedPkg = SERVICE_PACKAGES.find(p => p.id === formData.packageId) || SERVICE_PACKAGES[1];

    const newRecord = {
      id: newId,
      clientName: formData.clientName,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      state: formData.state,
      unitId: unitInfo.unitId,
      unitName: unitInfo.unitName,
      plotSize: formData.plotSize,
      plotImage: formData.plotImage || null,
      requirements: formData.requirements,
      packageId: selectedPkg.id,
      packageName: selectedPkg.name,
      regFeePaid: selectedPkg.regFee,
      regFeeDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
      finalFee: selectedPkg.finalFee,
      finalFeePaid: false,
      status: 'design_in_progress', // immediately in progress upon payment #1
      proposalUrl: null,
      proposalDate: null,
      finalDownloadReady: false,
      notes: `Project routed to ${unitInfo.unitName} (${unitInfo.zone} Zone) for architectural drafting. Registration fee verified.`
    };

    setRegistrations(prev => [newRecord, ...prev]);
    setActiveClientId(newId);
    return newRecord;
  };

  // Payment triggers
  const triggerPayment = ({ title, amount, registrationId, clientName, paymentType, onSuccess }) => {
    setPaymentModal({
      isOpen: true,
      title,
      amount,
      registrationId,
      clientName,
      paymentType,
      onSuccess
    });
  };

  const closePayment = () => {
    setPaymentModal(prev => ({ ...prev, isOpen: false }));
  };

  // Final Payment completion
  const confirmFinalPayment = (registrationId) => {
    setRegistrations(prev => prev.map(reg => {
      if (reg.id === registrationId) {
        return {
          ...reg,
          finalFeePaid: true,
          status: 'completed',
          finalDownloadReady: true,
          notes: `${reg.notes} | Final payment cleared. Full resolution engineering CAD & PDF blueprint bundle released.`
        };
      }
      return reg;
    }));
    showToast(`Payment of ₹${registrations.find(r => r.id === registrationId)?.finalFee?.toLocaleString('en-IN')} confirmed! Master drawings released.`, 'success');
  };

  // Admin Actions
  const adminUploadProposal = (registrationId, fileUrl = '/sample_blueprint.jpg', customNotes) => {
    setRegistrations(prev => prev.map(reg => {
      if (reg.id === registrationId) {
        return {
          ...reg,
          status: 'proposal_ready',
          proposalUrl: fileUrl,
          proposalDate: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
          notes: customNotes || `Architectural drawing set prepared by ${reg.unitName}. Uploaded for client review.`
        };
      }
      return reg;
    }));
    showToast(`Architectural proposal successfully uploaded for ${registrationId}!`, 'success');
  };

  const adminReassignUnit = (registrationId, newUnitId) => {
    const unitName = newUnitId === 'as-home' ? 'A S Home Planner' : 'R S Design Studio';
    setRegistrations(prev => prev.map(reg => {
      if (reg.id === registrationId) {
        return {
          ...reg,
          unitId: newUnitId,
          unitName: unitName,
          notes: `${reg.notes} | Studio reassigned to ${unitName} by Bluestone Directorate.`
        };
      }
      return reg;
    }));
    showToast(`Assigned unit updated to ${unitName} for ${registrationId}.`, 'info');
  };

  const adminUpdateStatus = (registrationId, newStatus) => {
    setRegistrations(prev => prev.map(reg => {
      if (reg.id === registrationId) {
        return {
          ...reg,
          status: newStatus,
          finalDownloadReady: newStatus === 'completed' ? true : reg.finalDownloadReady
        };
      }
      return reg;
    }));
    showToast(`Status updated to ${newStatus} for ${registrationId}.`, 'info');
  };

  const openProposalViewer = (registration) => {
    setProposalViewer({
      isOpen: true,
      registration
    });
  };

  const closeProposalViewer = () => {
    setProposalViewer({ isOpen: false, registration: null });
  };

  const activeClient = registrations.find(r => r.id === activeClientId) || registrations[0];

  return (
    <AppContext.Provider
      value={{
        currentPage,
        navigateTo,
        registrations,
        activeClientId,
        setActiveClientId,
        activeClient,
        registerNewProject,
        resolveStudioUnit,
        triggerPayment,
        paymentModal,
        closePayment,
        confirmFinalPayment,
        adminUploadProposal,
        adminReassignUnit,
        adminUpdateStatus,
        proposalViewer,
        openProposalViewer,
        closeProposalViewer,
        showToast,
        toast
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
