import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaClipboardList, FaEnvelopeOpen, FaFileAlt, FaBullhorn, FaCogs } from 'react-icons/fa';
import Lg from "/Lg2.jpg";

const LeadGeneration = () => {
  const industriesItems = [
    { name: "SaaS", icon: FaClipboardList },
    { name: "B2B Services", icon: FaEnvelopeOpen },
    { name: "Real Estate", icon: FaFileAlt },
    { name: "Finance", icon: FaBullhorn },
    { name: "E-commerce", icon: FaCogs },
  ];

  return (
    <ServiceTemplate3
      title="Lead Generation"
      introduction="Convert Website Visitors into Valuable Leads. Lead Generation is about identifying potential customers and converting them into qualified leads who are genuinely interested in your business."
      offerItems={[
        "Landing Pages: Create high-converting landing pages designed specifically to capture leads through compelling offers and clear calls-to-action.",
        "Email Capture Forms: Use pop-ups, inline forms, or exit-intent forms to gather contact information from website visitors.",
        "Content Offers: Offer valuable resources like eBooks, white papers, and guides in exchange for contact information.",
        "Paid Lead Generation (PPC): Use Google and social media ads to attract leads by targeting specific interests and behaviors.",
        "CRM Integration: Set up and integrate customer relationship management (CRM) tools to manage and nurture leads efficiently."
      ]}
      benefits={[
        "Increased Sales Pipeline: A steady stream of leads ensures your sales team always has new prospects to work with.",
        "Targeted Approach: Lead generation focuses on users who are already interested in your product or service, improving conversion rates.",
        "Cost-Effective: By targeting qualified leads, you reduce the cost of acquiring customers and focus on those who are most likely to convert.",
        "Improved Customer Insights: Lead data provides valuable insights into customer preferences and behaviors, allowing for better future targeting."
      ]}
      image={Lg}
      ctaText="Fuel Your Sales with Qualified Leads"
      buttonText="Start Generating Leads"
      quote="Turn website visitors into customers with strategic lead generation."
      industriesItems={industriesItems}
    />
  );
};

export default LeadGeneration;
