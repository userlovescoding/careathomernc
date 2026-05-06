import React from 'react';

// Import all homepage sections
import HeroSection from '../components/sections/HeroSection.jsx';
import WhyTrustUsSection from '../components/sections/WhyTrustUsSection.jsx';
import ServicesOverviewSection from '../components/sections/ServicesOverviewSection.jsx';
import HowItWorksSection from '../components/sections/HowItWorksSection.jsx';
import TestimonialsSection from '../components/sections/TestimonialsSection.jsx';
import ServiceAreasSection from '../components/sections/ServiceAreasSection.jsx';
import FAQSection from '../components/sections/FAQSection.jsx';
import FinalCTASection from '../components/sections/FinalCTASection.jsx';

const Home = () => {
  return (
    <div className="page-home">
      {/* 1. Trust & Conversion Entry */}
      <HeroSection />

      {/* 2. Reassurance & Validation */}
      <WhyTrustUsSection />

      {/* 3. Core Offerings Discovery */}
      <ServicesOverviewSection />

      {/* 4. Process Clarity */}
      <HowItWorksSection />

      {/* 5. Social Proof */}
      <TestimonialsSection />

      {/* 6. Local Trust & Coverage */}
      <ServiceAreasSection />

      {/* 7. Objection Handling */}
      <FAQSection />

      {/* 8. Final Conversion Push */}
      <FinalCTASection />
    </div>
  );
};

export default Home;
