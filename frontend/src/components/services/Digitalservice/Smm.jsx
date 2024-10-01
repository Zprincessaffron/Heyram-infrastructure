import ServiceTemplate from '../ServiceTemplate';

const Smm = () => {
  return (
    <ServiceTemplate
      title="Social Media Marketing (SMM)"
      introduction="Boost your online presence and engage with your target audience effectively through our Social Media Marketing (SMM) services. We craft tailored strategies that build your brand, enhance customer relationships, and drive conversions across all major social media platforms, including Facebook, Instagram, Twitter, LinkedIn, and more."
      offerItems={[
        "Social Media Strategy Development: We create custom social media strategies tailored to your business goals, ensuring your brand reaches the right audience on the most effective platforms.",
        "Content Creation & Management: Our creative team produces engaging and visually appealing content, including images, videos, and posts, designed to captivate your audience and enhance brand loyalty.",
        "Community Management: We actively manage your social media accounts, responding to comments, messages, and interactions to foster relationships and build a loyal following.",
        "Social Media Advertising: We implement targeted ad campaigns on platforms like Facebook, Instagram, and LinkedIn to reach specific demographics, ensuring your message reaches potential customers.",
        "Influencer Marketing: We partner with relevant influencer's in your industry to promote your products or services, leveraging their reach to build credibility and expand your brand’s presence.",
        "Social Media Analytics & Reporting: Our team provides in-depth reports that track the performance of your social media campaigns, highlighting engagement, reach, and conversion rates, so you can see the impact of your social presence."
      ]}
      whyChooseUsItems={[
        "Platform Expertise: Our team has extensive experience managing social media campaigns across various platforms, including Facebook, Instagram, LinkedIn, Twitter, and more. We know how to tailor strategies to each platform's unique audience.",
        "Creative & Engaging Content: We focus on creating high-quality, engaging content that resonates with your audience, encouraging them to engage with your brand and share your message.",
        "Data-Driven Strategies: We use advanced social media analytics tools to track performance and optimize your campaigns for maximum engagement and conversion.",
        "Targeted Advertising: Our expertise in social media advertising ensures that your ads reach the right audience at the right time, driving meaningful results without wasting your budget.",
        "Consistent Engagement: We engage with your audience regularly, responding to their inquiries, comments, and messages to foster a positive and lasting relationship with your brand.",
        "Transparent Reporting: You'll receive regular updates and detailed reports on the performance of your social media campaigns, allowing you to track progress and ROI in real-time."
      ]}
      roadmapItems={[
        { 
          title: "Phase 1: Strategy & Planning", 
          description: "We start by understanding your brand, goals, and target audience to develop a personalized social media strategy. We identify key platforms, set objectives, and plan content that aligns with your business’s vision.", 
          align: "end" 
        },
        { 
          title: "Phase 2: Content Creation & Scheduling", 
          description: "Our creative team designs visually compelling content tailored to each social platform. We develop a content calendar to ensure consistent and timely posting, maximizing audience engagement.", 
          align: "start" 
        },
        { 
          title: "Phase 3: Social Media Advertising", 
          description: "We implement targeted social media ads to boost your brand’s visibility and drive traffic. Whether it's Facebook Ads, Instagram Stories, or LinkedIn campaigns, we ensure your ads reach your ideal audience.", 
          align: "end" 
        },
        { 
          title: "Phase 4: Community Management", 
          description: "We engage with your audience by responding to comments, messages, and interactions. Our proactive community management approach fosters strong relationships and increases brand loyalty.", 
          align: "start" 
        },
        { 
          title: "Phase 5: Analytics & Reporting", 
          description: "We provide comprehensive reports detailing the success of your social media campaigns. Using this data, we continuously refine strategies to improve performance and achieve better results.", 
          align: "end" 
        }
      ]}
      ctaText="Ready to build a stronger social presence? Let’s start growing your brand through social media!"
      buttonText="Get Started with SMM"
    />
  );
};

export default Smm;
