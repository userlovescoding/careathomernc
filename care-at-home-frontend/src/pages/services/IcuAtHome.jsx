import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const IcuAtHome = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'How quickly can an ICU setup be arranged?',
      answer: 'For critical needs, we prioritize rapid deployment. Depending on the exact equipment required, we can typically complete the ICU setup in your Ranchi home within a few hours.'
    },
    {
      question: 'Do you provide oxygen concentrators and hospital beds?',
      answer: 'Yes. We manage the complete setup, including hospital beds, oxygen concentrators, cylinders, suction machines, and vital monitoring equipment.'
    },
    {
      question: 'Are ICU-trained nurses available?',
      answer: 'Absolutely. We provide verified, highly trained nurses with experience in critical care, post-ICU management, and emergency response protocols.'
    },
    {
      question: 'Can support be arranged urgently?',
      answer: 'Yes. Please call us directly for immediate assistance, and we will expedite the medical assessment and equipment dispatch.'
    }
  ];

  return (
    <div className="service-page-wrapper">
      {/* Service Hero Section */}
      <section className="service-hero section-padding" style={{ backgroundColor: 'var(--clr-bg-alt)' }}>
        <div className="container">
          <div className="hero-local-badge" style={{ display: 'inline-block', backgroundColor: 'rgba(220, 38, 38, 0.1)', color: 'var(--clr-emergency-dark)', padding: '4px 12px', borderRadius: '50px', fontSize: '0.875rem', fontWeight: '600', marginBottom: '1rem' }}>
            🚨 Fast Critical Care Deployment in Ranchi
          </div>
          <h1 className="heading-hero" style={{ color: 'var(--clr-primary-dark)', marginBottom: '1rem' }}>
            ICU at Home Services in Ranchi
          </h1>
          <p className="text-body-large" style={{ maxWidth: '800px', marginBottom: '2rem' }}>
            Clinical-grade critical care, advanced medical equipment, and ICU-trained nursing staff, ensuring hospital-level recovery and observation in the safety and comfort of your home.
          </p>
          <div className="hero-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn btn-emergency">
              <span className="icon-placeholder">📞</span> Call Now for Urgent Setup
            </button>
            <button className="btn btn-secondary">
              <span className="icon-placeholder">💬</span> WhatsApp Requirements
            </button>
          </div>
        </div>
      </section>

      {/* Service Overview & Details */}
      <section className="service-overview section-padding">
        <div className="container">
          <div className="stack-lg">
            <div className="overview-header" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
              <h2 className="heading-section">Comprehensive Critical Care Support</h2>
              <p className="text-body-large" style={{ marginTop: '1rem' }}>
                Transitioning from a hospital ICU to home requires precise medical support. We provide end-to-end critical care infrastructure.
              </p>
            </div>

            <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
              {[
                { icon: '🫁', title: 'Oxygen Support', desc: 'Continuous oxygen supply via concentrators or cylinders.' },
                { icon: '👩‍⚕️', title: 'ICU-Trained Nurses', desc: 'Verified nurses skilled in critical patient monitoring and intervention.' },
                { icon: '🛏️', title: 'Hospital Bed Setup', desc: 'Fully functional, motorized or manual fowler beds for patient comfort.' },
                { icon: '📈', title: 'Patient Monitoring', desc: 'Multipara monitors to continuously track vitals like ECG, SpO2, and BP.' },
                { icon: '⚕️', title: 'Suction Machine', desc: 'Professional airway clearance and fluid management support.' },
                { icon: '🤝', title: 'Care Coordination', desc: 'Seamless integration with your primary treating physician.' }
              ].map((feature, idx) => (
                <div key={idx} className="card card-service" style={{ padding: '1.5rem', backgroundColor: 'var(--clr-bg-alt)', border: 'none' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{feature.icon}</div>
                  <h3 className="heading-sub">{feature.title}</h3>
                  <p className="text-body" style={{ marginTop: '0.5rem', color: 'var(--clr-text-muted)' }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs This Service & Benefits */}
      <section className="service-target section-padding" style={{ backgroundColor: 'var(--clr-bg-alt)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
            <div>
              <h2 className="heading-section" style={{ marginBottom: '1.5rem' }}>Who Needs This Service?</h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Post-ICU discharge patients', 'Oxygen-dependent patients', 'Stroke recovery & neurological patients', 'Advanced post-surgery recovery', 'Serious elderly care cases requiring continuous monitoring'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '1.0625rem', color: 'var(--clr-text-main)', fontWeight: '500' }}>
                    <span style={{ color: 'var(--clr-primary)' }}>✅</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ backgroundColor: 'var(--clr-bg-main)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
              <h2 className="heading-section" style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Why Choose Care At Home?</h2>
              <p className="text-body" style={{ marginBottom: '1.5rem', color: 'var(--clr-text-muted)' }}>
                We bring hospital-level safety into the familiar, infection-reduced environment of your own home, backed by trusted local accountability in Ranchi.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ padding: '0.5rem', backgroundColor: 'rgba(15, 76, 129, 0.1)', borderRadius: '50%' }}>👨‍⚕️</div>
                  <span style={{ fontWeight: '600', color: 'var(--clr-primary-dark)' }}>Verified ICU Support Staff</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ padding: '0.5rem', backgroundColor: 'rgba(15, 76, 129, 0.1)', borderRadius: '50%' }}>📍</div>
                  <span style={{ fontWeight: '600', color: 'var(--clr-primary-dark)' }}>Trusted Local Response</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <div style={{ padding: '0.5rem', backgroundColor: 'rgba(15, 76, 129, 0.1)', borderRadius: '50%' }}>⭐</div>
                  <span style={{ fontWeight: '600', color: 'var(--clr-primary-dark)' }}>Professional Clinical Care</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="service-process section-padding">
        <div className="container">
          <h2 className="heading-section" style={{ textAlign: 'center', marginBottom: '3rem' }}>How ICU Setup Works</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {[
              { step: '01', title: 'Urgent Consultation', desc: 'Call us to share the patient’s medical summary and immediate needs.' },
              { step: '02', title: 'Medical Assessment', desc: 'We coordinate with doctors to finalize the required equipment and staff.' },
              { step: '03', title: 'Equipment Setup', desc: 'Rapid local delivery and installation of all medical devices.' },
              { step: '04', title: 'Care Commences', desc: 'ICU-trained nursing staff takes charge of patient monitoring.' }
            ].map((process, idx) => (
              <div key={idx} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--clr-primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 'bold', margin: '0 auto 1rem auto' }}>
                  {process.step}
                </div>
                <h3 className="heading-sub" style={{ marginBottom: '0.5rem' }}>{process.title}</h3>
                <p className="text-small">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="service-faq section-padding" style={{ backgroundColor: 'var(--clr-bg-alt)' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="heading-section" style={{ textAlign: 'center', marginBottom: '2rem' }}>Common Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ backgroundColor: 'var(--clr-bg-main)', border: '1px solid var(--clr-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <button 
                  onClick={() => toggleFaq(index)}
                  style={{ width: '100%', textAlign: 'left', padding: '1.5rem', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', fontSize: '1.0625rem', fontWeight: '600', color: 'var(--clr-primary-dark)' }}
                >
                  {faq.question}
                  <span style={{ fontSize: '1.25rem', transform: activeFaq === index ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s ease', color: 'var(--clr-primary)' }}>+</span>
                </button>
                {activeFaq === index && (
                  <div style={{ padding: '0 1.5rem 1.5rem 1.5rem', borderTop: '1px solid var(--clr-border)', color: 'var(--clr-text-muted)', fontSize: '0.9375rem', lineHeight: '1.6', paddingTop: '1rem' }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="final-cta section-padding" style={{ backgroundColor: 'var(--clr-primary-dark)', color: 'white', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 className="heading-section" style={{ color: 'white', marginBottom: '1rem' }}>Require Critical Care Support Now?</h2>
          <p className="text-body-large" style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '2rem' }}>
            Our local Ranchi team is ready to assist with emergency setups and professional ICU nursing. 
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn" style={{ backgroundColor: 'white', color: 'var(--clr-primary-dark)' }}>
              📞 Call Now
            </button>
            <button className="btn btn-secondary">
              💬 WhatsApp Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IcuAtHome;