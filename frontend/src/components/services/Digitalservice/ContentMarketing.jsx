import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaLaptopCode, FaBuilding, FaHeartbeat, FaGraduationCap, FaBalanceScale, FaFileInvoiceDollar } from 'react-icons/fa';
import Cm from "/Cm.png";

const ContentMarketing = () => {
  const industriesItems = [
    { name: "Technology", icon: FaLaptopCode },
    { name: "Finance", icon: FaFileInvoiceDollar },
    { name: "Real Estate", icon: FaBuilding },
    { name: "Healthcare", icon: FaHeartbeat },
    { name: "Professional Services", icon: FaBalanceScale },
    { name: "Education", icon: FaGraduationCap },
  ];

  return (
    <ServiceTemplate3
      title="Content Marketing"
      introduction="Content marketing is about creating valuable and relevant content to attract, engage, and convert your audience. From blog posts and articles to videos and infographics, our content strategies boost brand awareness and position your business as an industry leader."
      offerItems={[
        "Blog Writing & Articles: Creating SEO-optimized blog content that educates and informs your audience.",
        "Video Production: Engaging video content to drive traffic, engagement, and conversion.",
        "Infographics & Visual Content: Using creative visuals to convey complex information in a simple and engaging way.",
        "E-books & White Papers: Developing in-depth resources to showcase your expertise and generate leads."
      ]}
      benefits={[
        "Increased Engagement: High-quality content keeps your audience interested and encourages sharing.",
        "Improved SEO: Regular, optimized content helps improve your search engine rankings.",
        "Lead Generation: Content like e-books or guides attracts leads who are genuinely interested in your services.",
        "Brand Authority: Informative content positions your brand as a thought leader in your industry."
      ]}
      image={Cm}
      ctaText="Get Started with Content Marketing"
      buttonText="Start Now"
      quote="Let your content tell your brand's story!"
      industriesItems={industriesItems}
    />
  );
};

export default ContentMarketing;
