import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaShoppingCart, FaBriefcase, FaHotel, FaDumbbell, FaUsers } from 'react-icons/fa';
import Em from "/Em.jpg";

const EmailMarketing = () => {
  const industriesItems = [
    { name: "E-commerce", icon: FaShoppingCart },
    { name: "SaaS", icon: FaBriefcase },
    { name: "Hospitality", icon: FaHotel },
    { name: "Fitness & Wellness", icon: FaDumbbell },
    { name: "Professional Services", icon: FaUsers },
  ];

  return (
    <ServiceTemplate3
      title="Email Marketing"
      introduction="Email marketing remains one of the most effective ways to nurture leads and retain customers. We help you build and execute email campaigns that keep your audience engaged, from personalized newsletters to automated drip campaigns."
      offerItems={[
        "Email Campaign Strategy: Developing strategies for regular newsletters, product announcements, and promotional offers.",
        "Automation & Drip Campaigns: Sending automated emails based on customer behavior to nurture leads and drive sales.",
        "Personalized Email Content: Crafting personalized email content that speaks directly to your audience's needs and interests.",
        "List Management & Segmentation: Managing your email list and segmenting it based on demographics, behavior, and preferences for highly targeted messaging."
      ]}
      benefits={[
        "High ROI: Email marketing delivers one of the highest returns on investment compared to other digital marketing channels.",
        "Direct Customer Engagement: Emails land directly in your customers’ inboxes, providing a personal touch.",
        "Automated Lead Nurturing: Drip campaigns help convert leads into customers over time, with minimal effort.",
        "Retargeting Opportunities: Re-engage customers who have previously interacted with your brand."
      ]}
      image={Em}
      ctaText="Get Started with Email Marketing"
      buttonText="Start Now"
      quote="Reach out to your customers where they spend most of their time: in their inbox!"
      industriesItems={industriesItems}
    />
  );
};

export default EmailMarketing;
