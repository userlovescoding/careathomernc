import React, { useState } from 'react';
import './ElderlyCare.css';

const ElderlyCare = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Are caregivers trained and verified?",
      answer: "Yes, all our caregivers undergo rigorous background checks and professional training to ensure they provide safe, compassionate, and reliable care for the elderly."
    },
    {
      question: "Is day shift and night shift support available?",
      answer: "Absolutely. We offer flexible care plans, including 12-hour day shifts, 12-hour night shifts, and complete 24-hour live-in support based on your family's needs."
    },
    {
      question: "Can female caregivers be arranged?",
      answer: "Yes. We understand the importance of comfort and dignity, and can arrange male or female caregivers specifically tailored to the patient's preference."
    },
    {
      question: "What if caregiver replacement is needed?",
      answer: "If a caregiver goes on leave or if you feel the need for a change, we coordinate and provide a prompt, seamless replacement without disrupting the care routine."
    }
  ];

  return (
    <div className="page-elderly-care">
      
      {/* 1. Hero Section */}
      <section className="service-hero section-padding">
        <div className="container service-hero-container">
          <div className="hero-local-badge">?? Trusted Elder Care in Ranchi</div>
          <h1 className="heading-hero">Elderly Care Services in Ranchi</h1>
          <p className="text-body-large service-hero-sub">
            Compassionate, professional, and respectful home assistance for your aging parents. We ensure their comfort, safety, and dignity, giving your family complete emotional peace.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary">
              <span className="icon-placeholder">??</span> Call Now
            </button>
            <button className="btn btn-secondary">
              <span className="icon-placeholder">??</span> WhatsApp Us
            </button>
          </div>
        </div>
      </section>

      {/* 2. Service Overview */}
      <section className="service-overview section-padding section-bg-alt">
        <div className="container">
          <div className="section-header stack-sm">
            <h2 className="heading-section">Comprehensive Support for Daily Life</h2>
            <p className="text-body-large">Dedicated assistance tailored to maintain dignity and independence at home.</p>
          </div>
          <div className="overview-grid">
            <div className="overview-card">? Daily living assistance</div>
            <div className="overview-card">? Hygiene and bathing help</div>
            <div className="overview-card">? Feeding assistance</div>
            <div className="overview-card">? Medication reminders</div>
            <div className="overview-card">? Companionship</div>
            <div className="overview-card">? Mobility support</div>
            <div className="overview-card">? Fall prevention help</div>
            <div className="overview-card">? Post-hospital recovery support</div>
          </div>
        </div>
      </section>

      {/* 3. Who Needs This Service & 4. Benefits (Split Layout) */}
      <section className="service-details section-padding">
        <div className="container details-container">
          <div className="details-column">
            <h3 className="heading-sub">Who Needs This Service?</h3>
            <ul className="details-list">
              <li>Senior citizens living alone</li>
              <li>Elderly patients with mobility issues</li>
              <li>Seniors requiring dementia or Alzheimer's support</li>
              <li>Patients in long-term post-hospital recovery</li>
              <li>Family members needing professional respite and assistance</li>
            </ul>
          </div>
          <div className="details-column benefits-column">
            <h3 className="heading-sub">The Core Benefits</h3>
            <div className="benefit-items">
              <div className="benefit-item"><strong>Comfort:</strong> Aging peacefully in their own familiar environment.</div>
              <div className="benefit-item"><strong>Dignity:</strong> Respectful assistance with highly personal tasks.</div>
              <div className="benefit-item"><strong>Safety:</strong> Constant monitoring to prevent falls and emergencies.</div>
              <div className="benefit-item"><strong>Emotional Peace:</strong> Relief for family members knowing their parents are safe.</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Process Section & 6. Why Choose Us */}
      <section className="service-process section-padding section-bg-alt">
        <div className="container">
          <div className="process-trust-layout">
            <div className="process-block">
              <h3 className="heading-sub">How Support Begins</h3>
              <div className="step-list">
                <div className="step-item"><span className="step-num">1</span> <strong>Consultation:</strong> We understand your parent's exact needs.</div>
                <div className="step-item"><span className="step-num">2</span> <strong>Caregiver Matching:</strong> Assigning the right verified professional.</div>
                <div className="step-item"><span className="step-num">3</span> <strong>Care Begins:</strong> Compassionate support starts at your home.</div>
                <div className="step-item"><span className="step-num">4</span> <strong>Continuous Coordination:</strong> Ongoing check-ins and replacement support.</div>
              </div>
            </div>
            <div className="trust-block">
              <h3 className="heading-sub">Why Families Trust Us</h3>
              <ul className="details-list">
                <li>Verified, background-checked caregivers</li>
                <li>Trusted local support network in Ranchi</li>
                <li>Compassionate, patient-first approach</li>
                <li>Reliable emergency and backup coordination</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="service-faq section-padding">
        <div className="container">
          <div className="section-header stack-sm">
            <h2 className="heading-section">Frequently Asked Questions</h2>
          </div>
          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div key={index} className={aq-item  + (activeFaq === index ? 'active' : '')}>
                <button className="faq-question" onClick={() => toggleFaq(index)}>
                  {faq.question}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-text">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="service-final-cta section-padding">
        <div className="container text-center stack-md">
          <h2 className="heading-section text-white">Ensure the Best Care for Your Parents</h2>
          <p className="text-body-large text-white-muted">
            Reach out today to discuss a tailored care plan for your loved ones.
          </p>
          <div className="hero-actions justify-center">
            <button className="btn btn-primary btn-inverted">
              <span className="icon-placeholder">??</span> Call Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ElderlyCare;
