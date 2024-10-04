import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaStar, FaShieldAlt, FaCommentAlt, FaUsers, FaBell } from 'react-icons/fa';
import Or from "/Or.jpg"

const OnlineReputation = () => {
  const industriesItems = [
    { name: "Hospitality", icon: FaStar },
    { name: "Retail", icon: FaShieldAlt },
    { name: "Healthcare", icon: FaCommentAlt },
    { name: "Real Estate", icon: FaUsers },
    { name: "E-commerce", icon: FaBell },
  ];

  return (
    <ServiceTemplate3
      title="Online Reputation Management"
      introduction="Build and Protect Your Brand's Reputation. Your online reputation can make or break your business. We help you monitor, manage, and improve your brand’s online image, ensuring that you are positively perceived by your customers, stakeholders, and the public."
      offerItems={[
        "Review Monitoring & Response: Tracking customer reviews across platforms and responding professionally.",
        "Crisis Management: Managing and mitigating negative publicity or feedback to protect your brand.",
        "Reputation Repair: Helping to improve the public perception of your business after negative press or reviews.",
        "Brand Mentions & Social Listening: Monitoring mentions of your brand online to stay on top of public opinion."
      ]}
      benefits={[
        "Increased Customer Trust: Positive reviews and a well-managed online presence build trust.",
        "Crisis Prevention: Quickly managing negative feedback helps prevent reputation damage.",
        "Enhanced Brand Image: Proactively managing reviews and online mentions enhances your public image.",
        "Better Customer Retention: A strong reputation helps retain existing customers and attract new ones."
      ]}
      image={Or}
      ctaText="Protect Your Brand's Reputation"
      buttonText="Get Started"
      quote="Your reputation is your brand's most valuable asset. Protect it at all costs!"
      industriesItems={industriesItems}
    />
  );
};

export default OnlineReputation;
