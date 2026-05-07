import React from 'react';
import ServicePageTemplate from '../../components/common/ServicePageTemplate.jsx';

const elderlyCareData = {
  title: "Compassionate Elderly Care in Ranchi",
  subheadline: "Professional, respectful, and reliable home care services designed to support the health, hygiene, and daily activities of senior citizens.",
  
  overview: {
    description: "Aging gracefully at home requires patience, attention, and professional support. Our elderly care services focus on providing dedicated attendants and nurses to assist senior citizens with daily living, medical monitoring, and companionship, ensuring they feel safe and valued.",
    useCases: [
      "Seniors requiring assistance with daily activities (bathing, feeding, mobility)",
      "Bedridden or semi-bedridden elderly patients",
      "Seniors suffering from Dementia or Alzheimer's",
      "Post-hospitalization recovery for older adults",
      "Vitals monitoring and medication management"
    ]
  },

  benefits: [
    { 
      icon: "🤝", 
      title: "Dignified Care", 
      description: "We prioritize the dignity, comfort, and emotional well-being of every senior." 
    },
    { 
      icon: "❤️", 
      title: "Companionship", 
      description: "Beyond physical care, our attendants provide genuine companionship to prevent loneliness." 
    },
    { 
      icon: "🩺", 
      title: "Health Monitoring", 
      description: "Regular checking of vitals (BP, sugar) and strict adherence to medication schedules." 
    },
    { 
      icon: "🛡️", 
      title: "Fall Prevention", 
      description: "Continuous supervision to prevent accidents, falls, and injuries at home." 
    }
  ],

  process: [
    { 
      title: "Share Requirements", 
      description: "Tell us about the senior's routine, medical condition, and specific needs." 
    },
    { 
      title: "Custom Care Plan", 
      description: "We tailor a day-shift, night-shift, or 24-hour care schedule." 
    },
    { 
      title: "Caregiver Assigned", 
      description: "A verified, compassionate attendant or nurse is introduced to your family." 
    },
    { 
      title: "Ongoing Support", 
      description: "Continuous feedback loop and supervision by our care coordinators." 
    }
  ],

  whyUs: [
    { icon: "✅", title: "Verified Attendants", description: "Strict background checks and behavioral assessments." },
    { icon: "📍", title: "Ranchi-Based", description: "Local accountability and fast response times." },
    { icon: "🔄", title: "Seamless Replacements", description: "Quick replacements if your regular caregiver takes a leave." },
    { icon: "👩‍⚕️", title: "Medical Backup", description: "Instant access to nursing or ICU support if health deteriorates." }
  ],

  faqs: [
    {
      question: "What is the difference between an attendant and a nurse?",
      answer: "An attendant assists with daily living (bathing, feeding, mobility, diaper changes), whereas a nurse handles clinical tasks (injections, wound dressing, IVs, catheter care)."
    },
    {
      question: "Do you provide 24-hour live-in care?",
      answer: "Yes, we offer comprehensive 24-hour live-in care services for seniors requiring round-the-clock supervision."
    },
    {
      question: "Are your caregivers trained for bedridden patients?",
      answer: "Absolutely. Our staff is trained in bed bath procedures, diaper changing, and preventing bedsores through regular position changes."
    },
    {
      question: "What if the assigned caregiver is not a good fit?",
      answer: "We want your family to be completely comfortable. If the fit isn't right, just let us know, and we will promptly arrange a suitable replacement without service disruption."
    }
  ],

  cta: {
    headline: "Secure Reliable Care for Your Parents Today",
    subheadline: "Get peace of mind knowing your loved ones are in compassionate, professional hands."
  }
};

const ElderlyCare = () => {
  return (
    <div className="page-elderly-care">
      <ServicePageTemplate serviceData={elderlyCareData} />
    </div>
  );
};

export default ElderlyCare;