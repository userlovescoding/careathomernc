import React, { useState } from 'react';
import './FAQSection.css';

const faqData = [
  {
    id: 1,
    question: 'How quickly can staff or equipment be arranged?',
    answer: 'Depending on the urgency and your location in Ranchi, we can typically arrange caregivers, nurses, or medical equipment within a few hours to the next day.'
  },
  {
    id: 2,
    question: 'Are your nurses and patient attendants verified?',
    answer: 'Yes. All our nursing staff and patient attendants undergo strict background checks and professional skill verification to ensure your family’s safety and well-being.'
  },
  {
    id: 3,
    question: 'What if I need a replacement caregiver?',
    answer: 'If your caregiver goes on leave or if you feel the need for a change, we coordinate and provide a prompt replacement to ensure continuous care without disruption.'
  },
  {
    id: 4,
    question: 'Do you provide day shift and night shift attendants?',
    answer: 'Yes, we offer flexible care plans including 12-hour day shifts, 12-hour night shifts, and comprehensive 24-hour round-the-clock support.'
  },
  {
    id: 5,
    question: 'Is urgent medical equipment rental available?',
    answer: 'Yes, we provide prompt local delivery for essential medical equipment, including oxygen concentrators, hospital beds, and wheelchairs across Ranchi.'
  },
  {
    id: 6,
    question: 'Which areas in Ranchi do you serve?',
    answer: 'We serve major residential areas in Ranchi including Ashok Nagar, Doranda, Hinoo, Harmu, Lalpur, Bariatu, Morabadi, and surrounding zones.'
  },
  {
    id: 7,
    question: 'Is home nursing available for post-surgery recovery?',
    answer: 'Absolutely. Our specialized nurses are trained in wound management, medication administration, and monitoring vital signs to ensure safe post-operative recovery at home.'
  },
  {
    id: 8,
    question: 'How do I request a service?',
    answer: 'It’s simple. Just call us directly or send a message on WhatsApp. Our care coordinators will listen to your requirements and arrange the exact support you need.'
  }
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section section-padding">
      <div className="container">
        
        <div className="faq-header stack-sm">
          <h2 className="heading-section">Frequently Asked Questions</h2>
          <p className="text-body-large">
            Clear answers to help you make informed decisions about your family's care.
          </p>
        </div>

        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div 
              key={faq.id} 
              className={aq-item }
            >
              <button 
                className="faq-question" 
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                {faq.question}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-text">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta-banner">
          <span className="faq-cta-text">Still have questions about our services?</span>
          <button className="btn btn-primary">
            <span className="icon-placeholder">??</span> Call Us Directly
          </button>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
