import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesOverviewSection.css';

const servicesData = [
  {
    id: 'nursing',
    title: 'Home Nursing',
    description: 'Professional, compassionate nursing care for complex medical needs, injections, and wound management at home.',
    icon: '?????',
    path: '/services/home-nursing'
  },
  {
    id: 'elderly',
    title: 'Elderly Care',
    description: 'Dedicated caregivers providing daily assistance, companionship, and routine health monitoring for seniors.',
    icon: '??',
    path: '/services/elderly-care'
  },
  {
    id: 'icu',
    title: 'ICU at Home',
    description: 'Clinical-grade critical care setups with specialized nurses and monitoring for advanced patient needs.',
    icon: '??',
    path: '/services/icu-at-home'
  },
  {
    id: 'equipment',
    title: 'Medical Equipment on Rent',
    description: 'Oxygen concentrator, hospital bed, wheelchair, and oxygen support available for prompt local delivery.',
    icon: '???',
    path: '/medical-equipment-rental'
  },
  {
    id: 'physio',
    title: 'Physiotherapy',
    description: 'Expert home-based physical therapy for rehabilitation, mobility improvement, and severe pain relief.',
    icon: '??',
    path: '/services/physiotherapy'
  },
  {
    id: 'attendant',
    title: 'Patient Attendant',
    description: 'Reliable round-the-clock support for personal hygiene, feeding, mobility, and basic assistance.',
    icon: '??',
    path: '/services/patient-attendant'
  },
  {
    id: 'post-surgery',
    title: 'Post-Surgery Care',
    description: 'Specialized recovery care to prevent complications and ensure safe, comfortable healing after hospital discharge.',
    icon: '??',
    path: '/services/post-surgery-care'
  },
  {
    id: 'doctor',
    title: 'Doctor Visit at Home',
    description: 'Experienced physicians providing comprehensive health consultations in the comfort of your living room.',
    icon: '??',
    path: '/services/doctor-visit'
  }
];

const ServicesOverviewSection = () => {
  return (
    <section className="services-overview-section section-padding">
      <div className="container">
        
        <div className="services-header stack-sm">
          <h2 className="heading-section">Comprehensive Care Services</h2>
          <p className="text-body-large">
            Professional medical support and equipment tailored to your family's needs, delivered safely to your doorstep.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service) => (
            <Link to={service.path} key={service.id} className="service-card-link">
              <div className="service-card">
                <div className="service-icon-wrapper">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>
                <div className="service-card-action">
                  Learn more <span>?</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="services-footer">
          <Link to="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesOverviewSection;
