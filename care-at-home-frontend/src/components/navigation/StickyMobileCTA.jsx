import React from 'react';
import './StickyMobileCTA.css';

const StickyMobileCTA = () => {
  return (
    <div className="sticky-mobile-cta" style={{ position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: 'white', borderTop: '1px solid var(--clr-border)', display: 'flex', zIndex: 999, boxShadow: '0 -4px 15px rgba(0,0,0,0.05)' }}>
      
      <button style={{ flex: 1, padding: '1rem', border: 'none', backgroundColor: 'var(--clr-primary-dark)', color: 'white', fontSize: '1rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
        {"\uD83D\uDCDE"} Call Now
      </button>
      
      <div style={{ width: '1px', backgroundColor: 'var(--clr-border)' }}></div>
      
      <button style={{ flex: 1, padding: '1rem', border: 'none', backgroundColor: '#25D366', color: 'white', fontSize: '1rem', fontWeight: 'bold', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
        {"\uD83D\uDCAC"} WhatsApp
      </button>

    </div>
  );
};

export default StickyMobileCTA;