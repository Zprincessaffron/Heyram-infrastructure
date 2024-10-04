import React, { useContext, useEffect, useRef, useState } from 'react';
import '../../styles/AdminLogin.css'
import axios from 'axios';
import { AdminContext } from '../../context/AdminContext';
import { useNavigate } from 'react-router-dom';


const Otp = ( { message } ) => {
  const [otp, setOtp] = useState(new Array(6).fill("")); // OTP state with 6 digits
  const inputRefs = useRef([]); // References for each input field
  const [error,setError]=useState("")
  const navigate = useNavigate()
  const { setIsAuthenticated,login } = useContext(AdminContext)
  const [count, setCount] = useState(59);



//count for resend
  
  useEffect(() => {
    let timer;

    if (count > 0) {
      // Step 2: Set up the interval only if count is greater than zero
      timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1); // Decrease the count by 1 every second
      }, 1000);
    } else if (count === 0) {
      // Optional: Clear the interval when the count reaches 0
      clearInterval(timer);
    }

    return () => clearInterval(timer); // Step 3: Clean up the interval on component unmount
  }, [count]);
  // Handle OTP input change
  const handleChange = (element, index) => {


    const value = element.value.replace(/[^0-9]/g, ""); // Allow only numbers
    if (!value) return; // If input is empty, do nothing

    const newOtp = [...otp];
    newOtp[index] = value; // Update the OTP value in the state
    setOtp(newOtp);

    // Automatically move to the next input if not the last input field
    if (index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle Backspace and move to previous input if current is empty
  const handleBackspace = (element, index) => {
    if (element.value === "") {
      if (index > 0) {
        const newOtp = [...otp];
        newOtp[index - 1] = ""; // Clear the previous input value
        setOtp(newOtp); // Update the state
        inputRefs.current[index - 1].focus(); // Move focus to previous input
      }
    } else {
      // If the current input is not empty, just clear the value
      const newOtp = [...otp];
      newOtp[index] = ""; // Clear the current value
      setOtp(newOtp);
    }
  };

  // Join OTP into a single string on submission
  const handleSubmit = async() => {
    const enteredOtp = otp.join("")
    if (enteredOtp.length != 6) {
        setError("Enter a Valid 6 Digit OTP")
        return  
    }else{
        try {
            const response = await axios.post('/verify-otp', {
              otp: enteredOtp
            });
            login()
        
            
          } catch (error) {
            setError(error.response.data.message)

          } 
    }

  };
  async function handleResend(){
    try {
        const response = await axios.post('/resend-otp')
        setError(response.data.message)
        
    } catch (error) {
        setError(error.response.data.message)
        
    }
  }

  return (
    <div className="otp-container">
      <h2>Enter OTP</h2>
      <p>{message}</p>
      <div className="otp-inputs">
        {otp.map((data, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onKeyDown={(e) =>
              e.key === "Backspace" ? handleBackspace(e.target, index) : null
            }
            ref={(el) => (inputRefs.current[index] = el)} // Store input refs
          />
        ))}
      </div>
      <button className="verify-btn" onClick={handleSubmit}>Verify</button>
      <p>{error}</p>
      <p>
        Didn't receive the code? {count==0?(<span className="resend-code" onClick={handleResend}>Resend Code</span>):(<span>Resend in 00:{count}</span>)}
      </p>
    </div>
  );
};

export default Otp;
