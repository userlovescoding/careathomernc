import React from 'react';
import './WhyTrustUsSection.css';

const trustFeatures = [
  {
    id: 1,
    icon: '🛡️',
    title: 'Verified Nursing Staff',
    description: 'Rigorously vetted, background-checked professionals ensuring your family’s safety, security, and peace of mind at home.'
  },
  {
    id: 2,
    icon: '⚡',
    title: 'Fast Local Deployment',
    description: 'Prompt coordination and quick arrival of care staff across Ranchi. We respond quickly because medical needs cannot wait.'
  },
  {
    id: 3,
    icon: '🕒',
    title: '24/7 Support Availability',
    description: 'Healthcare needs do not follow a schedule. We are always just one call away, ready to assist your family day or night.'
  },
  {
    id: 4,
    icon: '🔄',
    title: 'Seamless Replacement',
    description: 'Reliable backup coordination. If a caregiver takes leave or an emergency arises, we ensure continuous care without disruption.'
  },
  {
    id: 5,
    icon: '❤️',
    title: 'Compassionate Care',
    description: 'We treat your loved ones like our own. Professional medical expertise delivered with genuine warmth, patience, and respect.'
  },
  {
    id: 6,
    icon: '🤝',
    title: 'Deep Local Roots',
    description: 'Years of building relationships and earning the lasting trust of hospitals, doctors, and families throughout our community.'
  }
];

const WhyTrustUsSection = () => {
  return (
    <section className="why-trust-section section-padding">
      <div className="container">
        
        <div className="why-trust-header stack-sm">
          <h2 className="heading-section">Why Families Trust Us</h2>
          <p className="text-body-large">
            Inviting a caregiver into your home requires absolute trust. We honor that responsibility through rigorous standards, local reliability, and deep compassion.
          </p>
        </div>

        <div className="why-trust-grid">
          {trustFeatures.map((feature) => (
            <div key={feature.id} className="trust-card">
              <div className="trust-card-icon">
                {feature.icon}
              </div>
              <h3 className="trust-card-title">{feature.title}</h3>
              <p className="trust-card-text">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyTrustUsSection;