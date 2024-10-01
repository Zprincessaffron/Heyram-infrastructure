import ServiceTemplate from '../ServiceTemplate';

const WhatsappMarketing = () => {
  return (
    <ServiceTemplate
      title="WhatsApp Marketing"
      introduction="WhatsApp Marketing is a powerful tool for reaching your audience with direct, personalized communication. Our WhatsApp marketing services allow you to engage with your customers on a platform they use daily, ensuring higher open rates, instant communication, and meaningful interactions."
      offerItems={[
        "Campaign Strategy: We develop targeted WhatsApp marketing strategies to help you reach your business goals, whether it's driving sales, boosting engagement, or increasing brand awareness.",
        "Automated Messaging: We set up automated responses for FAQs, order confirmations, and more, ensuring quick, efficient customer service around the clock.",
        "Bulk Messaging: We help you deliver important updates, promotions, and offers to your customers in bulk, while maintaining personalization and relevance.",
        "WhatsApp Chatbots: Our team creates intelligent chatbots that can handle customer inquiries, assist in purchases, and guide users through various services.",
        "Rich Media Messaging: We utilize WhatsApp's capabilities to send images, videos, product catalogs, and more to provide a richer, more engaging customer experience.",
        "Customer Segmentation: We segment your contacts to send targeted messages that are personalized based on user behavior, preferences, and past interactions."
      ]}
      whyChooseUsItems={[
        "High Engagement: WhatsApp boasts some of the highest open rates of any communication platform, ensuring your messages are seen and acted upon.",
        "Instant Communication: Reach your audience in real-time, making WhatsApp an ideal platform for time-sensitive messages like flash sales and urgent updates.",
        "Personalized Customer Experience: WhatsApp allows for one-on-one communication, enabling highly personalized interactions with your customers.",
        "Secure Messaging: All WhatsApp messages are end-to-end encrypted, providing your customers with a secure, trusted platform to communicate with your brand.",
        "Automation Capabilities: Save time with automated messages and chatbots, while ensuring your customers get fast, relevant responses.",
        "Rich Features: Take advantage of WhatsApp’s multimedia capabilities to send more engaging messages that go beyond just text."
      ]}
      roadmapItems={[
        { 
          title: "Phase 1: Strategy Development", 
          description: "We begin by understanding your business goals and audience to create a WhatsApp marketing strategy that maximizes engagement and conversions.", 
          align: "end" 
        },
        { 
          title: "Phase 2: Setup & Integration", 
          description: "We set up your WhatsApp Business account, integrate chatbots or CRM systems, and create messaging templates to streamline your communication.", 
          align: "start" 
        },
        { 
          title: "Phase 3: Campaign Execution", 
          description: "Our team executes the WhatsApp campaigns, ensuring that messages are delivered at optimal times and are personalized for your audience.", 
          align: "end" 
        },
        { 
          title: "Phase 4: Automation & Chatbot Deployment", 
          description: "We implement automated messaging and chatbots to handle common queries and engage customers even when you're offline.", 
          align: "start" 
        },
        { 
          title: "Phase 5: Monitoring & Optimization", 
          description: "We monitor campaign performance, including open rates and responses, and refine the strategy for improved results.", 
          align: "end" 
        }
      ]}
      ctaText="Boost engagement, provide instant customer service, and drive sales with effective WhatsApp marketing. Let’s start building stronger connections with your audience today."
      buttonText="Start Your WhatsApp Campaign"
    />
  );
};

export default WhatsappMarketing;
