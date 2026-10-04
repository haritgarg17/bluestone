import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BackgroundWatermark from './components/BackgroundWatermark';
import RazorpayModal from './components/RazorpayModal';
import ProposalViewerModal from './components/ProposalViewerModal';
import Toast from './components/Toast';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RegistrationPage from './pages/RegistrationPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectsPage from './pages/ProjectsPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';

function MainContent() {
  const { currentPage, paymentModal, closePayment } = useApp();

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'about':
        return <AboutPage />;
      case 'register':
        return <RegistrationPage />;
      case 'portfolio':
        return <PortfolioPage />;
      case 'projects':
        return <ProjectsPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Site-wide Subtle Contact Watermark */}
      <BackgroundWatermark />

      {/* Main Header & Navbar */}
      <Navbar />

      {/* Dynamic Main Body Content */}
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {renderCurrentPage()}
      </main>

      {/* Corporate Multi-Brand Footer */}
      <Footer />

      {/* Interactive Global Modals */}
      <RazorpayModal modalConfig={paymentModal} onClose={closePayment} />
      <ProposalViewerModal />
      <Toast />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
}
