import React from "react";
import ServiceTemplate2 from "../ServiceTemplate2"; // Adjust the path if needed
import { FaBullhorn, FaClipboardList, FaVideo, FaRegEnvelope, FaChartLine } from "react-icons/fa"; // Import relevant icons

const LandingPage = () => {
  // Define the data to pass to the template
  const data = {
    title: "Landing Pages for Campaigns",
    introduction: `A Landing Page is a focused, conversion-driven web page tailored for specific marketing campaigns or product launches. These are often used to capture leads, promote new products, or drive specific calls to action such as sign-ups, downloads, or purchases.`,
    
    offerItems: [
      "Compelling copy and visuals that communicate the campaign’s value.",
      "Lead capture forms with integrations to CRM or email marketing platforms.",
      "Strong calls-to-action (CTAs) to drive conversions.",
      "A/B testing capabilities to optimize performance.",
      "Engaging visuals like videos, infographics, or client testimonials.",
      "Clear messaging focused on a single goal, ensuring maximum impact.",
    ],
    industriesItems: [
      { name: "Product Launches", icon: FaBullhorn }, // Technology, fashion, FMCG
      { name: "Service Promotions", icon: FaClipboardList }, // Consultancies, SaaS platforms
      { name: "Event Registration", icon: FaVideo }, // Conferences, webinars, product demos
      { name: "Lead Generation Campaigns", icon: FaRegEnvelope }, // Real estate, financial services
      { name: "Contests & Giveaways", icon: FaChartLine }, // Campaigns for user engagement
    ],

    ctaText: "Let us create a high-converting landing page for your campaign!",
    buttonText: "Get Started",
    tagline: "Landing pages are designed to drive specific actions, making them perfect for short-term promotions, product launches, or special offers.",
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

export default LandingPage;
