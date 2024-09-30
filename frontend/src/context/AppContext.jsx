// src/context/AppContext.js
import React, { createContext, useState } from 'react';

// Create a context
const AppContext = createContext();

// Create a provider component
const AppProvider = ({ children }) => {
  const [connectForm, setConnectForm] = useState(false);

  return (
    <AppContext.Provider value={{ connectForm, setConnectForm }}>
      {children}
    </AppContext.Provider>
  );
};

// Export the context and provider
export { AppContext, AppProvider };
