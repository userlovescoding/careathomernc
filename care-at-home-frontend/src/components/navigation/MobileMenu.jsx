import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="mobile-menu-overlay" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', backgroundColor: 'var(--clr-bg-main)', zIndex: 1001, padding: '2rem', display: 'flex', flexDirection: 'column' }}>
      
      {/* Mobile Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
        <div className="navbar-brand" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--clr-primary-dark)' }}>
          Care<span style={{ color: 'var(--clr-primary)' }}>At</span>Home
        </div>
        <button onClick={closeMenu} style={{ background: 'none', border: 'none', fontSize: '2rem', color: 'var(--clr-primary-dark)', cursor: 'pointer' }}>
          {"\u2715"} {/* Safe Unicode for 'X' close button */}
        </button>
      </div>

      {/* Mobile Navigation Links */}
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.25rem' }}>
        <li><Link to="/" onClick={closeMenu} style={{ textDecoration: 'none', color: 'var(--clr-text-main)', fontWeight: '500' }}>Home</Link></li>
        <li><Link to="/about" onClick={closeMenu} style={{ textDecoration: 'none', color: 'var(--clr-text-main)', fontWeight: '500' }}>About Us</Link></li>
        <li><Link to="/services" onClick={closeMenu} style={{ textDecoration: 'none', color: 'var(--clr-text-main)', fontWeight: '500' }}>All Services</Link></li>
        <li><Link to="/services/medical-equipment-rental" onClick={closeMenu} style={{ textDecoration: 'none', color: 'var(--clr-text-main)', fontWeight: '500' }}>Equipment Rental</Link></li>
        <li><Link to="/services/icu-at-home" onClick={closeMenu} style={{ textDecoration: 'none', color: 'var(--clr-text-main)', fontWeight: '500' }}>ICU at Home</Link></li>
        <li><Link to="/contact" onClick={closeMenu} style={{ textDecoration: 'none', color: 'var(--clr-text-main)', fontWeight: '500' }}>Contact Us</Link></li>
      </ul>

      {/* Mobile Bottom Actions */}
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem', paddingBottom: '2rem' }}>
        <button className="btn btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', justifyContent: 'center' }}>
          {"\uD83D\uDCDE"} Call Now  {/* Safe Unicode for Phone */}
        </button>
        <button className="btn btn-secondary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', justifyContent: 'center' }}>
          {"\uD83D\uDCAC"} WhatsApp Us {/* Safe Unicode for Speech Bubble */}
        </button>
      </div>

    </div>
  );
};

export default MobileMenu;