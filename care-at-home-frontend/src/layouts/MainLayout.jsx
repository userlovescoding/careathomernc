import React from 'react';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '../components/navigation/ScrollToTop.jsx';

const MainLayout = () => {
  return (
    <div className="layout-main">
      <ScrollToTop />
      <header className="layout-header">
        <nav>[Navbar Placeholder]</nav>
      </header>
      
      <main className="layout-content">
        <Outlet />
      </main>

      <footer className="layout-footer">
        [Footer Placeholder]
      </footer>
    </div>
  );
};

export default MainLayout;

