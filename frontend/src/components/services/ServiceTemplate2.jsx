import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useAnimatedInView } from "./ServiceTemplate";
import { AppContext } from "../../context/AppContext";
import Connect from "../form/Connect";

// ServiceTemplate2 component
const ServiceTemplate2 = ({
  title,
  introduction,
  offerItems,
  industriesItems,
  ctaText,
  buttonText,
  tagline,
  image,
}) => {
  // Use the custom hook for each section
  const [titleRef, titleControls] = useAnimatedInView();
  const [introRef, introControls] = useAnimatedInView();
  const [offerRef, offerControls] = useAnimatedInView();
  const [imageRef, imageControls] = useAnimatedInView();
  const [taglineRef, taglineControls] = useAnimatedInView();
  const [industriesRef, industriesControls] = useAnimatedInView();
  const [ctaRef, ctaControls] = useAnimatedInView();

  const { setConnectForm } = useContext(AppContext);

  // Animation variants for consistency across different sections
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: { duration: 0.8, ease: "easeOut" },
    }, // Smooth exit
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }, // Smooth entry
    },
  };

  return (
    <>
      <Connect />
      <div className="text-white py-4 px-4 lg:px-6">
        {/* Section Title */}
        <motion.h1
          className="text-[1rem] lg:text-2xl font-light mb-6 tracking-widest uppercase lg:text-start text-center"
          ref={titleRef}
          initial="hidden"
          animate={titleControls}
          variants={fadeInUp}
        >
          {title}
        </motion.h1>

        {/* Introduction Paragraph */}
        <motion.p
          className="text-[0.65rem] lg:text-xs mb-8 text-gray-300 tracking-wider lg:text-start text-center"
          ref={introRef}
          initial="hidden"
          animate={introControls}
          variants={fadeInUp}
        >
          {introduction}
        </motion.p>

        {/* Industries We Serve */}
        <div className="mt-[60px]">
          <motion.h2
            className="text-[1rem] lg:text-xl font-light tracking-widest mb-8 text-white uppercase"
            ref={industriesRef}
            initial="hidden"
            animate={industriesControls}
            variants={fadeInUp}
          >
            Industries We Serve :
          </motion.h2>
          <div className="flex flex-wrap items-center justify-center gap-4 my-[60px]">
            {industriesItems.map((industry, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-evenly space-y-2 lg:w-[125px] lg:h-[90px] w-[100px] h-[70px] p-2 border rounded-lg shadow-lg transition duration-300"
                initial="hidden"
                animate={industriesControls}
                variants={{
                  hidden: { opacity: 0, y: 20, transition: { duration: 0.5, ease: "easeOut" } },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, delay: index * 0.1,  ease: "easeOut"  },
                  },
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

        {/* What We Offer Section with Image on the Right */}
        <div className="mt-[70px] flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0 lg:space-x-6 overflow-hidden">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <motion.h2
              className="text-[1rem] lg:text-xl font-light tracking-widest mb-6 text-white uppercase"
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
                  className="text-[0.65rem] lg:text-xs text-gray-300"
                  key={index}
                  initial="hidden"
                  animate={offerControls}
                  variants={{
                    hidden: { opacity: 0, y: 20 , transition: { duration: 0.8, ease: "easeOut" } },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, delay: index * 0.1 },
                    },
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
            ref={imageRef}
            initial="hidden"
            animate={imageControls}
            variants={{
              hidden: {
                opacity: 0,
                x: 50,
                transition: { duration: 0.8, ease: "easeOut" },
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <img
              src={image}
              alt="Service Illustration"
              className="w-[60%] rounded-lg shadow-lg"
            />
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.p
          className="mt-[60px] text-[0.7rem] lg:text-[0.8rem] text-gray-300 tracking-wider text-center italic"
          initial="hidden"
          ref={taglineRef}
          animate={taglineControls}
          variants={fadeInUp}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          "{tagline}"
        </motion.p>

        {/* Call to Action */}
        <div className="lg:mt-4 flex flex-col items-center justify-center">
          <motion.h2
            className="text-sm lg:pt-[3rem] pt-[1rem] lg:text-xl font-light mb-2 text-white tracking-wider text-center uppercase"
            ref={ctaRef}
            initial="hidden"
            animate={ctaControls}
            variants={fadeInUp}
          >
            {ctaText}
          </motion.h2>
          <motion.p
            className="text-[0.65rem] lg:text-[0.8rem] tracking-widest mb-[40px] text-gray-300"
            ref={ctaRef}
            initial="hidden"
            animate={ctaControls}
            variants={fadeInUp}
          >
            Let us help build your website today!
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

export default ServiceTemplate2;
