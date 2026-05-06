import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      
      {/* 1. Hero Section */}
      <section className="contact-hero section-padding">
        <div className="container contact-hero-container stack-md">
          <h1 className="heading-hero">Contact Care At Home</h1>
          <p className="text-body-large">
            Your family’s health and comfort are our top priorities. Reach out to us for fast, reliable, and professional medical support right at your doorstep in Ranchi.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section-padding">
        <div className="container">
          
          <div className="contact-grid">
            
            {/* 2. Direct Contact Priority & 4. Address/Local Trust */}
            <div className="contact-info-col">
              
              <div className="direct-actions-box">
                <div>
                  <h3 className="contact-method-title">Need Immediate Assistance?</h3>
                  <p className="text-small" style={{ marginBottom: 'var(--space-4)' }}>
                    Calling or messaging on WhatsApp is the fastest way to arrange nursing staff, elderly care, or medical equipment.
                  </p>
                </div>
                <button className="btn btn-primary" style={{ width: '100%', fontSize: '1.125rem', padding: 'var(--space-4)' }}>
                  <span className="icon-placeholder">??</span> Call Now
                </button>
                <button className="btn btn-secondary" style={{ width: '100%', fontSize: '1.125rem', padding: 'var(--space-4)' }}>
                  <span className="icon-placeholder">??</span> WhatsApp Us
                </button>
              </div>

              <div className="location-trust-box">
                <h3 className="heading-sub">Our Local Presence</h3>
                <div className="location-item">
                  <span className="location-icon">??</span>
                  <div>
                    <strong>Head Office</strong><br />
                    Ranchi, Jharkhand, India<br />
                    <span className="text-small">Serving Ashok Nagar, Doranda, Hinoo, Harmu, Lalpur, Bariatu, and nearby zones.</span>
                  </div>
                </div>
                <div className="location-item">
                  <span className="location-icon">?</span>
                  <div>
                    <strong>Availability</strong><br />
                    24/7 Phone Support & Emergency Equipment Dispatch.
                  </div>
                </div>
                <div className="location-item">
                  <span className="location-icon">??</span>
                  <div>
                    <strong>Email Inquiries</strong><br />
                    support@careathome.com
                  </div>
                </div>
              </div>

            </div>

            {/* 3. Quick Inquiry Form */}
            <div className="contact-form-col">
              <h3 className="heading-sub">Request a Callback</h3>
              <p className="text-small" style={{ marginTop: 'var(--space-1)' }}>
                Fill out this short form, and our care coordinator will contact you shortly to understand your needs.
              </p>
              
              <form className="quick-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Your Name</label>
                  <input type="text" id="name" className="form-input" placeholder="e.g., Rajesh Kumar" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" className="form-input" placeholder="10-digit mobile number" required />
                </div>
                
                <div className="form-group">
                  <label className="form-label" htmlFor="requirement">Care Requirement</label>
                  <select id="requirement" className="form-input" required>
                    <option value="" disabled selected>Select the service you need...</option>
                    <option value="home-nursing">Home Nursing</option>
                    <option value="elderly-care">Elderly Care</option>
                    <option value="medical-equipment">Medical Equipment on Rent</option>
                    <option value="icu-at-home">ICU at Home</option>
                    <option value="patient-attendant">Patient Attendant</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="message">Brief Details (Optional)</label>
                  <textarea id="message" className="form-textarea" placeholder="Any specific condition or urgent requirement?"></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ marginTop: 'var(--space-2)' }}>
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>

          {/* 6. Emergency Support CTA */}
          <div className="contact-emergency-banner">
            <span className="emergency-banner-title">?? Urgent Healthcare or ICU Setup?</span>
            <p style={{ color: 'var(--clr-text-main)' }}>
              For critical patient care needs or immediate oxygen concentrator/hospital bed delivery, please do not use the form. Call our emergency response line directly.
            </p>
            <button className="btn btn-emergency">
               Call Emergency Line
            </button>
          </div>

          {/* 7. Final Trust Line */}
          <div className="contact-trust-line">
            Trusted by families across Ranchi for delivering compassionate, professional care when it matters most.
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;
