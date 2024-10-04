import React from "react";
import ServiceTemplate2 from "../ServiceTemplate2"; // Adjust the path if needed
import { FaHome, FaBuilding, FaMapMarkedAlt, FaCalculator, FaHandshake } from "react-icons/fa"; // Import relevant icons

const RealEstateWebsite = () => {
  // Define the data to pass to the template
  const data = {
    title: "Real Estate Websites",
    introduction: `A Real Estate Website is the ideal platform for showcasing property listings, engaging potential buyers or renters, and helping users find their dream home or investment property. From residential to commercial properties, these sites provide a seamless experience for browsing, searching, and booking viewings.`,
    
    offerItems: [
      "Advanced search and filter functions (by location, price, property type).",
      "Interactive property listings with photo galleries, 360-degree tours, and video walkthroughs.",
      "Map integration showing property locations and nearby amenities.",
      "Mortgage calculators and financial planning tools.",
      "Appointment booking for property viewings or consultations with agents.",
      "Lead generation tools to capture and nurture potential buyers or renters.",
    ],
    industriesItems: [
      { name: "Real Estate Agencies", icon: FaHome }, // Residential, commercial
      { name: "Property Management Firms", icon: FaBuilding }, // Rental properties, leasing
      { name: "Real Estate Investment Trusts (REITs)", icon: FaMapMarkedAlt },
      { name: "Home Builders & Developers", icon: FaCalculator },
      { name: "Vacation Rentals", icon: FaHandshake }, // Holiday homes, short-term lets
    ],

    ctaText: "Let us help you create a powerful real estate platform!",
    buttonText: "Get Started on Your Real Estate Website",
    tagline: "A real estate website offers an engaging and comprehensive user experience, designed to convert browsers into buyers.",
  };

  return (
    <ServiceTemplate2
      title={data.title}
      introduction={data.introduction}
      offerItems={data.offerItems}
      industriesItems={data.industriesItems}
      ctaText={data.ctaText}
      buttonText={data.buttonText}
      tagline={data.tagline}
    />
  );
};

export default RealEstateWebsite;
