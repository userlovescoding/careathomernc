import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section section-padding">
      <div className="container hero-container">
        
        {/* Left Column: Content & Trust */}
        <div className="hero-content">
          <div className="hero-local-badge">
            ?? Fast Local Deployment in Ranchi
          </div>
          
          <h1 className="heading-hero">
            Trusted Home Healthcare for Your Family in Ranchi
          </h1>
          
          <p className="text-body-large">
            Professional and compassionate home nursing, elderly care, ICU support, patient attendants, and prompt medical equipment rental. Reliable care, right where you need it most.
          </p>
          
          <div className="hero-actions">
            <button className="btn btn-primary">
              <span className="icon-placeholder">??</span> Call Now
            </button>
            <button className="btn btn-secondary">
              <span className="icon-placeholder">??</span> WhatsApp Us
            </button>
          </div>
          
          <div className="hero-trust-row">
            <div className="trust-item">
              <span className="trust-item-icon">?</span>
              <span className="trust-item-text">10+ Years<br/>Experience</span>
            </div>
            <div className="trust-item">
              <span className="trust-item-icon">?</span>
              <span className="trust-item-text">Verified<br/>Care Staff</span>
            </div>
            <div className="trust-item">
              <span className="trust-item-icon">?</span>
              <span className="trust-item-text">Fast Local<br/>Support</span>
            </div>
            <div className="trust-item">
              <span className="trust-item-icon">?</span>
              <span className="trust-item-text">Trusted by<br/>Ranchi Families</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Trust Anchor */}
        <div className="hero-visual">
          <div className="hero-visual-wrapper">
            <div className="hero-visual-placeholder-text">
              [Visual Placeholder]<br/>
              Image: Compassionate nurse caring for an elderly patient at home.<br/>
              Style: Warm, professional, authentic lighting.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
