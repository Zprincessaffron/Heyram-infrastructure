import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ClientsDetails = () => {
  const { state } = useLocation();
  const { client } = state || {}; // Extract client details
  const navigate = useNavigate();

  return (
    <div className='clients_main'>
    <div className='clients_div1'>
      <h1>CLIENTS</h1>
      <p>Welcome to you clients portal</p>
    </div> 
    <div className='clients_div2'>
    <div className="client-details">
      <div className="back-button">
        <button onClick={() => navigate(-1)}>Back to List</button>
      </div>
      <h2>Client Information</h2>
      <div className="details-container">
        <p><strong>Name:</strong> {client.name}</p>
        <p><strong>Email:</strong> {client.email}</p>
        <p><strong>Phone:</strong> {client.phone}</p>
        <p><strong>Service:</strong> {client.service}</p>
        <p><strong>Message:</strong> {client.message}</p>
        <p><strong>Heared From:</strong> {client.howDidYouHear}</p>
        <p><strong>Posten On:</strong> {new Date(client.createdAt).toLocaleString('en-GB')}</p>
      </div>
    </div>
    </div>

    </div>
  );
};

export default ClientsDetails;
