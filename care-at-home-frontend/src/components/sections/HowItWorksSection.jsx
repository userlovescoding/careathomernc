import React from 'react';
import './HowItWorksSection.css';

const processSteps = [
  {
    id: 1,
    num: '01',
    title: 'Contact Us',
    description: 'Reach out via phone call or WhatsApp. Share your preliminary requirements and patient condition.'
  },
  {
    id: 2,
    num: '02',
    title: 'Care Assessment',
    description: 'Our health experts assess your exact needs—whether it’s nursing, elderly care, ICU setup, or equipment rental.'
  },
  {
    id: 3,
    num: '03',
    title: 'Fast Arrangement',
    description: 'We quickly assign verified, professional caregivers or dispatch the required medical equipment to your location.'
  },
  {
    id: 4,
    num: '04',
    title: 'Care Begins',
    description: 'Professional care begins at your home, backed by our continuous coordination and reliable replacement support.'
  }
];

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section section-padding">
      <div className="container">
        
        <div className="how-it-works-header stack-sm">
          <h2 className="heading-section">How It Works</h2>
          <p className="text-body-large">
            Securing reliable home healthcare should be stress-free. We follow a simple, transparent process to deliver support when you need it most.
          </p>
        </div>

        <div className="process-grid">
          {processSteps.map((step) => (
            <div key={step.id} className="process-step">
              <div className="step-number">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="emergency-note">
          <span className="emergency-note-title">?? Urgent Healthcare Need?</span>
          <span className="emergency-note-text">
            For critical ICU setups or emergency medical equipment rentals, we prioritize rapid local deployment. Let us know immediately on call.
          </span>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
