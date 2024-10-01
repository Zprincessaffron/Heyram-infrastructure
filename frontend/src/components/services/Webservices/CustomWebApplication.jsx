import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CustomWebApplication = () => {
  // Helper hook to control individual animations, without 'triggerOnce'
  const useAnimatedInView = (threshold = 0.2) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold }); // No triggerOnce

    const roadmapRef = useRef(null);
  const roadmapControls = useAnimation();
  const isInView = useInView(roadmapRef, { once: false, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      roadmapControls.start({ opacity: 1, y: 0 });
    } else {
      roadmapControls.start({ opacity: 0, y: 50 });
    }
  }, [isInView, roadmapControls]);

    React.useEffect(() => {
      if (inView) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 }
        });
      } else {
        // This will reset the animation when the element is out of view
        controls.start({
          opacity: 0,
          y: 50,
        });
      }
    }, [inView, controls]);

    return [ref, controls];
  };

  // Using custom hook for different sections
  const [titleRef, titleControls] = useAnimatedInView();
  const [introRef, introControls] = useAnimatedInView();
  const [offerRef, offerControls] = useAnimatedInView();
  const [whyChooseUsRef, whyChooseUsControls] = useAnimatedInView();
  const [roadmapRef, roadmapControls] = useAnimatedInView(0.3); // Adjusted threshold for roadmap
  const [ctaRef, ctaControls] = useAnimatedInView();

  return (
    <div className="text-white py-16 px-6 lg:px-32">
      {/* Section Title */}
      <motion.h1
        className="text-4xl lg:text-5xl font-light mb-8 text-white"
        ref={titleRef} // Individual ref for title
        initial={{ opacity: 0, y: 50 }}
        animate={titleControls}
      >
        Custom Web Application Development
      </motion.h1>

      {/* Introduction Paragraph */}
      <motion.p
        className="text-md lg:text-md mb-6 text-gray-300 tracking-wider"
        ref={introRef} // Individual ref for introduction
        initial={{ opacity: 0, y: 50 }}
        animate={introControls}
      >
        In today's fast-paced digital world, having a tailored web application
        is crucial for businesses that want to streamline operations, engage
        customers, and grow efficiently. We offer{" "}
        <span className="font-semibold text-white">
          custom web application development services
        </span>{" "}
        designed to meet your unique business needs. Our solutions are robust,
        scalable, and fully customized to your goals, ensuring a seamless user
        experience across devices.
      </motion.p>

      {/* What We Offer */}
      <div className="mt-10">
        <motion.h2
          className="text-xl lg:text-2xl font-normal tracking-wider mb-4 text-white"
          ref={offerRef} // Individual ref for "What We Offer" section
          initial={{ opacity: 0, y: 50 }}
          animate={offerControls}
        >
          What We Offer :
        </motion.h2>
        <ul className="list-disc list-inside space-y-4 tracking-wider">
          {[
            "Tailored Functionality: Whether you need an e-commerce platform, a CRM system, or a project management tool, we develop features that are specific to your business requirements.",
            "Scalability: We ensure your web application grows with your business, handling increasing traffic and data without compromising performance.",
            "Responsive Design: Optimized for mobile, tablet, and desktop, providing a seamless experience across all devices.",
            "Security: Top-tier security protocols safeguard sensitive data, ensuring compliance with industry standards and regulations.",
            "Integration with Third-Party Services: Seamlessly connect your custom application with external services such as payment gateways and analytics platforms.",
            "Continuous Support: We offer ongoing maintenance and support to keep your web application updated and optimized.",
          ].map((item, index) => (
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
          ref={whyChooseUsRef} // Individual ref for "Why Choose Us" section
          initial={{ opacity: 0, y: 50 }}
          animate={whyChooseUsControls}
        >
          Why Choose Us :
        </motion.h2>
        <ul className="list-disc list-inside space-y-4 tracking-wider">
          {[
            "Agile Development Process: We follow agile methodologies to deliver your project on time and within budget.",
            "User-Centric Approach: We prioritize intuitive interfaces and efficient functionality for an enhanced user experience.",
            "Innovative Solutions: Using the latest technologies like React, Node.js, and MongoDB, we build cutting-edge, feature-rich web applications.",
          ].map((item, index) => (
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
        ref={roadmapRef} // Individual ref for Roadmap section
        initial={{ opacity: 0, y: 50 }}
        animate={roadmapControls}
        transition={{ duration: 0.6 }}
      >
        Our Development Roadmap
      </motion.h2>

      <div className="flex justify-center">
        <motion.div
          className="w-1 rounded-full bg-gray-400 h-full absolute left-1/2 transform -translate-x-1/2 overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={roadmapControls}
          transition={{ duration: 0.6, delay: 0.3 }}
        />

        <div className="grid grid-cols-1 w-full tracking-wider">
          {/* Roadmap Phases */}
          {[
            {
              title: "Phase 1: Discovery & Planning",
              description:
                "We conduct thorough research to understand your requirements and define project scope.",
              align: "end",
            },
            {
              title: "Phase 2: Design & Prototyping",
              description:
                "We create wireframes and prototypes to visualize your application's interface and functionality.",
              align: "start",
            },
            {
              title: "Phase 3: Development & Testing",
              description:
                "We build your application using agile development practices and conduct rigorous testing.",
              align: "end",
            },
            {
              title: "Phase 4: Launch & Support",
              description:
                "We launch your application and provide ongoing support to ensure its success.",
              align: "start",
            },
          ].map((phase, index) => (
            <motion.div
              className={`flex justify-${phase.align} mb-6`}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={roadmapControls}
              transition={{ duration: 0.6, delay: index * 0.3 }}
            >
              <div className="bg-gray-700 p-6 rounded-lg shadow-lg max-w-md">
                <h3 className="text-xl font-normal mb-2 text-white">
                  {phase.title}
                </h3>
                <p className="text-gray-300 mb-4">{phase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>

      {/* Call to Action */}
      <div className="mt-10">
        <motion.h2
          className="text-2xl pt-[8rem] lg:text-3xl font-normal mb-4 text-white"
          ref={ctaRef} // Individual ref for Call to Action
          initial={{ opacity: 0, y: 50 }}
          animate={ctaControls}
        >
          Get Started with Your Custom Web Application Today !
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
          Contact Us
        </motion.button>
      </div>
    </div>
  );
};

export default CustomWebApplication;
