import React, { useContext, useState } from 'react'
import { TbPointFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext'

import '../../styles/Cards.css'
function Cards({ type,intro,intro2,images }) {
  const navigate = useNavigate()
  const [showDiv,setShowDiv]=useState(false)
  const { connectForm, setConnectForm } = useContext(AppContext)

   function handleMouse(val){
    setShowDiv(val)
   }
  return (
  <div className='card_main' onMouseEnter={()=>handleMouse(true)} onMouseLeave={()=>handleMouse(false)} >
    <div  className='card_div1' >
      <div>{images}</div>

       <h1  >{type}</h1>
      
    </div>
    <div className={`card_div2 ${showDiv}`}>
      <p>{intro}</p>
      <div>
      <button onClick={()=>navigate('/package-services')} >View More</button>
      <button  onClick={()=>setConnectForm(true)} >Enquire Now</button>
      </div>

    </div>


  </div>
  

  )
}

export default Cards