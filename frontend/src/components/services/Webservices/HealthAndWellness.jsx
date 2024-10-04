import React from "react";
import ServiceTemplate2 from "../ServiceTemplate2"; // Adjust the path if needed
import { FaDumbbell, FaSpa, FaHeartbeat, FaAppleAlt, FaUserMd } from "react-icons/fa"; // Import relevant icons

const HealthAndWellness = () => {
  // Define the data to pass to the template
  const data = {
    title: "Health & Wellness Websites",
    introduction: `A Health & Wellness Website serves businesses and practitioners focused on improving the well-being of their clients. These websites are perfect for fitness centers, yoga studios, wellness clinics, or healthcare providers looking to offer both services and knowledge to their clients.`,
    
    offerItems: [
      "Service pages to highlight various treatments, programs, or classes.",
      "Online appointment systems for booking consultations, classes, or sessions.",
      "Membership portals for recurring clients to track progress or memberships.",
      "Blog sections for sharing health tips, recipes, or fitness advice.",
      "Integration with telemedicine platforms for virtual consultations.",
    ],
    industriesItems: [
      { name: "Fitness Centers & Gyms", icon: FaDumbbell },
      { name: "Yoga Studios & Spas", icon: FaSpa },
      { name: "Wellness Clinics", icon: FaHeartbeat }, // Chiropractors, physiotherapists, alternative medicine
      { name: "Nutritionists & Dieticians", icon: FaAppleAlt },
      { name: "Mental Health Practitioners", icon: FaUserMd }, // Therapists, counselors
    ],

    ctaText: "Enhance your client's wellness journey with a dedicated website!",
    buttonText: "Get Started",
    tagline: "A health and wellness website ensures that your services are accessible, informative, and easy to engage with, helping clients on their wellness journey.",
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

export default HealthAndWellness;
