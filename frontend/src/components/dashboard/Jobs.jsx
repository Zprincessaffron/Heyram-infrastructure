import React, { useEffect, useState } from 'react'
import '../../styles/Jobs.css'
import axios from 'axios';
function Jobs() {
  const [ jobData,setJobData]=useState([])

  useEffect(() => {
    try {
      axios.get('/job').then(
        res=>setJobData(res.data)
      )
    } catch (error) {
      console.log(error)
      
    }

  }, [])
  console.log(jobData[0])
  
  

  return (
    <div className='jobs_main'>
      <div className='jobs_nav'>

      </div>
      <div className='jobs_main1'>
        <div>
             current openings
        </div>
  
        <div>
          {jobData[0]}
        </div>
      

      </div>
      <div className='jobs_main2'>
{/* 
        <div>
          {jobDta.map((item)=>{
            <div>
              {item.jobName}
            </div>
          })}
        </div> */}
     



      </div>
    
    </div>
  )
}

export default Jobs