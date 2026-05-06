import React from 'react';
import './Locations.css';

const locationsList = [
  'Ashok Nagar',
  'Doranda',
  'Hinoo',
  'Harmu',
  'Lalpur',
  'Bariatu',
  'Morabadi',
  'Kanke',
  'Namkum',
  'Tupudana',
  'Dhurwa',
  'Nearby Residential Zones'
];

const Locations = () => {
  return (
    <div className="locations-page">
      
      {/* 1. Hero Section */}
      <section className="locations-hero section-padding">
        <div className="container locations-hero-container stack-md">
          <div className="hero-local-badge" style={{ margin: '0 auto', backgroundColor: 'rgba(15, 76, 129, 0.1)', color: 'var(--clr-primary)', padding: 'var(--space-2) var(--space-4)', borderRadius: '50px', fontWeight: '600', fontSize: '0.875rem' }}>
            ?? Dedicated Support Across the City
          </div>
          <h1 className="heading-hero">Areas We Serve in Ranchi</h1>
          <p className="text-body-large">
            Delivering prompt, reliable, and professional home healthcare to families across major residential areas in Ranchi. We ensure distance never stands in the way of quality medical support.
          </p>
        </div>
      </section>

      {/* 2. Primary Service Areas Grid */}
      <section className="locations-grid-section section-padding">
        <div className="container">
          <div className="text-center stack-sm" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="heading-section">Our Primary Coverage Zones</h2>
            <p className="text-body-large">
              Our medical staff and equipment delivery teams are strategically coordinated to provide fast response times to the following neighborhoods:
            </p>
          </div>
          
          <div className="locations-grid">
            {locationsList.map((location, index) => (
              <div key={index} className="location-card">
                <span className="location-icon">??</span>
                {location}
              </div>
            ))}
          </div>

          {/* "Not Listed?" Conversion Support */}
          <div className="not-listed-box">
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Don't see your area listed?</h3>
            <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', maxWidth: '600px' }}>
              We frequently expand our reach and serve surrounding regions outside our core zones. Call us directly to confirm availability for your specific location.
            </p>
            <button className="btn btn-outline">
              <span className="icon-placeholder">??</span> Call Us to Check Coverage
            </button>
          </div>
        </div>
      </section>

      {/* 3. Coverage Explanation */}
      <section className="coverage-explanation-section section-padding">
        <div className="container coverage-grid">
          <div className="stack-md">
            <h2 className="heading-section">Comprehensive Care, Wherever You Are</h2>
            <p className="text-body-large">
              No matter which area of Ranchi you reside in, our full suite of home healthcare services is available to support your family's needs.
            </p>
            <ul className="coverage-list">
              <li><span style={{ color: 'var(--clr-primary)' }}>?</span> Professional Home Nursing</li>
              <li><span style={{ color: 'var(--clr-primary)' }}>?</span> Compassionate Elderly Care</li>
              <li><span style={{ color: 'var(--clr-primary)' }}>?</span> Fully-equipped ICU at Home</li>
              <li><span style={{ color: 'var(--clr-primary)' }}>?</span> Prompt Medical Equipment Rental</li>
              <li><span style={{ color: 'var(--clr-primary)' }}>?</span> Reliable Patient Attendants</li>
              <li><span style={{ color: 'var(--clr-primary)' }}>?</span> Urgent Healthcare Coordination</li>
            </ul>
          </div>
          <div className="card" style={{ padding: 'var(--space-8)' }}>
            <h3 className="heading-sub" style={{ marginBottom: 'var(--space-4)', color: 'var(--clr-primary-dark)' }}>Why Local Proximity Matters</h3>
            <p className="text-body" style={{ marginBottom: 'var(--space-4)' }}>
              Operating locally within Ranchi allows us to maintain strict quality control, ensure punctuality of our care staff, and provide reliable replacement coordination when needed.
            </p>
            <p className="text-body">
              We aren't a remote platform; we are a community-integrated healthcare provider that understands the geographical pulse of the city.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Emergency Support Reassurance */}
      <section className="section-padding" style={{ backgroundColor: 'var(--clr-bg-main)', paddingTop: '0' }}>
        <div className="container">
          <div className="emergency-banner">
            <span className="emergency-banner-title">?? Fast Local Deployment for Urgent Needs</span>
            <p className="text-body-large" style={{ maxWidth: '700px' }}>
              For critical requirements such as home ICU setups, immediate post-surgery care, or urgent medical equipment deliveries (like oxygen concentrators), our localized logistics ensure rapid dispatch to your home.
            </p>
            <button className="btn btn-emergency" style={{ marginTop: 'var(--space-2)' }}>
              Call for Urgent Support
            </button>
          </div>
        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="section-padding" style={{ backgroundColor: 'var(--clr-primary-dark)', color: 'white', textAlign: 'center' }}>
        <div className="container stack-md" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '700' }}>Ready to Arrange Care in Ranchi?</h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)' }}>
            Get trusted, professional home healthcare delivered directly to your doorstep.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
            <button className="btn" style={{ backgroundColor: 'white', color: 'var(--clr-primary-dark)' }}>
              <span className="icon-placeholder">??</span> Call Now
            </button>
            <button className="btn" style={{ backgroundColor: 'var(--clr-secondary)', color: 'white' }}>
              <span className="icon-placeholder">??</span> WhatsApp Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Locations;
