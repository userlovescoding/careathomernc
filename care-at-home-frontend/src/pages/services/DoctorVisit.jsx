import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DoctorVisit = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'How quickly can doctor visits be arranged?',
      answer: 'Depending on doctor availability and your location in Ranchi, we strive to arrange home consultations within the same day or schedule them promptly for the next available slot.'
    },
    {
      question: 'Are follow-up visits available?',
      answer: 'Yes, follow-up visits can be easily scheduled to monitor recovery, adjust medications, or review diagnostic reports.'
    },
    {
      question: 'Can elderly patients receive home consultation?',
      answer: 'Absolutely. Home visits are highly recommended for elderly patients to avoid the physical strain and infection risks associated with hospital travel.'
    },
    {
      question: 'Is urgent doctor consultation possible?',
      answer: 'We provide prompt consultations for routine and semi-urgent medical needs. However, for critical, life-threatening emergencies, we strongly advise visiting the nearest hospital immediately.'
    }
  ];

  return (
    <div className="service-page-template">
      
      {/* 1. Hero Section */}
      <section className="service-hero section-padding" style={{ backgroundColor: 'var(--clr-bg-alt)' }}>
        <div className="container">
          <div className="service-hero-content stack-md" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <div className="hero-local-badge" style={{ margin: '0 auto' }}>
              ?? Trusted Medical Support in Ranchi
            </div>
            <h1 className="heading-hero">Doctor Visit at Home in Ranchi</h1>
            <p className="text-body-large">
              Professional, reliable medical consultations brought to your doorstep. Receive expert diagnosis, routine checkups, and compassionate care without the stress of hospital travel.
            </p>
            <div className="hero-actions" style={{ justifyContent: 'center', marginTop: 'var(--space-4)' }}>
              <button className="btn btn-primary">
                <span className="icon-placeholder">??</span> Call Now
              </button>
              <button className="btn btn-secondary">
                <span className="icon-placeholder">??</span> WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Service Overview */}
      <section className="service-overview section-padding">
        <div className="container">
          <div className="stack-lg">
            <div className="text-center stack-sm" style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 className="heading-section">Comprehensive Home Consultations</h2>
              <p className="text-body-large">
                We bring experienced physicians to your home to ensure continuous, high-quality medical care tailored to the patient's condition.
              </p>
            </div>
            <div className="service-features-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-6)' }}>
              {[
                'Home consultation & diagnosis',
                'Routine health checkups',
                'Elderly patient visits',
                'Post-hospital follow-up',
                'Chronic illness monitoring',
                'Mobility-restricted patient care',
                'Basic medical guidance & prescriptions'
              ].map((item, index) => (
                <div key={index} className="card" style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                  <span style={{ color: 'var(--clr-primary)', fontSize: '1.25rem' }}>?</span>
                  <span style={{ fontWeight: '500', color: 'var(--clr-text-main)' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Who Needs This Service & 4. Benefits */}
      <section className="service-needs-benefits section-padding" style={{ backgroundColor: 'var(--clr-bg-alt)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-12)' }}>
            
            <div className="stack-md">
              <h3 className="heading-sub" style={{ color: 'var(--clr-primary-dark)' }}>Who Needs This Service?</h3>
              <ul className="stack-sm" style={{ listStyle: 'none', padding: 0 }}>
                {['Elderly patients avoiding hospital strain', 'Post-surgery recovery follow-up', 'Chronic disease patients needing regular monitoring', 'Bedridden or weak patients', 'Anyone needing a safe home medical consultation'].map((need, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', borderBottom: '1px solid var(--clr-border)', paddingBottom: 'var(--space-3)' }}>
                    <span style={{ color: 'var(--clr-secondary)' }}>•</span> {need}
                  </li>
                ))}
              </ul>
            </div>

            <div className="stack-md">
              <h3 className="heading-sub" style={{ color: 'var(--clr-primary-dark)' }}>Key Benefits</h3>
              <div className="stack-sm">
                <div className="card">
                  <strong>Absolute Convenience</strong>
                  <p className="text-small" style={{ marginTop: 'var(--space-1)' }}>Skip the waiting rooms and receive care in your comfort zone.</p>
                </div>
                <div className="card">
                  <strong>Reduced Hospital Travel</strong>
                  <p className="text-small" style={{ marginTop: 'var(--space-1)' }}>Eliminate the physical stress and transportation difficulties for weak patients.</p>
                </div>
                <div className="card">
                  <strong>Timely Consultation</strong>
                  <p className="text-small" style={{ marginTop: 'var(--space-1)' }}>Prompt medical attention and early intervention for emerging health issues.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Process & 6. Why Choose Us */}
      <section className="service-process section-padding">
        <div className="container stack-lg">
          <div className="text-center stack-sm" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="heading-section">How It Works & Why Trust Us</h2>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-8)' }}>
            <div className="process-steps stack-md">
              <h3 className="heading-sub">Simple Process</h3>
              <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--clr-primary)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>1</div>
                <div><strong>Request a Visit:</strong> Call or WhatsApp us with patient details.</div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--clr-primary)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>2</div>
                <div><strong>Triage & Scheduling:</strong> We assess the need and confirm the doctor's timing.</div>
              </div>
              <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'flex-start' }}>
                <div style={{ background: 'var(--clr-primary)', color: 'white', width: '32px', height: '32px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>3</div>
                <div><strong>Doctor Assessment:</strong> Professional home consultation and diagnosis.</div>
              </div>
            </div>

            <div className="why-us stack-md">
              <h3 className="heading-sub">Why Choose Care At Home</h3>
              <div className="card stack-sm" style={{ background: 'var(--clr-primary)', color: 'white', border: 'none' }}>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}><span>???</span> Trusted medical coordination</div>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}><span>??</span> Safe, professional home consultations</div>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}><span>??</span> Highly reliable local presence in Ranchi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="service-faq section-padding" style={{ backgroundColor: 'var(--clr-bg-alt)' }}>
        <div className="container stack-lg">
          <div className="text-center">
            <h2 className="heading-section">Frequently Asked Questions</h2>
          </div>
          <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {faqs.map((faq, index) => (
              <div key={index} className={card } style={{ padding: 0, overflow: 'hidden' }}>
                <button 
                  onClick={() => toggleFaq(index)}
                  style={{ width: '100%', textAlign: 'left', padding: 'var(--space-4)', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: '1.0625rem', fontWeight: '600', color: 'var(--clr-primary-dark)' }}
                >
                  {faq.question}
                  <span style={{ transform: activeFaq === index ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s ease', color: 'var(--clr-primary)' }}>+</span>
                </button>
                {activeFaq === index && (
                  <div style={{ padding: '0 var(--space-4) var(--space-4) var(--space-4)', color: 'var(--clr-text-muted)', fontSize: '0.9375rem', borderTop: '1px solid var(--clr-border)', paddingTop: 'var(--space-4)' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="service-cta section-padding" style={{ backgroundColor: 'var(--clr-primary-dark)', color: 'white', textAlign: 'center' }}>
        <div className="container stack-md" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '700' }}>Need a Doctor at Home?</h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)' }}>
            Ensure your family receives safe, expert medical attention without leaving home. Contact our Ranchi team to schedule a visit today.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
            <button className="btn" style={{ backgroundColor: 'white', color: 'var(--clr-primary-dark)' }}>
              <span className="icon-placeholder">??</span> Call Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default DoctorVisit;
