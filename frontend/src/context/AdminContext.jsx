import React, { createContext, useContext, useEffect, useState } from 'react';

// Create Admin Context
const AdminContext = createContext();

// Create custom hook to use Admin Context
export const useAdmin = () => useContext(AdminContext);

// Admin Context Provider Component
export const AdminProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('adminToken') ? true : false
  );

  // Handle login function
  const login = (token) => {
    localStorage.setItem('adminToken', token);
    setIsAuthenticated(true);
  };

  // Handle logout function
  const logout = () => {
    localStorage.removeItem('adminToken');
    setIsAuthenticated(false);
  };

  // Check local storage for admin authentication
  useEffect(() => {
    if (localStorage.getItem('adminToken')) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AdminContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
};
