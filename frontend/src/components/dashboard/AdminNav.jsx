import React from 'react'
import '../../styles/AdminNav.css'
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { IoRefresh } from "react-icons/io5";

function AdminNav() {
  function handleRefresh(){
    window.location.reload()
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
            <div><IoSettingsOutline/></div>

        </div>
    </div>
  )
}

export default AdminNav