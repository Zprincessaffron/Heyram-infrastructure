import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useAnimatedInView } from "./ServiceTemplate"; // Custom hook for animations
import { AppContext } from "../../context/AppContext";
import Connect from "../form/Connect";

// ServiceTemplate3 component
const ServiceTemplate3 = ({
  title,
  introduction,
  offerItems,
  benefits,
  ctaText,
  buttonText,
  quote,
  image, // Added image prop
  industriesItems, // New prop for industries
}) => {
  // Use the custom hook for each section
  const [titleRef, titleControls] = useAnimatedInView();
  const [introRef, introControls] = useAnimatedInView();
  const [offerRef, offerControls] = useAnimatedInView();
  const [benefitsRef, benefitsControls] = useAnimatedInView();
  const [taglineRef, taglineControls] = useAnimatedInView();
  const [ctaRef, ctaControls] = useAnimatedInView();
  const [industriesRef, industriesControls] = useAnimatedInView(); // For industries section

  const { setConnectForm } = useContext(AppContext);

  // Animation variants for consistency across different sections
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <>
    <Connect/>
     <div className="text-white py-4 px-4 lg:px-6">
      {/* Section Title */}
      <motion.h1
        className="text-[1rem] lg:text-2xl font-light mb-4 tracking-widest uppercase lg:text-start text-center"
        ref={titleRef}
        initial="hidden"
        animate={titleControls}
        variants={fadeInUp}
      >
        {title}
      </motion.h1>

      {/* Introduction Paragraph */}
      <motion.p
        className="text-[0.65rem] lg:text-xs mb-4 text-gray-300 tracking-wider lg:text-start text-center"
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
          className="text-[1rem] lg:text-2xl font-light tracking-widest mb-8 text-white"
          ref={industriesRef}
          initial="hidden"
          animate={industriesControls}
          variants={fadeInUp}
        >
          Industries We Serve:
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
              <p className="text-[0.5rem] lg:text-[0.6rem] text-gray-300 text-center tracking-wider">
                {industry.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits and What We Offer Section */}
      <div className="mt-8 flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0 lg:space-x-6 overflow-hidden">
        {/* Left Content */}
        <div className="lg:w-1/2">
          {/* Benefits of Getting the Service */}
          <motion.h2
            className="text-[1rem] lg:text-2xl font-light tracking-widest mb-6 text-white"
            ref={benefitsRef}
            initial="hidden"
            animate={benefitsControls}
            variants={fadeInUp}
          >
            Benefits of Getting This Service from Us:
          </motion.h2>
          <ul className="list-disc list-inside space-y-2 tracking-wider">
            {benefits.map((benefit, index) => (
              <motion.li
                className="text-[0.65rem] lg:text-xs text-gray-300"
                key={index}
                initial="hidden"
                animate={benefitsControls}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
                }}
              >
                {benefit}
              </motion.li>
            ))}
          </ul>

          {/* What We Offer Section */}
          <div className="mt-8">
            <motion.h2
              className="text-[1rem] lg:text-2xl font-light tracking-widest mb-6 text-white"
              ref={offerRef}
              initial="hidden"
              animate={offerControls}
              variants={fadeInUp}
            >
              What We Offer:
            </motion.h2>
            <ul className="list-disc list-inside space-y-2 tracking-wider">
              {offerItems.map((item, index) => (
                <motion.li
                  className="text-[0.65rem] lg:text-xs text-gray-300"
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
        </div>

        {/* Right Image */}
        <motion.div
          className="lg:w-1/2 flex items-center justify-center"
          initial="hidden"
          animate={offerControls}
          variants={{ hidden: { opacity: 0, x: 50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8 } } }}
        >
          <img src={image} alt="Service Illustration" className="w-[60%] rounded-lg shadow-lg" />
        </motion.div>
      </div>

      {/* Quote Section */}
      <motion.p
        className="mt-10 text-[0.7rem] lg:text-[0.8rem] text-gray-300 tracking-wider text-center italic"
        initial="hidden"
        ref={taglineRef}
        animate={taglineControls}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay:  0.3 }}
      >
        "{quote}"
      </motion.p>

      {/* Call to Action */}
      <div className="lg:mt-4 flex flex-col items-center justify-center">
        <motion.h2
          className="text-md lg:pt-[3rem] pt-[1rem] lg:text-xl font-light mb-2 text-white tracking-wider"
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
        >
          {ctaText}
        </motion.h2>
        <motion.p
          className="text-[0.65rem] lg:text-xs tracking-wider mb-4 text-gray-300"
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
        >
          Let us help build your online presence today!
        </motion.p>
        <motion.button
          className="lg:px-7 lg:py-2 px-4 py-1 rounded-full bg-[#C0C0C0] text-[#090a29] font-bold text-[0.7rem] tracking-wider shadow-md transition duration-300 ease-in-out"
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
          onClick={() => setConnectForm(true)}
        >
          {buttonText}
        </motion.button>
      </div>
    </div>
    </>
   
  );
};

export default ServiceTemplate3;
