import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        
        {/* Brand Summary */}
        <div className="footer-brand-section">
          <div className="footer-logo">[Care At Home Logo]</div>
          <p>[Brief description: Trusted home healthcare and medical equipment rental provider in Ranchi.]</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/locations">Locations Served</Link></li>
            <li><Link to="/reviews">Success Stories</Link></li>
            <li><Link to="/blog">Knowledge Center</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services Quick Links */}
        <div className="footer-services-section">
          <h4>Our Services</h4>
          <ul>
            <li><Link to="/services/home-nursing">Home Nursing</Link></li>
            <li><Link to="/services/elderly-care">Elderly Care</Link></li>
            <li><Link to="/services/icu-at-home">ICU at Home</Link></li>
            <li><Link to="/medical-equipment-rental">Medical Equipment on Rent</Link></li>
            <li><Link to="/services/physiotherapy">Physiotherapy</Link></li>
            <li><Link to="/services">View All Services</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-contact-section">
          <h4>Contact Details</h4>
          <p>Phone: [Phone Number Placeholder]</p>
          <p>WhatsApp: [WhatsApp Number Placeholder]</p>
          <p>Email: [Email Placeholder]</p>
          <p>Address: [Ranchi Address Placeholder]</p>
          <p>Service Areas: [Ranchi & Surrounding Regions]</p>
        </div>
      </div>

      {/* Emergency CTA Area */}
      <div className="footer-emergency-section">
        <p>Need urgent healthcare support at home?</p>
        <button className="btn-footer-emergency">[Emergency CTA Placeholder]</button>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Care At Home. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
