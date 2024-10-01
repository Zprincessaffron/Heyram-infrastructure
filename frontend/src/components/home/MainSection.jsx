import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowForward } from "react-icons/md"; // Import the right arrow icon
// import Navbar from "../navbar/Navbar";
// import Menubar from "../menubar/Menubar";
import { AppContext } from "../../context/AppContext";

function MainSection() {
  const { setConnectForm } = useContext(AppContext)
  const services = [
    {
        title: "Web Development",
        description: "We create scalable, responsive websites tailored to your business needs, ensuring a fast, secure, and user-friendly digital presence."
    },
    {
        title: "Digital Marketing",
        description: "Our data-driven marketing solutions optimize your online presence, enhancing growth and engagement through SEO and social media strategies."
    },
    {
        title: "Gen-Z AI",
        description: "Leverage data and AI to streamline operations and enhance decision-making, turning raw data into actionable insights for smarter outcomes."
    }
];



  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State for hover

  // Change service every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true); // Trigger fade out animation
      setTimeout(() => {
        setCurrentServiceIndex(
          (prevIndex) => (prevIndex + 1) % services.length
        );
        setIsFadingOut(false); // End fade out
      }, 800); // Match with the fade out duration
    }, 5000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [services.length]);

  // Slide out animation properties
  const slideOutProps = {
    initial: { opacity: 1, x: 0 },
    animate: { opacity: 0, x: -100 }, // Slide out to the left
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.6, ease: "easeInOut" },
  };

  // Slide in animation properties
  const slideInProps = {
    initial: { opacity: 0, x: -100 }, // Start from left
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeInOut" },
  };

  return (
    <>
      {/* <Navbar /> */}
      {/* <Menubar /> */}
      <div className="relative flex flex-col items-center justify-center h-screen text-center p-4">
        <AnimatePresence mode="wait">
          {isFadingOut ? (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              {...slideOutProps}
              key={`fade-out-${currentServiceIndex}`}
            >
              <motion.h1
                className="text-6xl uppercase tracking-widest font-light mb-4 text-white"
                transition={{ delay: 0.2 }} // Delay for header
              >
                {services[currentServiceIndex].title}
              </motion.h1>
              <motion.p
                className="text-md tracking-wider text-gray-300 mb-6 max-w-4xl"
                transition={{ delay: 0.5 }} // Delay for paragraph
              >
                {services[currentServiceIndex].description}
              </motion.p>
              <motion.button
                onClick={()=>{setConnectForm(true)}}
                className="px-6 py-3 font-semibold tracking-wider bg-[#C0C0C0] text-[#090a29] rounded-full transition hover:bg-gray-300 flex items-center justify-center text-center"
                onMouseEnter={() => setIsHovered(true)} // Set hover state
                onMouseLeave={() => setIsHovered(false)} // Reset hover state
                transition={{ delay: 0.7 }} // Delay for button animation
              >
                Enquire Now
                {isHovered && ( // Conditionally render the arrow only when hovered
                  <motion.div
                    className="ml-2"
                    initial={{ x: -10, opacity: 0 }} // Initial state: arrow slightly offscreen
                    animate={{ x: 0, opacity: 1 }} // Animate when hovered
                    transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth animation
                  >
                    <MdArrowForward className="transition-all duration-300 ease-in-out" />
                  </motion.div>
                )}
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center"
              {...slideInProps}
              key={`fade-in-${currentServiceIndex}`}
            >
              <motion.h1
                className="text-6xl uppercase tracking-widest font-light mb-5 text-white"
                transition={{ delay: 0.2 }} // Delay for header
              >
                {services[currentServiceIndex].title}
              </motion.h1>
              <motion.p
                className="text-md tracking-wider text-gray-300 mb-6 max-w-4xl"
                transition={{ delay: 0.5 }} // Delay for paragraph
              >
                {services[currentServiceIndex].description}
              </motion.p>
              <motion.button
                onClick={()=>{setConnectForm(true)}}
                className="px-6 py-3 font-semibold tracking-wider bg-[#C0C0C0] text-[#090a29] rounded-full transition hover:bg-gray-300 flex items-center justify-center text-center"
                onMouseEnter={() => setIsHovered(true)} // Set hover state
                onMouseLeave={() => setIsHovered(false)} // Reset hover state
                transition={{ delay: 0.7 }} // Delay for button animation
              >
                Enquire Now
                {isHovered && ( // Conditionally render the arrow only when hovered
                  <motion.div
                    className="ml-2"
                    initial={{ x: -10, opacity: 0 }} // Initial state: arrow slightly offscreen
                    animate={{ x: 0, opacity: 1 }} // Animate when hovered
                    transition={{ duration: 0.3, ease: "easeInOut" }} // Smooth animation
                  >
                    <MdArrowForward className="transition-all duration-300 ease-in-out" />
                  </motion.div>
                )}
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dots indicator */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-3">
          {services.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full transition-all ${
                currentServiceIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}

export default MainSection;
