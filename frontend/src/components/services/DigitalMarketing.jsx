import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRegHandPointRight } from "react-icons/fa";
import Footer from "../footer/Footer";
import Digivid from "/vid2.mp4";
import Navbar from "../navbar/Navbar";
import Menubar from "../menubar/Menubar";
import MenuButton from "../navbar/MenuButton";
import Seo from "./Digitalservice/Seo";
import Ppc from "./Digitalservice/Ppc";
import Smm from "./Digitalservice/Smm";
import ContentMarketing from "./Digitalservice/ContentMarketing";
import EmailMarketing from "./Digitalservice/EmailMarketing";
import WhatsappMarketing from "./Digitalservice/WhatsappMarketing";
import DataProviding from "./Digitalservice/DataProviding";
import Cro from "./Digitalservice/Cro";
import AnalyticsAndReporting from "./Digitalservice/AnalyticsAndReporting";
import InfluencerMarketing from "./Digitalservice/InfluencerMarketing";
import OnlineReputation from "./Digitalservice/OnlineReputation";
import Branding from "./Digitalservice/Branding";
import TrafficGeneration from "./Digitalservice/TrafficGeneration";
import LeadGeneration from "./Digitalservice/LeadGeneration";
import BrandAwareness from "./Digitalservice/BrandAwareness";
import { useParams } from "react-router-dom";
import { GiBottomRight3dArrow } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";

const DigitalMarketing = () => {
  const { service } = useParams(); // Retrieve the selected service from the URL
  const [selectedService, setSelectedService] = useState(
    service ||  "Search Engine Optimization (SEO)"
  ); // State to track the selected service
  const detailsRef = useRef(null); // Create a ref for the details section

  // UseEffect to update selected service when URL changes
  useEffect(() => {
    if (service) {
      setSelectedService(service);
    } else {
      setSelectedService("Search Engine Optimization (SEO)"); // Fallback default
    }
  }, [service]);// State to track the selected service


  // Animation properties for the title
  const titleVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1.5 } },
  };

  // Animation properties for the list with stagger effect
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.5,
      },
    },
  };

  // Animation properties for each list item
  const itemVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  // Function to render the selected service component
  const renderSelectedService = () => {
    switch (selectedService) {
      case "Pay-Per-Click (PPC) Advertising":
        return <Ppc />;
      case "Social Media Marketing (SMM)":
        return <Smm />;
      case "Content Marketing":
        return <ContentMarketing />;
      case "Email Marketing":
        return <EmailMarketing />;
      case "WhatsApp Marketing":
        return <WhatsappMarketing />;
      case "Conversion Rate Optimization (CRO)":
        return <Cro />;
      case "Influencer Marketing":
        return <InfluencerMarketing />;
      case "Analytics And Reporting":
        return <AnalyticsAndReporting />;
      case "Online Reputation":
        return <OnlineReputation />;
      case "Branding Services":
        return <Branding />;
      case "Traffic Generation":
        return <TrafficGeneration />;
      case "lead generation":
        return <LeadGeneration />;
      case "brand awareness":
        return <BrandAwareness />;
      default:
        return <Seo />;
    }
  };

  // Function to handle clicking a service
  const handleServiceClick = (item) => {
    setSelectedService(item);
    // detailsRef.current.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the details section
  };

  // Scroll to the top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <MenuButton />
      <Menubar />
      <div className="h-screen w-full relative flex overflow-hidden">
        <video
          src={Digivid}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#090a29] opacity-40"></div>
        {/* <img src={Digimg} alt="Web developer img" className="w-full h-screen bg-cover bg-no-repeat" />
        <div className="absolute inset-0 bg-black opacity-40"></div> */}

        {/* Title on the left side */}
        <motion.h1
          className="absolute lg:top-1/2 lg:left-10 bottom-5 left-5 transform -translate-y-1/2 lg:text-5xl text-2xl font-light text-white uppercase tracking-widest max-w-3xl"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {selectedService}
        </motion.h1>

        {/* List on the right side */}
        <motion.div
          className="absolute top-1/2 right-5 transform -translate-y-1/2 mt-6"
          variants={listVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="pl-5 text-white lg:space-y-4 space-y-6 cursor-pointer text-sm">
            {[
              "Search Engine Optimization (SEO)",
              "Pay-Per-Click (PPC) Advertising",
              "Social Media Marketing (SMM)",
              "Content Marketing",
              "Email Marketing",
              "WhatsApp Marketing",
              "Conversion Rate Optimization (CRO)",
              "Influencer Marketing",
              "Analytics And Reporting",
              "Online Reputation",
              "Branding Services",
              "Traffic Generation",
              "lead generation",
              "brand awareness",
            ].map((item, index) => (
              <motion.li
      key={index}
      className="flex items-center tracking-wider text-[0.65rem] border-l pl-2 relative group" // Added 'group' for hover targeting
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      onClick={() => handleServiceClick(item)}
    >
      {/* Arrow icon, initially hidden, will appear when the item text is hovered */}
      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-1">
        <FaArrowRightLong size={10}/>
      </span>

      <motion.span
        className="relative cursor-pointer overflow-hidden"
        initial={{ backgroundSize: "0% 0px" }}
        whileHover={{ backgroundSize: "100% 1px" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          backgroundImage: "linear-gradient(90deg, white 100%, transparent 0)",
          backgroundPosition: "0% 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "0% 1px",
        }}
      >
        {item}
      </motion.span>
    </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Render the selected service component with ref for scrolling */}
      <div className="py-10" ref={detailsRef}>
        {renderSelectedService()}
      </div>

      <Footer />
    </>
  );
};

export default DigitalMarketing;
