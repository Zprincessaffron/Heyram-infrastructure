import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaShoppingCart, FaMapMarkedAlt, FaBuilding, FaUserMd, FaBookOpen, FaHotel, FaGavel } from 'react-icons/fa';
import seo from "/Seo.jpg"
const Seo = () => {
  const industriesItems = [
    { name: "E-commerce", icon: FaShoppingCart },
    { name: "Local Businesses", icon: FaMapMarkedAlt },
    { name: "Real Estate", icon: FaBuilding },
    { name: "Healthcare", icon: FaUserMd },
    { name: "Education", icon: FaBookOpen },
    { name: "Hospitality", icon: FaHotel },
    { name: "Legal Services", icon: FaGavel },
  ];

  return (
    <ServiceTemplate3
      title="SEO (Search Engine Optimization)"
      introduction="Search Engine Optimization (SEO) is the process of optimizing your website to rank higher in search engine results, making it easier for potential customers to find your business. SEO increases your website’s visibility and builds credibility with search engines like Google."
      offerItems={[
        "On-Page SEO: Optimizing individual pages for target keywords, content relevance, and technical factors like meta tags, headers, and image alt text.",
        "Off-Page SEO: Building high-quality backlinks to increase your site’s authority and trustworthiness.",
        "Technical SEO: Enhancing website speed, mobile-friendliness, and overall structure for better user experience.",
        "Local SEO: Optimizing your online presence to attract local customers by appearing in Google Maps and local search results."
      ]}
      benefits={[
        "Increased Website Traffic: Ranking higher in search results leads to more organic traffic.",
        "Enhanced Credibility: Appearing at the top of search engines builds trust and authority.",
        "Cost-Effective Marketing: SEO provides long-term value by consistently driving traffic without paid ads.",
        "Local Business Growth: Local SEO helps attract customers nearby, making it essential for brick-and-mortar businesses."
      ]}
      image={seo}
      ctaText="Get Started with SEO"
      buttonText="Start Now"
      quote="Invest in your online presence today, and watch your business grow tomorrow!"
      industriesItems={industriesItems}
    />
  );
};

export default Seo;
