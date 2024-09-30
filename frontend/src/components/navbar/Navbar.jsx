import React from 'react'
import '../../styles/Navbar.css'
import MenuButton from './MenuButton'
import heyramlogo from '../../images/heyramlogo.png'
function Navbar() {
  return (
    <div className='navbar_main'>
        <div className='navbar_div1' >
            HEYRAM INFRASTRUCTURE
        </div>
        <div className='navbar_div2'>
            <img src={heyramlogo} alt="" />

        </div>
        <div className='navbar_div3'>
         <MenuButton/>
        </div>
    </div>
  )
}

export default Navbar