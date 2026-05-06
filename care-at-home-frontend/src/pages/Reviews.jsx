import React, { useState } from 'react';
import './Reviews.css';

const reviewsData = [
  {
    id: 1,
    serviceCategory: 'Medical Equipment Rental',
    quote: 'We urgently needed an oxygen concentrator for my father at 10 PM. The Care At Home team delivered and set it up within hours. Their coordination was seamless and brought us immense relief during a stressful time.',
    name: 'Amit S.',
    relation: 'Son of Patient',
    location: 'Ashok Nagar, Ranchi'
  },
  {
    id: 2,
    serviceCategory: 'Elderly Care',
    quote: 'We engaged them for my mother’s daily care. The caregiver is patient, hygienic, and extremely polite. Even when she took a sick leave, a replacement was arranged the next day without any hassle.',
    name: 'Priya M.',
    relation: 'Daughter of Senior Citizen',
    location: 'Doranda, Ranchi'
  },
  {
    id: 3,
    serviceCategory: 'Home Nursing',
    quote: 'Excellent wound dressing service after my husband’s surgery. The nurse was punctual, handled everything with great professional care, and made sure the recovery process was completely comfortable at home.',
    name: 'Sunita R.',
    relation: 'Post-Surgery Recovery Family',
    location: 'Harmu, Ranchi'
  },
  {
    id: 4,
    serviceCategory: 'ICU at Home',
    quote: 'Setting up an ICU at home seemed daunting, but their team handled the monitors, medical setup, and provided 24/7 nursing flawlessly. Truly grateful for their immediate response and continuous critical support.',
    name: 'Rajesh V.',
    relation: 'Brother of Patient',
    location: 'Bariatu, Ranchi'
  },
  {
    id: 5,
    serviceCategory: 'Doctor Visit at Home',
    quote: 'My grandfather was too weak to travel to the clinic. The doctor arrived promptly, did a thorough checkup, and guided us with the prescription. Such a convenient and respectful service.',
    name: 'Neha K.',
    relation: 'Granddaughter of Patient',
    location: 'Lalpur, Ranchi'
  },
  {
    id: 6,
    serviceCategory: 'Patient Attendant',
    quote: 'The attendant assigned to us for my bedridden father is very dedicated. From feeding to mobility assistance, he handles everything with a smile. It gives our family great peace of mind.',
    name: 'Vikram D.',
    relation: 'Son of Patient',
    location: 'Hinoo, Ranchi'
  }
];

const categories = [
  'All Stories',
  'Home Nursing',
  'Elderly Care',
  'ICU at Home',
  'Medical Equipment Rental',
  'Patient Attendant',
  'Doctor Visit at Home'
];

const Reviews = () => {
  const [activeCategory, setActiveCategory] = useState('All Stories');

  const filteredReviews = activeCategory === 'All Stories' 
    ? reviewsData 
    : reviewsData.filter(review => review.serviceCategory === activeCategory);

  return (
    <div className="reviews-page">
      
      {/* 1. Hero Section */}
      <section className="reviews-hero section-padding">
        <div className="container reviews-hero-container stack-md">
          <h1 className="heading-hero">Stories of Trust</h1>
          <p className="text-body-large">
            Read real experiences from families across Ranchi who welcomed us into their homes and trusted us with the care, recovery, and comfort of their loved ones.
          </p>
        </div>
      </section>

      {/* 2. Reviews Grid with Filters */}
      <section className="section-padding">
        <div className="container">
          
          {/* Categories */}
          <div className="reviews-filter-container">
            {categories.map((category, index) => (
              <button 
                key={index}
                className={ilter-btn }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="reviews-grid">
            {filteredReviews.map((review) => (
              <div key={review.id} className="card review-card">
                <div className="review-service-badge">{review.serviceCategory}</div>
                <div className="review-quote-mark">“</div>
                <p className="review-text">{review.quote}</p>
                <div className="review-author-box">
                  <span className="review-author-name">{review.name}</span>
                  <span className="review-relation-tag">{review.relation}</span>
                  <span className="text-small" style={{ marginTop: '4px' }}>?? {review.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Local Trust Reinforcement */}
          <div className="local-trust-banner stack-sm">
            <h3 className="heading-sub">Deeply Rooted in the Ranchi Community</h3>
            <p className="text-body">
              Every review represents a family in our city that we’ve had the privilege to serve. We build long-term relationships based on reliability, compassion, and professional medical standards.
            </p>
          </div>

        </div>
      </section>

      {/* Final Trust CTA */}
      <section className="final-trust-cta section-padding">
        <div className="container stack-md" style={{ maxWidth: '700px', marginInline: 'auto' }}>
          <h2 className="heading-section" style={{ color: 'white' }}>Let Us Care for Your Family</h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)' }}>
            Join the hundreds of families in Ranchi who rely on Care At Home for professional, compassionate medical support.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
            <button className="btn" style={{ backgroundColor: 'white', color: 'var(--clr-primary-dark)' }}>
              <span className="icon-placeholder">??</span> Call Us Today
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Reviews;
