import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import firstimg from "../../images/heyramback.png";
import Button from "../button/Button";
import { AppContext } from "../../context/AppContext";

const TopSection = () => {
  const [showWhiteScreen, setShowWhiteScreen] = useState(false);
  const [showImage, setShowImage] = useState(false);
  const [showUnderline, setShowUnderline] = useState(false);
  const { connectForm, setConnectForm } = useContext(AppContext)


  useEffect(() => {

    const timer1 = setTimeout(() => {
      setShowWhiteScreen(true);
    }, 1000);

    const timer2 = setTimeout(() => {
      setShowImage(true);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  useEffect(() => {
    if (showImage) {
      const timer3 = setTimeout(() => {
        setShowUnderline(true);
      }, 2000);

      return () => {
        clearTimeout(timer3);
      };
    }
  }, [showImage]);

  return (
    <div className="relative w-full h-screen bg-gradient-to-tr from-[#06091c] via-[#0f1745] to-[#3746eb] flex justify-center items-center overflow-hidden">
      {/* Background particle effect */}
      <div className="absolute inset-0 z-0">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full w-2 h-2"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.6,
            }}
            initial={{ y: 0, opacity: 0.7 }}
            animate={{ y: -300, opacity: 0 }}
            transition={{
              duration: Math.random() * 2 + 0,
              repeat: Infinity,
              delay: Math.random() * 1,
            }}
          />
        ))}
      </div>

      {/* White screen effect */}
      {showWhiteScreen && (
        <motion.div
          className="absolute inset-0 bg-[#0f1745] z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}

      {/* Main content: Image and Text */}
      {showImage && (
        <motion.div
          className="absolute w-full h-full bg-cover bg-center bg-gradient-to-tr from-[#06091c] via-[#0f1745] to-[#3746eb] z-20"
          style={{ backgroundImage: `url(${firstimg})` }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div className="relative z-30 flex flex-col items-center justify-center h-full text-center text-white">
            {/* Text container with custom styles */}
            <div
              className="relative block text-left whitespace-nowrap mb-[-0.12em] px-0 py-[0.12em] overflow-hidden"
              style={{ display: 'block', textAlign: 'start', position: 'relative' }}
            >
              <motion.h1
                className="text-[4.3rem] font-light tracking-widest inline-block"
                initial={{ y: "50px", opacity: 0 }} // Start below and hidden
                animate={{ y: "0", opacity: 1 }} // Slide to center and fade in
                transition={{ delay: 1, duration: 2, ease: "easeOut" }} // Smooth animation
                style={{ position: 'relative', display: 'inline-block', whiteSpace: 'nowrap' }} // Inline block for effects
              >
                HEYRAM INFRASTRUCTURE
                {/* Underline Animation */}
              {/* {showUnderline && (
                <motion.div
                  className="absolute left-1/2 w-full h-[5px] bg-none transform -translate-x-1/2 shadow-[0_0_15px_rgba(0,123,255,0.8)] rounded-full" // Added glow class
                  initial={{ width: 0 }} // Start with no width
                  animate={{ width: "70%" }} // Animate to full width
                  transition={{ duration: 0.5, ease: "easeInOut" }} // Reduced duration for quicker appearance
                />
              )} */}
              </motion.h1>
            </div>

            <div
              className="relative block text-left whitespace-nowrap mb-[-0.12em] px-0 py-[0.12em] overflow-hidden"
              style={{ display: 'block', textAlign: 'start', position: 'relative' }}
            >
              <motion.h2
              className="text-[1.5rem] tracking-[2.5px] font-extralight mt-0 inline-block"
              initial={{ y: "50px", opacity: 0 }} // Start below and hidden
              animate={{ y: "0", opacity: 1 }} // Slide to center and fade in
              transition={{ delay: 0.2, duration: 2.4, ease: "easeOut" }} // Smooth animation
              style={{ position: 'relative', display: 'inline-block', whiteSpace: 'nowrap' }} // Inline block for effects
            >
              Experience the impact across your digital ecosystem
            </motion.h2>
            </div>

            {/* <div className="mt-4 tracking-wider flex items-center space-x-2"> */}
            <div
              className="relative block text-left whitespace-nowrap mb-[-0.12em] px-0 py-[0.12em] overflow-hidden mt-4 tracking-wider flex items-center space-x-2"
              style={{ display: 'flex', textAlign: 'start', position: 'relative' }}
            >
              <motion.div
              initial={{ y: "50px", opacity: 0 }} // Start below and hidden
              animate={{ y: "0", opacity: 1 }} // Slide to center and fade in
              transition={{ delay: 0.2, duration: 2.8, ease: "easeOut" }} // Smooth animation
              style={{ position: 'relative', display: 'flex', whiteSpace: 'nowrap' , gap: "10px" }} // Inline block for effects
              >
              <span onClick={()=>{setConnectForm(true)}} className="text-[1.1rem] font-light cursor-pointer" >Connect with us</span>
              <span onClick={()=>{setConnectForm(true)}} className="cursor-pointer">
                <Button />
              </span>

              </motion.div>

            </div>

            {/* </div> */}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default TopSection;
