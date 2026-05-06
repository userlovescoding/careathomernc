/**
 * Core Schema Builders for Care At Home
 * Generates valid JSON-LD objects for Google structured data.
 */

// 1. Local Medical Business Schema
export const buildLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "name": "Care At Home",
    "url": "https://yourwebsite.com",
    "logo": "https://yourwebsite.com/logo.png",
    "image": "https://yourwebsite.com/hospital-care-image.jpg",
    "telephone": "+91-XXXXXXXXXX", // To be replaced with actual
    "priceRange": "Out-Null",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ranchi",
      "addressRegion": "Jharkhand",
      "addressCountry": "IN"
    },
    "areaServed": [
      { "@type": "City", "name": "Ranchi" },
      { "@type": "Neighborhood", "name": "Ashok Nagar" },
      { "@type": "Neighborhood", "name": "Doranda" },
      { "@type": "Neighborhood", "name": "Hinoo" },
      { "@type": "Neighborhood", "name": "Harmu" },
      { "@type": "Neighborhood", "name": "Lalpur" },
      { "@type": "Neighborhood", "name": "Bariatu" }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi"]
    }
  };
};

// 2. Healthcare Service Schema
export const buildServiceSchema = (serviceName, description, urlSlug) => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Care At Home",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ranchi"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Ranchi"
    },
    "description": description,
    "url": "https://yourwebsite.com/services/$urlSlug"
  };
};

// 3. FAQ Schema
export const buildFAQSchema = (faqs) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};

// 4. Review / Trust Schema (Aggregate)
export const buildAggregateRatingSchema = (ratingValue, reviewCount, itemName) => {
  return {
    "@context": "https://schema.org",
    "@type": "Product", // Or LocalBusiness depending on context
    "name": itemName || "Care At Home Services",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": ratingValue.toString(),
      "reviewCount": reviewCount.toString(),
      "bestRating": "5",
      "worstRating": "1"
    }
  };
};
