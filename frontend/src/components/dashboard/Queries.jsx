import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import axios from 'axios'
import '../../styles/Clients.css'
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import AdminNav from './AdminNav';
import { IoMdInformationCircle } from "react-icons/io";

function Queries() {

  const { setSelectedNav } = useContext(AdminContext)
  const [clientData, setClientData] = useState([])
  const navigate = useNavigate();
  const [showDeletePop, setShowDeletePop] = useState(false)
  const [currentDeleteId, setCurrentDeleteId] = useState()



  function getClientData() {
    try {
      axios.get('/contact').then(
        res => {
          setClientData(res.data)
        }

      )

    } catch (error) {
      console.log(error)

    }
  }
  useEffect(() => {
    setSelectedNav("queries")
    getClientData()
  }, [])

  const handleClientClick = (client) => {
    // Navigate to the detailed page with client information
    navigate(`/admindashboard/queries/${client.name}`, { state: { client } });
  };
  const handleCurrentDeleteId = (id) => {
    setCurrentDeleteId(id)
    setShowDeletePop(true)

  }
  const handleDeleteClientClick = () => {
    try {
      axios.delete(`/contact/${currentDeleteId}`).then(
        res => {
          setShowDeletePop(false)
          getClientData()


        }
      )

    } catch (error) {

    }
  }
  return (
    <div className='clients_main'>
      <div className='admin_navc'>
        <AdminNav />
      </div>
      <div className='ad_job_div1' style={{ marginBottom: "5rem" }}>
        <div className=' ad_job_div11'>
          <h1>QUERIES</h1>
          <p>Welcome to you Queries portal</p>
        </div>
      </div>
      <div className='clients_div2'>
        {/* <div className="client-table">
          <table>
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>View</th>
                <th>Delete</th>

              </tr>
            </thead>
            <tbody>
              {clientData.map((client, index) => (
                <tr className={`client_tr ${client.opened == 'yes' ? "true" : ""}`} key={index}>
                  <td>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{new Date(client.createdAt).toLocaleDateString('en-GB')}</td>
                  <td>
                    <button onClick={() => handleClientClick(client)}>View </button>
                  </td>
                  <td>
                    <MdDelete onClick={() => handleCurrentDeleteId(client._id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}

<div className='jobTableMain'>
  <div className="ad_j-table-container">
      <h2 className="ad_j-table-title">Queries Detail</h2>
      <table className="ad_j-orders-table">
        <thead>
          <tr>
            <th>SI.NO</th>
            <th> Name</th>
                <th>Email</th>
                <th>Date</th>
                <th>View</th>
                <th>Delete</th>
          </tr>
        </thead>
        <tbody> 
      {clientData.map((client,index) => (

          <tr  key={client._id}> 
            <td>{index+1}</td>
            <td className='client_name_column'> {client.name} {client.opened != 'yes'? (<span><IoMdInformationCircle/></span>):null } </td>
                  <td>{client.email}</td>
                  <td>{new Date(client.createdAt).toLocaleDateString('en-GB')}</td>
                  <td style={{cursor:"pointer"}}>
                    <button onClick={() => handleClientClick(client)}>View </button>
                  </td >
                  <td style={{cursor:"pointer"}} onClick={() => handleCurrentDeleteId(client._id)}>
                     Delete
                  </td>
          </tr>
           ))}        
        </tbody>
      </table>
    </div>

  </div>

        {showDeletePop ? (
          <div className='Delete_pop'>
            <div>
              <p><IoMdClose onClick={() => { setShowDeletePop(false) }} /></p>
              <h1>Are you sure? Delete this Query</h1>
              <div className='dp_buttondiv'>

                <button onClick={() => { setShowDeletePop(false) }} style={{ backgroundColor: "rgba(31, 30, 30, 0.868)" }} >Cancel</button>
                <button onClick={handleDeleteClientClick} style={{ backgroundColor: "#af2a05" }}
                >Delete</button>
              </div>

            </div>
          </div>
        ) : null
        }

      </div>




    </div>
  )
}

export default Queries