// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './components/dashboard/Dashboard';
import ProtectedRoute from './components/protectedRoute';
import Clients from './components/dashboard/Clients';
import Jobs from './components/dashboard/Jobs';
import Internships from './components/dashboard/Internships';
import Queries from './components/dashboard/Queries';
import Login from './components/login/login';
import MainPage from './components/home/MainPage';
import TopSection from './components/home/TopSection';
import AboutUs from './components/AboutUs/AboutUs';
import Services from './components/services/Services';
import Career from './components/career/Career';
import JobDetail from './components/career/JobDetail';
import { AppProvider } from './context/AppContext';
import { AdminProvider, useAdmin } from './context/AdminContext';
import TopSection2 from './components/home/TopSection2';
import Contact from './components/contact/Contact';
import { Bounce, Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import WebDevelopment from './components/services/WebDevelopment';
import DigitalMarketing from './components/services/DigitalMarketing';
import DataAIService from './components/services/DataAIService';
import CardServices from './components/cardServices/CardServices';

const App = () => {
  // Protected Route Component
  const ProtectedRoute = ({ component }) => {
    const { isAuthenticated } = useAdmin();
    return isAuthenticated ? component : <Navigate to="/admin-login" />;
  };
  return (
    <AppProvider>
      <Router>
        <Routes>
          {/* <Route path="/" element={<Login />} />
         */}
          <Route path="/admin-login" element={<Login />} />
          <Route
            path="/admin/*"
            element={<ProtectedRoute component={<DashBoard />} />}
          />
          <Route path="/" element={<TopSection2 />} />
          <Route path="/web-development" element={<WebDevelopment />} />
          <Route path="/digital-marketing" element={<DigitalMarketing />} />
          <Route path="/data-ai" element={<DataAIService />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/package-services" element={<CardServices />} />
          <Route path="/apply/:jobId" element={<JobDetail />} />
        </Routes>
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
