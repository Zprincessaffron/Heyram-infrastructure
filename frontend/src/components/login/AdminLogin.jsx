import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";
import '../../styles/AdminLogin.css'
import axios from 'axios';
import Otp from "./Otp";
import ClipLoader from 'react-spinners/ClipLoader';

const AdminLogin = () => {
  const navigate = useNavigate();
  const [showOtp,setShowOtp]=useState(false)
  const [message,setMessage]=useState("")
  const [loading, setLoading] = useState(false);

  const { login,isAuthenticated } = useContext(AdminContext)

useEffect(() => {
  console.log("auth from login",isAuthenticated)
}, [])

  const handleLogin = () => {
    setLoading(true)

    try {
      axios.post('/send-otp').then((res)=>{
        setMessage(res.data.message)
        console.log(res)
        setShowOtp(true)
        setLoading(false)
        
      })
      
    } catch (error) {
      console.log(error)
      setLoading(false)

      
    }
  };

  return (
    <div className="al_main">
     {showOtp?(<Otp message={message} />):
     <>
      <h2>WELCOME TO HEYRAM INFRASTRUCTURE</h2>
      <h3> ADMIN DASHBOARD</h3>
      {loading?(<button><ClipLoader color="#ffffff" size={20} />
        </button>):(

<button onClick={handleLogin}>Login</button>      )}
      
     </>}
    </div>
  );
};

export default AdminLogin;
