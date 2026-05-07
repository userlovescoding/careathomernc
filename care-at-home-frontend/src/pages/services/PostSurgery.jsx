import React from 'react';
import ServicePageTemplate from '../components/common/ServicePageTemplate.jsx';

const postSurgeryData = {
  title: "Post-Surgery Care Services in Ranchi",
  subheadline: "Ensure a safe, smooth, and comfortable recovery at home after hospital discharge with our expert nursing and monitoring support.",
  
  overview: {
    description: "Recovering from surgery requires professional care to prevent complications, manage pain, and ensure proper healing. Our post-surgery care team provides clinical excellence right in the comfort of your home.",
    useCases: [
      "Recently Discharged Patients needing medical supervision",
      "Orthopedic Surgery Recovery (joint replacements, fractures)",
      "Elderly Surgery Recovery requiring extra patience and care",
      "Abdominal or Cardiac Recovery requiring strict hygiene",
      "Long-Term Monitored Recovery"
    ]
  },

  benefits: [
    { 
      icon: "🏠", 
      title: "Faster Healing in Comfort", 
      description: "Patients recover faster in the familiar and comfortable environment of their own home." 
    },
    { 
      icon: "🛡️", 
      title: "Reduced Infection Risk", 
      description: "Home recovery significantly lowers the risk of hospital-acquired infections (HAIs)." 
    },
    { 
      icon: "👩‍⚕️", 
      title: "Personalized Attention", 
      description: "One-on-one dedicated nursing care focused entirely on the patient's recovery goals." 
    },
    { 
      icon: "❤️", 
      title: "Reduced Family Stress", 
      description: "Families get peace of mind knowing a professional is handling complex medical tasks." 
    }
  ],

  process: [
    { 
      title: "Share Discharge Summary", 
      description: "Contact us with the hospital discharge summary and specific doctor instructions." 
    },
    { 
      title: "Care Assessment", 
      description: "We evaluate the exact nursing needs, required equipment, and duration of care." 
    },
    { 
      title: "Nurse Assigned", 
      description: "A verified, experienced nurse or attendant is assigned to your home." 
    },
    { 
      title: "Recovery Begins", 
      description: "Professional monitoring and post-operative care starts immediately." 
    }
  ],

  whyUs: [
    { icon: "✅", title: "Verified Staff", description: "Highly trained and background-checked nursing staff." },
    { icon: "📍", title: "Local Support", description: "Trusted local recovery support across Ranchi." },
    { icon: "⚡", title: "Fast Response", description: "Reliable same-day deployment." },
    { icon: "🤝", title: "Patient-First", description: "Compassionate, dignified, and patient-first approach." }
  ],

  faqs: [
    {
      question: "Do you provide wound dressing at home?",
      answer: "Yes, our trained nurses handle complex wound dressings, stitch removal, and strict infection prevention protocols safely at home."
    },
    {
      question: "Can same-day nursing support be arranged?",
      answer: "Yes. While we recommend contacting us slightly before discharge for smooth planning, we can arrange rapid same-day support across Ranchi."
    },
    {
      question: "Do you support recovery after major surgery?",
      answer: "Absolutely. We provide specialized post-operative care for orthopedic, cardiac, abdominal, neuro, and general surgeries."
    },
    {
      question: "Is day and night care available?",
      answer: "Yes, we offer flexible care plans including 12-hour day shifts, 12-hour night shifts, and complete 24-hour continuous care depending on the patient's condition."
    }
  ],

  cta: {
    headline: "Ready for a Safe Recovery at Home?",
    subheadline: "Let our experienced care team support your healing journey with professional post-surgery care."
  }
};

const PostSurgeryCare = () => {
  return (
    <div className="page-post-surgery-care">
      <ServicePageTemplate serviceData={postSurgeryData} />
    </div>
  );
};

export default PostSurgeryCare;