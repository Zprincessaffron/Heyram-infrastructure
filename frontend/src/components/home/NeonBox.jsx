import React, { useEffect, useState } from "react";
import '../../App.css'
const NeonBox = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  // Update scroll progress based on the page scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = (scrollPosition / scrollHeight) * 100;
      setScrollProgress(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="neon-box" style={{ "--scroll": scrollProgress }}></div>
    </div>
  );
};

export default NeonBox;
