import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AdminNav from './AdminNav';
import { FaArrowLeft } from "react-icons/fa6";

const QueriesDetail = () => {
  const { state } = useLocation();
  const { client } = state || {}; // Extract client details
  const navigate = useNavigate(); 

  useEffect(() => {
    try {
        axios.put(`/contact/${client._id}`)
    } catch (error) {
        
    }
  }, [])
  
  
  return (
    <div className='clients_main'>
        <div className='admin_navc'>
        <AdminNav />
      </div>
    <div className='clients_div1'>
    <div className=' ad_job_div11'>
          <h1>CLIENTS</h1>
          <p>Welcome to you clients portal</p>
        </div>
    </div> 
    <div className='clients_div2'>
    <div className="client-details">
      <div className="back-button">
      <button onClick={() => navigate(-1)}><FaArrowLeft/> </button>
      </div>
      <h2>Queries </h2>
      <div className="details-container">
        <p><strong>Name:</strong> {client.name}</p>
        <p><strong>Email:</strong> {client.email}</p>
        <p><strong>Phone:</strong> {client.phone}</p>
        <p><strong>Message:</strong> {client.message}</p>
        <p><strong>Posten On:</strong> {new Date(client.createdAt).toLocaleString('en-GB')}</p>
      </div>
    </div>
    </div>

    </div>
  );
};

export default QueriesDetail;
