import React, { useContext, useEffect, useState } from "react";
import AboutUsImg from "/AboutUs.jpg";
import { FaChartLine, FaCode, FaDatabase } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../button/Button.jsx";
import Footer from "../footer/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext.jsx";
import Connect from "../form/Connect.jsx";

const AboutUs = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showUnderline, setShowUnderline] = useState(false);
  const { setConnectForm } = useContext(AppContext);
  const navigate = useNavigate();

  // Function to handle scroll progress
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / documentHeight) * 100;
    setScrollPercent(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // Use separate refs and controls for each section
  const controlsText = useAnimation();
  const controlsLeft = useAnimation();
  const controlsRight = useAnimation();
  const controlsContainer = useAnimation();
  const controlsMission = useAnimation();
  const controlsVision = useAnimation();
  const controlsPledge = useAnimation();
  const controlsSection = useAnimation();

  // Create separate refs for each animated section
  const [refText, inViewText] = useInView({ threshold: 0.2 });
  const [refLeft, inViewLeft] = useInView({ threshold: 0.2 });
  const [refRight, inViewRight] = useInView({ threshold: 0.2 });
  const [refContainer, inViewContainer] = useInView({ threshold: 0.2 });
  const [refMission, inViewMission] = useInView({ threshold: 0.2 });
  const [refVision, inViewVision] = useInView({ threshold: 0.2 });
  const [refPledge, inViewPledge] = useInView({ threshold: 0.2 });
  const [refSection, inViewSection] = useInView({ threshold: 0.2 });

  // Trigger animation when in view for each section
  useEffect(() => {
    if (inViewText) {
      controlsText.start("visible");
    } else {
      controlsText.start("hidden");
    }
  }, [controlsText, inViewText]);

  useEffect(() => {
    if (inViewLeft) {
      controlsLeft.start("visible");
    } else {
      controlsLeft.start("hidden");
    }
  }, [controlsLeft, inViewLeft]);

  useEffect(() => {
    if (inViewRight) {
      controlsRight.start("visible");
    } else {
      controlsRight.start("hidden");
    }
  }, [controlsRight, inViewRight]);

  useEffect(() => {
    if (inViewContainer) {
      controlsContainer.start("visible");
    } else {
      controlsContainer.start("hidden");
    }
  }, [controlsContainer, inViewContainer]);

  useEffect(() => {
    if (inViewMission) {
      controlsMission.start("visible");
    } else {
      controlsMission.start("hidden");
    }
  }, [controlsMission, inViewMission]);

  useEffect(() => {
    if (inViewVision) {
      controlsVision.start("visible");
    } else {
      controlsVision.start("hidden");
    }
  }, [controlsVision, inViewVision]);

  useEffect(() => {
    if (inViewPledge) {
      controlsPledge.start("visible");
    } else {
      controlsPledge.start("hidden");
    }
  }, [controlsPledge, inViewPledge]);

  // Trigger animation when in view
  useEffect(() => {
    if (inViewSection) {
      controlsSection.start("visible");
    } else {
      controlsSection.start("hidden");
    }
  }, [controlsSection, inViewSection]);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const containerMission = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        when: "beforeChildren",
        staggerChildren: 0.3,
      },
    },
  };

  const containerVision = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
  };

  const containerPledge = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const missionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const visionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const pledgeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
  };

  // Animation variants for the whole section
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // Animation variants for the images
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  // Animation variants
  // const textVariants = {
  //   hidden: { opacity: 0, y: 30 },
  //   visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  // };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="overflow-hidden">
      {/* Background Image Section */}
      <div className="relative w-full h-screen">
        {/* Animate the image */}
        <motion.img
          src={AboutUsImg}
          alt="About Us"
          className="bg-cover bg-no-repeat bg-center w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />

        <div className="bg-black inset-0 absolute opacity-30" />

        {/* Animate the text */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.h2
            className="text-8xl font-normal tracking-[10px] uppercase mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            About us
          </motion.h2>

          <motion.p
            className="text-md tracking-wider"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            Empowering businesses with innovative web solutions, data-driven
            strategies, and AI technology to enhance online presence and drive
            growth.
          </motion.p>
        </motion.div>
      </div>

      {/* Content Section Below the Image */}
      <motion.div
        className="text-center my-14"
        ref={refText}
        initial="hidden"
        animate={controlsText}
        variants={textVariants}
      >
        {/* Animated Heading */}
        <motion.h3
          className="inline-block text-3xl font-semibold text-white mb-6 border-t-2 border-b-2 border-purple-600 tracking-widest py-4"
          variants={textVariants}
        >
          Who We Are ?
        </motion.h3>

        {/* Animated Text */}
        <motion.div className="max-w-2xl mx-auto" variants={textVariants}>
          <h5 className="text-lg text-gray-200 mb-4 tracking-wider">
            Heyram Infrastructure is a forward-thinking Private Limited Company
            based in Chennai, Tamil Nadu. We’ve been at the forefront of
            innovation, seamlessly integrating three distinct pillars:
          </h5>
        </motion.div>
      </motion.div>

      {/* Roadmap Section */}
      <div className="py-12 px-6 text-center">
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 shadow-lg rounded-full bg-gray-300 transition-all duration-300 ease-in-out">
            <div
              className="bg-blue-600 rounded-full w-full transition-all duration-300 ease-in-out"
              style={{ height: `${scrollPercent}%` }}
            />
          </div>

          {/* Service Cards Arrangement */}
          <div className="flex flex-col items-center relative">
            {/* Digital Marketing Services (Left) */}
            <motion.div
              className="flex justify-start w-full mb-10 relative"
              ref={refRight}
              initial="hidden"
              animate={controlsRight}
              variants={rightVariants} // Apply left animation
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-6">
                <FaChartLine className="text-blue-600 text-3xl bg-white rounded-full p-2" />
              </div>
              <div className="text-white rounded-lg p-6 text-center w-1/3 ml-auto transition-transform transform hover:scale-105">
                <h4 className="text-xl font-bold mb-4 underline underline-offset-[10px]">
                  Digital Marketing Services
                </h4>
                <p className="text-white">
                  Our team of strategists, creatives, and data enthusiasts
                  thrive on driving brand visibility, engagement, and
                  conversions. From SEO wizardry to social media sorcery, we’ve
                  got your digital presence covered.
                </p>
              </div>
            </motion.div>

            {/* Software Development (Right) */}
            <motion.div
              className="flex justify-end w-full mb-10 relative"
              ref={refLeft}
              initial="hidden"
              animate={controlsLeft}
              variants={leftVariants} // Apply right animation
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-6">
                <FaCode className="text-blue-600 text-3xl bg-white rounded-full p-2" />
              </div>
              <div className="text-white rounded-lg p-6 text-center w-1/3 mr-auto transition-transform transform hover:scale-105">
                <h4 className="text-xl font-bold mb-4 underline underline-offset-[10px]">
                  Software Development
                </h4>
                <p className="text-white">
                  Code is our canvas, and solutions are our masterpieces.
                  Whether it’s web applications, mobile apps, or custom
                  software, we transform ideas into elegant, functional reality.
                </p>
              </div>
            </motion.div>

            {/* Data Analysis & AI (Left) */}
            <motion.div
              className="flex justify-start w-full mb-10 relative"
              ref={refRight}
              initial="hidden"
              animate={controlsRight}
              variants={rightVariants} // Apply left animation
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-6">
                <FaDatabase className="text-blue-600 text-3xl bg-white rounded-full p-2" />
              </div>
              <div className="text-white rounded-lg p-6 text-center w-1/3 ml-auto transition-transform transform hover:scale-105">
                <h4 className="text-xl font-bold mb-4 underline underline-offset-[10px]">
                  Data Analysis & AI
                </h4>
                <p className="text-white">
                  From the mystical fields of Kashmir to your kitchen, our
                  saffron threads are a symphony of flavor and health. We
                  source, package, and deliver saffron with love and precision.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Why choose Us */}
      <div className="text-center my-14">
        <motion.h3
          className="inline-block text-3xl font-semibold text-white mb-6 border-t-2 border-b-2 border-purple-600 tracking-widest py-4"
          ref={refContainer}
          initial="hidden"
          animate={controlsContainer}
          variants={containerVariants}
        >
          Why Choose Heyram ?
        </motion.h3>
        <motion.div
          className="max-w-4xl mx-auto"
          ref={refContainer}
          initial="hidden"
          animate={controlsContainer}
          variants={containerVariants}
        >
          <motion.h5 className="text-lg text-gray-200 mb-4 tracking-wider">
            <motion.ul className="space-y-2">
              <motion.li variants={itemVariants}>
                Holistic Approach: We don’t just build websites; we build
                experiences.
              </motion.li>
              <motion.li variants={itemVariants}>
                Code Craftsmanship: Our developers write poetry in Python and
                symphonies in JavaScript.
              </motion.li>
              <motion.li variants={itemVariants}>
                Data-Driven Marketing: Metrics matter, and we turn data into
                actionable insights.
              </motion.li>
              <motion.li variants={itemVariants}>
                Client-Centric: Your success is our obsession. Let’s create
                magic together!
              </motion.li>
            </motion.ul>
          </motion.h5>
        </motion.div>
      </div>

      <hr className="w-[90%] mx-auto my-4" />

      <div className="">
        <div className="py-12 px-6 text-center">
          {/* Mission, Vision and pledge */}
          <div>
            <div className="mb-[100px]">
              <motion.h3
                className="inline-block text-3xl font-light uppercase text-white mb-6 border-b-2 border-purple-600 tracking-widest py-4"
                ref={refMission}
                initial="hidden"
                animate={controlsMission}
                variants={containerMission}
              >
                Our Mission
              </motion.h3>
              <motion.div
                className="max-w-3xl mx-auto"
                ref={refMission}
                initial="hidden"
                animate={controlsMission}
                variants={containerMission}
              >
                <motion.h5
                  className="text-md tracking-widest text-white mb-4"
                  variants={missionVariants}
                >
                  We think that every person has the potential to achieve great
                  things. We have four principles (commitment, quality,
                  integrity, and care) that guide our business, product
                  development, and brand as we change and grow.
                </motion.h5>
              </motion.div>
            </div>

            <div className="mb-[100px]">
              <motion.h3
                className="inline-block text-3xl font-light uppercase text-white mb-6 border-b-2 border-purple-600 tracking-widest py-4"
                ref={refVision}
                initial="hidden"
                animate={controlsVision}
                variants={containerVision}
              >
                Our values
              </motion.h3>
              <motion.div
                className="max-w-3xl mx-auto"
                ref={refVision}
                initial="hidden"
                animate={controlsVision}
                variants={containerVision}
              >
                <motion.h5
                  className="text-md tracking-widest text-white mb-4"
                  variants={visionVariants}
                >
                  We think that every person has the potential to achieve great
                  things. We have four principles (commitment, quality,
                  integrity, and care) that guide our business, product
                  development, and brand as we change and grow.
                </motion.h5>
              </motion.div>
            </div>

            <div className="mb-[100px]">
              <motion.h3
                className="inline-block text-3xl font-light uppercase text-white mb-6 border-b-2 border-purple-600 tracking-widest py-4"
                ref={refPledge}
                initial="hidden"
                animate={controlsPledge}
                variants={containerPledge}
              >
                Our pledge
              </motion.h3>
              <motion.div
                className="max-w-3xl mx-auto"
                ref={refPledge}
                initial="hidden"
                animate={controlsPledge}
                variants={containerPledge}
              >
                <motion.h5
                  className="text-md tracking-widest text-white mb-4"
                  variants={pledgeVariants}
                >
                  We think that every person has the potential to achieve great
                  things. We have four principles (commitment, quality,
                  integrity, and care) that guide our business, product
                  development, and brand as we change and grow.
                </motion.h5>
              </motion.div>
            </div>
          </div>

          <hr className="w-[90%] mx-auto my-4" />

          {/* Social responsibility & values */}
          <div className="flex flex-col justify-between my-20">
            {/* Top left content */}
            <div className="flex flex-row justify-around">
              <motion.div
                className="w-1/2"
                ref={refSection}
                initial="hidden"
                animate={controlsSection}
                variants={sectionVariants}
              >
                <h3 className="text-2xl font-light text-white uppercase mb-6 border-b-2 border-purple-600 tracking-widest py-4">
                  Corporate Social Responsibilities
                </h3>
                <div className="max-w-3xl">
                  <h5 className="text-md tracking-widest text-white text-start mb-4">
                    We think that every person has the potential to achieve
                    great things. We have four principles (commitment, quality,
                    integrity, and care) that guide our business, product
                    development, and brand as we change and grow.
                  </h5>
                </div>
              </motion.div>
              <motion.div
                className="w-[40%] rounded-lg"
                variants={imageVariants}
                initial="hidden"
                animate={controlsSection}
              >
                <img
                  src="CSR.png"
                  alt=""
                  className="mt-4 w-full h-[70%] rounded-lg"
                />
              </motion.div>
            </div>

            {/* Bottom right content */}
            <div className="flex flex-row justify-around">
              <motion.div
                className="w-[40%] rounded-lg"
                variants={imageVariants}
                initial="hidden"
                animate={controlsSection}
              >
                <img
                  src="values.jpeg"
                  alt=""
                  className="mt-4 w-full h-[70%] rounded-lg"
                />
              </motion.div>
              <motion.div
                className="w-1/2"
                ref={refSection}
                initial="hidden"
                animate={controlsSection}
                variants={sectionVariants}
              >
                <h3 className="text-center text-2xl font-light uppercase text-white mb-6 border-b-2 border-purple-600 tracking-widest py-4">
                  Our Values
                </h3>
                <div className="max-w-3xl">
                  <h5 className="text-lg tracking-widest text-start text-white mb-4">
                    At Heyram Infrastructure, our values drive everything we do.
                    We believe in:
                  </h5>
                  <h5 className="text-md tracking-widest text-start text-white mb-4">
                    <ul className="space-y-1">
                      <li>
                        Innovation: Constantly pushing boundaries to develop
                        cutting-edge solutions.
                      </li>
                      <li>
                        Collaboration: Working together to achieve common goals
                        and foster creativity.
                      </li>
                      <li>
                        Integrity: Upholding the highest ethical standards in
                        all our endeavors.
                      </li>
                      <li>
                        Diversity: Embracing the unique perspectives and
                        backgrounds of our team members.
                      </li>
                      <li>
                        Sustainability: Committing to environmentally friendly
                        practices in all aspects of our work.
                      </li>
                      <li>
                        Connect with us to explore the intersection of
                        technology, flavor, and marketing brilliance.
                      </li>
                    </ul>
                  </h5>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Transformation and services */}
          <div className="flex flex-row mb-20">
            {/* Top left content */}
            <div className=" border-r-2 pr-5">
              <h3 className="inline-block text-2xl font-light text-white uppercase mb-6 border-b-2 border-purple-600 tracking-widest py-4">
                Transformation starts here
              </h3>
              <div className="max-w-3xl text-white">
                <p className="font-light tracking-wider">
                  Reimagine your future
                </p>
                <button
                  onClick={() => {
                    setConnectForm(true);
                  }}
                  className="border px-7 py-3 font-thin rounded-full tracking-wider mt-4"
                >
                  Connect with us
                </button>
              </div>
            </div>

            {/* Bottom right content */}
            <Connect />
            <div className="ml-20 mt-16">
              <div className="max-w-3xl">
                <h5 className="text-md tracking-widest text-start text-white mb-4">
                  Our Services
                </h5>
                <p
                  onClick={() => navigate("/services")}
                  className="flex flex-row text-white gap-5 font-light tracking-wider text-md cursor-pointer"
                >
                  View now <Button />{" "}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
