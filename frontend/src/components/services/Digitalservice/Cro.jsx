import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaShoppingCart, FaDollarSign, FaHome, FaBookOpen, FaHeart, FaCog } from 'react-icons/fa';
import cro from "/Lg.jpg";

const Cro = () => {
  const industriesItems = [
    { name: "E-commerce", icon: FaShoppingCart },
    { name: "Financial Services", icon: FaDollarSign },
    { name: "Real Estate", icon: FaHome },
    { name: "Education", icon: FaBookOpen },
    { name: "Healthcare", icon: FaHeart },
    { name: "SaaS", icon: FaCog },
  ];

  return (
    <ServiceTemplate3
      title="Conversion Rate Optimization (CRO)"
      introduction="Conversion Rate Optimization (CRO) is about maximizing the effectiveness of your website to convert visitors into leads or customers. We analyze user behavior, identify bottlenecks, and implement strategies to improve the user experience and increase conversion rates."
      offerItems={[
        "A/B Testing: Testing different versions of your website’s landing pages, forms, and calls-to-action to see what works best.",
        "User Behavior Analysis: Using heatmaps, session recordings, and analytics to understand how visitors interact with your website.",
        "Funnel Optimization: Improving each stage of your sales funnel to drive more conversions.",
        "Lead Form Optimization: Simplifying forms and making them user-friendly to increase lead generation."
      ]}
      benefits={[
        "Increased Sales: CRO helps turn more visitors into paying customers, improving your overall profitability.",
        "Improved User Experience: Enhancing the customer journey results in more satisfied users who are likely to return.",
        "Data-Driven Results: Every optimization decision is backed by real user data.",
        "Reduced Customer Acquisition Cost: By converting more visitors, you lower the cost of acquiring new customers."
      ]}
      image={cro}
      ctaText="Boost Your Conversion Rates Today"
      buttonText="Get Started"
      quote="Transform your visitors into loyal customers with effective optimization!"
      industriesItems={industriesItems}
    />
  );
};

export default Cro;
