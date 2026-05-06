import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesOverviewSection.css';

const servicesData = [
  {
    id: 'nursing',
    title: 'Home Nursing',
    description: 'Professional nursing care for injections, dressings, and medical management.',
    icon: '?????',
    path: '/services/home-nursing'
  },
  {
    id: 'elderly',
    title: 'Elderly Care',
    description: 'Dedicated assistance and health monitoring for seniors in their own homes.',
    icon: '??',
    path: '/services/elderly-care'
  },
  {
    id: 'icu',
    title: 'ICU at Home',
    description: 'Clinical-grade critical care setups with specialized nurses and monitoring.',
    icon: '??',
    path: '/services/icu-at-home'
  },
  {
    id: 'equipment',
    title: 'Medical Equipment on Rent',
    description: 'Oxygen concentrators, hospital beds, and wheelchairs with quick delivery.',
    icon: '???',
    path: '/services/medical-equipment-rental'
  },
  {
    id: 'physio',
    title: 'Physiotherapy',
    description: 'Expert home-based physical therapy for rehabilitation and pain relief.',
    icon: '??',
    path: '/services/physiotherapy'
  },
  {
    id: 'attendant',
    title: 'Patient Attendant',
    description: 'Reliable support for personal hygiene, feeding, and mobility assistance.',
    icon: '??',
    path: '/services/patient-attendant'
  },
  {
    id: 'post-surgery',
    title: 'Post-Surgery Care',
    description: 'Specialized recovery care to ensure safe healing after hospital discharge.',
    icon: '??',
    path: '/services/post-surgery-care'
  },
  {
    id: 'doctor',
    title: 'Doctor Visit at Home',
    description: 'Experienced physicians providing comprehensive health consultations at home.',
    icon: '??',
    path: '/services/doctor-visit-at-home'
  }
];

const ServicesOverviewSection = () => {
  return (
    <section className="services-overview-section section-padding">
      <div className="container">
        <div className="services-header stack-sm">
          <h2 className="heading-section">Comprehensive Care Services</h2>
          <p className="text-body-large">Professional medical support tailored to your family's needs.</p>
        </div>
        <div className="services-grid">
          {servicesData.map((service) => (
            <Link to={service.path} key={service.id} className="service-card-link">
              <div className="service-card">
                <div className="service-icon-wrapper">{service.icon}</div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <div className="service-card-action">Learn more <span>?</span></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverviewSection;
