import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaBullhorn, FaUsers, FaVideo, FaPenNib, FaChartBar } from 'react-icons/fa';
import Ba from "/Ba.jpg";

const BrandAwareness = () => {
  const industriesItems = [
    { name: "Consumer Goods", icon: FaBullhorn },
    { name: "Fashion", icon: FaUsers },
    { name: "Health & Wellness", icon: FaVideo },
    { name: "Tech Startups", icon: FaPenNib },
    { name: "Entertainment", icon: FaChartBar },
  ];

  return (
    <ServiceTemplate3
      title="Brand Awareness"
      introduction="Boost Your Brand's Visibility Across Multiple Platforms. Brand Awareness Campaigns focus on making your business known to your target audience, ensuring that potential customers recognize and trust your brand."
      offerItems={[
        "Social Media Campaigns: Create visually compelling and engaging posts, stories, and ads across platforms like Instagram, Facebook, and LinkedIn to increase brand recognition.",
        "Influencer Collaborations: Partner with influencers to extend your brand’s reach to their established audiences.",
        "Content Marketing: Develop educational and informative content that increases your visibility and demonstrates expertise in your industry.",
        "Video Marketing: Produce creative and engaging video content for platforms like YouTube and social media to captivate your audience.",
        "Display Advertising: Use display ads across Google’s vast network of websites to keep your brand visible to your audience."
      ]}
      benefits={[
        "Increased Brand Recognition: The more often people see your brand, the more likely they are to remember it and choose you when ready to buy.",
        "Builds Trust: Consistent brand visibility across channels establishes trust with your audience, making it easier to convert them later.",
        "Top-of-Mind Awareness: Stay at the forefront of customers’ minds so they think of you when they have a need for your products or services.",
        "Long-Term Growth: Brand awareness campaigns are an investment in long-term brand loyalty and customer retention."
      ]}
      image={Ba}
      ctaText="Boost Your Brand Visibility"
      buttonText="Start Raising Awareness"
      quote="Stay visible, stay relevant—build long-lasting brand awareness."
      industriesItems={industriesItems}
    />
  );
};

export default BrandAwareness;
