import React, { useContext, useState } from 'react'
import { TbPointFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext'

import '../../styles/Cards.css'
function MobileCards({ type,intro,intro2,images,route,translate }) {
  const navigate = useNavigate()
  const [showDiv,setShowDiv]=useState(false)
  const [ showCon,setShowCon]=useState(false)
  const { connectForm, setConnectForm } = useContext(AppContext)


  return (
  <div className='card_main' >
    <div  className='card_div1' >
      <div>{images}</div>

       <h1  >{type}</h1>
       <div className='card_div2_div'>
        <button onClick={()=>navigate(route)}>View More</button>
        <button  onClick={()=>setConnectForm(true)} >Enquire Now</button>
        </div>
      
    </div>
  

  </div>
  

  )
}

export default MobileCards