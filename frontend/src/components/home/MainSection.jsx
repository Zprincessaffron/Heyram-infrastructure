import React, { useState, useEffect, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowForward } from "react-icons/md"; // Import the right arrow icon
import { AppContext } from "../../context/AppContext";
import webdev from "/main.mp4"; // Web Development video
import digimark from "/main.mp4"; // Digital Marketing video
import AI from "/main.mp4"; // AI video

function MainSection() {
  const { setConnectForm } = useContext(AppContext);

  const services = [
    {
      title: "Web Development",
      description:
        "We create scalable, responsive websites tailored to your business needs, ensuring a fast, secure, and user-friendly digital presence.",
      video: webdev,
    },
    {
      title: "Digital Marketing",
      description:
        "Our data-driven marketing solutions optimize your online presence, enhancing growth and engagement through SEO and social media strategies.",
      video: digimark,
    },
    {
      title: "Gen-Z AI",
      description:
        "Leverage data and AI to streamline operations and enhance decision-making, turning raw data into actionable insights for smarter outcomes.",
      video: AI,
    },
  ];

  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setCurrentServiceIndex((prevIndex) => (prevIndex + 1) % services.length);
        setIsFadingOut(false);
      }, 1000); // Set duration of fade-out
    }, 5000); // Switch every 5 seconds

    return () => clearInterval(interval);
  }, [services.length]);

  // Fade-out animation for video
  const fadeOutVideoProps = {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
    exit: { opacity: 0 },
    transition: { duration: 0.8, ease: "easeInOut" },
  };

  // Fade-in animation for video
  const fadeInVideoProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 1 },
    transition: { duration: 0.8, ease: "easeInOut" },
  };

  // Slide out for content
  const slideOutProps = {
    initial: { opacity: 1, x: 0 },
    animate: { opacity: 0, x: -100 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 0.6, ease: "easeInOut" },
  };

  // Slide in for content
  const slideInProps = {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeInOut" },
  };

  return (
    <>
      <div className="relative flex h-screen">
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden bg-black">
          <AnimatePresence mode="wait">
            {/* {isFadingOut ? ( */}
              {/* <motion.div
                key={`video-fade-out-${currentServiceIndex}`}
                className="absolute inset-0"
                {...fadeOutVideoProps}
              >
                <video
                  src={services[currentServiceIndex].video}
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover rotate-180"
                />
                <div className="absolute inset-0 bg-black opacity-40" />
              </motion.div> */}
            {/* ) : ( */}
              <motion.div
                // key={`video-fade-in-${currentServiceIndex}`}
                className="absolute inset-0"
                // {...fadeInVideoProps}
              >
                <video
                  src={services[currentServiceIndex].video}
                  autoPlay
                  loop
                  muted
                  className="absolute inset-0 w-full h-full object-cover rotate-180"
                />
                <div className="absolute inset-0 bg-[#090a29] opacity-40" />
              </motion.div>
            {/* )} */}
          </AnimatePresence>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex flex-col items-start justify-center p-8 text-left text-white w-1/2 pl-20">
          <AnimatePresence mode="wait">
            {isFadingOut ? (
              <motion.div
                className="flex flex-col space-y-4"
                {...slideOutProps}
                key={`fade-out-${currentServiceIndex}`}
              >
                <motion.h1
                  className="text-[2.5rem] uppercase tracking-widest font-light mb-4"
                  transition={{ delay: 0.2 }}
                >
                  {services[currentServiceIndex].title}
                </motion.h1>
                <motion.p
                  className="text-sm font-light tracking-wider mb-6 max-w-3xl"
                  transition={{ delay: 0.5 }}
                >
                  {services[currentServiceIndex].description}
                </motion.p>
                <motion.button
                  onClick={() => setConnectForm(true)}
                  className="px-3 py-2 font-normal text-sm tracking-wider bg-[#e5e5e5] text-[#090a29] rounded-full transition hover:bg-gray-300 flex items-center justify-center"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{ maxWidth: "180px" }}
                >
                  Enquire Now
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
            ) : (
              <motion.div
                className="flex flex-col space-y-4"
                {...slideInProps}
                key={`fade-in-${currentServiceIndex}`}
              >
                <motion.h1
                  className="text-[2.5rem] uppercase tracking-widest font-light mb-4 "
                  transition={{ delay: 0.2 }}
                >
                  {services[currentServiceIndex].title}
                </motion.h1>
                <motion.p
                  className="text-sm font-light tracking-widest mb-6"
                  transition={{ delay: 0.5 }}
                >
                  {services[currentServiceIndex].description}
                </motion.p>
                <motion.button
                  onClick={() => setConnectForm(true)}
                  className="px-3 py-2 font-normal text-sm tracking-wider bg-[#e5e5e5] text-[#090a29] rounded-full transition hover:bg-gray-300 flex items-center justify-center"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  style={{ maxWidth: "180px" }}
                >
                  Enquire Now
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

        {/* Dots Indicator */}
        <div className="absolute right-10 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-15">
          {services.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentServiceIndex ? "bg-white scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MainSection;
