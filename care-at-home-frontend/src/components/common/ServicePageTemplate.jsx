import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ServicePageTemplate.css';

const ServicePageTemplate = ({ serviceData }) => {
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaqIndex(activeFaqIndex === index ? null : index);
  };

  if (!serviceData) return null;

  return (
    <div className="service-template">
      
      {/* 1. Breadcrumbs */}
      <div className="service-breadcrumbs">
        <div className="container">
          <ul className="breadcrumb-list">
            <li><Link to="/" className="breadcrumb-link">Home</Link></li>
            <li className="breadcrumb-separator">/</li>
            <li><Link to="/services" className="breadcrumb-link">Services</Link></li>
            <li className="breadcrumb-separator">/</li>
            <li>{serviceData.title}</li>
          </ul>
        </div>
      </div>

      {/* 2. Service Hero Section */}
      <section className="service-hero">
        <div className="container service-hero-container">
          <h1 className="service-hero-title">{serviceData.title}</h1>
          <p className="text-body-large">{serviceData.subheadline}</p>
          
          <div className="service-hero-actions">
            <button className="btn btn-primary btn-large">
              <span className="icon-placeholder">📞</span> Call Now
            </button>
            <button className="btn btn-secondary btn-large">
              <span className="icon-placeholder">💬</span> WhatsApp Us
            </button>
          </div>
          
          <div className="service-hero-trust">
            <span className="icon-placeholder">⚡</span> Fast Local Response in Ranchi
          </div>
        </div>
      </section>

      {/* 3. Service Overview Section */}
      <section className="service-overview container">
        <div className="overview-grid">
          <div className="overview-content">
            <h2 className="heading-section">About This Service</h2>
            <p className="text-body">{serviceData.overview.description}</p>
            <h3 className="heading-sub" style={{ marginTop: '1rem' }}>Who is this for?</h3>
            <ul className="overview-list">
              {serviceData.overview.useCases.map((useCase, idx) => (
                <li key={idx}>
                  <span className="overview-list-icon">✔</span>
                  <span>{useCase}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="overview-image-placeholder" style={{ backgroundColor: 'var(--clr-bg-alt)', borderRadius: 'var(--radius-lg)', minHeight: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--clr-text-muted)' }}>
            [Service Visual Placeholder]
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="service-grid-section bg-white">
        <div className="container">
          <div className="service-section-header stack-sm">
            <h2 className="heading-section">Benefits of Our Care</h2>
            <p className="text-body-large">Why families trust us for {serviceData.title.toLowerCase()}.</p>
          </div>
          <div className="service-cards-grid">
            {serviceData.benefits.map((benefit, idx) => (
              <div key={idx} className="service-card-item">
                <div className="service-card-icon">{benefit.icon}</div>
                <h3 className="service-card-title">{benefit.title}</h3>
                <p className="text-small">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How It Works Section */}
      <section className="service-grid-section">
        <div className="container">
          <div className="service-section-header stack-sm">
            <h2 className="heading-section">How It Works</h2>
            <p className="text-body-large">A simple, transparent process to get support quickly.</p>
          </div>
          <div className="service-cards-grid">
            {serviceData.process.map((step, idx) => (
              <div key={idx} className="service-card-item" style={{ textAlign: 'center' }}>
                <div className="process-step-num">{idx + 1}</div>
                <h3 className="service-card-title">{step.title}</h3>
                <p className="text-small">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <section className="service-grid-section bg-white">
        <div className="container">
          <div className="service-section-header stack-sm">
            <h2 className="heading-section">Why Choose Care At Home</h2>
          </div>
          <div className="service-cards-grid">
            {serviceData.whyUs.map((reason, idx) => (
              <div key={idx} className="service-card-item">
                <div className="service-card-icon">{reason.icon}</div>
                <h3 className="service-card-title">{reason.title}</h3>
                <p className="text-small">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="service-faq">
        <div className="container">
          <div className="service-section-header stack-sm">
            <h2 className="heading-section">Common Questions</h2>
          </div>
          <div className="faq-wrapper">
            {serviceData.faqs.map((faq, idx) => (
              <div key={idx} className="faq-item" style={{ backgroundColor: 'var(--clr-bg-alt)', border: '1px solid var(--clr-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '1rem' }}>
                <button 
                  style={{ width: '100%', textAlign: 'left', padding: 'var(--space-4)', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', fontWeight: '600', cursor: 'pointer', color: 'var(--clr-primary-dark)' }}
                  onClick={() => toggleFaq(idx)}
                >
                  {faq.question}
                  <span>{activeFaqIndex === idx ? '-' : '+'}</span>
                </button>
                {activeFaqIndex === idx && (
                  <div style={{ padding: '0 var(--space-4) var(--space-4)', color: 'var(--clr-text-muted)', fontSize: '0.9375rem' }}>
                    <div style={{ borderTop: '1px solid var(--clr-border)', paddingTop: 'var(--space-3)' }}>
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="service-final-cta">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-6)' }}>
          <h2 className="heading-section" style={{ color: 'white', textAlign: 'center' }}>{serviceData.cta.headline}</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', textAlign: 'center' }}>{serviceData.cta.subheadline}</p>
          <div className="service-hero-actions">
            <button className="btn" style={{ backgroundColor: 'white', color: 'var(--clr-primary-dark)', fontWeight: 'bold' }}>
              <span className="icon-placeholder">📞</span> Call Now
            </button>
            <button className="btn btn-secondary">
              <span className="icon-placeholder">💬</span> WhatsApp Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicePageTemplate;