// App.js
import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/dashboard/ProtectedRoute";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/services/Services";
import Career from "./components/career/Career";
import JobDetail from "./components/career/JobDetail";
import { AppProvider } from "./context/AppContext";
import TopSection2 from "./components/home/TopSection2";
import Contact from "./components/contact/Contact";
import { Bounce, Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WebDevelopment from "./components/services/WebDevelopment";
import DigitalMarketing from "./components/services/DigitalMarketing";
import DataAIService from "./components/services/DataAIService";
import CardServices from "./components/cardServices/CardServices";
import Question from "./components/career/Question";
import CardServicesMid from "./components/cardServices/CardServicesMid";
import CardServicesLarge from "./components/cardServices/CardServicesLarge";
import AdminProvider from "./context/AdminContext";
import AdminLogin from "./components/login/AdminLogin";
import Jobs from "./components/dashboard/Jobs";
import Internships from "./components/dashboard/Internships";
import Clients from "./components/dashboard/Clients";
import Queries from "./components/dashboard/Queries";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import ClientsDetails from "./components/dashboard/ClientsDetail";
import QueriesDetail from "./components/dashboard/QueriesDetail";
import InternDetail from "./components/career/InternDetail";
import Navbar from "./components/navbar/Navbar";
import MenuButton from "./components/navbar/MenuButton";
import Menubar from "./components/menubar/Menubar";

const App = () => {
  return (
    <>
    <AppProvider>
      <Router>
        <AdminProvider>
          <Navbar/>
          <MenuButton/>
          <Menubar/>
          <Routes>
            {/* <Route path="/" element={<Login />} />
             */}
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/" element={<TopSection2 />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route
              path="/web-development/:service"
              element={<WebDevelopment />}
            />
            <Route path="/digital-marketing" element={<DigitalMarketing />} />
            <Route
              path="/digital-marketing/:service"
              element={<DigitalMarketing />}
            />
            <Route path="/data-ai" element={<DataAIService />} />
            <Route path="/data-ai/:service" element={<DataAIService />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/services" element={<Services />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/startup-services" element={<CardServices />} />
            <Route path="/mid-services" element={<CardServicesMid />} />
            <Route path="/large-services" element={<CardServicesLarge />} />
            <Route path="/apply/:jobId" element={<JobDetail />} />
            <Route path="/test/:jobId" element={<Question />} />
            <Route path="/internapply/:jobId" element={<InternDetail />} />
            <Route
              path="/admindashboard"
              element={
                <ProtectedRoute>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            >
              <Route path="jobs" element={<Jobs />} />
              <Route path="internships" element={<Internships />} />
              <Route path="clients" element={<Clients />} />
              <Route path="clients/:name" element={<ClientsDetails />} />
              <Route path="queries" element={<Queries />} />
              <Route path="queries/:name" element={<QueriesDetail />} />
            </Route>
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
    </>
    
  );
};

export default App;
