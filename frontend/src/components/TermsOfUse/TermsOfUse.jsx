import React, { useEffect } from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Menubar from '../menubar/Menubar';
import MenuButton from '../navbar/MenuButton';
import { FaCheckCircle } from 'react-icons/fa';

const TermsOfUse = () => {
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
          <h1 className="text-lg lg:text-3xl font-normal mb-4 text-center uppercase tracking-widest border-b-2 border-purple-600 inline-block py-2">
            Terms of Use
          </h1>
        </div>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b border-purple-600 pb-1 inline-block font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Acceptance of Terms
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            By accessing or using the Website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, which constitute a legally binding agreement. If you do not agree to these terms, you may not access or use the Website.
          </p>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Services Provided
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            Hey Ram Infrastructure offers placement training and software solutions including web development, app development, digital marketing, and cloud services through the Website. The content and services provided are for informational and educational purposes only.
          </p>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> User Conduct
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            You agree to use the Website in accordance with all applicable laws, regulations, and these Terms of Use. You shall not:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-2 lg:text-xs text-[0.6rem] font-light">
            <li>Use the Website for any unlawful or prohibited purpose.</li>
            <li>Interfere with the operation of the Website or other users' use and enjoyment of the Website.</li>
            <li>Attempt to gain unauthorized access to any part of the Website.</li>
            <li>Upload or transmit any objectionable material.</li>
          </ul>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Security
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            While we strive to protect your Personal Information, no method of transmission over the Internet is 100% secure. Use the Website at your own risk.
          </p>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Intellectual Property
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            All content and materials on the Website, including but not limited to text, graphics, logos, images, videos, and software, are the property of Hey Ram Infrastructure or its licensors. You may not reproduce or distribute any content without prior consent.
          </p>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Third Party Content
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            Hey Ram Infrastructure is not responsible for third-party websites or content linked on the Website. Use third-party services at your own risk.
          </p>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Disclaimer
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            The information provided on the Website is for general informational purposes only. Use the Website at your own risk.
          </p>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Limitation of Liability
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            Hey Ram Infrastructure will not be liable for any damages arising from the use of the Website.
          </p>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Indemnification
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            You agree to indemnify Hey Ram Infrastructure for any claims arising from your use of the Website.
          </p>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Governing Law
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            These Terms of Use are governed by the laws of your jurisdiction.
          </p>
        </section>

        <section className="mb-6 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
          <h2 className="text-xs lg:text-lg border-b inline-block border-purple-600 pb-1 font-light tracking-wider mb-4 items-center">
            <FaCheckCircle className="text-purple-400 mr-2 inline-block" /> Changes to Terms of Use
          </h2>
          <p className="leading-relaxed font-light tracking-wider lg:text-xs text-[0.6rem]">
            We reserve the right to modify these Terms of Use at any time. Changes will be effective upon posting on the Website. Your continued use of the Website constitutes acceptance of the revised Terms of Use.
          </p>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TermsOfUse;
