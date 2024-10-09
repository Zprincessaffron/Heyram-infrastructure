import React, { useContext, useEffect, useState } from 'react'
import { AdminContext } from '../../context/AdminContext'
import axios from 'axios'
import '../../styles/Clients.css'
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import jsPDF from "jspdf";
import "jspdf-autotable";
import * as XLSX from "xlsx";
import { FaDownload } from "react-icons/fa";
import pdflogo from '../../images/pdflogo.png'
import xcellogo from '../../images/xcellogo.png'


function Clients() {

  const { setSelectedNav } = useContext(AdminContext)
  const [clientData,setClientData]=useState()
  const navigate = useNavigate();
  const [showDeletePop,setShowDeletePop]=useState(false)
  const [currentDeleteId,setCurrentDeleteId]=useState()
  const [filterType,setFilterType]=useState("")
  const [storedData,setStoredData]=useState([])
  const [ showDownloadSplitter,setDownloadSplitter ]=useState(false)


  
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

//pdf//
const generatePDF = () => {
  // Initialize jsPDF
  const doc = new jsPDF();

  // Add title
  doc.text("Client Data", 20, 10);

  // Define columns for the table
  const tableColumn = ["Name", "Email", "Phone", "Service", "Posted"];
  const tableRows = [];
  const formattedDate = new Date(storedData.createdAt).toLocaleDateString('en-GB')

  // Extract only the relevant fields from client data
  storedData.forEach(client => {
    const clientData = [
      client.name,
      client.email,
      client.phone,
      client.service,
      new Date(client.createdAt).toLocaleDateString('en-GB')
    ];
    tableRows.push(clientData);
  });

  // Add table to the PDF
  doc.autoTable({
    head: [tableColumn],
    body: tableRows,
    startY: 20, // Position table below the title
  });

  // Save the PDF and prompt download
  doc.save("client_data.pdf");
};
/// xcel format//

const generateExcel = () => {
  // Create a new workbook and a worksheet
  const worksheet = XLSX.utils.json_to_sheet(storedData.map(client => ({
    Name: client.name,
    Email: client.email,
    Phone: client.phone,
    Service: client.service,
    Posted:new Date(client.createdAt).toLocaleDateString('en-GB')
  })));

  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Clients");

  // Generate the Excel file and prompt download
  XLSX.writeFile(workbook, "client_data.xlsx");
};

  return (
    <div className='clients_main'>
       <div className='ad_job_div1' style={{marginBottom:"5rem"}}>
        <div className=' ad_job_div11'>
        <h1>CLIENTS</h1>
        <p>Welcome to you clients portal</p>
        </div>
        {showDownloadSplitter?(<>
          <div style={{width:"180px",borderColor:"rgba(128, 128, 128, 0.315)"}} className='ad_job_div12' >
           <div className='ad_job_div12_div'>
               <button >
                <img onClick={generatePDF} src={pdflogo} alt="" />
               </button>
               <button  >
                <img onClick={generateExcel}  src={xcellogo} alt="" />
               </button>

               <button >
                <IoMdClose  onClick={()=>{setDownloadSplitter(false)}}/>
               </button>
           </div>
           <div>

           </div>
          </div>
        </>):(
          <div style={{width:"180px"}} className='ad_job_div12' onClick={()=>{setDownloadSplitter(true)}}>
          Download  <span style={{marginLeft:"10px"}}><FaDownload /></span>
          </div>
        )}
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