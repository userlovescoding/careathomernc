import React, { useState } from 'react';
import './FAQ.css';

const faqCategories = [
  {
    title: 'General & Process',
    questions: [
      {
        q: 'How quickly can staff be arranged?',
        a: 'We understand that healthcare needs are often urgent. Depending on your exact requirements and location in Ranchi, we typically arrange nursing staff, attendants, or equipment within a few hours to the next day.'
      },
      {
        q: 'Are your nurses and attendants verified?',
        a: 'Absolutely. Every caregiver, nurse, and attendant undergoes a strict background check, identity verification, and professional skill assessment before being assigned to any family.'
      },
      {
        q: 'What if caregiver replacement is needed?',
        a: 'Your peace of mind is our priority. If a caregiver goes on leave or if you feel the need for a change, we coordinate a seamless replacement to ensure your loved one’s care is never interrupted.'
      }
    ]
  },
  {
    title: 'Nursing & Patient Attendants',
    questions: [
      {
        q: 'Can day shift and night shift support be arranged?',
        a: 'Yes, we offer highly flexible care plans. You can opt for 12-hour day shifts, 12-hour night shifts, or comprehensive 24-hour round-the-clock support depending on the patient’s condition.'
      },
      {
        q: 'What duties do patient attendants perform?',
        a: 'Patient attendants assist with daily living activities, including personal hygiene, sponge baths, feeding, mobility support, and basic medication reminders, providing compassionate non-clinical care.'
      }
    ]
  },
  {
    title: 'Medical Equipment Rental & ICU at Home',
    questions: [
      {
        q: 'Is urgent medical equipment rental available?',
        a: 'Yes, we prioritize rapid local delivery for critical equipment like oxygen concentrators, hospital beds (manual/motorized), BiPAP/CPAP machines, and wheelchairs.'
      },
      {
        q: 'Do you support complete ICU setup at home?',
        a: 'Yes. For patients requiring critical care post-discharge, we provide clinical-grade equipment setups, specialized ICU-trained nurses, and continuous monitoring right in your home.'
      }
    ]
  },
  {
    title: 'Doctor Visit at Home',
    questions: [
      {
        q: 'Are doctor visits available for elderly patients?',
        a: 'Yes, our home consultation service is especially beneficial for elderly patients and those with limited mobility, allowing them to receive expert diagnosis and care without the physical strain of traveling to a hospital.'
      },
      {
        q: 'Can doctors assist with post-surgery follow-ups?',
        a: 'Certainly. Our visiting physicians can monitor recovery progress, adjust prescriptions, and provide crucial medical guidance during the critical post-surgery recovery phase.'
      }
    ]
  }
];

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="faq-page">
      
      {/* 1. Hero Section */}
      <section className="faq-hero section-padding">
        <div className="container faq-hero-container stack-md">
          <h1 className="heading-hero">Frequently Asked Questions</h1>
          <p className="text-body-large">
            We believe in complete transparency. Find clear, practical answers about our home healthcare services, staff verification, and care processes below.
          </p>
        </div>
      </section>

      {/* 2. Main Content */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          
          {/* Quick Contact Banner */}
          <div className="quick-contact-banner">
            <div className="quick-contact-text">
              Prefer to speak with us directly instead of reading?
            </div>
            <button className="btn btn-primary">
              <span className="icon-placeholder">??</span> Call Now for Quick Answers
            </button>
          </div>

          {/* FAQ Categories */}
          <div className="faq-content">
            {faqCategories.map((category, catIndex) => (
              <div key={catIndex} className="faq-category-block">
                <h3 className="faq-category-title">{category.title}</h3>
                <div className="faq-accordion-group">
                  {category.questions.map((faq, qIndex) => {
                    const uniqueId = ${catIndex}-;
                    const isActive = activeId === uniqueId;

                    return (
                      <div key={uniqueId} className={aq-page-item }>
                        <button 
                          className="faq-page-question" 
                          onClick={() => toggleFAQ(uniqueId)}
                          aria-expanded={isActive}
                        >
                          {faq.q}
                          <span className="faq-page-icon">+</span>
                        </button>
                        <div className="faq-page-answer">
                          <div className="faq-page-answer-text">
                            {faq.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Final CTA */}
      <section className="faq-final-cta section-padding">
        <div className="container stack-md" style={{ maxWidth: '700px', marginInline: 'auto' }}>
          <h2 className="heading-section" style={{ color: 'white' }}>Still Have Questions?</h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)' }}>
            Every family’s medical needs are unique. Contact our care coordinators today for a free, personalized consultation.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
            <button className="btn" style={{ backgroundColor: 'white', color: 'var(--clr-primary-dark)' }}>
              <span className="icon-placeholder">??</span> Call Us Today
            </button>
            <button className="btn btn-secondary">
              <span className="icon-placeholder">??</span> Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default FAQ;
