import React, { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Menubar from '../menubar/Menubar';
import MenuButton from '../navbar/MenuButton';
import { FaCheckCircle } from 'react-icons/fa'; // Importing an icon for visual enhancement

const PrivacyPolicy = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[]);
  return (
    <>
      <Navbar />
      <MenuButton />
      <Menubar />
      <div className="p-6 lg:p-8 text-gray-200 mt-10 tracking-wider">
        <div className="flex items-center justify-center mb-6">
          <h1 className="text-lg lg:text-3xl font-normal mb-4 text-center uppercase tracking-widest border-b-2 inline-block border-purple-600 py-2">
            Privacy Policy
          </h1>
        </div>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4  items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Introduction
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            HeyRam Infrastructure operates the HeyRam Infrastructure Site. This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.
          </p>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Information Collection and Use
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include but is not limited to your name.
          </p>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Log Data
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            Like many site operators, we collect information that your browser sends whenever you visit our Site. This Log Data may include information such as your computer's Internet Protocol address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages, and other statistics.
          </p>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Cookies
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your computer's hard drive. Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site.
          </p>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Security
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Changes to This Privacy Policy
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            HeyRam Infrastructure may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Site. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Contact Us
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            If you have any questions about this Privacy Policy, please contact us.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
