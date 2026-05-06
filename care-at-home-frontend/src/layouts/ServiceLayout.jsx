import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/navigation/ScrollToTop.jsx';

const ServiceLayout = () => {
  return (
    <div className="layout-service">
      <ScrollToTop />
      <header className="layout-header">
        <nav>[Navbar Placeholder]</nav>
      </header>

      {/* Service-specific top structural elements like Breadcrumbs go here */}
      <div className="service-breadcrumbs-placeholder"></div>
      
      <main className="layout-content service-content">
        <Outlet />
      </main>

      {/* Service-specific sticky conversion elements go here */}
      <div className="service-sticky-cta-placeholder"></div>

      <footer className="layout-footer">
        [Footer Placeholder]
      </footer>
    </div>
  );
};

export default ServiceLayout;

