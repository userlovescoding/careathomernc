import React from 'react';
import { CONTACT_LINKS } from '../../constants/contact.js';
import './ServiceMobileEmergencyBanner.css';

/**
 * High-visibility banner injected specifically for mobile users on service pages
 * to bypass reading and convert immediately for urgent needs (ICU, Equipment).
 */
const ServiceMobileEmergencyBanner = ({ serviceName }) => {
  return (
    <div className="mobile-emergency-banner">
      <div className="mobile-emergency-title">
        <span>??</span> Need {serviceName || 'Urgent Care'} Immediately?
      </div>
      <p className="mobile-emergency-text">
        Skip the reading. Let our care coordinators arrange support right now.
      </p>
      <a href={CONTACT_LINKS.call} className="mobile-emergency-link">
        Tap to Call Now ?
      </a>
    </div>
  );
};

export default ServiceMobileEmergencyBanner;
