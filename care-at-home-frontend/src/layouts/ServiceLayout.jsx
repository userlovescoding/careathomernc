import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/navigation/ScrollToTop.jsx';
import Navbar from '../components/navigation/Navbar.jsx';
import Footer from '../components/navigation/Footer.jsx';
import StickyMobileCTA from '../components/navigation/StickyMobileCTA.jsx';

const ServiceLayout = () => {
  return (
    <div className="layout-service">
      <ScrollToTop />
      
      <header className="layout-header">
        <Navbar />
      </header>
      
      <main className="layout-content service-content">
        <Outlet />
      </main>

      {/* Sticky conversion element for mobile service pages */}
      <StickyMobileCTA />

      <footer className="layout-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default ServiceLayout;