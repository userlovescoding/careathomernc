import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-main" style={{ backgroundColor: 'var(--clr-bg-alt)', borderTop: '1px solid var(--clr-border)', marginTop: '4rem' }}>
      <div className="container footer-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', padding: '3rem 1rem' }}>
        
        {/* Brand Summary */}
        <div className="footer-brand-section">
          <div className="footer-logo" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--clr-primary-dark)', marginBottom: '1rem' }}>
            Care<span style={{ color: 'var(--clr-primary)' }}>At</span>Home
          </div>
          <p className="text-body" style={{ color: 'var(--clr-text-muted)', lineHeight: '1.6' }}>
            Trusted home healthcare, professional nursing, and medical equipment rental provider in Ranchi. We bring clinical excellence to your doorstep.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links-section">
          <h4 style={{ marginBottom: '1.2rem', color: 'var(--clr-primary-dark)' }}>Quick Links</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/about" style={{ textDecoration: 'none', color: 'var(--clr-text-main)' }}>About Us</Link></li>
            <li><Link to="/locations" style={{ textDecoration: 'none', color: 'var(--clr-text-main)' }}>Locations Served</Link></li>
            <li><Link to="/reviews" style={{ textDecoration: 'none', color: 'var(--clr-text-main)' }}>Success Stories</Link></li>
            <li><Link to="/contact" style={{ textDecoration: 'none', color: 'var(--clr-text-main)' }}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Services Quick Links */}
        <div className="footer-services-section">
          <h4 style={{ marginBottom: '1.2rem', color: 'var(--clr-primary-dark)' }}>Our Services</h4>
          <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li><Link to="/services/home-nursing" style={{ textDecoration: 'none', color: 'var(--clr-text-main)' }}>Home Nursing</Link></li>
            <li><Link to="/services/icu-at-home" style={{ textDecoration: 'none', color: 'var(--clr-text-main)' }}>ICU at Home</Link></li>
            <li><Link to="/services/medical-equipment-rental" style={{ textDecoration: 'none', color: 'var(--clr-text-main)' }}>Equipment on Rent</Link></li>
            <li><Link to="/services" style={{ textDecoration: 'none', color: 'var(--clr-primary)', fontWeight: '600' }}>View All Services →</Link></li>
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-contact-section">
          <h4 style={{ marginBottom: '1.2rem', color: 'var(--clr-primary-dark)' }}>Contact Details</h4>
          <p style={{ color: 'var(--clr-text-main)', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>📞</span> +91 98765 43210</p>
          <p style={{ color: 'var(--clr-text-main)', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>💬</span> +91 98765 43210</p>
          <p style={{ color: 'var(--clr-text-main)', marginBottom: '0.5rem', display: 'flex', gap: '0.5rem' }}><span>📧</span> care@careathomernc.com</p>
          <p style={{ color: 'var(--clr-text-muted)', marginTop: '1rem' }}>📍 Serving Ranchi & Surrounding Regions</p>
        </div>
      </div>

      {/* Emergency CTA Area */}
      <div className="footer-emergency-section" style={{ backgroundColor: 'var(--clr-primary-dark)', padding: '2rem', textAlign: 'center', color: 'white' }}>
        <p style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: '500' }}>Need urgent healthcare support at home?</p>
        <button className="btn" style={{ backgroundColor: 'white', color: 'var(--clr-emergency-dark, #dc2626)', fontWeight: 'bold', padding: '0.75rem 1.5rem', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
          🚨 Call Emergency Line
        </button>
      </div>

      {/* Copyright */}
      <div className="footer-copyright" style={{ textAlign: 'center', padding: '1.5rem', backgroundColor: 'var(--clr-bg-main)', color: 'var(--clr-text-muted)', fontSize: '0.875rem' }}>
        <p>&copy; {new Date().getFullYear()} Care At Home Ranchi. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;