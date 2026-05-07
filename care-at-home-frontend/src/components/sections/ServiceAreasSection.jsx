import React from 'react';
import './ServiceAreasSection.css';

const locations = [
  'Ashok Nagar',
  'Doranda',
  'Hinoo',
  'Harmu',
  'Lalpur',
  'Bariatu',
  'Nearby Ranchi Zones'
];

const ServiceAreasSection = () => {
  return (
    <section className="service-areas-section section-padding">
      <div className="container">
        
        <div className="service-areas-layout">
          {/* Left Column: Content & Benefits */}
          <div className="service-areas-content">
            <h2 className="heading-section">Serving Ranchi with Prompt Local Care</h2>
            <p className="text-body-large">
              When a medical need arises, distance and time matter. Our local presence ensures we can reach your family quickly and reliably across the city.
            </p>
            
            <div className="areas-benefits-list">
              <div className="area-benefit-item">
                <span className="area-benefit-icon">⚡</span>
                Quick local deployment
              </div>
              <div className="area-benefit-item">
                <span className="area-benefit-icon">🤝</span>
                Trusted home healthcare support nearby
              </div>
              <div className="area-benefit-item">
                <span className="area-benefit-icon">🛏️</span>
                Medical equipment delivery support
              </div>
              <div className="area-benefit-item">
                <span className="area-benefit-icon">🚨</span>
                Emergency care response readiness
              </div>
            </div>
          </div>

          {/* Right Column: Areas Grid */}
          <div className="service-areas-grid-wrapper">
            <div className="areas-grid">
              {locations.map((area, index) => (
                <div key={index} className="area-tag">
                  <span className="area-pin-icon">📍</span>
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Support Banner */}
        <div className="area-support-banner">
          <div className="area-support-text">
            Don’t see your area listed? Call us — we may still be able to help.
          </div>
          <button className="btn btn-primary">
            <span className="icon-placeholder">📞</span> Call Us to Confirm
          </button>
        </div>

      </div>
    </section>
  );
};

export default ServiceAreasSection;