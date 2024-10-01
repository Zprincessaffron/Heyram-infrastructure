// src/context/AppContext.js
import React, { createContext, useState } from 'react';

// Create a context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  const [connectForm, setConnectForm] = useState(false);
  const [showMenu,setShowMenu]=useState(false)


  return (
    <AppContext.Provider value={{ showMenu,setShowMenu,connectForm,setConnectForm }}>
      {children}
    </AppContext.Provider>
  );
};

// Export the context and provider
export { AppContext, AppProvider };
