import React, { useContext, useEffect, useState } from "react";
import AboutUsImg from "/AboutBg.png";
import AboutUsVid from "/about.mp4"
import { FaChartLine, FaCode, FaDatabase } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Button from "../button/Button.jsx";
import Footer from "../footer/Footer.jsx";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext.jsx";
import Connect from "../form/Connect.jsx";
import Navbar from "../navbar/Navbar.jsx";
import MenuButton from "../navbar/MenuButton.jsx";
import Menubar from "../menubar/Menubar.jsx";

const AboutUs = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showUnderline, setShowUnderline] = useState(false);
  const { setConnectForm } = useContext(AppContext);
  const navigate = useNavigate();

  // useEffect(()=>{
  //   window.scrollTo(0, 0);
  // },[])

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
  const controlsMarketing = useAnimation();
  const controlsDevelopment = useAnimation();
  const controlsDataAI = useAnimation();
  const controlsContainer = useAnimation();
  const controlsMission = useAnimation();
  const controlsVision = useAnimation();
  const controlsPledge = useAnimation();
  const controlsSection = useAnimation();
  const controlsService = useAnimation();
  const controlsSectionTop = useAnimation();
  const controlsSectionBottom = useAnimation();

  // Create separate refs for each animated section
  const [refText, inViewText] = useInView({ threshold: 0.2 });
  const [refContainer, inViewContainer] = useInView({ threshold: 0.2 });
  const [refMission, inViewMission] = useInView({ threshold: 0.2 });
  const [refVision, inViewVision] = useInView({ threshold: 0.2 });
  const [refPledge, inViewPledge] = useInView({ threshold: 0.2 });
  const [refSection, inViewSection] = useInView({ threshold: 0.2 });
  const [refService, inViewService] = useInView({ threshold: 0.2 });
  const [refMarketing, inViewMarketing] = useInView({ threshold: 0.2 });
  const [refDevelopment, inViewDevelopment] = useInView({ threshold: 0.2 });
  const [refDataAI, inViewDataAI] = useInView({ threshold: 0.2 });
  const [refSectionTop, inViewSectionTop] = useInView({ threshold: 0.1 });
  const [refSectionBottom, inViewSectionBottom] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inViewSectionTop) {
      controlsSectionTop.start("visible");
    } else {
      controlsSectionTop.start("hidden");
    }
  }, [controlsSectionTop, inViewSectionTop]);

  useEffect(() => {
    if (inViewSectionBottom) {
      controlsSectionBottom.start("visible");
    } else {
      controlsSectionBottom.start("hidden");
    }
  }, [controlsSectionBottom, inViewSectionBottom]);

  // Effect for Digital Marketing Services
  useEffect(() => {
    if (inViewMarketing) {
      controlsMarketing.start("visible");
    } else {
      controlsMarketing.start("hidden");
    }
  }, [controlsMarketing, inViewMarketing]);

  // Effect for Web Development
  useEffect(() => {
    if (inViewDevelopment) {
      controlsDevelopment.start("visible");
    } else {
      controlsDevelopment.start("hidden");
    }
  }, [controlsDevelopment, inViewDevelopment]);

  // Effect for Data Analysis & AI
  useEffect(() => {
    if (inViewDataAI) {
      controlsDataAI.start("visible");
    } else {
      controlsDataAI.start("hidden");
    }
  }, [controlsDataAI, inViewDataAI]);

  // Trigger animation when in view for each section
  useEffect(() => {
    if (inViewText) {
      controlsText.start("visible");
    } else {
      controlsText.start("hidden");
    }
  }, [controlsText, inViewText]);

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

  useEffect(() => {
    if (inViewService) {
      controlsService.start("visible");
    } else {
      controlsService.start("hidden");
    }
  }, [controlsService, inViewService]);

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  const visionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const pledgeVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
  };

  // Animation variants
  const serviceVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <>
    <Navbar/>
    <MenuButton/>
    <Menubar/>
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
        {/* <video src={AboutUsVid}
          // alt="About Us"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}/> */}

        <div className="bg-[#090a29] inset-0 absolute opacity-20" />

        {/* Animate the text */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-center text-white px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div>
            <motion.h2
              className="text-3xl md:text-5xl font-normal tracking-[5px] md:tracking-[10px] uppercase mb-4 border-b border-purple-600 inline-block pb-2"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              About Us
            </motion.h2>

            <motion.p
              className="text-[0.6rem] md:text-[0.7rem] tracking-wider font-light"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              Empowering businesses with innovative web solutions, data-driven
              strategies, and AI technology to enhance online presence and drive
              growth.
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Content Section Below the Image */}
      <motion.div
        className="text-center my-14 px-4" // Added padding for smaller screens
        ref={refText}
        initial="hidden"
        animate={controlsText}
        variants={textVariants}
      >
        {/* Animated Heading */}
        <motion.h3
          className="inline-block text-lg md:text-xl font-normal text-white mb-6 border-b border-purple-600 tracking-widest lg:py-2 py-1"
          variants={textVariants}
        >
          Who We Are?
        </motion.h3>

        {/* Animated Text */}
        <motion.div className="max-w-xl mx-auto" variants={textVariants}>
          <h5 className="text-[0.6rem] md:text-[0.75rem] font-light text-gray-200 mb-4 tracking-wider">
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
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[3px] shadow-lg rounded-full bg-gray-300 transition-all duration-300 ease-in-out md:block hidden">
            {/* <div
              className="bg-purple-600 rounded-full w-full transition-all duration-300 ease-in-out"
              style={{ height: `${scrollPercent}%` }}
            /> */}
          </div>

          {/* Service Cards Arrangement */}
          <div className="flex flex-col items-center relative">
            {/* Digital Marketing Services (Left) */}
            <div
              className="flex justify-start w-full mb-10 relative">
              <div className="md:absolute left-1/2 transform -translate-x-1/2 translate-y-6 hidden md:block">
                <FaChartLine className="text-purple-600 text-3xl bg-white rounded-full p-2" />
              </div>
              <motion.div className="text-white rounded-lg p-6 text-center w-full md:w-1/3 ml-auto hover:scale-105 border lg:border-none"
              ref={refMarketing}
              initial="hidden"
              animate={controlsMarketing}
              variants={rightVariants}
              >
                <h4 className="text-md font-normal mb-4 border-b border-purple-600 inline-block tracking-wider">
                  Digital Marketing Services
                </h4>
                <p className="text-white text-[0.75rem] font-light tracking-wide">
                  We offer Digital Marketing Services to elevate your brand and
                  deliver measurable results. Our expertise includes SEO for
                  better visibility, Social Media Marketing to engage audiences,
                  and PPC advertising to maximize ROI. We also provide Content
                  Marketing and Email Marketing to build trust, boost sales, and
                  maintain a positive online presence.
                </p>
              </motion.div>
            </div>

            {/* Web Development (Right) */}
            <div
              className="flex justify-end w-full mb-10 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-6 hidden md:block">
                <FaCode className="text-purple-600 text-3xl bg-white rounded-full p-2" />
              </div>
              <motion.div className="text-white rounded-lg p-6 text-center w-full md:w-1/3 mr-auto hover:scale-105 border lg:border-none"
              ref={refDevelopment}
              initial="hidden"
              animate={controlsDevelopment}
              variants={leftVariants}
              >
                <h4 className="text-md font-normal mb-4 border-b border-purple-600 inline-block tracking-wider">
                  Web Development
                </h4>
                <p className="text-white text-[0.75rem] font-light tracking-wide">
                  We offer professional Web Development services that bring your
                  online vision to life. From designing visually appealing and
                  responsive websites to developing powerful, user-friendly web
                  applications, we ensure that your digital platform not only
                  looks great but also functions seamlessly. Our services
                  include front-end and back-end development, e-commerce
                  solutions, and custom web applications tailored to meet your
                  business needs and support your business goals.
                </p>
              </motion.div>
            </div>

            {/* Data Analysis & AI (Left) */}
            <div
              className="flex justify-start w-full mb-10 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-6 hidden md:block">
                <FaDatabase className="text-purple-600 text-3xl bg-white rounded-full p-2" />
              </div>

              <motion.div className="text-white rounded-lg p-6 text-center w-full md:w-1/3 ml-auto hover:scale-105 border lg:border-none"
              ref={refDataAI}
              initial="hidden"
              animate={controlsDataAI}
              variants={rightVariants}
              >
                <h4 className="text-md font-normal mb-4 border-b border-purple-600 inline-block tracking-wider">
                  Data Analysis & AI
                </h4>
                <p className="text-white text-[0.75rem] font-light tracking-wide">
                  We offer Data Analysis and AI services to help you uncover
                  insights and make informed decisions. Our data analysis
                  transforms raw data into clear, actionable insights, while our
                  AI solutions streamline tasks and enhance efficiency. With a
                  focus on simplicity and effectiveness, we provide the tools to
                  optimize your business operations and stay competitive.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose Us */}
      <div className="text-center my-14">
        <motion.h3
          className="inline-block text-lg md:text-xl font-normal text-white mb-6 border-b border-purple-600 tracking-widest lg:py-2 py-1"
          ref={refContainer}
          initial="hidden"
          animate={controlsContainer}
          variants={containerVariants}
        >
          Why Choose Heyram ?
        </motion.h3>
        <motion.div
          className="max-w-xl mx-auto"
          ref={refContainer}
          initial="hidden"
          animate={controlsContainer}
          variants={containerVariants}
        >
          <motion.h5 className="text-[0.6rem] md:text-[0.75rem] font-light text-gray-200 mb-4 tracking-wider">
            <motion.ul className="space-y-3">
              <motion.li variants={itemVariants}>
                Holistic Approach: We don’t just build websites; we build
                experiences.
              </motion.li>
              <br />
              <motion.li variants={itemVariants}>
                Code Craftsmanship: Our developers write symphonies in
                JavaScript.
              </motion.li>
              <br />
              <motion.li variants={itemVariants}>
                Data-Driven Marketing: Metrics matter, and we turn data into
                actionable insights.
              </motion.li>
              <br />
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
          {/* Mission, Vision and Pledge */}
          <div className="px-4 sm:px-8 lg:px-16">
            <div className="mb-[100px]">
              <motion.h3
                className="inline-block text-lg sm:text-xl font-light uppercase text-white mb-4 border-b border-purple-600 tracking-widest py-2"
                ref={refMission}
                initial="hidden"
                animate={controlsMission}
                variants={containerMission}
              >
                Our Mission
              </motion.h3>
              <motion.div
                className="max-w-xl mx-auto font-light"
                ref={refMission}
                initial="hidden"
                animate={controlsMission}
                variants={containerMission}
              >
                <motion.h5
                  className="text-[0.6rem] md:text-[0.75rem] tracking-widest text-white mb-2"
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
                className="inline-block text-lg sm:text-xl font-light uppercase text-white mb-4 border-b border-purple-600 tracking-widest py-2"
                ref={refVision}
                initial="hidden"
                animate={controlsVision}
                variants={containerVision}
              >
                Our Values
              </motion.h3>
              <motion.div
                className="max-w-xl mx-auto font-light"
                ref={refVision}
                initial="hidden"
                animate={controlsVision}
                variants={containerVision}
              >
                <motion.h5
                  className="text-[0.6rem] md:text-[0.75rem] tracking-widest text-white mb-2"
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
                className="inline-block text-lg sm:text-xl font-light uppercase text-white mb-4 border-b border-purple-600 tracking-widest py-2"
                ref={refPledge}
                initial="hidden"
                animate={controlsPledge}
                variants={containerPledge}
              >
                Our Pledge
              </motion.h3>
              <motion.div
                className="max-w-xl mx-auto font-light"
                ref={refPledge}
                initial="hidden"
                animate={controlsPledge}
                variants={containerPledge}
              >
                <motion.h5
                  className="text-[0.6rem] md:text-[0.75rem]  tracking-widest text-white mb-2"
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
          <div className="flex flex-col space-y-12 md:space-y-0 md:flex-none justify-between my-10 px-4 sm:px-5 lg:px-10">
            {/* Top left content */}
            <motion.div
              className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0 mb-8"
              ref={refSectionTop}
              initial="hidden"
              animate={controlsSectionTop}
              variants={sectionVariants}
            >
              {/* Left side text */}
              <motion.div className="w-full md:w-1/2">
                <h3 className="text-md sm:text-xl font-light text-white uppercase mb-4 sm:mb-6 border-b border-purple-600 tracking-widest py-2 sm:py-4">
                  Corporate Social Responsibilities
                </h3>
                <div className="max-w-xl font-light">
                  <h5 className="text-[0.6rem] md:text-[0.75rem]  tracking-widest text-white text-start mb-2 sm:mb-4">
                    We think that every person has the potential to achieve
                    great things. We have four principles (commitment, quality,
                    integrity, and care) that guide our business, product
                    development, and brand as we change and grow.
                  </h5>
                </div>
              </motion.div>

              {/* Right side image */}
              <motion.div
                className="w-full md:w-[30%] rounded-md"
                variants={imageVariants}
                initial="hidden"
                animate={controlsSectionTop}
              >
                <img
                  src="Corp.jpg"
                  alt="Corporate Social Responsibilities"
                  className="mt-4 w-full h-auto rounded-md"
                />
              </motion.div>
            </motion.div>

            {/* Bottom right content */}
            <motion.div className="flex flex-col md:flex-row justify-around space-y-6 md:space-y-0">
              {/* Left side image */}
              <motion.div
                className="w-full md:w-[40%] rounded-md"
                variants={imageVariants}
                initial="hidden"
                animate={controlsSectionBottom}
              >
                <img
                  src="vls.jpg"
                  alt="Our Values"
                  className="mt-4 w-full h-auto rounded-md opacity-80"
                />
              </motion.div>

              {/* Right side text */}
              <motion.div
                className="w-full md:w-1/2"
                ref={refSectionBottom}
                initial="hidden"
                animate={controlsSectionBottom}
                variants={sectionVariants}
              >
                <h3 className="text-md sm:text-xl text-center font-light uppercase text-white mb-4 sm:mb-6 border-b border-purple-600 tracking-widest py-2 sm:py-4">
                  Our Values
                </h3>
                <div className="max-w-xl font-light">
                  <h5 className="text-[0.6rem] md:text-[0.75rem]  tracking-widest text-start text-white mb-4">
                    At Heyram Infrastructure, our values drive everything we do.
                    We believe in:
                  </h5>
                  <ul className="space-y-2 text-[0.6rem] md:text-[0.75rem]  text-start text-white">
                    <li>
                      Innovation: Constantly pushing boundaries to develop
                      cutting-edge solutions.
                    </li>
                    <br />
                    <li>
                      Collaboration: Working together to achieve common goals
                      and foster creativity.
                    </li>
                    <br />
                    <li>
                      Integrity: Upholding the highest ethical standards in all
                      our endeavors.
                    </li>
                    <br />
                    <li>
                      Diversity: Embracing the unique perspectives and
                      backgrounds of our team members.
                    </li>
                    <br />
                    <li>
                      Sustainability: Committing to environmentally friendly
                      practices in all aspects of our work.
                    </li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </div>


          {/* Transformation and services */}
          <div className="flex flex-col md:flex-row mb-10 items-center justify-center mt-[70px]">
            {/* Top left content */}
            <motion.div
              className="pr-0 md:pr-5"
              ref={refService}
              initial="hidden"
              animate={controlsService}
              variants={serviceVariants}
            >
              <h3 className="inline-block lg:text-xl text-sm font-light text-white uppercase mb-4 border-b border-purple-600 tracking-widest py-2">
                Transformation starts here
              </h3>
              <div className="max-w-xl text-white">
                <p className="font-light tracking-wider text-[0.6rem] md:text-[0.9rem]">
                  Reimagine your future
                </p>
                <button
                  onClick={() => navigate("/services")}
                  className="border lg:px-5 lg:py-2 px-3 py-1  font-bold rounded-full tracking-widest mt-4 text-[0.6rem] md:text-[0.75rem] hover:bg-white hover:text-[#090a29]"
                >
                  Our Services
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Footer */}

        <div>
          <Footer />
        </div>
      </div>
    </div>
    </>
    
  );
};

export default AboutUs;
