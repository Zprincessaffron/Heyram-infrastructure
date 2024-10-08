import React, { useContext, useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../../styles/AdminDashboard.css'
import AdminNav from './AdminNav';
import { BsBag } from "react-icons/bs";
import { IoPeopleOutline } from "react-icons/io5";
import { MdOutlineSchool } from "react-icons/md";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { AdminContext } from '../../context/AdminContext';


const AdminDashboard = () => {
  const { selectedNav,setSelectedNav } = useContext(AdminContext)
  const [activeMenu, setActiveMenu] = useState('dashboard'); // Track active menu item
  

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Static Sidebar */}
      <div className='ad_sidebar'>
        <h2>HEYRAM INFRASTRUCTURE</h2>
        <nav>
         <ul >
            <li >
              <Link className={`link ${selectedNav == "job"?"true":""}`}  to="/admindashboard/jobs" >
              <span><BsBag/></span> <span>Jobs</span></Link>
            </li>
            <li >
              <Link  className={`link ${selectedNav == "intern"?"true":""}`} to="/admindashboard/internships">
              <span>
                <MdOutlineSchool/>
              </span>
              <span>
              Internships
              </span>
              </Link>
            </li>
            <li >
              <Link className={`link ${selectedNav == "clients"?"true":""}`}  to="/admindashboard/clients" >
              <span><IoPeopleOutline/> </span>
              <span>Clients</span>
              </Link>
            </li>
            <li >
              <Link className={`link ${selectedNav == "queries"?"true":""}`} to="/admindashboard/queries" >
              <span><IoIosHelpCircleOutline/></span> <span>Queries</span></Link>
            </li>
           
          </ul> 
               
        </nav>
      </div>

      {/* Dynamic Content Area */}
      <div className='ad_outlet'>
        <div className='admin_nav'>
          <AdminNav/>
        </div>
      
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
