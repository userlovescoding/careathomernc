import React from 'react';

/**
 * Injects DNS prefetch and Preconnect hints for critical origins.
 * Place inside the App or Layout wrapper.
 */
const PerformanceMeta = () => {
  return (
    <head>
      {/* Preconnect to external font providers or CDNs to save DNS lookup time */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Hint browser for future navigation */}
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
    </head>
  );
};

export default PerformanceMeta;
