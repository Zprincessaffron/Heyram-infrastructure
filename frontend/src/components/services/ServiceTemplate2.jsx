import React from "react";
import { motion } from "framer-motion";
import { useAnimatedInView } from "./ServiceTemplate";
// import { useAnimatedInView } from "./useAnimatedInView"; // Renamed the custom hook for clarity

// ServiceTemplate2 component
const ServiceTemplate2 = ({
  title,
  introduction,
  offerItems,
  industriesItems,
  ctaText,
  buttonText,
  tagline,
  image
}) => {
  // Use the custom hook for each section
  const [titleRef, titleControls] = useAnimatedInView();
  const [introRef, introControls] = useAnimatedInView();
  const [offerRef, offerControls] = useAnimatedInView();
  const [industriesRef, industriesControls] = useAnimatedInView();
  const [ctaRef, ctaControls] = useAnimatedInView();

  // Animation variants for consistency across different sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="text-white py-4 px-4 lg:px-6">
      {/* Section Title */}
      <motion.h1
        className="text-lg lg:text-2xl font-light mb-4 tracking-widest uppercase lg:text-start text-center"
        ref={titleRef}
        initial="hidden"
        animate={titleControls}
        variants={fadeInUp}
      >
        {title} 
      </motion.h1>

      {/* Introduction Paragraph */}
      <motion.p
        className="text-xs lg:text-sm mb-4 text-gray-300 tracking-wider lg:text-start text-center"
        ref={introRef}
        initial="hidden"
        animate={introControls}
        variants={fadeInUp}
      >
        {introduction}
      </motion.p>

      {/* Industries We Serve */}
      <div className="mt-6">
        <motion.h2
          className="text-lg lg:text-2xl font-light tracking-widest mb-8 text-white "
          ref={industriesRef}
          initial="hidden"
          animate={industriesControls}
          variants={fadeInUp}
        >
          Industries We Serve :
        </motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {industriesItems.map((industry, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-evenly space-y-2 lg:w-[125px] lg:h-[90px] w-[100px] h-[70px] p-2 border rounded-lg shadow-lg transition duration-300"
              initial="hidden"
              animate={industriesControls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
              }}
            >
              <div className="text-white">
                <industry.icon size={18} />
              </div>
              <p className="text-[0.5rem] lg:text-[0.6rem] text-gray-300 text-center">
                {industry.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* What We Offer Section with Image on the Right */}
      <div className="mt-6 flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0 lg:space-x-6 overflow-hidden">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <motion.h2
            className="text-lg lg:text-2xl font-light tracking-widest mb-6 text-white"
            ref={offerRef}
            initial="hidden"
            animate={offerControls}
            variants={fadeInUp}
          >
            What We Offer :
          </motion.h2>
          <ul className="list-disc list-inside space-y-2 tracking-wider">
            {offerItems.map((item, index) => (
              <motion.li
                className="text-xs lg:text-sm text-gray-300"
                key={index}
                initial="hidden"
                animate={offerControls}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
                }}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right Image */}
        <motion.div
          className="lg:w-1/2 items-center flex justify-center"
          initial="hidden"
          animate={offerControls}
          variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
        >
          <img src={image} alt="Service Illustration" className="w-[60%] rounded-lg shadow-lg" />
          
        </motion.div>
      </div>

      {/* Tagline */}
      <motion.p
        className="mt-8 text-[0.75rem] lg:text-[1rem] text-gray-300 tracking-wider text-center italic"
        initial="hidden"
        animate={offerControls}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: offerItems.length * 0.1 }}
      >
        "{tagline}"
      </motion.p>

      {/* Call to Action */}
      <div className="lg:mt-6 flex flex-col items-center justify-center">
        <motion.h2
          className="text-md lg:pt-[5rem] pt-[3rem] lg:text-2xl font-light mb-2 text-white"
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
        >
          {ctaText}
        </motion.h2>
        <motion.p
          className="text-xs lg:text-sm tracking-wider mb-4 text-gray-300"
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
        >
          Let us help build your website today!
        </motion.p>
        <motion.button
          className="lg:px-5 lg:py-2 px-3 py-1 rounded-full bg-[#C0C0C0] text-[#090a29] font-normal lg:text-md text-sm tracking-wider shadow-md transition duration-300 ease-in-out"
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
        >
          {buttonText}
        </motion.button>
      </div>
    </div>
  );
};

export default ServiceTemplate2;
