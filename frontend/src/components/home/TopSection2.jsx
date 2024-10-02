import React, { useState, useEffect } from 'react';
import Logo from "../../images/heyramlogo1.png";
import MainPage from './MainPage';

const TopSection2 = () => {
  const [showCoin, setShowCoin] = useState(true); // State to show/hide the coin
  const [showFlash, setShowFlash] = useState(false); // State to handle the flash

  // Effect to hide the coin and show the flash, then show the MainPage
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowCoin(false); // Hide the coin after animation completes
      setShowFlash(true); // Trigger the flash
    }, 1500); // Duration matches the coin animation length (1.5s)

    const timer2 = setTimeout(() => {
      setShowFlash(false); // Hide the flash after a brief moment
    }, 2000); // Set a short delay for the flash (0.5s after the coin)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    }; // Clean up the timers when the component unmounts
  }, []);

  return (
    <>
      {showCoin ? (
        <div className="h-screen w-full flex justify-center items-center">
          <div className="coin-spinner p-8 flex justify-center items-center rounded-full text-7xl shadow-3xl animate-spinCoin">
            <img src={Logo} alt="HeyRam-info logo" className='h-[40px] text-[#a300ff]' />
            {/* <div className='text-[#C0C0C0] font-light '>
              HR
            </div> */}
          </div>
        </div>
      ) : showFlash ? (
        // White flash effect
        <div className="h-screen w-full bg-white animate-fadeOut"></div>
      ) : (
        <MainPage />
      )}
    </>
  );
}

export default TopSection2;
