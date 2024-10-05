import React, { useState, useRef } from "react";
import WebDevelopment from "../components/services/WebDevelopment";
import Footer from "../components/footer/Footer";


const WebDevelopmentPage = () => {
  const [selectedService, setSelectedService] = useState(""); // State to track the selected service
  const detailsRef = useRef(null); // Reference for smooth scroll to web development section

  // Function to handle clicking the "Web Development" in footer
  const handleServiceClick = () => {
    setSelectedService("E-Commerce Website"); // Default or first service
    detailsRef.current.scrollIntoView({ behavior: "smooth" }); // Scroll to the section
  };

  return (
    <>
      <WebDevelopment
        selectedService={selectedService}
        setSelectedService={setSelectedService}
        detailsRef={detailsRef}
      />
    </>
  );
};

export default WebDevelopmentPage;
