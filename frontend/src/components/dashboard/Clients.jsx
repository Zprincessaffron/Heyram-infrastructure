import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import axios from 'axios'
import '../../styles/Clients.css'
import { useNavigate } from 'react-router-dom';

function Clients() {

  const { setSelectedNav } = useContext(AdminContext)
  const [clientData,setClientData]=useState([])
  const navigate = useNavigate();


 
  function getClientData(){
    try {
      axios.get('/client').then(
        res=>{
          setClientData(res.data)
        }

      )
      
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(() => {
    setSelectedNav("clients")
    getClientData()
  }, [])

  const handleClientClick = (client) => {
    // Navigate to the detailed page with client information
    navigate(`/admindashboard/clients/${client.name}`, { state: { client } });
  };
  return (
    <div className='clients_main'>
      <div className='clients_div1'>
        <h1>CLIENTS</h1>
        <p>Welcome to you clients portal</p>
      </div>
      <div className='clients_div2'>
      <div className="client-table">
      <table>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {clientData.map((client, index) => (
            <tr key={index}>
              <td>{client.name}</td>
              <td>{client.service}</td>
              <td>{new Date(client.createdAt).toLocaleDateString('en-GB')}</td>
              <td>
                <button onClick={() => handleClientClick(client)}>View </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      </div>

          
    </div>
  )
}

export default Clients