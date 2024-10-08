import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import axios from 'axios'
import '../../styles/Clients.css'
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
function Clients() {

  const { setSelectedNav } = useContext(AdminContext)
  const [clientData,setClientData]=useState()
  const navigate = useNavigate();
  const [showDeletePop,setShowDeletePop]=useState(false)
  const [currentDeleteId,setCurrentDeleteId]=useState()
  const [filterType,setFilterType]=useState("")
  const [storedData,setStoredData]=useState([])


  
  function getClientData(){
    console.log("first")
    try {
      axios.get('/client').then(
        res=>{
          setClientData(res.data)
          setStoredData(res.data)
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
  const handleCurrentDeleteId=(id)=>{
    setCurrentDeleteId(id)
    setShowDeletePop(true)

  }
  const handleDeleteClientClick =()=>{
    try {
      axios.delete(`/client/${currentDeleteId}`).then(
        res=>{   
          setShowDeletePop(false)
          getClientData()

          
        }
      )
      
    } catch (error) {
      
    }
  }

  const handleRadioChange = (value) => {
    setFilterType(value);

    // Apply sorting based on selected filter
    if (value === "read") {
      // Show read messages ("opened: yes") at top and unread ("opened: no") at bottom
      const sortedData = [...storedData].sort((a, b) => {
        if (a.opened === "yes" && b.opened === "no") return -1;
        if (a.opened === "no" && b.opened === "yes") return 1;
        return 0;
      });
      setStoredData(sortedData);
    } else if (value === "unread") {
      // Show unread messages ("opened: no") at top and read ("opened: yes") at bottom
      const sortedData = [...storedData].sort((a, b) => {
        if (a.opened === "no" && b.opened === "yes") return -1;
        if (a.opened === "yes" && b.opened === "no") return 1;
        return 0;
      });
      setStoredData(sortedData);
      
    } else if (value === "date") {
      if(filterType != "date"){
      const sortedData = [...storedData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setStoredData(sortedData)
      }else{
        setFilterType("")
        setStoredData(clientData)
      }
      
    }else {
      // Reset to initial order
      setStoredData(clientData);
    }
  };



  return (
    <div className='clients_main'>
      <div className='clients_div1'>
        <h1>CLIENTS</h1>
        <p>Welcome to you clients portal</p>
      </div>
      <div className='clients_div1_1' >
      <div>
        <input type="checkbox" 
        value="date"
        
        onChange={()=>handleRadioChange("date")}
        checked={filterType === "date"}         
        />
        <p>SortByDate</p>
        </div>
        <div>
        <input type="checkbox" 
        value="unread"
        
        onChange={()=>handleRadioChange("unread")}
        checked={filterType === "unread"}         
        />
        <p>Unread</p>
        
        </div>
        <div>
        <input type="checkbox" 
        onChange={()=>handleRadioChange("read")}
        value="read"
        checked={filterType === "read"}     

        />
        <p>Read</p>

        </div>

      </div>
      <div className='clients_div2'>
      <div className="client-table">
      <table>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Service</th>
            <th>Date</th>
            <th>View</th>
            <th>Delete</th>

          </tr>
        </thead>
        <tbody>
          {storedData.map((client, index) => (
            <tr className={`client_tr ${client.opened == 'yes'?"true":""}`} key={index}>
              <td>{client.name}</td>
              <td>{client.service}</td>
              <td>{new Date(client.createdAt).toLocaleDateString('en-GB')}</td>
              <td>
                <button onClick={() => handleClientClick(client)}>View </button>
              </td>
              <td>
                 <MdDelete onClick={() =>handleCurrentDeleteId(client._id)}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    {showDeletePop?(
        <div className='Delete_pop'>
          <div>
            <p><IoMdClose onClick={()=>{setShowDeletePop(false)}} /></p>
            <h1>Are you sure? Delete this Client Info</h1>
            <div className='dp_buttondiv'>
              
            <button onClick={()=>{setShowDeletePop(false)}} style={{backgroundColor:"rgba(31, 30, 30, 0.868)"}} >Cancel</button>
              <button onClick={handleDeleteClientClick} style={{backgroundColor:"#af2a05"}}
              >Delete</button>
            </div>

          </div>
        </div>
        ):null
        }


      </div>

          
    </div>
  )
}

export default Clients