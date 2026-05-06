import React from 'react';
import './MedicalEquipmentRental.css';

const equipmentList = [
  { id: 1, name: 'Oxygen Concentrator (5L)', icon: '??' },
  { id: 2, name: 'Hospital Bed (Manual)', icon: '???' },
  { id: 3, name: 'Wheelchair', icon: '?????' },
  { id: 4, name: 'Oxygen Cylinder', icon: '???' }
];

const suitabilityList = [
  'Post-surgery recovery patients',
  'Oxygen-dependent patients',
  'Bedridden patients requiring specialized support',
  'Elderly individuals needing mobility assistance',
  'Short-term hospital discharge recovery at home'
];

const benefitsList = [
  'Fast local delivery across Ranchi',
  'Proper setup and installation guidance',
  'Trusted and sanitized equipment',
  'Reliable ongoing coordination and support',
  'Flexible rental duration options'
];

const processSteps = [
  { step: '01', title: 'Share Requirement', desc: 'Call or WhatsApp us with the specific equipment you need.' },
  { step: '02', title: 'Equipment Arranged', desc: 'We confirm availability and prepare the sanitized equipment.' },
  { step: '03', title: 'Home Delivery', desc: 'Fast and secure delivery directly to your home in Ranchi.' },
  { step: '04', title: 'Continuous Support', desc: 'We provide basic usage instructions and ongoing rental support.' }
];

const faqs = [
  {
    q: 'How quickly can delivery be arranged?',
    a: 'For urgent requirements like oxygen concentrators, we strive for same-day delivery across most areas in Ranchi depending on immediate availability.'
  },
  {
    q: 'Is monthly rental available?',
    a: 'Yes, we offer flexible rental plans including weekly and monthly options based on your recovery needs.'
  },
  {
    q: 'Is setup included?',
    a: 'Yes, our delivery team ensures proper handover and basic setup instructions so you know exactly how to safely operate the equipment.'
  },
  {
    q: 'Can urgent same-day delivery be arranged?',
    a: 'Yes, we prioritize critical medical equipment requests and do our absolute best to ensure same-day delivery for urgent cases.'
  }
];

const MedicalEquipmentRental = () => {
  return (
    <div className="page-service-details">
      
      {/* 1. Hero Section */}
      <section className="service-page-hero">
        <div className="container">
          <div className="hero-local-badge">?? Fast Local Delivery in Ranchi</div>
          <h1 className="heading-hero">Medical Equipment on Rent in Ranchi</h1>
          <p className="text-body-large">
            Reliable home delivery of essential medical equipment for post-discharge care and patient support. Get what you need, when you need it.
          </p>
          <div className="hero-actions" style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <button className="btn" style={{ backgroundColor: 'white', color: 'var(--clr-primary-dark)' }}>
              <span className="icon-placeholder">??</span> Call Now
            </button>
            <button className="btn btn-secondary">
              <span className="icon-placeholder">??</span> WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* 2. Equipment Available */}
      <section className="section-padding">
        <div className="container">
          <div className="service-section-header">
            <h2 className="heading-section">Equipment Available for Rent</h2>
            <p className="text-body-large">Premium, sanitized, and well-maintained medical equipment ready for immediate dispatch.</p>
          </div>
          <div className="equipment-grid">
            {equipmentList.map(item => (
              <div key={item.id} className="equipment-card">
                <div className="equipment-icon">{item.icon}</div>
                <h3 className="equipment-title">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 & 4. Suitability and Benefits (Why Choose Us) */}
      <section className="section-padding section-bg-alt">
        <div className="container" style={{ display: 'grid', gap: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          <div>
            <h2 className="heading-section" style={{ marginBottom: '1.5rem', fontSize: '1.75rem' }}>Who Needs This Service?</h2>
            <div className="features-list" style={{ gridTemplateColumns: '1fr' }}>
              {suitabilityList.map((item, index) => (
                <div key={index} className="feature-list-item">
                  <span className="feature-list-icon">?</span> {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="heading-section" style={{ marginBottom: '1.5rem', fontSize: '1.75rem' }}>Why Choose Us?</h2>
            <div className="features-list" style={{ gridTemplateColumns: '1fr' }}>
              {benefitsList.map((item, index) => (
                <div key={index} className="feature-list-item">
                  <span className="feature-list-icon">???</span> {item}
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 5. Process Section */}
      <section className="section-padding">
        <div className="container">
          <div className="service-section-header">
            <h2 className="heading-section">How Rental Works</h2>
            <p className="text-body-large">A simple, transparent process to get equipment to your home quickly.</p>
          </div>
          <div className="equipment-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="equipment-card" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--clr-primary)', opacity: '0.5' }}>{step.step}</div>
                <h3 className="equipment-title" style={{ marginTop: '0.5rem' }}>{step.title}</h3>
                <p className="text-small">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="section-padding section-bg-alt">
        <div className="container">
          <div className="service-section-header">
            <h2 className="heading-section">Frequently Asked Questions</h2>
          </div>
          <div className="service-faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="service-faq-item">
                <div className="service-faq-question">{faq.q}</div>
                <div className="service-faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="section-padding service-final-cta">
        <div className="container">
          <h2 className="heading-section" style={{ marginBottom: '1rem' }}>Need Equipment Urgently?</h2>
          <p className="text-body-large" style={{ marginBottom: '2rem' }}>
            Contact our care coordinators immediately to check availability and arrange fast local delivery.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn btn-primary btn-large">
              <span className="icon-placeholder">??</span> Call Now
            </button>
            <button className="btn btn-secondary btn-large">
              <span className="icon-placeholder">??</span> WhatsApp Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MedicalEquipmentRental;
