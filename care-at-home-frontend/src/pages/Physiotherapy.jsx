import React from 'react';
import ServicePageTemplate from '../components/common/ServicePageTemplate.jsx';

const physiotherapyData = {
  hero: {
    title: "Physiotherapy Services at Home in Ranchi",
    subtitle: "Expert physical therapy and rehabilitation in the comfort of your home. Recover faster, regain mobility, and manage pain with our certified physiotherapists.",
    localBadge: "?? Fast Local Support in Ranchi",
    primaryCta: "Call Now",
    secondaryCta: "WhatsApp Us",
    trustSignal: "Trusted Home Recovery & Rehabilitation"
  },
  overview: {
    title: "Professional Rehabilitation at Home",
    description: "Our home physiotherapy services bring expert recovery support directly to you, eliminating the stress of traveling to a clinic while in pain. We focus on consistent, guided healing.",
    servicesList: [
      "Post-stroke rehabilitation",
      "Orthopedic recovery",
      "Joint pain management",
      "Post-fracture support",
      "Post-surgery rehabilitation",
      "Mobility improvement",
      "Elderly movement support",
      "Strength rebuilding"
    ]
  },
  targetAudience: {
    title: "Who Needs This Service?",
    description: "We provide specialized mobility and recovery support for individuals facing various physical challenges.",
    list: [
      {
        title: "Stroke Recovery Patients",
        desc: "Specialized neuro-physiotherapy to regain motor skills, coordination, and movement safely."
      },
      {
        title: "Surgery Recovery Patients",
        desc: "Post-operative rehabilitation for joint replacements, spinal surgeries, or ligament repairs."
      },
      {
        title: "Chronic Pain Patients",
        desc: "Targeted therapy to manage arthritis, severe back pain, and chronic joint stiffness."
      },
      {
        title: "Elderly Individuals",
        desc: "Geriatric physiotherapy focused on fall prevention, balance improvement, and everyday mobility."
      },
      {
        title: "Orthopedic Patients",
        desc: "Dedicated recovery from fractures, sprains, muscle tears, and severe sports injuries."
      }
    ]
  },
  benefits: {
    title: "Benefits of Home Physiotherapy",
    list: [
      {
        icon: "??",
        title: "Comfort & Safety",
        desc: "Recover in a familiar, relaxed environment without the physical strain of traveling to a clinic."
      },
      {
        icon: "??",
        title: "Consistent Progress",
        desc: "Eliminate missed sessions due to traffic or severe pain, ensuring steady and uninterrupted healing."
      },
      {
        icon: "??",
        title: "Personalized Attention",
        desc: "One-on-one therapy sessions where the physiotherapist is focused entirely on your recovery goals."
      },
      {
        icon: "???",
        title: "Practical Home Adaptation",
        desc: "Therapists can teach you how to safely navigate your actual living space, stairs, and furniture."
      }
    ]
  },
  process: {
    title: "How Our Recovery Process Begins",
    steps: [
      {
        step: "01",
        title: "Contact & Consultation",
        desc: "Reach out to us. We will discuss the patient's condition, medical history, and specific recovery needs."
      },
      {
        step: "02",
        title: "Initial Assessment",
        desc: "A qualified physiotherapist visits your home to evaluate mobility, strength, and pain levels."
      },
      {
        step: "03",
        title: "Custom Treatment Plan",
        desc: "A tailored exercise and therapy routine is designed specifically for your optimal recovery."
      },
      {
        step: "04",
        title: "Consistent Home Sessions",
        desc: "Scheduled, guided therapy sessions take place at home, with continuous tracking of your progress."
      }
    ]
  },
  whyChooseUs: {
    title: "Why Choose Care At Home?",
    points: [
      "Certified, qualified, and highly experienced physiotherapists.",
      "Trusted local healthcare presence across Ranchi.",
      "Compassionate, patient-first approach to healing.",
      "Flexible scheduling designed around your comfort and routine."
    ]
  },
  faq: {
    title: "Frequently Asked Questions",
    questions: [
      {
        q: "How many sessions are usually needed?",
        a: "The number of sessions depends entirely on the patient's condition and recovery speed. Our physiotherapist will provide a clear estimate after the initial clinical assessment."
      },
      {
        q: "Can physiotherapy be arranged daily?",
        a: "Yes. Depending on the severity of the condition—such as immediate post-surgery or stroke recovery—daily sessions can be easily arranged to ensure optimal healing."
      },
      {
        q: "Do you support stroke recovery?",
        a: "Absolutely. Neuro-physiotherapy for stroke patients is one of our core specialties. We focus intensely on regaining motor functions, balance, and patient independence."
      },
      {
        q: "Is home physiotherapy better than clinic visits?",
        a: "For patients with limited mobility, severe pain, or recent surgery, home physiotherapy is much safer. It avoids the strain of travel and reduces the risk of aggravating the injury."
      }
    ]
  },
  cta: {
    headline: "Start Your Recovery Journey Today",
    subtext: "Professional, compassionate physiotherapy support is just one call away.",
    primaryBtn: "Call Now",
    secondaryBtn: "WhatsApp Us"
  }
};

const Physiotherapy = () => {
  return (
    <div className="page-service-physiotherapy">
      <ServicePageTemplate data={physiotherapyData} />
    </div>
  );
};

export default Physiotherapy;
