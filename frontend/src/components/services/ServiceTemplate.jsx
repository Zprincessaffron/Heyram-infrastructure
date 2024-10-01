import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Helper hook to control individual animations
const useAnimatedInView = (threshold = 0.2) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50
      });
    }
  }, [inView, controls]);

  return [ref, controls];
};

// ServiceTemplate component for reusability
const ServiceTemplate = ({
  title,
  introduction,
  offerItems,
  whyChooseUsItems,
  roadmapItems,
  ctaText,
  buttonText
}) => {
  // Use the custom hook for each section
  const [titleRef, titleControls] = useAnimatedInView();
  const [introRef, introControls] = useAnimatedInView();
  const [offerRef, offerControls] = useAnimatedInView();
  const [whyChooseUsRef, whyChooseUsControls] = useAnimatedInView();
  const [roadmapRef, roadmapControls] = useAnimatedInView(0.3);
  const [ctaRef, ctaControls] = useAnimatedInView();

  return (
    <div className="text-white py-16 px-6 lg:px-16">
      {/* Section Title */}
      <motion.h1
        className="text-4xl lg:text-5xl font-light mb-8 text-white"
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={titleControls}
      >
        {title}
      </motion.h1>

      {/* Introduction Paragraph */}
      <motion.p
        className="text-md lg:text-md mb-6 text-gray-300 tracking-wider"
        ref={introRef}
        initial={{ opacity: 0, y: 50 }}
        animate={introControls}
      >
        {introduction}
      </motion.p>

      {/* What We Offer */}
      <div className="mt-10">
        <motion.h2
          className="text-xl lg:text-2xl font-normal tracking-wider mb-4 text-white"
          ref={offerRef}
          initial={{ opacity: 0, y: 50 }}
          animate={offerControls}
        >
          What We Offer :
        </motion.h2>
        <ul className="list-disc list-inside space-y-4 tracking-wider">
          {offerItems.map((item, index) => (
            <motion.li
              className="text-md lg:text-md text-gray-300"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={offerControls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Why Choose Us */}
      <div className="mt-10">
        <motion.h2
          className="text-xl lg:text-2xl font-normal tracking-wider mb-4 text-white"
          ref={whyChooseUsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={whyChooseUsControls}
        >
          Why Choose Us :
        </motion.h2>
        <ul className="list-disc list-inside space-y-4 tracking-wider">
          {whyChooseUsItems.map((item, index) => (
            <motion.li
              className="text-md lg:text-md text-gray-300"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={whyChooseUsControls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Roadmap Section */}
      <div className="mt-10 relative">
        <motion.h2
          className="text-xl lg:text-2xl font-normal uppercase tracking-widest underline-offset-8 underline mb-16 text-white text-center"
          ref={roadmapRef}
          initial={{ opacity: 0, y: 50 }}
          animate={roadmapControls}
          transition={{ duration: 0.6 }}
        >
          Our Development Roadmap
        </motion.h2>

        <div className="flex justify-center">
          <div
            className="w-1 rounded-full bg-gray-400 h-full absolute left-1/2 transform -translate-x-1/2 overflow-hidden"
            // initial={{ opacity: 0, y: 50 }}
            // animate={roadmapControls}
            // transition={{ duration: 0.6, delay: 0.3 }}
          />

          <div className="grid grid-cols-1 w-full tracking-wider">
            {roadmapItems.map((phase, index) => (
              <div
                className={`flex justify-${phase.align} mb-6`}
                key={index}
                // initial={{ opacity: 0, y: 50 }}
                // animate={roadmapControls}
                // transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                <div className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-md">
                  <h3 className="text-xl font-normal mb-2 text-white">
                    {phase.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10">
        <motion.h2
          className="text-2xl pt-[8rem] lg:text-3xl font-normal mb-4 text-white"
          ref={ctaRef}
          initial={{ opacity: 0, y: 50 }}
          animate={ctaControls}
        >
          {ctaText}
        </motion.h2>
        <motion.p className="text-md lg:text-md tracking-wider mb-6 text-gray-300"
        ref={ctaRef} // Individual ref for Call to Action
        initial={{ opacity: 0, y: 50 }}
        animate={ctaControls}
        >
          Let us help turn your vision into a powerful web application tailored
          to your business. Contact us today to discuss your project
          requirements, and let's build something amazing together!
        </motion.p>
        <motion.button
          className="px-6 py-2 rounded-full bg-[#C0C0C0] text-[#090a29] font-semibold tracking-wider shadow-md transition duration-300 ease-in-out hover:bg-[#cc4a00]"
          ref={ctaRef}
          initial={{ opacity: 0, y: 50 }}
          animate={ctaControls}
        >
          {buttonText}
        </motion.button>
      </div>
    </div>
  );
};

export default ServiceTemplate;
