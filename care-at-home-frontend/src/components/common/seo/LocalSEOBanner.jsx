import React from 'react';
import './LocalSEOBanner.css';

/**
 * On-page component to reinforce Local SEO signals (Ranchi + Neighborhoods).
 * Good for Footer placement or Locations page.
 */
const LocalSEOBanner = () => {
  const localAreas = [
    'Ashok Nagar', 'Doranda', 'Hinoo', 
    'Harmu', 'Lalpur', 'Bariatu'
  ];

  return (
    <div className="local-seo-banner">
      <div className="container">
        <div className="local-seo-content">
          <h3 className="local-seo-title">Providing Trusted Healthcare Across Ranchi</h3>
          <p className="local-seo-text">
            Care At Home is a locally established healthcare provider based in Ranchi, Jharkhand. 
            We offer prompt, reliable home medical services and equipment delivery across all major neighborhoods, including:
          </p>
          <ul className="local-seo-areas">
            {localAreas.map((area, index) => (
              <li key={index} className="local-seo-area-item">
                <span className="area-icon">??</span>
                {area}, Ranchi
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LocalSEOBanner;
