import React, { useContext } from 'react'
import '../../styles/Navbar.css'
import MenuButton from './MenuButton'
import heyramlogo1 from '../../images/heyramlogo1.png'
import heyramlogo from '../../images/heyramlogo.png'
import { AppContext } from '../../context/AppContext'
function Navbar() {
  const { navColor,setNavColor }=useContext(AppContext)
  return (
    <div className={`navbar_main ${navColor}`}>
        <div className={`navbar_div1 ${navColor}`} >
            HEYRAM INFRASTRUCTURE
        </div>
        <div className='navbar_div2'>
        <img src={navColor?heyramlogo:heyramlogo1} alt="" />
            

        </div>
        <div className='navbar_div3'>
         
        </div>
    </div>
  )
}

export default Navbar