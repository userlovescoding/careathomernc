import React from 'react';

const StickyMobileCTA = () => {
  // Mobile-only check can be handled via CSS (display: none on desktop)
  return (
    <div className="sticky-mobile-cta" style={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 1000 }}>
      <div className="sticky-mobile-cta-container">
        <a href="tel:+91XXXXXXXXXX" className="btn btn-primary btn-sticky-call" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: '1.2rem' }}>??</span>
          <span>Call Now</span>
        </a>
        <a href="https://wa.me/91XXXXXXXXXX" className="btn btn-secondary btn-sticky-whatsapp" style={{ textDecoration: 'none' }}>
          <span style={{ fontSize: '1.2rem' }}>??</span>
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
};

export default StickyMobileCTA;
