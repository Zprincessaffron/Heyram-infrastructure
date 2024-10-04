import React from "react";
import ServiceTemplate2 from "../ServiceTemplate2";
import { FaShoppingCart, FaPizzaSlice, FaLaptop, FaHeart, FaPaintBrush, FaCar } from "react-icons/fa"; // Import relevant icons
import Ecom from "/Ecom.jpg"

const EcomWebsite = () => {
  // Define the data to pass to the template
  const data = {
    title: "E-Commerce Websites",
    introduction: `An E-Commerce Website transforms your business into an always-open online store, allowing you to sell products or services to a global audience. Whether you’re a fashion retailer, electronics vendor, or niche product seller, an e-commerce platform is essential to reaching customers and driving sales.`,
    
    offerItems: [
      "Interactive product catalogues with product descriptions, pricing, and customer reviews.",
      "Secure payment systems that support credit cards, PayPal, and other payment gateways.",
      "Cart and checkout features optimized for ease of use and conversion.",
      "Inventory management systems that automatically track stock levels.",
      "Customer profiles that enable users to track orders, create wish lists, and manage subscriptions.",
      "Mobile-responsive design to ensure smooth browsing and purchasing on any device.",
    ],
    industriesItems: [
      { name: "Retail & Fashion", icon: FaShoppingCart },
      { name: "Food & Beverage", icon: FaPizzaSlice },
      { name: "Technology & Electronics", icon: FaLaptop },
      { name: "Health & Beauty", icon: FaHeart },
      { name: "Arts & Crafts", icon: FaPaintBrush },
      { name: "Automotive", icon: FaCar },
    ],
    image: Ecom,
    ctaText: "Let us help build your e-commerce website today!",
    buttonText: "Get Started",
    tagline: "A streamlined, user-friendly e-commerce website is your path to increased sales, higher customer satisfaction, and business scalability.",
  };

  return (
    <ServiceTemplate2
      title={data.title}
      introduction={data.introduction}
      offerItems={data.offerItems}
      industriesItems={data.industriesItems}
      ctaText={data.ctaText}
      buttonText={data.buttonText}
      tagline={data.tagline}
      image={data.image}
    />
  );
};

export default EcomWebsite;
