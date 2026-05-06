import React from 'react';
import { Link } from 'react-router-dom';
import './TestimonialsSection.css';

const testimonialsData = [
  {
    id: 1,
    quote: "We needed an oxygen concentrator and a hospital bed urgently for my father post-discharge. The Care At Home team delivered and set it up within hours. Their coordination was seamless during a very stressful time.",
    name: "Amit S.",
    relation: "Son of Patient",
    service: "Medical Equipment Rental"
  },
  {
    id: 2,
    quote: "We engaged them for my mother's daily care. The caregiver is patient, hygienic, and very polite. Even when she took a sick leave, a replacement was arranged the next day without any hassle.",
    name: "Priya M.",
    relation: "Daughter of Senior Citizen",
    service: "Elderly Care"
  },
  {
    id: 3,
    quote: "Excellent wound dressing service after my husband's surgery. The nurse was punctual, handled everything with great professional care, and made sure the recovery process was comfortable at home.",
    name: "Sunita R.",
    relation: "Post-Surgery Recovery Family",
    service: "Home Nursing"
  },
  {
    id: 4,
    quote: "Setting up an ICU at home seemed daunting, but their team handled the monitors, medical setup, and provided 24/7 nursing flawlessly. Truly grateful for their immediate response and continuous support.",
    name: "Rajesh V.",
    relation: "Brother of Patient",
    service: "ICU at Home"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="testimonials-section section-padding">
      <div className="container">
        
        <div className="testimonials-header stack-sm">
          <h2 className="heading-section">Stories of Trust</h2>
          <p className="text-body-large">
            Real experiences from families across Ranchi who trusted us with the care and recovery of their loved ones.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-quote-icon">“</div>
              <p className="testimonial-text">"{testimonial.quote}"</p>
              
              <div className="testimonial-author-area">
                <span className="testimonial-author-name">{testimonial.name}</span>
                <span className="testimonial-relation-tag">{testimonial.relation}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-footer">
          <Link to="/reviews" className="btn btn-outline">
            Read More Success Stories
          </Link>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
