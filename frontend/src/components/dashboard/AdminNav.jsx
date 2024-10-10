import React, { useContext, useState } from 'react'
import '../../styles/AdminNav.css'
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoRefresh } from "react-icons/io5";
import { AdminContext } from '../../context/AdminContext';
 
function AdminNav() {
  const { logout } =useContext(AdminContext)
  const [showLogin,setShowLogin]=useState()
  function handleRefresh(){
    window.location.reload()
  }
  function handleLogout(){
    logout()
  }
  return (
    <div className='an_main'>
        <div> 
            <h1>ADMIN DASHBOARD</h1>
        </div>
        <div>

        </div>
        <div className='ad_div3'>
            <div onClick={handleRefresh}><IoRefresh/></div>
           {showLogin?(
            <div className='nav_ll'>
            <button style={{backgroundColor:"rgba(218, 90, 90, 0.719)"}}  onClick={handleLogout}> Logout</button>
            <button style={{backgroundColor:"#4d939a"}} onClick={()=>setShowLogin(false)}>Stay Login</button>

          </div>
           ):(
            <div onClick={()=>setShowLogin(true)}><IoSettingsOutline/></div>

           )}

        </div>
    </div>
  )
}

export default AdminNav