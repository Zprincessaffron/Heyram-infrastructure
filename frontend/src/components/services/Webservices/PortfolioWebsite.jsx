import React from "react";
import ServiceTemplate2 from "../ServiceTemplate2"; // Adjust the path if needed
import { FaPalette, FaCameraRetro, FaUserTie, FaMusic, FaBuilding } from "react-icons/fa"; // Import relevant icons

const PortfolioWebsite = () => {
  // Define the data to pass to the template
  const data = {
    title: "Portfolio Websites",
    introduction: `A Portfolio Website is your digital portfolio, tailored to showcase your creative skills, expertise, and achievements. Whether you’re a designer, photographer, or freelancer, a portfolio site presents your work in a visually compelling way that attracts potential clients, collaborators, or employers.`,
    
    offerItems: [
      "Custom-designed galleries to highlight your projects, with high-quality images and videos.",
      "Detailed project pages to describe your creative process, tools used, and client feedback.",
      "Testimonials and case studies that add credibility and demonstrate past successes.",
      "Blogging capabilities to share industry insights, thought leadership, or behind-the-scenes content.",
      "Downloadable portfolio or CV for professional outreach.",
      "SEO optimization to help your portfolio get discovered online.",
    ],
    industriesItems: [
      { name: "Creative Professionals", icon: FaPalette }, // Designers, photographers, videographers
      { name: "Freelancers", icon: FaUserTie }, // Writers, developers, marketers
      { name: "Consultants", icon: FaBuilding }, // Independent professionals in various industries
      { name: "Artists & Musicians", icon: FaMusic }, // Painters, sculptors, composers, performers
      { name: "Architects & Interior Designers", icon: FaCameraRetro }, // Architects, interior designers
    ],

    ctaText: "Let us help showcase your creative work today!",
    buttonText: "Start Building Your Portfolio",
    tagline: "A portfolio website goes beyond showing what you do—it tells the story behind your work, demonstrating your creativity, skills, and professionalism.",
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

export default PortfolioWebsite;
