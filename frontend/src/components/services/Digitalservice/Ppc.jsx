import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaShoppingCart, FaPlane, FaMoneyBillWave, FaCar, FaUserMd, FaLaptop } from 'react-icons/fa';
import ppc from "/Smm.jpg";

const Ppc = () => {
  const industriesItems = [
    { name: "Retail & E-commerce", icon: FaShoppingCart },
    { name: "Travel & Tourism", icon: FaPlane },
    { name: "Finance", icon: FaMoneyBillWave },
    { name: "SaaS", icon: FaLaptop },
    { name: "Automotive", icon: FaCar },
    { name: "Healthcare", icon: FaUserMd },
  ];

  return (
    <ServiceTemplate3
      title="Pay-Per-Click Advertising (PPC)"
      introduction="PPC advertising helps you reach your target audience quickly by displaying ads on search engines and social media platforms. You pay only when a user clicks on your ad, making it a cost-effective way to drive targeted traffic to your site."
      offerItems={[
        "Google Ads: Running paid search and display ads for specific keywords to appear at the top of search results.",
        "Social Media Ads: Creating and managing ad campaigns on platforms like Facebook, Instagram, and LinkedIn to target your ideal customer base.",
        "Remarketing Campaigns: Engaging previous visitors with tailored ads to encourage conversion.",
        "Ad Copy & Creative Design: Crafting compelling ad copy and visuals to maximize click-through rates (CTR) and conversions."
      ]}
      benefits={[
        "Immediate Results: PPC drives instant traffic to your website, unlike SEO which takes time.",
        "Highly Targeted: Ads can be customized to reach specific demographics, interests, or even locations.",
        "Measurable ROI: You can track every click and conversion, allowing you to assess the effectiveness of your campaigns.",
        "Budget Control: With PPC, you control your ad spend, ensuring that you stay within your budget."
      ]}
      image={ppc}
      ctaText="Get Started with PPC"
      buttonText="Start Now"
      quote="Start driving traffic to your site today, pay only for results!"
      industriesItems={industriesItems}
    />
  );
};

export default Ppc;
