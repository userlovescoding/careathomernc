import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layout Wrappers
import MainLayout from '../layouts/MainLayout.jsx';
import ServiceLayout from '../layouts/ServiceLayout.jsx';

// Core System Pages
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import Locations from '../pages/Locations.jsx';
import Reviews from '../pages/Reviews.jsx';
import Services from '../pages/Services.jsx';
import Blog from '../pages/Blog.jsx';
import NotFound from '../pages/NotFound.jsx';

// Specific Service Pages (Mapped precisely to your correct files)
import MedicalEquipmentRental from '../pages/MedicalEquipmentRental.jsx';
import PostSurgeryCare from '../pages/PostSurgeryCare.jsx';
import HomeNursing from '../pages/services/HomeNursing.jsx';
import ElderlyCare from '../pages/services/ElderlyCare.jsx';
import IcuAtHome from '../pages/services/IcuAtHome.jsx';
import Physiotherapy from '../pages/Physiotherapy.jsx'; 
import PatientAttendant from '../pages/PatientAttendant.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "locations", element: <Locations /> },
      { path: "reviews", element: <Reviews /> },
      { path: "services", element: <Services /> },
      { path: "blog", element: <Blog /> },
    ],
  },
  {
    path: "/services",
    element: <ServiceLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "medical-equipment-rental", element: <MedicalEquipmentRental /> },
      { path: "post-surgery-care", element: <PostSurgeryCare /> },
      { path: "home-nursing", element: <HomeNursing /> },
      { path: "elderly-care", element: <ElderlyCare /> },
      { path: "icu-at-home", element: <IcuAtHome /> },
      { path: "physiotherapy", element: <Physiotherapy /> },
      { path: "patient-attendant", element: <PatientAttendant /> }
    ],
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;