import React, { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { AdminContext } from '../../context/AdminContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated,setIsAuthenticated } = useContext(AdminContext)
  const [auth,setAuth]=useState(false)  
  const authStatus = sessionStorage.getItem('isAuthenticated'); // Change here

  useEffect(() => {
    const authStatus = sessionStorage.getItem('isAuthenticated'); // Change here
    setAuth(authStatus)
    console.log("authStatus",authStatus)
  }, []);
return authStatus ? children : <Navigate to="/adminlogin" />;


};

export default ProtectedRoute;
