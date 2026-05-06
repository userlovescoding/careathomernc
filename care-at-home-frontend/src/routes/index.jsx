import { createBrowserRouter } from 'react-router-dom';

// Layouts
import MainLayout from '../layouts/MainLayout.jsx';
import ServiceLayout from '../layouts/ServiceLayout.jsx';

// Core Pages
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Services from '../pages/Services.jsx';
import MedicalEquipmentRental from '../pages/MedicalEquipmentRental.jsx';
import Contact from '../pages/Contact.jsx';
import NotFound from '../pages/NotFound.jsx';
import Reviews from '../pages/Reviews.jsx';
import Locations from '../pages/Locations.jsx';
import Blog from '../pages/Blog.jsx';
import Careers from '../pages/Careers.jsx';

// Service Pages
import DoctorVisit from '../pages/services/DoctorVisit.jsx';
import HomeNursing from '../pages/services/HomeNursing.jsx';
import ElderlyCare from '../pages/services/ElderlyCare.jsx';
import IcuAtHome from '../pages/services/IcuAtHome.jsx';
import Physiotherapy from '../pages/services/Physiotherapy.jsx';
import PostSurgery from '../pages/services/PostSurgery.jsx';
import PatientAttendant from '../pages/services/PatientAttendant.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "medical-equipment-rental", element: <MedicalEquipmentRental /> },
      { path: "contact", element: <Contact /> },
      { path: "reviews", element: <Reviews /> },
      { path: "locations", element: <Locations /> },
      { path: "blog", element: <Blog /> },
      { path: "careers", element: <Careers /> }
    ],
  },
  {
    path: "/services",
    element: <ServiceLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "doctor-visit", element: <DoctorVisit /> },
      { path: "home-nursing", element: <HomeNursing /> },
      { path: "elderly-care", element: <ElderlyCare /> },
      { path: "icu-at-home", element: <IcuAtHome /> },
      { path: "physiotherapy", element: <Physiotherapy /> },
      { path: "post-surgery-care", element: <PostSurgery /> },
      { path: "patient-attendant", element: <PatientAttendant /> }
    ]
  }
]);

export default router;
