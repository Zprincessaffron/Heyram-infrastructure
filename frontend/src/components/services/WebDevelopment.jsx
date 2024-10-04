import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRegHandPointRight } from "react-icons/fa";
import Footer from "../footer/Footer";
import WebDev from "../../images/webdev.jpg";
import Navbar from "../navbar/Navbar";
import Menubar from "../menubar/Menubar";
import MenuButton from "../navbar/MenuButton";
import ECommerceService from "./Webservices/EcomService";
import CustomWebService from "./Webservices/CustomWebService";
import ResponsiveWebService from "./Webservices/ResponsiveWebService";
import FrontendBackendService from "./Webservices/FrontendAndBackendService";
import CorporateWebsite from "./Webservices/CorporateWebsite.jsx";
import webdev from "/vid1.mp4";
import EcomWebsite from "./Webservices/EcomWebsite.jsx";
import PortfolioWebsite from "./Webservices/PortfolioWebsite.jsx";
import BookingWebsite from "./Webservices/BookingWebsite.jsx";
import EducationalWebsite from "./Webservices/EducationalWebsite.jsx";
import RealEstateWebsite from "./Webservices/RealEstateWebsite.jsx";
import LandingPage from "./Webservices/LandingPage.jsx";
import HealthAndWellness from "./Webservices/HealthAndWellness.jsx";
import ToursAndTravels from "./Webservices/ToursAndTravels.jsx";

const WebDevelopment = () => {
  const [selectedService, setSelectedService] = useState("E-Commerce Website"); // State to track the selected service
  const detailsRef = useRef(null); // Create a ref for the details section

  // Animation properties for the title
  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  // Animation properties for the list with stagger effect
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  // Animation properties for each list item
  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // Function to render the selected service component
  const renderSelectedService = () => {
    switch (selectedService) {
      case "Portfolio Website":
        return <PortfolioWebsite />;
      case "Corporate Website":
        return <CorporateWebsite />;
      case "Booking Website":
        return <BookingWebsite />;
      case "Educational Website":
        return <EducationalWebsite />;
      case "Real Estate Website":
        return <RealEstateWebsite />;
      case "Landing Page":
        return <LandingPage />;
      case "Health And Wellness":
        return <HealthAndWellness />;
      case "Tours And Travels":
        return <ToursAndTravels />;
      default:
        return <EcomWebsite />;
    }
  };

  // Function to handle clicking a service
  const handleServiceClick = (item) => {
    setSelectedService(item);
    // detailsRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the details section
  };

  // Scroll to the top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <MenuButton />
      <Menubar />
      <div className="h-screen w-full relative flex overflow-hidden">
        <video
          src={webdev}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#090a29] opacity-30"></div>

        {/* Title on the left side */}
        <motion.h1
          className="absolute lg:top-1/2 lg:left-10 bottom-5 left-5 transform -translate-y-1/2 lg:text-5xl text-2xl font-light text-white uppercase tracking-widest max-w-3xl"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {selectedService}
        </motion.h1>

        {/* List on the right side */}
        <motion.div
          className="absolute top-1/2 right-5 transform -translate-y-1/2 mt-6"
          // -bottom-20
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="pl-5 text-white lg:space-y-4 space-y-6 cursor-pointer text-sm">
            {[
              "E-Commerce Website",
              "Portfolio Website",
              "Corporate Website",
              "Booking Website",
              "Educational Website",
              "Real Estate Website",
              "Landing Page",
              "Health And Wellness",
              "Tours And Travels",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center tracking-wider text-[0.75rem] hover:underline-offset-4 hover:underline"
                // hover:underline-offset-8 hover:underline
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                onClick={() => handleServiceClick(item)} // Set the selected service and scroll
              >
                <motion.span
                  className="mr-2"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaRegHandPointRight />
                </motion.span>
                {item} 
                {/* <span className="text-[0px]">-</span> */}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Render the selected service component with ref for scrolling */}
      <div className="py-10" ref={detailsRef}>
        {renderSelectedService()}
      </div>

      <Footer />
    </>
  );
};

export default WebDevelopment;
