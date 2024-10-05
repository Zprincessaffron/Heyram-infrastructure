import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRegHandPointRight } from "react-icons/fa";
import Footer from "../footer/Footer";
import AI from "../../images/AIimg.jpg";
import Navbar from "../navbar/Navbar";
import Menubar from "../menubar/Menubar";
import MenuButton from "../navbar/MenuButton";
import DataAndAI from "./AI/DataAndAI";
import DataAi from "/vid3.mp4";
import GenZAI from "./AI/GenZAi";
import DataAnalysis from "./AI/DataAnalysis";
import { useParams } from "react-router-dom";

const DataAIService = () => {
  const { service } = useParams();
  const [selectedService, setSelectedService] = useState("Gen-Z AI"); // State to track the selected service
  const detailsRef = useRef(null); // Create a ref for the details section

  // UseEffect to update selected service when URL changes
  useEffect(() => {
    if (service) {
      setSelectedService(service);
    } else {
      setSelectedService("Gen-Z AI"); // Fallback default
    }
  }, [service]);// State to track the selected service


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
      case "Data Analysis":
        return <DataAnalysis />;
      default:
        return <GenZAI/>;
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
          src={DataAi}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#090a29] opacity-40"></div>

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
          className="absolute top-1/2 right-5 transform -translate-y-1/2"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="pl-5 text-white lg:space-y-4 space-y-6 cursor-pointer text-sm">
            {[
              "Gen-Z AI",
              "Data Analysis"
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center tracking-wider text-[0.75rem] hover:underline-offset-4 hover:underline"
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

export default DataAIService;
