import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  return (
    <div className="page-about">
      
      {/* 1. Hero Section */}
      <section className="about-hero section-padding">
        <div className="container stack-md" style={{ maxWidth: '800px', margin: '0 auto' }}>
          <div className="hero-local-badge" style={{ margin: '0 auto' }}>
            ?? Deeply Rooted in Ranchi
          </div>
          <h1 className="heading-hero">About Care At Home</h1>
          <p className="text-body-large">
            We believe that the best healing happens where you feel safest. We are dedicated to providing compassionate, professional, and reliable home healthcare to families across Ranchi.
          </p>
        </div>
      </section>

      {/* 2. Our Story Section */}
      <section className="about-story section-padding">
        <div className="container about-story-grid">
          <div className="stack-md">
            <h2 className="heading-section">Our Story</h2>
            <p className="text-body" style={{ fontSize: '1.0625rem', lineHeight: '1.7' }}>
              Care At Home was born from a simple, profound realization: families navigating illness or recovery shouldn't have to choose between professional medical care and the comfort of their own home.
            </p>
            <p className="text-body" style={{ fontSize: '1.0625rem', lineHeight: '1.7' }}>
              We saw the stress hospital visits placed on elderly patients and the anxiety families faced when managing post-surgery care alone. We established Care At Home to bridge this gap, bringing verified medical professionals and essential healthcare equipment directly to the doorsteps of Ranchi residents.
            </p>
            <p className="text-body" style={{ fontSize: '1.0625rem', lineHeight: '1.7', fontWeight: '500', color: 'var(--clr-primary-dark)' }}>
              Today, we are proud to be a trusted partner for hundreds of families, ensuring their loved ones receive the care they deserve, with the dignity they have earned.
            </p>
          </div>
          <div className="about-visual-placeholder">
            [Visual Placeholder]<br/>
            Image: A candid, warm moment between a caregiver and an elderly patient at home.<br/>
            Style: Authentic, human, non-corporate.
          </div>
        </div>
      </section>

      {/* 3. Mission + Values Section */}
      <section className="about-values section-padding" style={{ backgroundColor: 'var(--clr-bg-alt)' }}>
        <div className="container stack-lg">
          <div className="text-center stack-sm" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 className="heading-section">The Values That Guide Us</h2>
            <p className="text-body-large">
              Healthcare is not just a service; it is a profound responsibility. Our core values dictate every action we take.
            </p>
          </div>
          
          <div className="values-grid">
            <div className="card">
              <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>??</div>
              <h3 className="heading-sub">Dignity</h3>
              <p className="text-small" style={{ marginTop: 'var(--space-2)' }}>We treat every patient with absolute respect, honoring their autonomy and personal boundaries during vulnerable times.</p>
            </div>
            <div className="card">
              <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>??</div>
              <h3 className="heading-sub">Compassion</h3>
              <p className="text-small" style={{ marginTop: 'var(--space-2)' }}>Medical expertise must be paired with genuine warmth. We care for your family as if they were our own.</p>
            </div>
            <div className="card">
              <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>???</div>
              <h3 className="heading-sub">Reliability</h3>
              <p className="text-small" style={{ marginTop: 'var(--space-2)' }}>When you need us, we are there. We ensure consistent care, prompt equipment delivery, and reliable replacement support.</p>
            </div>
            <div className="card">
              <div style={{ fontSize: '1.5rem', marginBottom: 'var(--space-2)' }}>??</div>
              <h3 className="heading-sub">Professional Care</h3>
              <p className="text-small" style={{ marginTop: 'var(--space-2)' }}>We uphold strict clinical standards. Our staff is trained to handle complex medical needs safely and effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Team Trust Section */}
      <section className="about-team section-padding">
        <div className="container">
          <div className="team-trust-banner">
            <div className="trust-stat">
              <div className="trust-stat-icon">?????</div>
              <h3 className="trust-stat-title">Verified Nurses</h3>
              <p className="trust-stat-desc">Rigorous background checks and clinical skill verification for all nursing staff.</p>
            </div>
            <div className="trust-stat">
              <div className="trust-stat-icon">??</div>
              <h3 className="trust-stat-title">Trained Attendants</h3>
              <p className="trust-stat-desc">Compassionate caregivers trained specifically in patient handling and hygiene.</p>
            </div>
            <div className="trust-stat">
              <div className="trust-stat-icon">??</div>
              <h3 className="trust-stat-title">Responsible Coordination</h3>
              <p className="trust-stat-desc">A dedicated backend team ensuring seamless scheduling, replacements, and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Families Choose Us & 6. Service Areas Connection */}
      <section className="about-local-roots section-padding" style={{ backgroundColor: 'var(--clr-bg-alt)' }}>
        <div className="container about-story-grid">
          <div className="about-visual-placeholder">
            [Visual Placeholder]<br/>
            Image: The Care At Home coordination team or a recognizable Ranchi community element.<br/>
            Style: Trustworthy, local presence.
          </div>
          <div className="stack-md">
            <h2 className="heading-section">Deep Local Roots in Ranchi</h2>
            <p className="text-body" style={{ fontSize: '1.0625rem', lineHeight: '1.7' }}>
              We are not a faceless national corporation. We are your neighbors, deeply integrated into the Ranchi community. 
            </p>
            <p className="text-body" style={{ fontSize: '1.0625rem', lineHeight: '1.7' }}>
              Families choose us because they know we understand the local landscape. Whether it's navigating rapid equipment delivery to Ashok Nagar or arranging continuous nursing care in Harmu, our local presence means faster response times and a deeper layer of accountability.
            </p>
            <ul className="stack-sm" style={{ listStyle: 'none', padding: 0, marginTop: 'var(--space-4)' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontWeight: '500' }}>
                <span style={{ color: 'var(--clr-secondary)' }}>?</span> Long-term reliability you can hold accountable.
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontWeight: '500' }}>
                <span style={{ color: 'var(--clr-secondary)' }}>?</span> Familiarity with local hospitals and discharge protocols.
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', fontWeight: '500' }}>
                <span style={{ color: 'var(--clr-secondary)' }}>?</span> A reputation built purely on local family referrals.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="about-cta section-padding" style={{ backgroundColor: 'var(--clr-primary-dark)', color: 'white', textAlign: 'center' }}>
        <div className="container stack-md" style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.5rem)', fontWeight: '700' }}>Trust Your Family with Ours</h2>
          <p style={{ fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)' }}>
            Experience professional, compassionate healthcare without leaving the comfort of your home. Reach out to our Ranchi team to discuss your family's needs.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
            <Link to="/contact" className="btn" style={{ backgroundColor: 'white', color: 'var(--clr-primary-dark)' }}>
              <span className="icon-placeholder">??</span> Contact Us Today
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
