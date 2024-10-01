import React, { useEffect, useState } from "react";
import AboutUsImg from "../../images/rectangle20.jpg";
import { FaChartLine, FaCode, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";
import Button from "../button/Button.jsx";
import Footer from "../footer/Footer.jsx";

const AboutUs = () => {
  const [scrollPercent, setScrollPercent] = useState(0);
  const [showUnderline, setShowUnderline] = useState(false);

  // Function to handle scroll progress
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const documentHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / documentHeight) * 100;
    setScrollPercent(scrollPercent);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white">
      {/* Background Image Section */}
      <div className="relative w-full h-screen">
        <img
          src={AboutUsImg}
          alt="About Us"
          className="bg-cover bg-no-repeat bg-center w-full h-full brightness-50"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-5xl font-medium tracking-[10px] uppercase">
            About us
          </h2>
        </div>
      </div>

      {/* Content Section Below the Image */}
      <div className="text-center my-14">
        <h3 className="inline-block text-3xl font-semibold text-gray-600 mb-6 border-t-2 border-b-2 border-gray-200 tracking-widest py-4">
          Who We Are ?
        </h3>
        <div className="max-w-2xl mx-auto">
          <h5 className="text-lg text-gray-500 mb-4">
            Heyram Infrastructure is a forward-thinking Private Limited Company
            based in Chennai, Tamil Nadu. We’ve been at the forefront of
            innovation, seamlessly integrating three distinct pillars:
          </h5>
        </div>
      </div>

      <div className="py-12 px-6 text-center bg-gradient-to-tr from-[#06091c] via-[#0f1745] to-[#3746eb]">
        {/* Roadmap Section */}
        <div className="relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 shadow-lg rounded-full bg-gray-300 transition-all duration-300 ease-in-out">
            <div
              className="bg-blue-600 rounded-full w-full transition-all duration-300 ease-in-out"
              style={{ height: `${scrollPercent}%` }}
            />
          </div>

          {/* Service Cards Arrangement */}
          <div className="flex flex-col items-center relative">
            {/* Digital Marketing Services (Left) */}
            <div className="flex justify-start w-full mb-10 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-6">
                <FaChartLine className="text-blue-600 text-3xl bg-white rounded-full p-2" />
              </div>
              <div className="text-white rounded-lg p-6 text-center w-1/3 ml-auto transition-transform transform hover:scale-105">
                <h4 className="text-xl font-bold mb-2">
                  Digital Marketing Services
                </h4>
                <p className="text-white">
                  Our team of strategists, creatives, and data enthusiasts
                  thrive on driving brand visibility, engagement, and
                  conversions. From SEO wizardry to social media sorcery, we’ve
                  got your digital presence covered.
                </p>
              </div>
            </div>

            {/* Software Development (Right) */}
            <div className="flex justify-end w-full mb-10 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-6">
                <FaCode className="text-blue-600 text-3xl bg-white rounded-full p-2" />
              </div>
              <div className="text-white rounded-lg p-6 text-center w-1/3 mr-auto transition-transform transform hover:scale-105">
                <h4 className="text-xl font-bold mb-2">Software Development</h4>
                <p className="text-white">
                  Code is our canvas, and solutions are our masterpieces.
                  Whether it’s web applications, mobile apps, or custom
                  software, we transform ideas into elegant, functional reality.
                </p>
                {/* <hr className="shadow-2xl mt-3"/> */}
              </div>
            </div>

            {/* Data Analysis & AI (Left) */}
            <div className="flex justify-start w-full mb-10 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-6">
                <FaDatabase className="text-blue-600 text-3xl bg-white rounded-full p-2" />
              </div>
              <div className="text-white rounded-lg  p-6 text-center w-1/3 ml-auto transition-transform transform hover:scale-105">
                <h4 className="text-xl font-bold mb-2">Data Analysis & AI</h4>
                <p className="text-white">
                  From the mystical fields of Kashmir to your kitchen, our
                  saffron threads are a symphony of flavor and health. We
                  source, package, and deliver saffron with love and precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose Us */}
      <div className="text-center my-14">
        <h3 className="inline-block text-3xl font-semibold text-gray-600 mb-6 border-t-2 border-b-2 border-gray-200 tracking-widest py-4">
          Why Choose Heyram ?
        </h3>
        <div className="max-w-2xl mx-auto">
          <h5 className="text-lg text-gray-500 mb-4">
            Holistic Approach: We don’t just build websites; we build
            experiences. Spice Up Your Business: Our saffron adds a golden touch
            to your culinary creations.Code Craftsmanship: Our developers write
            poetry in Python and symphonies in JavaScript.Data-Driven Marketing:
            Metrics matter, and we turn data into actionable
            insights.Client-Centric: Your success is our obsession. Let’s create
            magic together!
          </h5>
          <h5 className="text-lg text-gray-500 mb-4">
            Connect with us to explore the intersection of technology, flavor,
            and marketing brilliance.
          </h5>
        </div>
      </div>

      <div className="bg-gradient-to-tr from-[#06091c] via-[#0f1745] to-[#3746eb]">
        <div className="py-12 px-6 text-center">
          {/* Mission, Vision and pledge */}
          <div>
            <div className="mb-[100px]">
              <h3 className="inline-block text-3xl font-light uppercase text-white mb-6 border-b-2 border-purple-600 tracking-widest py-4">
                Our Mission
              </h3>
              <div className="max-w-3xl mx-auto">
                <h5 className="text-md tracking-widest text-white mb-4">
                  We think that every person has the potential to achieve great
                  things. We have four principles (commitment, quality, integrity,
                  and care) that guide our business, product development, and
                  brand as we change and grow.
                </h5>
              </div>
            </div>

            <div className="mb-[100px]">
              <h3 className="inline-block text-3xl font-light uppercase text-white mb-6 border-b-2 border-purple-600 tracking-widest py-4">
                Our values
              </h3>
              <div className="max-w-3xl mx-auto">
                <h5 className="text-md tracking-widest text-white mb-4">
                  We think that every person has the potential to achieve great
                  things. We have four principles (commitment, quality, integrity,
                  and care) that guide our business, product development, and
                  brand as we change and grow.
                </h5>
              </div>
            </div>

            <div className="mb-[200px]">
              <h3 className="inline-block text-3xl font-light uppercase text-white mb-6 border-b-2 border-purple-600 tracking-widest py-4">
                Our pledge
              </h3>
              <div className="max-w-3xl mx-auto">
                <h5 className="text-md tracking-widest text-white mb-4">
                  We think that every person has the potential to achieve great
                  things. We have four principles (commitment, quality, integrity,
                  and care) that guide our business, product development, and
                  brand as we change and grow.
                </h5>
              </div>
            </div>
          </div>

          {/* Social responsibility & values */}
          <div className="flex flex-col justify-between h-screen">
            {/* Top left content */}
            <div className="w-1/2 self-start">
              <h3 className=" text-2xl font-light text-white uppercase mb-6 border-b-2 border-purple-600 tracking-widest py-4">
                Corporate Social Responsibilities
              </h3>
              <div className="max-w-3xl">
                <h5 className="text-md tracking-widest text-white text-start mb-4">
                  We think that every person has the potential to achieve great
                  things. We have four principles (commitment, quality, integrity,
                  and care) that guide our business, product development, and
                  brand as we change and grow.
                </h5>
              </div>
            </div>

            {/* Bottom right content */}
            <div className="w-1/2 self-end text-right">
              <h3 className="text-center text-2xl font-light uppercase text-white mb-6 border-b-2 border-purple-600 tracking-widest py-4">
                Our Values
              </h3>
              <div className="max-w-3xl">
                <h5 className="text-md tracking-widest text-start text-white mb-4">
                  At Heyram Infrastructure, our values drive everything we do. We
                  believe in:
                </h5>
                <h5 className="text-md tracking-widest text-start text-white mb-4">
                  Innovation: Constantly pushing boundaries to develop
                  cutting-edge solutions.
                  <br />
                  Collaboration: Working together to achieve common goals and
                  foster creativity.
                  <br />
                  Integrity: Upholding the highest ethical standards in all our
                  endeavors.
                  <br />
                  Diversity: Embracing the unique perspectives and backgrounds of
                  our team members.
                  <br />
                  Sustainability: Committing to environmentally friendly practices
                  in all aspects of our work.
                  <br />
                  Connect with us to explore the intersection of technology,
                  flavor, and marketing brilliance.
                </h5>
              </div>
            </div>
          </div>

          {/* Transformation and services */}
          <div className="flex flex-row mt-[100px]">
            {/* Top left content */}
            <div className=" border-r-2 pr-5">
              <h3 className="inline-block text-2xl font-light text-white uppercase mb-6 border-b-2 border-purple-600 tracking-widest py-4">
                Transformation starts here
              </h3>
              <div className="max-w-3xl text-white">
                <p className="font-light tracking-wider">Reimagine your future</p>
                <button className="border px-7 py-3 font-thin rounded-full tracking-wider mt-4">Connect with us</button>
              </div>
            </div>

            {/* Bottom right content */}
            <div className="ml-20 mt-16">
              <div className="max-w-3xl">
                <h5 className="text-md tracking-widest text-start text-white mb-4">
                  Our Services
                </h5>
                <p className="flex flex-row text-white gap-5 font-light tracking-wider text-md">View now <Button/> </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div>
          <Footer/>
        </div>
      </div>
      
    </div>
  );
};

export default AboutUs;
