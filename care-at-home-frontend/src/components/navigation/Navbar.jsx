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
      <nav className="navbar-main" style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
        <div className="navbar-container">
          {/* Brand Logo Placeholder */}
          <div className="navbar-brand">
            <Link to="/">[Care At Home Logo]</Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="navbar-desktop-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/medical-equipment-rental">Equipment Rental</Link></li>
            <li><Link to="/locations">Locations</Link></li>
            <li><Link to="/reviews">Reviews</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>

          {/* Desktop CTAs */}
          <div className="navbar-desktop-ctas">
            <button className="btn-nav-call">Call Now</button>
            <button className="btn-nav-whatsapp">WhatsApp</button>
          </div>

          {/* Mobile Menu Trigger */}
          <button className="mobile-menu-trigger" onClick={toggleMenu}>
            {isMobileMenuOpen ? '[Close]' : '[Menu]'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Render */}
      {isMobileMenuOpen && <MobileMenu closeMenu={toggleMenu} />}
    </>
  );
};

export default Navbar;
