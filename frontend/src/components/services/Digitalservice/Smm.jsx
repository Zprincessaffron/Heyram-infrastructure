import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaTshirt, FaUtensils, FaHeartbeat, FaFilm, FaBookOpen, FaHandsHelping } from 'react-icons/fa';
import smm from "/Ppc2.jpg";

const Smm = () => {
  const industriesItems = [
    { name: "Fashion & Lifestyle", icon: FaTshirt },
    { name: "Food & Beverage", icon: FaUtensils },
    { name: "Health & Wellness", icon: FaHeartbeat },
    { name: "Entertainment", icon: FaFilm },
    { name: "Education", icon: FaBookOpen },
    { name: "Non-Profits", icon: FaHandsHelping },
  ];

  return (
    <ServiceTemplate3
      title="Social Media Marketing"
      introduction="Social media is a powerful tool for engaging with your audience, building brand loyalty, and driving conversions. Our social media marketing strategies focus on delivering the right message to the right audience across platforms such as Facebook, Instagram, LinkedIn, and Twitter."
      offerItems={[
        "Content Creation & Curation: Developing engaging posts, images, and videos that resonate with your audience.",
        "Social Media Strategy: Crafting tailored strategies based on audience behavior, trends, and platform-specific insights.",
        "Community Management: Interacting with your followers, responding to comments, and fostering brand loyalty.",
        "Paid Social Campaigns: Running highly targeted ads to drive brand awareness, website traffic, and conversions."
      ]}
      benefits={[
        "Improved Brand Recognition: Regular social media activity keeps your brand top of mind with your audience.",
        "Direct Customer Interaction: Social platforms allow for real-time engagement and feedback from your audience.",
        "Cost-Effective Marketing: Organic reach is free, and paid ads on social media tend to have lower costs than traditional advertising.",
        "Increased Website Traffic: Social media channels drive traffic to your website, helping to boost sales and lead generation."
      ]}
      image={smm}
      ctaText="Get Started with Social Media Marketing"
      buttonText="Start Now"
      quote="Let's turn your social media presence into a vibrant community!"
      industriesItems={industriesItems}
    />
  );
};

export default Smm;
