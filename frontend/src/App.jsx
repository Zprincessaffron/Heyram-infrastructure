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
import { AdminProvider,useAdmin } from './context/AdminContext';
import ContactUs from './components/contact/ContactUs';
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
         <Route path="/" element={<MainPage/>} />
         <Route path="/top-section" element={<TopSection/>} />
         <Route path="/contact-us" element={<ContactUs/>} />
         <Route path="/about-us" element={<AboutUs/>} />
         <Route path="/services" element={<Services/>} />
         <Route path="/careers" element={<Career/>} />
         <Route path="/apply/:jobId" element={<JobDetail />} />
     
      </Routes>
    </Router>
    </AppProvider>
  );
};

export default App;
