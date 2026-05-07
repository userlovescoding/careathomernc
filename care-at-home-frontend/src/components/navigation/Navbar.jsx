import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MobileMenu from './MobileMenu.jsx';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="navbar-main" style={{ position: 'sticky', top: 0, zIndex: 1000, backgroundColor: 'var(--clr-bg-main)', borderBottom: '1px solid var(--clr-border)' }}>
        <div className="navbar-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 2rem' }}>
          
          {/* Brand Logo - Typographical */}
          <div className="navbar-brand">
            <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', textDecoration: 'none', color: 'var(--clr-primary-dark)' }}>
              Care<span style={{ color: 'var(--clr-primary)' }}>At</span>Home
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="navbar-desktop-links" style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', margin: 0, padding: 0 }}>
            <li><Link to="/" style={{ textDecoration: 'none', color: 'var(--clr-text-main)', fontWeight: '500' }}>Home</Link></li>
            <li><Link to="/about" style={{ textDecoration: 'none', color: 'var(--clr-text-main)', fontWeight: '500' }}>About Us</Link></li>
            <li><Link to="/services" style={{ textDecoration: 'none', color: 'var(--clr-text-main)', fontWeight: '500' }}>Services</Link></li>
            <li><Link to="/services/medical-equipment-rental" style={{ textDecoration: 'none', color: 'var(--clr-text-main)', fontWeight: '500' }}>Equipment</Link></li>
            <li><Link to="/contact" style={{ textDecoration: 'none', color: 'var(--clr-text-main)', fontWeight: '500' }}>Contact</Link></li>
          </ul>

          {/* Desktop CTAs */}
          <div className="navbar-desktop-ctas" style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn btn-primary">📞 Call Now</button>
            <button className="btn btn-secondary">💬 WhatsApp</button>
          </div>

          {/* Mobile Menu Trigger */}
          <button 
            className="mobile-menu-trigger" 
            onClick={toggleMenu} 
            style={{ background: 'none', border: 'none', fontSize: '1.8rem', cursor: 'pointer', color: 'var(--clr-primary-dark)', padding: '0.2rem' }}
            aria-label="Toggle Navigation"
          >
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Render */}
      {isMobileMenuOpen && <MobileMenu closeMenu={toggleMenu} />}
    </>
  );
};

export default Navbar;