import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="mobile-menu-overlay">
      <div className="mobile-menu-container">
        <ul className="mobile-nav-links">
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
          <li><Link to="/services" onClick={closeMenu}>All Services</Link></li>
          <li><Link to="/medical-equipment-rental" onClick={closeMenu}>Medical Equipment on Rent</Link></li>
          <li><Link to="/locations" onClick={closeMenu}>Locations</Link></li>
          <li><Link to="/reviews" onClick={closeMenu}>Reviews</Link></li>
          <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>

        <div className="mobile-menu-actions">
          <button className="btn-mobile-call">[Icon] Call Now</button>
          <button className="btn-mobile-whatsapp">[Icon] WhatsApp Us</button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
