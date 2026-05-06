import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout.jsx';
import ServiceLayout from '../layouts/ServiceLayout.jsx';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Services from '../pages/Services.jsx';
import Contact from '../pages/Contact.jsx';
import Reviews from '../pages/Reviews.jsx';
import Locations from '../pages/Locations.jsx';
import Blog from '../pages/Blog.jsx';
import NotFound from '../pages/NotFound.jsx';

// Service Pages
import HomeNursing from '../pages/services/HomeNursing.jsx';
import ElderlyCare from '../pages/services/ElderlyCare.jsx';
import IcuAtHome from '../pages/services/IcuAtHome.jsx';
import Physiotherapy from '../pages/services/Physiotherapy.jsx';
import PostSurgeryCare from '../pages/services/PostSurgeryCare.jsx';
import MedicalEquipmentRental from '../pages/services/MedicalEquipmentRental.jsx';
import PatientAttendant from '../pages/services/PatientAttendant.jsx';
import DoctorVisit from '../pages/services/DoctorVisit.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "contact", element: <Contact /> },
      { path: "reviews", element: <Reviews /> },
      { path: "locations", element: <Locations /> },
      { path: "blog", element: <Blog /> },
      
      // Nested Service Routes
      {
        path: "services",
        element: <ServiceLayout />,
        children: [
          { path: "home-nursing", element: <HomeNursing /> },
          { path: "elderly-care", element: <ElderlyCare /> },
          { path: "icu-at-home", element: <IcuAtHome /> },
          { path: "physiotherapy", element: <Physiotherapy /> },
          { path: "post-surgery-care", element: <PostSurgeryCare /> },
          { path: "medical-equipment-rental", element: <MedicalEquipmentRental /> },
          { path: "patient-attendant", element: <PatientAttendant /> },
          { path: "doctor-visit-at-home", element: <DoctorVisit /> },
        ]
      }
    ],
  },
]);

export default router;
