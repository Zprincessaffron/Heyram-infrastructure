import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaUsers, FaBullhorn, FaHandshake, FaChartLine, FaGlobe } from 'react-icons/fa';
import Im from "/Im.jpg"

const InfluencerMarketing = () => {
  const industriesItems = [
    { name: "Fashion & Lifestyle", icon: FaUsers },
    { name: "Food & Beverage", icon: FaBullhorn },
    { name: "Health & Fitness", icon: FaHandshake },
    { name: "Travel & Tourism", icon: FaGlobe },
    { name: "Entertainment", icon: FaChartLine },
  ];

  return (
    <ServiceTemplate3
      title="Influencer Marketing"
      introduction="Leverage Trust and Reach with Influencers. Influencer marketing allows your brand to tap into the established trust and reach of social media influencers. We help you connect with influencers who align with your brand, driving authentic engagement and reaching new audiences."
      offerItems={[
        "Influencer Strategy: Identifying the right influencers in your industry or niche.",
        "Campaign Planning: Crafting collaborations, product placements, or sponsored content strategies to increase brand awareness.",
        "Influencer Outreach: Managing communications and agreements with influencers.",
        "Performance Tracking: Measuring the success of influencer campaigns with metrics such as reach, engagement, and conversions."
      ]}
      benefits={[
        "Wider Audience Reach: Influencers help your brand reach new, highly engaged audiences.",
        "Increased Trust & Credibility: Influencers’ followers trust their recommendations, adding authenticity to your brand.",
        "Cost-Effective Branding: Compared to traditional celebrity endorsements, influencer marketing offers a high ROI.",
        "Improved Engagement: Influencers often create more interactive, engaging content, which resonates with audiences."
      ]}
      image={Im}
      ctaText="Amplify Your Brand with Influencers"
      buttonText="Get Started"
      quote="Build authentic connections and drive growth through influencer partnerships!"
      industriesItems={industriesItems}
    />
  );
};

export default InfluencerMarketing;
