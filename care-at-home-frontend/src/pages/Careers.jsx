import React, { useState } from 'react';
import './Careers.css';

const Careers = () => {
  const [formStatus, setFormStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('submitted');
    // Placeholder for actual form submission logic
    setTimeout(() => {
      setFormStatus('idle');
      e.target.reset();
    }, 4000);
  };

  const openRoles = [
    { title: 'Staff Nurse', desc: 'Registered nurses for home-based patient care and ICU setups.', icon: '?????' },
    { title: 'Patient Attendant', desc: 'Compassionate caregivers for daily assistance and hygiene.', icon: '??' },
    { title: 'Elderly Caregiver', desc: 'Dedicated staff for senior citizen companionship and support.', icon: '??' },
    { title: 'Physiotherapist', desc: 'Certified professionals for home-based physical therapy.', icon: '??' },
    { title: 'Healthcare Support Staff', desc: 'Reliable team members for medical equipment handling and coordination.', icon: '??' }
  ];

  return (
    <div className="careers-page">
      
      {/* 1. Hero Section */}
      <section className="careers-hero section-padding">
        <div className="container careers-hero-container stack-md">
          <h1 className="heading-hero">Join Our Care Team</h1>
          <p className="text-body-large">
            Make a real difference in the lives of families across Ranchi. We are looking for compassionate, dedicated professionals to join our trusted home healthcare team.
          </p>
        </div>
      </section>

      {/* 2. Why Work With Us */}
      <section className="section-padding">
        <div className="container stack-lg">
          <div className="text-center stack-sm" style={{ maxWidth: '700px', marginInline: 'auto' }}>
            <h2 className="heading-section">Why Work With Care At Home?</h2>
            <p className="text-body">We value our staff as much as our patients. A supportive environment leads to better care.</p>
          </div>

          <div className="values-grid">
            <div className="value-card stack-sm">
              <div className="value-icon">??</div>
              <h3 className="heading-sub">Meaningful Work</h3>
              <p className="text-small">Provide essential care and see the direct impact of your compassion on local families.</p>
            </div>
            <div className="value-card stack-sm">
              <div className="value-icon">??</div>
              <h3 className="heading-sub">Respectful Environment</h3>
              <p className="text-small">Work with an organization that deeply respects your professional skills and dedication.</p>
            </div>
            <div className="value-card stack-sm">
              <div className="value-icon">??</div>
              <h3 className="heading-sub">Steady Opportunities</h3>
              <p className="text-small">Enjoy long-term stability and consistent opportunities with a growing local healthcare provider.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Open Roles */}
      <section className="section-padding" style={{ backgroundColor: 'var(--clr-bg-alt)' }}>
        <div className="container stack-lg">
          <div className="text-center stack-sm">
            <h2 className="heading-section">Current Openings in Ranchi</h2>
          </div>

          <div className="roles-grid">
            {openRoles.map((role, index) => (
              <div key={index} className="role-card">
                <div className="role-icon">{role.icon}</div>
                <div className="role-info">
                  <h4>{role.title}</h4>
                  <p>{role.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Application Process */}
      <section className="process-section section-padding">
        <div className="container stack-lg">
          <div className="text-center stack-sm">
            <h2 className="heading-section">Simple Hiring Process</h2>
          </div>

          <div className="hiring-process">
            <div className="process-step">
              <div className="process-step-number">1</div>
              <h4 className="heading-sub">Apply Online</h4>
              <p className="text-small">Submit your basic details using our simple form below.</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">2</div>
              <h4 className="heading-sub">Quick Call & Verification</h4>
              <p className="text-small">Our team will call you to discuss your experience and verify documents.</p>
            </div>
            <div className="process-step">
              <div className="process-step-number">3</div>
              <h4 className="heading-sub">Join the Team</h4>
              <p className="text-small">Complete the onboarding and start your journey with us.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Simple Application Form */}
      <section className="section-padding">
        <div className="container application-section stack-md">
          <div className="text-center stack-sm">
            <h2 className="heading-section">Apply Now</h2>
            <p className="text-body">Fill out this short form and our recruitment team will reach out to you.</p>
          </div>

          {formStatus === 'submitted' ? (
            <div className="card text-center stack-sm" style={{ borderColor: 'var(--clr-secondary)' }}>
              <div style={{ fontSize: '3rem' }}>?</div>
              <h3 className="heading-sub" style={{ color: 'var(--clr-secondary-dark)' }}>Application Received!</h3>
              <p className="text-body">Thank you for applying. Our team will contact you shortly on your provided phone number.</p>
            </div>
          ) : (
            <form className="application-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="fullName">Full Name</label>
                <input type="text" id="fullName" className="form-input" placeholder="Enter your full name" required />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone / WhatsApp Number</label>
                <input type="tel" id="phone" className="form-input" placeholder="10-digit mobile number" required />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="role">Role Applying For</label>
                <select id="role" className="form-select" required>
                  <option value="">Select a role...</option>
                  <option value="Staff Nurse">Staff Nurse</option>
                  <option value="Patient Attendant">Patient Attendant</option>
                  <option value="Elderly Caregiver">Elderly Caregiver</option>
                  <option value="Physiotherapist">Physiotherapist</option>
                  <option value="Support Staff">Healthcare Support Staff</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="experience">Experience Summary</label>
                <textarea id="experience" className="form-textarea" placeholder="Briefly describe your previous healthcare experience and years of work..." required></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-2)' }}>
                Submit Application
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 6. Final CTA */}
      <section className="section-padding" style={{ borderTop: '1px solid var(--clr-border)' }}>
        <div className="container text-center stack-sm">
          <h3 className="heading-sub">Prefer to speak directly?</h3>
          <p className="text-body" style={{ marginBottom: 'var(--space-4)' }}>You can also call our recruitment team to discuss opportunities.</p>
          <button className="btn btn-outline">
            <span className="icon-placeholder">??</span> Call HR Team
          </button>
        </div>
      </section>

    </div>
  );
};

export default Careers;
