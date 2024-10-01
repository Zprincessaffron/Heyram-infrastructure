import ServiceTemplate from '../ServiceTemplate';

const EmailMarketing = () => {
  return (
    <ServiceTemplate
      title="Email Marketing"
      introduction="Email marketing is one of the most effective ways to build relationships with your audience, drive sales, and nurture leads. Our Email Marketing services help you deliver personalized, targeted content to your subscribers, ensuring maximum engagement and conversions."
      offerItems={[
        "Email Campaign Strategy: We craft custom email strategies tailored to your business goals, audience, and industry, ensuring that each campaign delivers maximum results.",
        "Email Template Design: Our designers create visually appealing, mobile-responsive email templates that enhance user experience and align with your brand identity.",
        "Personalized Email Campaigns: We segment your email list and create highly personalized campaigns that speak directly to your audience’s needs and interests.",
        "Automated Email Sequences: We build automated workflows, such as welcome series, abandoned cart reminders, and post-purchase follow-ups, to ensure timely and relevant communication with your subscribers.",
        "A/B Testing & Optimization: We continuously test subject lines, email content, and calls-to-action to optimize your campaigns for higher open rates, click-through rates, and conversions.",
        "List Management & Growth: We help you build and manage a healthy email list by implementing strategies to grow your subscriber base and regularly clean up inactive contacts."
      ]}
      whyChooseUsItems={[
        "Proven Results: Our email marketing strategies have a track record of delivering high open and conversion rates, helping businesses build strong relationships with their customers.",
        "Data-Driven Approach: We use advanced analytics to track email performance, providing insights that help us refine and optimize your campaigns for better results.",
        "Personalization at Scale: We ensure your emails are not just another message in the inbox. Our targeted segmentation and personalized content deliver relevant, engaging messages to your audience.",
        "Comprehensive Automation: From welcome emails to re-engagement campaigns, we automate your email marketing to save you time and maintain consistent communication with your subscribers.",
        "Expert Designers & Copywriters: Our team of experienced designers and copywriters ensures that every email is not only visually appealing but also crafted to deliver your message effectively.",
        "Compliance & Best Practices: We adhere to all email marketing best practices and ensure compliance with data protection regulations like GDPR, keeping your business and your subscribers safe."
      ]}
      roadmapItems={[
        { 
          title: "Phase 1: Strategy & Planning", 
          description: "We analyze your audience and business objectives to create a tailored email marketing strategy, ensuring each campaign aligns with your goals and drives engagement.", 
          align: "end" 
        },
        { 
          title: "Phase 2: Design & Content Creation", 
          description: "Our team designs visually appealing, responsive email templates and creates compelling copy that resonates with your audience and encourages them to take action.", 
          align: "start" 
        },
        { 
          title: "Phase 3: Campaign Execution", 
          description: "We schedule and send out email campaigns based on the strategy, ensuring that each email is optimized for the right time and audience segment.", 
          align: "end" 
        },
        { 
          title: "Phase 4: Automation & Personalization", 
          description: "We set up automated email sequences for different stages of the customer journey, ensuring timely, relevant communication that keeps your audience engaged.", 
          align: "start" 
        },
        { 
          title: "Phase 5: Tracking & Optimization", 
          description: "We use data analytics to track campaign performance, from open rates to conversions. Based on these insights, we continuously optimize your email marketing efforts.", 
          align: "end" 
        }
      ]}
      ctaText="Boost engagement, nurture leads, and drive sales with effective email marketing campaigns. Let's get started on building stronger connections with your audience."
      buttonText="Start Your Email Marketing Campaign"
    />
  );
};

export default EmailMarketing;
