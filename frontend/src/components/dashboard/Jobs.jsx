import React, { useContext, useEffect, useState } from 'react'
import '../../styles/Jobs.css'
import axios from 'axios';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead'; 
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { red } from '@mui/material/colors';
import JobSeekerDetail from './JobSeekerDetail';
import JobPostForm from './JobPostForm';
import ParticularJobDetail from './ParticularJobDetail';
import DeletePopUp from './DeletePopUp';
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { AdminContext } from '../../context/AdminContext';

function Jobs() {
  const [ jobData,setJobData]=useState([])
  const [ jobSeeker,setJobSeeker]=useState([])
  const [currentData,setCurrentData]=useState()
  const [showDetail,setShowDetail]=useState(false)
  const [showMain,setShowMain]=useState(true)
  const [showAddForm,setshowAddForm]=useState(false)
  const [showParticularJobDetail,setShowParticularJobDetail]=useState(false)
  const [currentJobData,setCurrentJobData]=useState("")
  const [showDeletePop,setShowDeletePop]=useState(false)
  const [currentDeleteId,setCurrentDeleteId]=useState("")
  const [currentDeleteRole,setCurrentDeleteRole]=useState("")
  const [showDeletePopSeeker,setShowDeletePopSeeker]=useState(false)
  const { setSelectedNav } = useContext(AdminContext)



function getJobDetails(){
  try {
    axios.get('/job').then(
      res=>setJobData(res.data)
    )
  } catch (error) {
    console.log(error)
    
  }
}

  useEffect(() => {
    getJobDetails()
    setSelectedNav('job')

 

  }, [ ])

  function handleDeleteJob(item){
    setCurrentDeleteId(item._id)
    setCurrentDeleteRole(item.jobName)
    setShowDeletePop(true)
    

  }

  function loadJobSeekerDetail(){
    try {
      axios.get('/js').then(
        res=>{setJobSeeker(res.data)
        console.log(res.data)}
      )
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(() => {
    loadJobSeekerDetail()
  }, [])

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#365c85',
      color: theme.palette.common.white,
    
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: "white",
    
    },
    '&:nth-of-type(even)': {
      backgroundColor: "white",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const handleSeekerClick = (id) => {
    const selectedData = jobSeeker.find((item) => item._id === id);
    setCurrentData(selectedData);
    setShowDetail(true)
  };
  const handleParticularJob = (id) => {
    const selectedData = jobData.find((item) => item._id === id);
    setCurrentJobData(selectedData);
    setShowParticularJobDetail(true)
  };

  console.log(currentJobData)
  function handleChangeMain(){
    setShowMain(!showMain)
  }
  
  function handleJobDelete(){
    const cleanedValue = currentDeleteId.replace(/['":]/g, '').trim();
   

    try {
      axios.delete(`/job/${cleanedValue}`).then(res=>{
       setShowDeletePop(false)
       getJobDetails()

      })
      
    } catch (error) {
      
    }
  }
  function handleDeleteSeekerInfo(id){
    setCurrentDeleteId(id)
    setShowDeletePopSeeker(true)

  }
  
    
  function handleJobSeekerDelete(){
    const cleanedValue = currentDeleteId.replace(/['":]/g, '').trim();
   

    try {
      axios.delete(`/js/${cleanedValue}`).then(res=>{
       setShowDeletePopSeeker(false)
       loadJobSeekerDetail()
      })
      
    } catch (error) {
       
    }
  }
  function handleDeleteJobAndApplicant(){
   

    try {
      axios.delete(`/js/delete/${currentDeleteRole}`).then(res=>{
       setShowDeletePop(false)
       getJobDetails()
       handleJobDelete()


      })
      
    } catch (error) {
      
    }
    

  }
  return (
     <div className='ad_job_main'>
       <div className='ad_job_div1'>
        <div className=' ad_job_div11'>
        <h1>JOBS</h1>
        <p>Welcome to You Job Portal</p>
        </div>
        <div className='ad_job_div12' onClick={()=>{setshowAddForm(true)}}>
          Add+
        </div>
        <div className='ad_job_div13' onClick={handleChangeMain}>
          {showMain?"View Applications":"View Job"}
        </div>
       </div>
        

       
       {showMain?(

<div className='tableCon'>
<TableContainer style={{background:"none"}} sx={{ width:'95%'}}    component={Paper}>
<Table   aria-label="customized table" >
<TableHead>
  <TableRow >
    
    <StyledTableCell >job</StyledTableCell>
    <StyledTableCell align="ceter">Job Type</StyledTableCell>
    <StyledTableCell align="right">Delete</StyledTableCell>
  </TableRow>
</TableHead>
<TableBody>
  {jobData.map((item) => (
    <StyledTableRow key={item._id}   >
      <StyledTableCell component="th" scope="row"  onClick={()=>handleParticularJob(item._id)}>
        {item.jobName}
      </StyledTableCell>
      <StyledTableCell  align="left">{item.jobType}</StyledTableCell>
      <StyledTableCell align="right" onClick={()=>handleDeleteJob(item)}><p style={{display:"flex",justifyContent:"end",paddingRight:"20px",cursor:"pointer"}}><MdDelete/></p></StyledTableCell>
    </StyledTableRow>
  ))}
</TableBody>

</Table>
<div className='job_table_bottom'>
Next

</div>
</TableContainer>
</div>
       ):(
         <div className='job_appli'>
           <div className='jobseekerlisthead'>
           <div >Name</div>
           <div >Applied For</div>
           <div>Degree</div>  
           <div>Applied on</div>
           <div >Delete</div>
         </div>
         {jobSeeker.map((item)=>(
           <div className={`jobseekerlist ${item.opened =="yes"? "true":""} `}  >
           <div onClick={()=>handleSeekerClick(item._id)}>{item.name}</div>
           <div onClick={()=>handleSeekerClick(item._id)}>{item.appliedFor}</div>
           <div>{item.degree}</div>         
           <div>{new Date(item.jobPostedDate).toLocaleDateString('en-GB')}</div>
           <div  className='job_delete_button' onClick={()=>handleDeleteSeekerInfo(item._id)} ><MdDelete/></div>
           
           
         </div>
         ))}
          
        </div>
       )

       }
       {showDetail?( <div className='selectedjsdata'>
          <JobSeekerDetail seekerData={currentData} setShowDetail={setShowDetail} setShowMain={setShowMain} loadJobSeekerDetail={loadJobSeekerDetail} />
        </div>):null

       }
        {showAddForm?( <div className='jobpostForm' >
          <JobPostForm setshowAddForm={setshowAddForm}/>
        </div>):null

       }
       {showParticularJobDetail?(
       <div className='particular_jobdata'>
        <ParticularJobDetail ParticularJobData={currentJobData} setShowParticularJobDetail={setShowParticularJobDetail}/>
       </div>
       ):null
       }
         {showDeletePop?(
        <div className='Delete_pop'>
          <div>
            <p><IoMdClose onClick={()=>{setShowDeletePop(false)}} /></p>
            <h1>Are you sure? Delete this Job</h1>
            <div className='dp_buttondiv'>
              
            <button onClick={()=>{setShowDeletePop(false)}} style={{backgroundColor:"rgba(31, 30, 30, 0.868)"}} >Cancel</button>
              <button onClick={handleJobDelete} style={{backgroundColor:"#af2a05"}}
              >Delete job</button>
               <button onClick={handleDeleteJobAndApplicant} style={{backgroundColor:"#af2a05"}}
              >Delete Apllicants</button>
            </div>

          </div>
        </div>
        ):null
        }
        {showDeletePopSeeker?(
        <div className='Delete_pop'>
          <div>
            <p><IoMdClose onClick={()=>{setShowDeletePopSeeker(false)}} /></p>
            <h1>Are you sure? Delete this Job</h1>
            <div className='dp_buttondiv'>
              
            <button onClick={()=>{setShowDeletePopSeeker(false)}} style={{backgroundColor:"rgba(31, 30, 30, 0.868)"}} >Cancel</button>
              <button onClick={handleJobSeekerDelete} style={{backgroundColor:"#af2a05"}}
              >Delete</button>
            </div>

          </div>
        </div>
        ):null
        }


     </div>
  )
}

export default Jobs