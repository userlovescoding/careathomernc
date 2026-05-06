import React from 'react';
import './FinalCTASection.css';

const FinalCTASection = () => {
  return (
    <section className="final-cta-section section-padding">
      <div className="container final-cta-container">
        
        <div className="final-cta-header">
          <h2 className="final-cta-headline">
            Need Immediate Care Support at Home?
          </h2>
          <p className="final-cta-subhead">
            Whether you require urgent home nursing, professional elderly care, prompt medical equipment rental, ICU setup, or post-surgery support—we are just one call away.
          </p>
        </div>

        <div className="final-cta-actions">
          <button className="btn btn-primary btn-large">
            <span className="icon-placeholder">??</span> Call Now
          </button>
          <button className="btn btn-secondary btn-large">
            <span className="icon-placeholder">??</span> WhatsApp Us
          </button>
        </div>

        <div className="final-cta-reassurance-row">
          <div className="reassurance-item">
            <span className="reassurance-icon">?</span>
            Fast Local Response
          </div>
          <div className="reassurance-item">
            <span className="reassurance-icon">?</span>
            Same-Day Support Available
          </div>
          <div className="reassurance-item">
            <span className="reassurance-icon">?</span>
            Trusted Ranchi Healthcare
          </div>
        </div>

        <div className="final-cta-trust-line">
          Serving Ranchi families with compassionate, reliable medical care for over 10 years.
        </div>

      </div>
    </section>
  );
};

export default FinalCTASection;
