import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRegHandPointRight } from "react-icons/fa";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Menubar from "../menubar/Menubar";
import MenuButton from "../navbar/MenuButton";
import EcomWebsite from "./Webservices/EcomWebsite.jsx";
import PortfolioWebsite from "./Webservices/PortfolioWebsite.jsx";
import CorporateWebsite from "./Webservices/CorporateWebsite.jsx";
import BookingWebsite from "./Webservices/BookingWebsite.jsx";
import EducationalWebsite from "./Webservices/EducationalWebsite.jsx";
import RealEstateWebsite from "./Webservices/RealEstateWebsite.jsx";
import LandingPage from "./Webservices/LandingPage.jsx";
import HealthAndWellness from "./Webservices/HealthAndWellness.jsx";
import ToursAndTravels from "./Webservices/ToursAndTravels.jsx";
import { useParams } from "react-router-dom";
import webdev from "/vid1.mp4"; // Video background
import { IoIosArrowRoundForward } from "react-icons/io";
import { GiBottomRight3dArrow } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";

const WebDevelopment = () => {
  const { service } = useParams(); // Retrieve the selected service from the URL
  const [selectedService, setSelectedService] = useState(
    service || "E-Commerce Website"
  );

  // UseEffect to update selected service when URL changes
  useEffect(() => {
    if (service) {
      setSelectedService(service);
    } else {
      setSelectedService("E-Commerce Website"); // Fallback default
    }
  }, [service]);

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
          className="absolute lg:top-[65%] top-1/2 right-5 transform -translate-y-1/2 mt-6"
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
                className="flex items-center tracking-wider text-[0.75rem] border-l pl-2 relative group" // Added 'group' for hover targeting
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleServiceClick(item)}
              >
                {/* Arrow icon, initially hidden, will appear when the item text is hovered */}
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1 ">
                  <FaArrowRightLong size={10} />
                </span>

                <motion.span
                  className="relative cursor-pointer overflow-hidden"
                  initial={{ backgroundSize: "0% 0px" }}
                  whileHover={{ backgroundSize: "100% 1px" }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, white 100%, transparent 0)",
                    backgroundPosition: "0% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "0% 1px",
                  }}
                >
                  {item}
                </motion.span>
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
