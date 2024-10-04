import React from 'react';
import ServiceTemplate3 from '../ServiceTemplate3';
import { FaShoppingCart, FaUtensils, FaHospital, FaBookOpen, FaPlane, FaMoneyBillWave } from 'react-icons/fa';
import Wm from "/Wm.jpg";

const WhatsappMarketing = () => {
  const industriesItems = [
    { name: "Retail & E-commerce", icon: FaShoppingCart },
    { name: "Food Delivery", icon: FaUtensils },
    { name: "Healthcare", icon: FaHospital },
    { name: "Education", icon: FaBookOpen },
    { name: "Travel", icon: FaPlane },
    { name: "Financial Services", icon: FaMoneyBillWave },
  ];

  return (
    <ServiceTemplate3
      title="WhatsApp Marketing"
      introduction="WhatsApp Marketing is a powerful and direct way to communicate with your customers. With over 2 billion users globally, WhatsApp allows businesses to send personalized messages, offers, and updates to customers in real time, fostering a direct and personal connection."
      offerItems={[
        "Broadcast Messages: Send bulk messages with personalized content to your customer base.",
        "Customer Support: Offer real-time support through WhatsApp, resolving customer queries instantly.",
        "Automated Messages: Set up automated replies, order confirmations, or promotional messages with WhatsApp Business API.",
        "Interactive Campaigns: Run polls, contests, or promotional campaigns to engage your audience.",
        "Media-Rich Messaging: Include images, videos, or product catalogs in your messages for more compelling communication."
      ]}
      benefits={[
        "High Open Rates: WhatsApp messages have an open rate of over 90%, making it one of the most effective channels for customer engagement.",
        "Personalized Communication: Build stronger relationships through one-on-one messaging with customers.",
        "Cost-Effective: Unlike traditional SMS, WhatsApp allows rich media sharing without incurring additional costs.",
        "Global Reach: WhatsApp's popularity ensures that you can reach a wide, global audience with ease."
      ]}
      image={Wm}
      ctaText="Get Started with WhatsApp Marketing"
      buttonText="Start Now"
      quote="Let’s make your brand a part of your customers’ daily conversations!"
      industriesItems={industriesItems}
    />
  );
};

export default WhatsappMarketing;
