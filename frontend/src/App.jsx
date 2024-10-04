// App.js
import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/dashboard/ProtectedRoute';
import AdminDashboard from './components/dashboard/AdminDashboard';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/services/Services';
import Career from './components/career/Career';
import JobDetail from './components/career/JobDetail';
import { AppProvider } from './context/AppContext';
import TopSection2 from './components/home/TopSection2';
import Contact from './components/contact/Contact';
import { Bounce, Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WebDevelopment from './components/services/WebDevelopment';
import DigitalMarketing from './components/services/DigitalMarketing';
import DataAIService from './components/services/DataAIService';
import CardServices from './components/cardServices/CardServices';
import Question from './components/career/Question';
import CardServicesMid from './components/cardServices/CardServicesMid';
import CardServicesLarge from './components/cardServices/CardServicesLarge';
import AdminProvider from './context/AdminContext';
import AdminLogin from './components/login/AdminLogin';

const App = () => {

  

  return (
    <AppProvider>
      <Router>
        
      <AdminProvider>
        <Routes>
          {/* <Route path="/" element={<Login />} />
         */}
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/" element={<TopSection2 />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/data-ai" element={<DataAIService />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/startup-services" element={<CardServices />} />
          <Route path="/mid-services" element={<CardServicesMid />} />
          <Route path="/large-services" element={<CardServicesLarge />} />
          <Route path="/apply/:jobId" element={<JobDetail />} />
          <Route path="/test/:jobId" element={<Question />} />
          <Route
            path="/admindashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard/>
              </ProtectedRoute>
            }
          />

        </Routes>
        </AdminProvider>
      </Router>
      
      <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
            
/>
    </AppProvider>
  );
};

export default App;
