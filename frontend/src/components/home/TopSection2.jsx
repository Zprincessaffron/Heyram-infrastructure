import React, { useState, useEffect } from 'react';
import Logo from "../../images/heyramlogo1.png";
import MainSection from './MainSection';

const TopSection2 = () => {
  const [showCoin, setShowCoin] = useState(true); // State to show/hide the coin

  // Effect to hide the coin and show the text after the animation ends
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCoin(false); // Hide the coin after animation completes
    }, 1000); // Duration matches the animation length (2s)

    return () => clearTimeout(timer); // Clean up the timer when component unmounts
  }, []);

  return (
    <>
    
      {showCoin ? (
        <div className="h-screen w-full flex justify-center items-center">
        <div className="coin-spinner p-8 flex justify-center items-center rounded-full bg-white text-7xl shadow-lg animate-spinCoin">
          <img src={Logo} alt="HeyRam-info logo" className='h-10 w-10'/>
        </div>
        </div>
      ) : (
        <MainSection/>
      )}
    
    </>
    
  );
}

export default TopSection2;
