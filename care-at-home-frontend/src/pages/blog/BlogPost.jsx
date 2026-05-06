import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const BlogPost = () => {
  return (
    <div className="blog-page">
      <article className="section-padding">
        <div className="container post-layout">
          
          <Link to="/blog" className="btn btn-outline" style={{ marginBottom: 'var(--space-8)' }}>
            ? Back to Knowledge Center
          </Link>

          {/* Post Header */}
          <header className="post-header">
            <span className="article-category">Recovery After Surgery</span>
            <h1 className="post-title">Essential Guidelines for Post-Surgery Care at Home</h1>
            <div className="post-meta-bar">
              <span>Published: May 2, 2026</span>
              <span>•</span>
              <span>5 min read</span>
              <span>•</span>
              <span>Medically Reviewed</span>
            </div>
          </header>

          {/* Post Visual Placeholder */}
          <div className="article-image-placeholder" style={{ borderRadius: 'var(--radius-lg)', marginBottom: 'var(--space-8)' }}>
            [High-Quality Educational Image Placeholder]
          </div>

          {/* Post Body (Structural Placeholder) */}
          <div className="post-body">
            <p>
              [Paragraph 1 Placeholder] Recovering from surgery requires a clean, safe, and supportive environment. While the hospital provides immediate critical care, the home environment plays the most significant role in long-term healing and preventing readmission.
            </p>
            
            <h2>1. Preparing the Recovery Room</h2>
            <p>
              [Paragraph 2 Placeholder] Ensure the patient's room is on the ground floor if possible to avoid stairs. Maintain a clear path to the bathroom and remove tripping hazards like loose rugs or wires.
            </p>

            <h2>2. Medication Management</h2>
            <p>
              [Paragraph 3 Placeholder] Strict adherence to prescribed medications is non-negotiable. Using a pill organizer and setting alarms can prevent missed doses. If administering injections is required, professional home nursing support is highly recommended.
            </p>

            {/* Medical Disclaimer */}
            <div className="post-disclaimer">
              <strong>Medical Disclaimer:</strong> The information provided in this article is for educational purposes only and does not substitute professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider regarding any medical condition.
            </div>
          </div>

        </div>
      </article>

      {/* CTA Section for the Blog Template */}
      <section className="section-padding" style={{ backgroundColor: 'var(--clr-bg-alt)', borderTop: '1px solid var(--clr-border)' }}>
        <div className="container stack-md" style={{ maxWidth: '700px', marginInline: 'auto', textAlign: 'center' }}>
          <h2 className="heading-section">Need Professional Post-Surgery Support?</h2>
          <p className="text-body-large">
            Our experienced nursing staff in Ranchi can manage wound care, vitals, and medications right at your home.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-4)' }}>
            <button className="btn btn-primary">
              <span className="icon-placeholder">??</span> Request Nursing Care
            </button>
          </div>
        </div>
      </section>

      {/* Related Articles Structure */}
      <section className="section-padding">
        <div className="container">
          <h2 className="heading-sub" style={{ marginBottom: 'var(--space-6)' }}>Related Articles</h2>
          <div className="blog-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            
            {/* Related Post Card 1 */}
            <Link to="/blog/placeholder-1" className="article-card">
              <div className="article-content">
                <span className="article-category">Home Nursing Tips</span>
                <h3 className="article-title" style={{ fontSize: '1.125rem' }}>How to Properly Manage Surgical Wounds at Home</h3>
                <span className="article-read-more">Read Article ?</span>
              </div>
            </Link>

            {/* Related Post Card 2 */}
            <Link to="/blog/placeholder-2" className="article-card">
              <div className="article-content">
                <span className="article-category">Medical Equipment Guidance</span>
                <h3 className="article-title" style={{ fontSize: '1.125rem' }}>Do You Need a Hospital Bed for Home Recovery?</h3>
                <span className="article-read-more">Read Article ?</span>
              </div>
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
};

export default BlogPost;
