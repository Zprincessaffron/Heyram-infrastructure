import React, { useContext,useState } from "react";
import "../../styles/Connect.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AppContext } from "../../context/AppContext";
import { IoMdClose } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

function Connect() {
  const { connectForm, setConnectForm } = useContext(AppContext);
  const services = ["Web Development", "Digital Services", "GenZAI"];
  const [input, setInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    const applicationData = {
      ...data,
      service: input,
    };
    try {
      const response = await axios.post("/client", applicationData);
      console.log("Client Form submitted successfully:", response.data);
      // You can also reset the form or redirect after submission
      reset();
      setInput('')
      toast("Submited Sucessfully ✓")
      document.getElementById('form_textarea').value = '';


      
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);

    if (value) {
      const filteredSuggestions = services.filter(service =>
        service.toLowerCase().includes(value)
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setInput(suggestion);
    setSuggestions([]); // Hide suggestions after selection
  };
  return (
    <div className={`connect_form ${connectForm ? "true" : ""}`}>
      <div
        className="connect_closebtn"
        onClick={() => {
          setConnectForm(false);
        }}
      >
        <IoMdClose />
      </div>
      <div className="connect_div1">
        Every outcome starts with a conversation
      </div>
      <div className="connect_form_6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="connect_form_61">
            <Box
              className="box"
              component="form"
              sx={{ "& > :not(style)": { m: 1, width: "55ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                required
                id="outlined-required"
                label="Name"
                className={`errormsg ${errors.name ? "error" : ""}`}
                {...register("name", { required: "Name is required" })}
              />
              <TextField
                required
                id="outlined-required"
                label="Email"
                variant="outlined"
                className={`errormsg ${errors.email ? "error" : ""}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Email is not valid",
                  },
                })}
              />
              <TextField
                required
                id="outlined-required"
                label="Phone"
                variant="outlined"
                type="tel"
                className={errors.phone ? "error" : ""}
                {...register("phone", {
                  required: "Phone number is required",
                  minLength: {
                    value: 10,
                    message: "Phone number must be at least 10 digits",
                  },
                  maxLength: {
                    value: 15,
                    message: "Phone number cannot exceed 15 digits",
                  },
                })}
              />

              <TextField
                required
                id="outlined-required"
                label="Service"
                value={input}
                onChange={handleInputChange}
                className={`errormsg ${errors.name ? "error" : ""}`}
              />
                {suggestions.length > 0 && (
        <div className="suggestions-box">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="suggestion-item"
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
              
              <TextField
                required
                id="outlined-required"
                label="How did you hear about us"
                className={`errormsg ${errors.howDidYouHear ? "error" : ""}`}
                {...register("howDidYouHear", {
                  required: "howDidYouHear is required",
                })}
              />

             
            </Box>
            <textarea
                name="message"
                id="form_textarea"
                rows={4}
                placeholder="Message..."
                className={`errormsg ${errors.howDidYouHear ? "error" : ""}`}
                
                {...register("message", { required: "message is required" })}
              ></textarea>
          </div>
          <div className="connect_button">
            <button type="submit">Submit Application</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Connect;
