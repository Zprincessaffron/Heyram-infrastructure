import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaChartLine, FaGoogle, FaCog, FaBookOpen, FaHome, FaDollarSign } from 'react-icons/fa';
import Ar from "/Ar.jpg";

const AnalyticsAndReporting = () => {
  const industriesItems = [
    { name: "E-commerce", icon: FaChartLine },
    { name: "SaaS", icon: FaCog },
    { name: "Real Estate", icon: FaHome },
    { name: "Education", icon: FaBookOpen },
    { name: "Financial Services", icon: FaDollarSign },
  ];

  return (
    <ServiceTemplate3
      title="Analytics & Reporting"
      introduction="Data-Driven Insights for Smarter Decisions. Tracking and analyzing your marketing performance is crucial for understanding what works and where to improve. Our analytics services ensure you have full visibility into your campaigns, so you can make informed decisions based on real data."
      offerItems={[
        "Google Analytics Setup: Installing and configuring Google Analytics to track website traffic, user behavior, and conversions.",
        "Custom Dashboards: Building personalized dashboards that display key performance metrics in real-time.",
        "Campaign Reporting: Regular, detailed reports on your campaigns’ performance with actionable insights.",
        "Data Analysis & Recommendations: Analyzing data trends and offering recommendations for optimization."
      ]}
      benefits={[
        "Informed Decision-Making: Data insights help you understand what’s working and where to improve.",
        "Improved Campaign Performance: By tracking performance, we can continually optimize campaigns for better results.",
        "Real-Time Monitoring: Custom dashboards give you up-to-date information about your marketing efforts.",
        "Budget Efficiency: By knowing which channels are performing best, you can allocate resources more effectively."
      ]}
      image={Ar}
      ctaText="Leverage Data for Optimal Results"
      buttonText="Get Started"
      quote="Let data guide your next move toward success!"
      industriesItems={industriesItems}
    />
  );
};

export default AnalyticsAndReporting;
