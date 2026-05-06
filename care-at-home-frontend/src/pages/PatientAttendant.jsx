import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PatientAttendant = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is day shift and night shift support available?",
      answer: "Yes, we provide flexible care options, including 12-hour day shifts, 12-hour night shifts, and 24-hour live-in support depending on your family's needs."
    },
    {
      question: "Can female attendants be arranged?",
      answer: "Absolutely. We can arrange both male and female attendants based on the patient's comfort and specific requirements."
    },
    {
      question: "What if an urgent replacement is needed?",
      answer: "If your assigned attendant takes a leave or if you request a change, we ensure a prompt and seamless replacement to maintain continuous care."
    },
    {
      question: "Are attendants trained and verified?",
      answer: "Yes, all our patient attendants undergo rigorous background checks and possess practical experience in handling daily caregiving and hygiene assistance."
    }
  ];

  return (
    <div className="page-patient-attendant">
      
      {/* 1. Hero Section */}
      <section className="service-hero section-padding" style={{ backgroundColor: 'var(--clr-bg-alt)' }}>
        <div className="container">
          <div className="stack-lg" style={{ maxWidth: '800px' }}>
            <div className="hero-local-badge" style={{ display: 'inline-flex', padding: 'var(--space-2) var(--space-4)', backgroundColor: 'rgba(15, 76, 129, 0.1)', color: 'var(--clr-primary)', borderRadius: '50px', fontWeight: '600', fontSize: '0.875rem', width: 'fit-content' }}>
              ?? Trusted Care in Ranchi
            </div>
            <h1 className="heading-hero">Patient Attendant Services in Ranchi</h1>
            <p className="text-body-large">
              Compassionate, reliable daily assistance for your loved ones. We provide verified attendants to ensure comfort, dignity, and safety right at home.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
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
      <section className="section-padding">
        <div className="container">
          <div className="stack-sm" style={{ marginBottom: 'var(--space-12)', textAlign: 'center', maxWidth: '800px', marginInline: 'auto' }}>
            <h2 className="heading-section">Comprehensive Daily Support</h2>
            <p className="text-body-large">Our patient attendants assist with all essential daily activities, ensuring a safe and supportive environment.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 'var(--space-6)' }}>
            {[
              { title: 'Hygiene & Bathing', desc: 'Assistance with sponge baths, showering, toileting, and grooming.' },
              { title: 'Feeding Support', desc: 'Help with timely meals, dietary monitoring, and hydration.' },
              { title: 'Mobility Assistance', desc: 'Safe transfers from bed to wheelchair, and support during walking.' },
              { title: 'Medication Reminders', desc: 'Ensuring prescribed medicines are taken safely and on time.' },
              { title: 'Bedridden Care', desc: 'Turning, repositioning, and diaper changes to prevent bedsores.' },
              { title: 'Companionship', desc: 'Providing emotional support and a positive, caring presence.' }
            ].map((feature, i) => (
              <div key={i} className="card stack-sm">
                <h3 style={{ fontSize: '1.25rem', color: 'var(--clr-primary-dark)' }}>{feature.title}</h3>
                <p className="text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Who Needs This Service & 4. Benefits */}
      <section className="section-padding" style={{ backgroundColor: 'var(--clr-bg-alt)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-12)' }}>
          <div className="stack-md">
            <h2 className="heading-section">Who Needs This Service?</h2>
            <ul className="stack-sm" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '10px' }}><span>?</span> Elderly patients needing daily help</li>
              <li style={{ display: 'flex', gap: '10px' }}><span>?</span> Bedridden or paralyzed individuals</li>
              <li style={{ display: 'flex', gap: '10px' }}><span>?</span> Patients in long-term recovery</li>
              <li style={{ display: 'flex', gap: '10px' }}><span>?</span> Individuals requiring post-surgery mobility assistance</li>
              <li style={{ display: 'flex', gap: '10px' }}><span>?</span> Working families needing day/night caregiver support</li>
            </ul>
          </div>
          <div className="stack-md">
            <h2 className="heading-section">Benefits of Home Attendants</h2>
            <ul className="stack-sm" style={{ listStyle: 'none', padding: 0 }}>
              <li style={{ display: 'flex', gap: '10px' }}><span>???</span> <strong>Safety:</strong> Reduces the risk of falls and home accidents.</li>
              <li style={{ display: 'flex', gap: '10px' }}><span>??</span> <strong>Dignity:</strong> Respectful assistance with personal hygiene.</li>
              <li style={{ display: 'flex', gap: '10px' }}><span>??</span> <strong>Dependability:</strong> Consistent daily routine management.</li>
              <li style={{ display: 'flex', gap: '10px' }}><span>??</span> <strong>Comfort:</strong> Healing and resting in familiar surroundings.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Process & 6. Why Choose Us */}
      <section className="section-padding">
        <div className="container">
          <div className="stack-sm" style={{ marginBottom: 'var(--space-12)', textAlign: 'center' }}>
            <h2 className="heading-section">How It Works</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--space-6)', textAlign: 'center' }}>
            <div className="card">
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>??</div>
              <h3 style={{ fontSize: '1.125rem' }}>1. Share Needs</h3>
              <p className="text-small">Tell us the patient's condition and required shift.</p>
            </div>
            <div className="card">
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>??</div>
              <h3 style={{ fontSize: '1.125rem' }}>2. Match Caregiver</h3>
              <p className="text-small">We assign a verified attendant suited for your family.</p>
            </div>
            <div className="card">
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>??</div>
              <h3 style={{ fontSize: '1.125rem' }}>3. Care Begins</h3>
              <p className="text-small">Attendant arrives and dependable support starts.</p>
            </div>
            <div className="card">
              <div style={{ fontSize: '2rem', marginBottom: '10px' }}>??</div>
              <h3 style={{ fontSize: '1.125rem' }}>4. Ongoing Support</h3>
              <p className="text-small">Continuous coordination and seamless replacements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--clr-bg-alt)' }}>
        <div className="container">
          <div className="stack-sm" style={{ marginBottom: 'var(--space-8)', textAlign: 'center' }}>
            <h2 className="heading-section">Frequently Asked Questions</h2>
          </div>
          <div style={{ maxWidth: '800px', marginInline: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((faq, index) => (
              <div key={index} style={{ backgroundColor: 'var(--clr-bg-main)', border: '1px solid var(--clr-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
                <button 
                  onClick={() => toggleFaq(index)}
                  style={{ width: '100%', textAlign: 'left', padding: 'var(--space-4)', background: 'none', border: 'none', display: 'flex', justifyContent: 'space-between', fontWeight: '600', cursor: 'pointer', color: 'var(--clr-primary-dark)' }}
                >
                  {faq.question}
                  <span>{activeFaq === index ? '-' : '+'}</span>
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
      <section className="section-padding" style={{ backgroundColor: 'var(--clr-primary-dark)', color: 'white', textAlign: 'center' }}>
        <div className="container stack-md" style={{ maxWidth: '600px', marginInline: 'auto' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', fontWeight: '700' }}>Need a Reliable Patient Attendant Today?</h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.125rem' }}>Fast arrangement of verified caregivers in Ranchi to bring peace of mind to your family.</p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', marginTop: 'var(--space-4)', flexWrap: 'wrap' }}>
            <button className="btn" style={{ backgroundColor: 'white', color: 'var(--clr-primary-dark)' }}>
              ?? Call Now
            </button>
            <button className="btn btn-secondary">
              ?? WhatsApp Us
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PatientAttendant;
