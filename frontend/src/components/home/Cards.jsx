import React, { useState } from 'react'
import { TbPointFilled } from "react-icons/tb";
import '../../styles/Cards.css'
function Cards({ type,intro,intro2,images }) {
  const [showDiv,setShowDiv]=useState(false)

   function handleMouse(val){
    setShowDiv(val)
   }
  return (
  <div className='card_main' onMouseEnter={()=>handleMouse(true)} onMouseLeave={()=>handleMouse(false)} >
    <div className='card_div1' >

       <h1  >{type}</h1>
      
    </div>
    <div className={`card_div2 ${showDiv}`}>
      <p>{intro}</p>
      <button>View</button>

    </div>


  </div>
  

  )
}

export default Cards