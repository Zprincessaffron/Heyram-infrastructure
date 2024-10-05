import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import '../../styles/Footer.css';
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const [activeService, setActiveService] = useState(null); // Track the currently active service
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle the toggling of services
  const toggleService = (service) => {
    setActiveService((prev) => (prev === service ? null : service));
  };

  // Function to handle clicking a service and navigate to the corresponding page
  const handleServiceClick = (service) => {
    navigate(`/web-development/${service}`);
  };

  const handleDigitalServiceClick = (service) => {
    navigate(`/digital-marketing/${service}`);
  };

  const handleDataAiClick = (service) => {
    navigate(`/data-ai/${service}`);
  };

  return (
    <div className='footermain'>
      <div className='footer_div1'>
        {/* <div className='footer_div1_1'>
          <h1>Services</h1>
          <div
            onClick={() => toggleService('webDev')}
            className='cursor-pointer hover:underline hover:underline-offset-4'
          >
            Web development
          </div>
          <div
            onClick={() => toggleService('digital')}
            className='cursor-pointer hover:underline hover:underline-offset-4'
          >
            Digital marketing
          </div>
          <div
            onClick={() => toggleService('dataAi')}
            className='cursor-pointer hover:underline hover:underline-offset-4'
          >
            AI & data
          </div>
        </div> */}
        <div className='footer_div1_1'>
          <h1>About Us</h1>
          <div onClick={()=> navigate("/about-us")} className='cursor-pointer'>About</div>
          <div onClick={()=> navigate("/contact-us")} className='cursor-pointer'>Contact</div>
        </div>
        <div className='footer_div1_1'>
          <h1>Careers</h1>
          <div onClick={()=> navigate("/careers")} className='cursor-pointer'>Career</div>
        </div>
        <div className='footer_div1_1'>
          <h1>Connect with us</h1>
          <div><FaLinkedinIn /> LinkedIn</div>
          <div><FaInstagram /> Instagram</div>
          <div><FaWhatsapp /> WhatsApp</div>
          <div><FaFacebookF /> Facebook</div>
          <div><FaXTwitter /> Twitter</div>
        </div>
      </div>

      <hr className='mb-20'/>

      {/* Conditional rendering for Web Development Services */}
      <div className='mb-14'>
        <h1 className='uppercase text-center flex items-center justify-center lg:text-xl text-sm tracking-widest mb-8 font-light'>Web Development</h1>
      <div className="grid grid-cols-3 gap-4 mx-4 my-4 text-white lg:text-xs text-[0.5rem] font-thin text-center  tracking-wider">
          {[
            "E-Commerce Website",
            "Portfolio Website",
            "Corporate Website",
            "Booking Website",
            "Educational Website",
            "Real Estate Website",
            "Landing Page",
            "Health And Wellness",
            "Tours And Travels",
          ].map((service, index) => (
            <div
              key={index}
              className="hover:underline hover:underline-offset-4 cursor-pointer"
              onClick={() => handleServiceClick(service)} // Navigate to WebDevelopment page with the selected service
            >
              {service}
            </div>
          ))}
        </div>
      </div>
        
      

      <div className='mb-14'>
        <h1 className='uppercase text-center flex items-center justify-center lg:text-xl text-sm tracking-widest mb-8 font-light'>Digital Marketing</h1>
        <div className="grid grid-cols-3 gap-4 mx-4 my-4 text-white lg:text-xs text-[0.5rem] font-thin text-center  tracking-wider">
          {[
            "Search Engine Optimization (SEO)",
            "Pay-Per-Click (PPC) Advertising",
            "Social Media Marketing (SMM)",
            "Content Marketing",
            "Email Marketing",
            "WhatsApp Marketing",
            "Conversion Rate Optimization (CRO)",
            "Influencer Marketing",
            "Analytics And Reporting",
            "Online Reputation",
            "Branding Services",
            "Traffic Generation",
            "Lead Generation",
            "Brand Awareness"
          ].map((service, index) => (
            <div
              key={index}
              className="hover:underline hover:underline-offset-4 cursor-pointer"
              onClick={() => handleDigitalServiceClick(service)} // Navigate to DigitalMarketing page with the selected service
            >
              {service}
            </div>
          ))}
        </div>
      </div>  
      

      <div className='mb-14'>
        <h1 className='uppercase text-center flex items-center justify-center lg:text-xl text-sm tracking-widest mb-8 font-light'>AI and Data</h1>
        <div className="grid grid-cols-3 gap-4 mx-4 my-4 text-white lg:text-xs text-[0.5rem] font-thin text-center  tracking-wider">
          {[
            "Gen-Z AI",
            "Data Analysis"
          ].map((service, index) => (
            <div
              key={index}
              className="hover:underline hover:underline-offset-4 cursor-pointer"
              onClick={() => handleDataAiClick(service)} // Navigate to DataAI page with the selected service
            >
              {service}
            </div>
          ))}
        </div>
      </div>  
      

      <div className='footer_div2'>
        <div className='footer_div21'>
          www.heyraminfrastructure.com
        </div>
        <div className='footer_div22'>
          <div>TERMS AND CONDITIONS</div>
          <div>PRIVACY POLICY</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
