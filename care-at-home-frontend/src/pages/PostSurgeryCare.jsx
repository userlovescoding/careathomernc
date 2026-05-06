import React from 'react';
import GenericServicePage from '../features/services/GenericServicePage.jsx';

const postSurgeryData = {
  heroData: {
    title: "Post-Surgery Care Services in Ranchi",
    subheadline: "Ensure a safe, smooth, and comfortable recovery at home after hospital discharge with our expert nursing and monitoring support.",
    primaryCta: "Call Now",
    secondaryCta: "WhatsApp Us",
    trustBadge: "Trusted Home Recovery Support"
  },
  
  overviewData: {
    title: "Comprehensive Post-Operative Support",
    description: "Recovering from surgery requires professional care to prevent complications, manage pain, and ensure proper healing. Our post-surgery care team provides clinical excellence right in the comfort of your home.",
    servicesList: [
      "Wound dressing and infection prevention",
      "IV injection and medication administration",
      "Catheter, stoma, and drain care",
      "Timely medication reminders and management",
      "Mobility assistance and fall prevention",
      "Discharge recovery planning and vital monitoring",
      "Elderly post-surgery specialized support",
      "Routine nursing follow-ups and doctor coordination"
    ]
  },

  whoNeedsData: {
    title: "Who Needs Post-Surgery Care?",
    description: "Our services are tailored for patients transitioning from the hospital to their homes, ensuring uninterrupted medical supervision.",
    items: [
      { title: "Recently Discharged Patients", desc: "Individuals needing medical supervision during the critical early days at home." },
      { title: "Orthopedic Surgery Recovery", desc: "Patients recovering from joint replacements, fractures, or spinal surgeries needing mobility support." },
      { title: "Elderly Surgery Recovery", desc: "Seniors requiring extra patience, care, and monitoring after major procedures." },
      { title: "Abdominal or Cardiac Recovery", desc: "Patients needing strict hygiene, wound care, and vital monitoring." },
      { title: "Long-Term Monitored Recovery", desc: "Individuals requiring extended rehabilitation and nursing support." }
    ]
  },

  benefitsData: {
    title: "The Benefits of Healing at Home",
    items: [
      { title: "Faster Healing in Comfort", desc: "Patients recover faster in the familiar and comfortable environment of their own home." },
      { title: "Reduced Infection Risk", desc: "Home recovery significantly lowers the risk of hospital-acquired infections (HAIs)." },
      { title: "Personalized Attention", desc: "One-on-one dedicated nursing care focused entirely on the patient's recovery goals." },
      { title: "Reduced Family Stress", desc: "Families get peace of mind knowing a professional is handling complex medical tasks." }
    ]
  },

  processData: {
    title: "How Post-Surgery Care Begins",
    steps: [
      { step: "01", title: "Share Discharge Summary", desc: "Contact us with the hospital discharge summary and specific doctor instructions." },
      { step: "02", title: "Care Assessment", desc: "We evaluate the exact nursing needs, required equipment, and duration of care." },
      { step: "03", title: "Nurse Assigned", desc: "A verified, experienced nurse or attendant is assigned to your home." },
      { step: "04", title: "Recovery Begins", desc: "Professional monitoring and post-operative care starts immediately." }
    ]
  },

  whyChooseData: {
    title: "Why Choose Care At Home for Recovery",
    items: [
      "Verified, highly trained nursing staff",
      "Trusted local recovery support across Ranchi",
      "Fast response and reliable same-day deployment",
      "Compassionate, dignified, and patient-first approach"
    ]
  },

  faqData: {
    title: "Frequently Asked Questions",
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
    ]
  },

  ctaData: {
    title: "Ready for a Safe Recovery at Home?",
    subtitle: "Let our experienced care team support your healing journey with professional post-surgery care.",
    primaryBtn: "Call Now",
    secondaryBtn: "WhatsApp Us"
  }
};

const PostSurgeryCare = () => {
  return (
    <div className="page-post-surgery-care">
      <GenericServicePage {...postSurgeryData} />
    </div>
  );
};

export default PostSurgeryCare;
