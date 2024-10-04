import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaBriefcase, FaGraduationCap, FaCog, FaPalette, FaLaptopCode, FaBuilding } from 'react-icons/fa';
import AI from "/Ai.jpg";

const GenZAI = () => {
  const industriesItems = [
    { name: "Business Professionals", icon: FaBriefcase },
    { name: "Education", icon: FaGraduationCap },
    { name: "Tech Industry", icon: FaCog },
    { name: "Creative Arts", icon: FaPalette },
    { name: "Freelancers", icon: FaLaptopCode },
    { name: "Corporate Services", icon: FaBuilding },
  ];

  return (
    <ServiceTemplate3
      title="Gen Z AI"
      introduction="Gen Z AI is an intelligent automation tool designed to streamline your workflow and save you time. It's more than just an automation AI; it's your adaptive assistant that learns from your examples and automates tasks with increasing efficiency over time."
      offerItems={[
        "Intuitive Interface: No coding required! Simply demonstrate the task you want automated, and Gen Z AI will watch and learn.",
        "Adaptive Automation: Gen Z AI continuously improves on understanding your needs, refining its automation to become more accurate and efficient over time.",
        "Increased Productivity: Reclaim valuable hours by offloading repetitive tasks to Gen Z AI, allowing you to focus on higher-level work.",
        "Customizable Workflows: Tailor Gen Z AI to your specific needs by creating unique automation triggers and customized outputs."
      ]}
      benefits={[
        "Busy Professionals: Automate administrative tasks, data entry, scheduling, and more.",
        "Students: Streamline research, writing assignments, and content creation.",
        "Content Creators: Automate repetitive editing tasks, social media posting, and audience engagement.",
        "Anyone Seeking Efficiency: Gen Z AI is a versatile tool that can benefit everyone who desires increased efficiency and time management."
      ]}
      image={AI}
      ctaText="Unleash Your Potential with Gen Z AI"
      buttonText="Start Automating"
      quote="Experience the future of automation—unlock your potential with Gen Z AI."
      industriesItems={industriesItems}
    />
  );
};

export default GenZAI;
