import React from 'react';
import ServiceTemplate from '../ServiceTemplate';

const Seo = () => {
  return (
    <ServiceTemplate
      title="Search Engine Optimization (SEO)"
      introduction="In today’s competitive online environment, visibility is everything. Our SEO and digital marketing services are designed to help your business stand out in search results, attract the right audience, and drive conversions. Whether you need local SEO, technical optimization, or content strategy, we offer comprehensive solutions to boost your online presence and maximize your ROI."
      offerItems={[
        "Keyword Research & Strategy: We identify the most valuable keywords for your business, ensuring that your content is aligned with search intent and has the best chance of ranking.",
        "On-Page SEO Optimization: We optimize your website’s structure, meta tags, content, and internal linking to ensure it is fully optimized for search engines and user experience.",
        "Technical SEO: From improving site speed to ensuring mobile-friendliness and resolving crawl errors, we focus on the technical aspects of SEO to make sure your website performs at its best.",
        "Link Building: Our link-building strategies are designed to improve your domain authority and boost your site’s credibility with quality backlinks from reputable sources.",
        "Local SEO: We help your business rank higher in local search results, driving traffic from potential customers in your geographic area with optimized Google My Business profiles and local citations.",
        "Content Creation & Optimization: We create and optimize content that is relevant, engaging, and optimized for SEO to improve your rankings and attract your target audience.",
      ]}
      whyChooseUsItems={[
        "Proven SEO Techniques: We stay up-to-date with the latest SEO best practices and algorithm changes to ensure your site consistently ranks high in search results.",
        "Customized SEO Solutions: Every business is unique, and so is our approach. We tailor our SEO strategies to your specific industry, audience, and goals.",
        "Transparent Reporting: We provide detailed, easy-to-understand reports so you can track your SEO progress and understand the impact of our work.",
        "Long-Term Results: Our focus is not just on quick wins, but sustainable, long-term growth in organic traffic and rankings.",
        "Holistic Digital Marketing Approach: We combine SEO with broader digital marketing strategies like content marketing, social media, and PPC to deliver a comprehensive solution.",
      ]}
      roadmapItems={[
        {
          title: "Phase 1: SEO Audit & Strategy Development",
          description: "We start with an in-depth SEO audit of your website, identifying areas for improvement and developing a customized SEO strategy to address technical, on-page, and off-page elements.",
          align: "end"
        },
        {
          title: "Phase 2: On-Page & Technical SEO Implementation",
          description: "Our team implements the necessary technical fixes, optimizes on-page content, and ensures that your website is fully compliant with SEO best practices for improved search visibility.",
          align: "start"
        },
        {
          title: "Phase 3: Content Optimization & Link Building",
          description: "We optimize existing content and create new, high-quality content designed to attract both users and search engines. Our link-building strategies help increase your site’s authority.",
          align: "end"
        },
        {
          title: "Phase 4: Ongoing Monitoring & Adjustments",
          description: "SEO is an ongoing process. We continuously monitor your site's performance, track keyword rankings, and make adjustments as needed to stay ahead of competitors and search engine updates.",
          align: "start"
        },
        {
          title: "Phase 5: Reporting & Refinement",
          description: "We provide monthly reports detailing your website’s SEO performance and adjust our strategy based on data and evolving business goals.",
          align: "end"
        },
      ]}
      ctaText="Ready to boost your search engine rankings and grow your online visibility? Our SEO experts are here to help."
      buttonText="Start Your SEO Journey"
    />
  );
};

export default Seo;
