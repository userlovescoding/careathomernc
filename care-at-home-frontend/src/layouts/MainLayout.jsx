import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/navigation/ScrollToTop.jsx';
import Navbar from '../components/navigation/Navbar.jsx';
import Footer from '../components/navigation/Footer.jsx';

const MainLayout = () => {
  return (
    <div className="layout-main">
      <ScrollToTop />
      
      <header className="layout-header">
        <Navbar />
      </header>
      
      <main className="layout-content">
        <Outlet />
      </main>

      <footer className="layout-footer">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;