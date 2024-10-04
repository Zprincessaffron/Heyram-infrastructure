import React from "react";
import ServiceTemplate2 from "../ServiceTemplate2"; // Adjust the path if needed
import { FaSchool, FaBookOpen, FaChalkboardTeacher, FaGlobe, FaCertificate } from "react-icons/fa"; // Import relevant icons
import Edu from "/Edu.png";

const EducationalWebsite = () => {
  // Define the data to pass to the template
  const data = {
    title: "Educational Websites",
    introduction: `Educational Websites serve as an interactive platform for learning institutions, online courses, or training centers. They are built to offer students and teachers a space for engagement, resource sharing, and learning.`,
    
    offerItems: [
      "Course listings with descriptions, instructor profiles, and enrollment capabilities.",
      "Learning Management Systems (LMS) for delivering courses, quizzes, and assessments.",
      "Student and teacher dashboards with personalized access to course materials and progress tracking.",
      "Online registration and payment portals for easy course enrollment.",
      "Discussion forums for student-teacher interactions and peer learning.",
      "Certifications that can be awarded upon course completion.",
    ],
    industriesItems: [
      { name: "Schools & Universities", icon: FaSchool }, // Online courses, class management
      { name: "E-Learning Platforms", icon: FaBookOpen }, // MOOCs, educational courses
      { name: "Training & Certification Providers", icon: FaChalkboardTeacher }, // Professional skills training, corporate learning
      { name: "Language Learning Services", icon: FaGlobe }, // Language courses
      { name: "Non-Profit Educational Initiatives", icon: FaCertificate }, // Public education campaigns, educational outreach
    ],
    image: Edu,
    ctaText: "Let us help you create a thriving educational platform!",
    buttonText: "Start Building Your Educational Website",
    tagline: "Our educational websites empower institutions to create engaging learning environments where students can thrive, whether in the classroom or online.",
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
      image={data.image}
    />
  );
};

export default EducationalWebsite;
