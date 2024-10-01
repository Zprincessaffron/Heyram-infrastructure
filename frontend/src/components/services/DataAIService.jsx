import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaRegHandPointRight } from "react-icons/fa";
import Footer from "../footer/Footer";
import AI from "../../images/AIimg.jpg";
import Navbar from "../navbar/Navbar";
import Menubar from "../menubar/Menubar";
import MenuButton from "../navbar/MenuButton";
import DataAndAI from "./AI/DataAndAI";

const DataAIService = () => {
  const [selectedService, setSelectedService] = useState(null); // State to track the selected service
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
      default:
        return <DataAndAI />;
    }
  };

  // Function to handle clicking a service
  const handleServiceClick = (item) => {
    setSelectedService(item);
    detailsRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the details section
  };

  return (
    <>
      <Navbar />
      <MenuButton />
      <Menubar />
      <div className="h-screen w-full relative flex overflow-hidden">
        <img src={AI} alt="Web developer img" className="w-full h-screen bg-cover bg-no-repeat" />
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Title on the left side */}
        <motion.h1
          className="absolute top-1/2 left-10 transform -translate-y-1/2 text-6xl font-light text-white uppercase tracking-widest"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Data And AI Service
        </motion.h1>

        {/* List on the right side */}
        <motion.div
          className="absolute top-1/2 right-5 transform -translate-y-1/2"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          {/* <ul className="pl-5 text-white gap-10 space-y-8 cursor-pointer">
            {[
              "Data And AI",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center tracking-wider hover:underline-offset-8 hover:underline"
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
          </ul> */}
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
