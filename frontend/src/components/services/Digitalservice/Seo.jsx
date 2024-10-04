import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';

const Seo = () => {
  return (
    <ServiceTemplate3
  title="SEO (Search Engine Optimization)"
  introduction="Unlock Your Website's Potential with SEO. In today's digital landscape, having a robust online presence is crucial. Search Engine Optimization (SEO) ensures that your website ranks higher on search engines, making it easier for potential customers to find you. Our expert SEO strategies will enhance your visibility, drive organic traffic, and ultimately boost your sales."
  offerItems={[
    "Comprehensive website audits",
    "On-page and off-page optimization",
    "Keyword research and analysis",
    "Regular performance tracking and reporting"
  ]}
  benefits={[
    "Improved search rankings for targeted keywords",
    "Increased website traffic and visibility",
    "Enhanced user experience and website performance"
  ]}
  ctaText="Get Started with SEO"
  buttonText="Start Now"
  quote="Invest in your online presence today, and watch your business grow tomorrow!"
/>

  )
};

export default Seo;
