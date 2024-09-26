import React, { useEffect, useState } from "react";
import AboutUsImg from "../../images/rectangle20.jpg";
import { FaChartLine, FaCode, FaDatabase } from "react-icons/fa";

const AboutUs = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

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
    <div>
      {/* Background Image Section */}
      <div className="relative w-full h-screen">
        <img
          src={AboutUsImg}
          alt="About Us"
          className="bg-cover bg-no-repeat bg-center w-full h-full brightness-75"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-5xl font-medium tracking-widest uppercase">
            About us
          </h2>
        </div>
      </div>

      {/* Content Section Below the Image */}
      <div className="text-center my-14">
        <h3 className="inline-block text-3xl font-semibold text-gray-600 mb-6 border-t-2 border-b-2 border-gray-200 tracking-widest py-4">
          Who We Are?
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
              <div className="bg-white rounded-lg shadow-lg p-6 text-center w-1/3 ml-auto transition-transform transform hover:scale-105">
                <h4 className="text-xl font-bold mb-2">
                  Digital Marketing Services
                </h4>
                <p className="text-gray-700">
                  Our team of strategists, creatives, and data enthusiasts thrive
                  on driving brand visibility, engagement, and conversions. From
                  SEO wizardry to social media sorcery, we’ve got your digital
                  presence covered.
                </p>
              </div>
            </div>

            {/* Software Development (Right) */}
            <div className="flex justify-end w-full mb-10 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-6">
                <FaCode className="text-blue-600 text-3xl bg-white rounded-full p-2" />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center w-1/3 mr-auto transition-transform transform hover:scale-105">
                <h4 className="text-xl font-bold mb-2">Software Development</h4>
                <p className="text-gray-700">
                  Code is our canvas, and solutions are our masterpieces.
                  Whether it’s web applications, mobile apps, or custom
                  software, we transform ideas into elegant, functional reality.
                </p>
              </div>
            </div>

            {/* Data Analysis & AI (Left) */}
            <div className="flex justify-start w-full mb-10 relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-6">
                <FaDatabase className="text-blue-600 text-3xl bg-white rounded-full p-2" />
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center w-1/3 ml-auto transition-transform transform hover:scale-105">
                <h4 className="text-xl font-bold mb-2">Data Analysis & AI</h4>
                <p className="text-gray-700">
                  From the mystical fields of Kashmir to your kitchen, our
                  saffron threads are a symphony of flavor and health. We source,
                  package, and deliver saffron with love and precision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
