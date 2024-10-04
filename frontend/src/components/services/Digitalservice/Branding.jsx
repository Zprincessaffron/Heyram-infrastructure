import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaPalette, FaBullhorn, FaBrush, FaSyncAlt, FaFileSignature } from 'react-icons/fa';
import Bs from "/Bs.png";

const Branding = () => {
  const industriesItems = [
    { name: "Retail", icon: FaPalette },
    { name: "Fashion", icon: FaBullhorn },
    { name: "Tech Startups", icon: FaBrush },
    { name: "Professional Services", icon: FaSyncAlt },
    { name: "Health & Wellness", icon: FaFileSignature },
  ];

  return (
    <ServiceTemplate3
      title="Branding Services"
      introduction="Craft a Memorable Identity That Resonates with Your Audience. Branding is about more than just a logo or a tagline—it’s about creating an identity that resonates with your audience, reflects your values, and differentiates you from competitors."
      offerItems={[
        "Brand Strategy: Define your brand’s purpose, voice, and positioning to build a strong foundation for all marketing efforts.",
        "Logo & Identity Design: Create a unique logo, color palette, and design elements that reflect your brand’s personality.",
        "Brand Messaging: Develop clear and consistent messaging that conveys your brand’s value and resonates with your target audience.",
        "Rebranding: If your current brand needs a refresh, we help modernize your identity without losing core values.",
        "Brand Guidelines: Establish guidelines to ensure consistency across all marketing channels, from social media to packaging."
      ]}
      benefits={[
        "Stronger Customer Loyalty: A well-defined brand creates emotional connections that foster customer loyalty.",
        "Clear Differentiation: Effective branding sets you apart from competitors, making it easier for customers to choose you.",
        "Consistency Across Channels: Brand guidelines ensure that all marketing materials have a unified look and feel, building recognition.",
        "Increased Perceived Value: A professional brand identity enhances your business's credibility and perceived value."
      ]}
      image={Bs}
      ctaText="Elevate Your Brand's Identity"
      buttonText="Get Started"
      quote="Your brand is the face of your business—make it unforgettable."
      industriesItems={industriesItems}
    />
  );
};

export default Branding;
