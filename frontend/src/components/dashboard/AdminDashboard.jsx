import React, { useContext } from 'react'
// import '../../styles/AdminDashboard'
import { AdminContext } from '../../context/AdminContext'

function AdminDashboard() {
  const { logout,isAuthenticated }=useContext(AdminContext)

  
  return (
    <div style={{color:"white"}} >AdminDashboard</div>
  )
}

export default AdminDashboard