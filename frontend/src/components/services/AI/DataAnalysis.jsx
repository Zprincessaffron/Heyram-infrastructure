import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaShoppingCart, FaHeartbeat, FaChartLine, FaIndustry, FaGraduationCap, FaPhoneAlt } from 'react-icons/fa';
import Da from "/Da.jpg";

const DataAnalysis = () => {
  const industriesItems = [
    { name: "Retail & E-commerce", icon: FaShoppingCart },
    { name: "Healthcare", icon: FaHeartbeat },
    { name: "Finance & Banking", icon: FaChartLine },
    { name: "Manufacturing", icon: FaIndustry },
    { name: "Education", icon: FaGraduationCap },
    { name: "Telecommunications", icon: FaPhoneAlt },
  ];

  return (
    <ServiceTemplate3
      title="Data Analysis"
      introduction="In today’s data-driven world, your success depends on making informed decisions. Our data analysis services transform raw data into actionable insights, enabling you to stay ahead of the competition. Let us help you harness the true potential of your data for optimized performance and growth."
      offerItems={[
        "Comprehensive Data Audits: A full analysis of your current data management and usage practices.",
        "Custom Data Solutions: Tailored analytics models to fit your business's unique needs.",
        "Real-time Analytics Dashboards: Visualize your data in real-time to make immediate decisions.",
        "Predictive & Prescriptive Analytics: Tools to predict future trends and prescribe actionable steps.",
        "Data Reporting & Visualization: Clear, concise reporting that helps you understand the story behind the numbers.",
        "Data Integration Services: Seamlessly connect and unify data from multiple sources."
      ]}
      benefits={[
        "Data-Driven Decision Making: Get precise insights that drive smart business strategies.",
        "Increased Operational Efficiency: Identify inefficiencies and optimize resource allocation.",
        "Enhanced Customer Insights: Understand your audience better to personalize services and boost satisfaction.",
        "Predictive Analytics: Anticipate trends and make proactive decisions based on forecasts.",
        "Competitive Advantage: Stay ahead of market shifts with timely, actionable insights."
      ]}
      image={Da}
      ctaText="Transform Your Data into Actionable Insights"
      buttonText="Get Started"
      quote="Harness the power of data to drive smarter decisions and stay ahead of the competition."
      industriesItems={industriesItems}
    />
  );
};

export default DataAnalysis;
