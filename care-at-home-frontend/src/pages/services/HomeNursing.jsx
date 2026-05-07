import React, { useState } from 'react';
import './HomeNursing.css';
import '../../components/sections/FAQSection.css'; // Reusing FAQ styles

const HomeNursing = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'Are your nurses verified?',
      answer: 'Yes. Every nurse undergoes a strict background check, medical credential verification, and practical skill assessment before being assigned to your home.'
    },
    {
      question: 'Is night shift available?',
      answer: 'Yes, we provide flexible care plans including 12-hour night shifts, 12-hour day shifts, and full 24-hour live-in support based on patient requirements.'
    },
    {
      question: 'Can urgent nursing be arranged?',
      answer: 'Absolutely. We prioritize urgent medical needs and can dispatch qualified nursing staff quickly across Ranchi.'
    },
    {
      question: 'Do you support ICU patients at home?',
      answer: 'Yes, we have specialized ICU-trained nurses capable of handling critical care setups, advanced monitoring, and complex medical equipment at home.'
    }
  ];

  return (
    <div className="page-home-nursing">
      
      {/* Hero Section */}
      <section className="service-page-hero">
        <div className="container">
          <div className="service-page-hero-content">
            <div className="hero-local-badge" style={{ backgroundColor: 'white' }}>
              📍 Trusted Home Healthcare in Ranchi
            </div>
            <h1 className="heading-hero">Home Nursing Services in Ranchi</h1>
            <p className="text-body-large">
              Professional, compassionate, and verified nursing care delivered right to your doorstep. Ensuring safe recovery and comfortable care for your loved ones.
            </p>
            <div className="service-hero-actions">
              <button className="btn btn-primary">
                <span className="icon-placeholder">📞</span> Call Now
              </button>
              <button className="btn btn-secondary">
                <span className="icon-placeholder">💬</span> WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview Section */}
      <section className="service-content-section section-padding">
        <div className="container">
          <h2 className="heading-section text-center">Comprehensive Nursing Support</h2>
          <p className="text-body-large text-center" style={{ maxWidth: '800px', margin: '0 auto var(--space-8)' }}>
            Our trained nurses are equipped to handle a wide variety of medical requirements with clinical precision and deep compassion.
          </p>
          
          <div className="service-grid">
            {[
              { title: 'Injections & IV', text: 'Safe administration of IV fluids, IM/IV injections, and prescribed medications.' },
              { title: 'Wound Dressing', text: 'Hygienic care for post-surgical wounds, bedsores, and injury dressings.' },
              { title: 'Catheter Care', text: 'Professional urinary catheter insertion, removal, and maintenance.' },
              { title: 'Post-Surgery Nursing', text: 'Dedicated monitoring and recovery support following hospital discharge.' },
              { title: 'Bedridden Patient Care', text: 'Complete hygiene, position changing, and feeding support for immobile patients.' },
              { title: 'Elderly Nursing Support', text: 'Vitals monitoring and routine medical care for senior citizens.' },
              { title: 'ICU Patient Monitoring', text: 'Advanced critical care nursing for patients requiring intensive support.' },
              { title: 'Vitals Management', text: 'Regular checking of BP, sugar, oxygen levels, and temperature.' }
            ].map((feature, index) => (
              <div key={index} className="service-feature-card">
                <h3 className="service-feature-title">
                  <span className="icon-placeholder">✔</span> {feature.title}
                </h3>
                <p className="service-feature-text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs This Service & Benefits */}
      <section className="service-list-section section-padding">
        <div className="container">
          <div className="service-list-container">
            
            <div className="stack-md">
              <h2 className="heading-section">Who Needs This Service?</h2>
              <ul className="service-check-list">
                <li className="service-check-item">
                  <span className="service-check-icon">✔</span> Patients in post-surgery recovery
                </li>
                <li className="service-check-item">
                  <span className="service-check-icon">✔</span> Seniors requiring elderly care support
                </li>
                <li className="service-check-item">
                  <span className="service-check-icon">✔</span> Individuals on recent hospital discharge
                </li>
                <li className="service-check-item">
                  <span className="service-check-icon">✔</span> Patients managing chronic illnesses
                </li>
                <li className="service-check-item">
                  <span className="service-check-icon">✔</span> Families seeking long-term nursing support
                </li>
              </ul>
            </div>

            <div className="stack-md">
              <h2 className="heading-section">Why Choose Care At Home?</h2>
              <ul className="service-check-list">
                <li className="service-check-item">
                  <span className="service-check-icon">⭐</span> <strong>Verified Professionals:</strong> Background-checked and highly trained.
                </li>
                <li className="service-check-item">
                  <span className="service-check-icon">⚡</span> <strong>Fast Local Support:</strong> Quick deployment across Ranchi.
                </li>
                <li className="service-check-item">
                  <span className="service-check-icon">🏡</span> <strong>Faster Recovery:</strong> Healing in the comfort of your own home.
                </li>
                <li className="service-check-item">
                  <span className="service-check-icon">🛡️</span> <strong>Seamless Replacement:</strong> Zero disruption in care if a nurse takes leave.
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-content-section section-padding">
        <div className="container text-center">
          <h2 className="heading-section">How It Works</h2>
          <div className="service-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}>
            <div className="service-feature-card">
              <h3 className="service-feature-title">1. Contact Us</h3>
              <p className="service-feature-text">Call or WhatsApp to share patient requirements.</p>
            </div>
            <div className="service-feature-card">
              <h3 className="service-feature-title">2. Assessment</h3>
              <p className="service-feature-text">We evaluate the exact nursing care needed.</p>
            </div>
            <div className="service-feature-card">
              <h3 className="service-feature-title">3. Assignment</h3>
              <p className="service-feature-text">A verified, skilled nurse is matched and dispatched.</p>
            </div>
            <div className="service-feature-card">
              <h3 className="service-feature-title">4. Care Begins</h3>
              <p className="service-feature-text">Professional medical support starts at your home.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section section-padding">
        <div className="container">
          <h2 className="heading-section text-center" style={{ marginBottom: 'var(--space-8)' }}>Home Nursing FAQs</h2>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className="faq-item">
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  {faq.question}
                  <span className="faq-icon">{activeFaq === index ? '-' : '+'}</span>
                </button>
                {activeFaq === index && (
                  <div className="faq-answer">
                    <div className="faq-answer-text" style={{ padding: '1rem 0' }}>{faq.answer}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="service-page-hero" style={{ backgroundColor: 'var(--clr-primary-dark)', color: 'white' }}>
        <div className="container">
          <h2 className="heading-section" style={{ color: 'white', marginBottom: 'var(--space-4)' }}>
            Need Reliable Home Nursing in Ranchi?
          </h2>
          <p className="text-body-large" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: 'var(--space-6)' }}>
            Our verified nurses are ready to provide professional, compassionate care for your family.
          </p>
          <div className="service-hero-actions">
            <button className="btn" style={{ backgroundColor: 'white', color: 'var(--clr-primary-dark)' }}>
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

export default HomeNursing;