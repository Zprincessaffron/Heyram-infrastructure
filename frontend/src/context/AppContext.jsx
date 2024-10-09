// src/context/AppContext.js
import React, { createContext, useEffect, useState } from 'react';

// Create a context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  const [connectForm, setConnectForm] = useState(false);
  const [showMenu,setShowMenu]=useState(false)
  const [navColor,setNavColor]=useState(false)
  const [isMobile, setIsMobile] = useState(false);

  const checkScreenSize = () => {
    if (window.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);



  return (
    <AppContext.Provider value={{ isMobile,showMenu,setShowMenu,connectForm,setConnectForm,navColor,setNavColor }}>
      {children}
    </AppContext.Provider>
  );
};

// Export the context and provider
export { AppContext, AppProvider };
