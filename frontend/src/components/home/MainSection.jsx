import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowForward } from "react-icons/md"; // Import the right arrow icon
import { AppContext } from "../../context/AppContext";
import webdev from "/main.mp4"; // Web Development video
import digimark from "/main.mp4"; // Digital Marketing video
import AI from "/main.mp4"; // AI video
import { useNavigate } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

function MainSection() {
  const { setConnectForm } = useContext(AppContext);
  const navigate = useNavigate();

  const services = [
    {
      title: "Web Development",
      description:
        "We create scalable, responsive websites tailored to your business needs, ensuring a fast, secure, and user-friendly digital presence.",
      video: webdev,
      navigate: "/web-development",
    },
    {
      title: "Digital Marketing",
      description:
        "Our data-driven marketing solutions optimize your online presence, enhancing growth and engagement through SEO and social media strategies.",
      video: digimark,
      navigate: "/digital-marketing",
    },
    {
      title: "Gen-Z AI",
      description:
        "Leverage data and AI to streamline operations and enhance decision-making, turning raw data into actionable insights for smarter outcomes.",
      video: AI,
      navigate: "/data-ai",
    },
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCurrentServiceIndex(
          (prevIndex) => (prevIndex + 1) % services.length
        );
        setIsFadingOut(false);
      }, 1000); // Set duration of fade-out
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [services.length]);

  // Define animations based on the current service index
  const getSlideInProps = (index) => {
    switch (index) {
      case 0:
        return {
          initial: { opacity: 0, y: -100 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -100 },
          transition: { duration: 0.6, ease: "easeInOut" },
        };
      case 1:
        return {
          initial: { opacity: 0, x: -100, y: 0 },
          animate: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: -100, y: 0 },
          transition: { duration: 0.6, ease: "easeInOut" },
        };
      case 2:
        return {
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 100 },
          transition: { duration: 0.6, ease: "easeInOut" },
        };
      default:
        return {};
    }
  };

  return (
    <>
      <div className="relative flex flex-col h-screen md:flex-row">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            <motion.div className="absolute inset-0">
              <video
                src={services[currentServiceIndex].video}
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover lg:rotate-180"
              />
              <div className="absolute inset-0 bg-[#090a29] opacity-40" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-start justify-center p-8 text-left text-white w-full md:w-1/2 pl-6 md:pl-20">
          <AnimatePresence mode="wait">
            {!isFadingOut && (
              <motion.div
                className="flex flex-col h-screen items-center justify-center space-y-4 lg:items-start"
                {...getSlideInProps(currentServiceIndex)} // Apply the respective slide-in animation based on the service index
                key={`fade-in-${currentServiceIndex}`}
              >
                {/* Title Animation */}
                <motion.h1
                  className="text-[1.7rem] md:text-[2.5rem] uppercase tracking-widest font-light"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  {services[currentServiceIndex].title}
                </motion.h1>

                {/* Description Animation */}
                <motion.p
                  className="text-xs lg:text-xs font-light tracking-widest max-w-3xl text-center lg:text-left text-gray-300 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {services[currentServiceIndex].description}
                </motion.p>

                {/* View Details Button Animation */}
                <motion.button
                  onClick={() =>
                    navigate(services[currentServiceIndex].navigate)
                  }
                  className="lg:px-7 lg:py-2 py-2 px-2 lg:text-[0.7rem] text-xs tracking-wider bg-[#e5e5e5] text-[#090a29] rounded-full transition hover:bg-gray-300 flex items-center justify-center font-bold"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{ maxWidth: "180px" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  View Details
                  {isHovered && (
                    <motion.div
                      className="ml-2"
                      initial={{ x: -10, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <MdArrowForward className="transition-all duration-300 ease-in-out" />
                    </motion.div>
                  )}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Enquire Now Button and Arrow at the bottom center */}
        {/* <div className="absolute bottom-5 left-0 right-0 flex flex-col items-center justify-center cursor-pointer"
        onClick={() => setConnectForm(true)}
        >
          <motion.button
            className="lg:text-[0.7rem] gap-2 text-xs tracking-widest rounded-full transition flex items-center justify-center font-light text-white cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Enquire Now 
            <FaArrowRight className="text-white text-xs" />
          </motion.button>

          {/* Down arrow below the button */}
          {/* <div className="mt-1">
            <FaArrowRight className="text-white text-xs" />
          </div> */}
        {/* </div> */} 

        {/* Enquire Now Button at the bottom */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center z-10">
          <div className="inline-block w-fit">
          <motion.button
            onClick={() => setConnectForm(true)}
            className="lg:text-[0.7rem] text-xs gap-2 hover:text-[0.75rem] tracking-wider text-white rounded-full transition flex items-center justify-center font-light cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Enquire Now
            <FaArrowRight className="text-white text-xs" />
          </motion.button>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default MainSection;
