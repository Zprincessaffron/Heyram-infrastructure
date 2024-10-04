import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaSearch, FaShareAlt, FaBullseye, FaPenAlt, FaLink } from 'react-icons/fa';
import Tg from '/Tg.jpg'

const TrafficGeneration = () => {
  const industriesItems = [
    { name: "E-commerce", icon: FaSearch },
    { name: "SaaS", icon: FaShareAlt },
    { name: "Real Estate", icon: FaBullseye },
    { name: "Travel & Tourism", icon: FaPenAlt },
    { name: "B2B Services", icon: FaLink },
  ];

  return (
    <ServiceTemplate3
      title="Traffic Generation"
      introduction="Increase Website Traffic with Multi-Channel Strategies. Traffic Generation focuses on driving more visitors to your website, the first step to increasing leads and sales."
      offerItems={[
        "Organic Traffic (SEO): Optimize your website to appear higher in search engine results, bringing in users who are already searching for your products or services.",
        "Social Media Traffic: Leverage social media platforms to drive engagement and direct users to your website through posts, ads, and influencer partnerships.",
        "Paid Traffic (PPC): Use paid search and social ads to attract users quickly and efficiently.",
        "Content Marketing: Create valuable blog posts, articles, and downloadable resources to attract and educate your audience, driving them to your site.",
        "Referral Traffic: Collaborate with other businesses or influencers to generate backlinks that bring traffic to your site from other sources."
      ]}
      benefits={[
        "Improved Visibility: More traffic means more eyes on your brand, increasing awareness and potential conversions.",
        "Quality Leads: A well-rounded traffic strategy ensures you're bringing in visitors who are likely to convert into customers.",
        "Sustained Growth: Organic and referral traffic strategies build a long-term foundation for sustained website growth.",
        "Enhanced Brand Authority: Content that brings traffic not only educates but also positions your brand as a thought leader."
      ]}
      image={Tg}
      ctaText="Boost Your Website's Traffic Today"
      buttonText="Get Started"
      quote="Traffic is the lifeblood of your website—drive the right visitors at the right time."
      industriesItems={industriesItems}
    />
  );
};

export default TrafficGeneration;
