import React from "react";
import ServiceTemplate2 from "../ServiceTemplate2";
import { FaBuilding, FaLaptopCode, FaIndustry, FaHospitalAlt, FaHandsHelping, FaLandmark } from "react-icons/fa";
import corp from "/vls.jpg";

const CorporateWebsite = () => {
  // Define the data to pass to the template
  const data = {
    title: "Corporate Websites",
    introduction: `A Corporate Website is the cornerstone of your brand’s online identity. It provides a digital representation of your company’s mission, services, and values while building trust with your stakeholders. Whether you're in finance, consulting, technology, or manufacturing, a corporate website showcases your business to potential clients, investors, and partners.`,
    
    offerItems: [
      "Professional designs that reflect your brand’s authority and values.",
      "Detailed service pages to communicate your offerings effectively.",
      "About Us sections to share your company’s history, mission, and team profiles.",
      "Integrated blog for sharing industry insights, news, and updates.",
      "Client testimonials and case studies to build credibility.",
      "Call-to-action (CTA) features to drive engagement (e.g., 'Contact Us', 'Get a Quote').",
    ],
    industriesItems: [
      { name: "Consulting & Professional Services", icon: FaBuilding },
      { name: "Technology (IT companies, software development firms)", icon: FaLaptopCode },
      { name: "Manufacturing & Engineering", icon: FaIndustry },
      { name: "Healthcare", icon: FaHospitalAlt },
      { name: "Non-Profit Organizations", icon: FaHandsHelping },
      { name: "Government and Public Sector", icon: FaLandmark },
    ],
    image : corp,

    ctaText: "Let us help build your corporate website today!",
    buttonText: "Get a Quote",
    tagline: "A well-designed corporate website doesn’t just provide information; it builds relationships, establishes trust, and supports your business's long-term growth.",
  };

  return (
    <ServiceTemplate2
      title={data.title}
      introduction={data.introduction}
      offerItems={data.offerItems}
      industriesItems={data.industriesItems}
      ctaText={data.ctaText}
      buttonText={data.buttonText}
      tagline = {data.tagline}
      image = {data.image}
    />
  );
};

export default CorporateWebsite;
