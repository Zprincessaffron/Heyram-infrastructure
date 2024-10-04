import React from "react";
import { motion } from "framer-motion";
import { useAnimatedInView } from "./ServiceTemplate"; // Custom hook for animations

// ServiceTemplate3 component
const ServiceTemplate3 = ({
  title,
  introduction,
  offerItems,
  benefits,
  ctaText,
  buttonText,
  quote,
  image // Added image prop
}) => {
  // Use the custom hook for each section
  const [titleRef, titleControls] = useAnimatedInView();
  const [introRef, introControls] = useAnimatedInView();
  const [offerRef, offerControls] = useAnimatedInView();
  const [benefitsRef, benefitsControls] = useAnimatedInView();
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
        className="text-lg lg:text-2xl font-light mb-4 tracking-widest uppercase"
        ref={titleRef}
        initial="hidden"
        animate={titleControls}
        variants={fadeInUp}
      >
        {title}
      </motion.h1>

      {/* Introduction Paragraph */}
      <motion.p
        className="text-xs lg:text-sm mb-4 text-gray-300 tracking-wider"
        ref={introRef}
        initial="hidden"
        animate={introControls}
        variants={fadeInUp}
      >
        {introduction}
      </motion.p>

      {/* Benefits and What We Offer Section */}
      <div className="mt-6 flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0 lg:space-x-6 overflow-hidden">
        {/* Left Content */}
        <div className="lg:w-1/2">
          {/* Benefits of Getting the Service */}
          <motion.h2
            className="text-lg lg:text-xl font-light tracking-widest mb-8 text-white"
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
                className="text-sm lg:text-md text-gray-300"
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
          <div className="mt-6">
            <motion.h2
              className="text-lg lg:text-xl font-light tracking-widest mb-6 text-white"
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
                  className="text-sm lg:text-md text-gray-300"
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
          <img src="/vls.jpg" alt="Service Illustration" className="w-[75%] rounded-lg shadow-lg" />
        </motion.div>
      </div>

      {/* Quote Section */}
      <motion.p
        className="mt-8 text-sm lg:text-[1rem] text-gray-300 tracking-wider text-center italic"
        initial="hidden"
        animate={offerControls}
        variants={fadeInUp}
        transition={{ duration: 0.5, delay: offerItems.length * 0.1 }}
      >
        "{quote}"
      </motion.p>

      {/* Call to Action */}
      <div className="mt-6">
        <motion.h2
          className="text-xl lg:text-2xl font-light mb-2 text-white"
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
        >
          {ctaText}
        </motion.h2>
        <motion.p
          className="text-sm lg:text-md tracking-wider mb-4 text-gray-300"
          ref={ctaRef}
          initial="hidden"
          animate={ctaControls}
          variants={fadeInUp}
        >
          Let us help build your online presence today!
        </motion.p>
        <motion.button
          className="px-5 py-2 rounded-full bg-[#C0C0C0] text-[#090a29] font-normal text-md tracking-wider shadow-md transition duration-300 ease-in-out"
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

export default ServiceTemplate3;
