import React, { useContext, useState } from 'react'
import { TbPointFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext'

import '../../styles/Cards.css'
function Cards({ type,intro,intro2,images,route,translate }) {
  const navigate = useNavigate()
  const [showDiv,setShowDiv]=useState(false)
  const [ showCon,setShowCon]=useState(false)
  const { connectForm, setConnectForm } = useContext(AppContext)

   function handleMouseEnter(){
    setShowDiv(true)
    setTimeout(() => {
      setShowCon(true)
      
    }, 300);
   } 
   function handleMouseOut(){
    setShowCon(false)
    setShowDiv(false)
   } 

  return (
  <div className='card_main' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseOut} >
    <div  className='card_div1' >
      <div>{images}</div>

       <h1  >{type}</h1>
      
    </div>
    <div   className={`${translate} ${showDiv}`}>
        <>
        <p className='card_div2_p' >{intro}</p>
        <div className='card_div2_div'>
        <button onClick={()=>navigate(route)}>View More</button>
        <button  onClick={()=>setConnectForm(true)} >Enquire Now</button>
        </div></>
  

    </div>


  </div>
  

  )
}

export default Cards