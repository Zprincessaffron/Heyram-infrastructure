import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../../styles/AdminDashboard.css'
  
const AdminDashboard = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Static Sidebar */}
      <div className='ad_sidebar'>
        <h2>Admin Dashboard</h2>
        <nav>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ margin: '20px 0' }}>
              <Link to="/admindashboard/jobs" style={{ color: 'white', textDecoration: 'none' }}>Jobs</Link>
            </li>
            <li style={{ margin: '20px 0' }}>
              <Link to="/admindashboard/internships" style={{ color: 'white', textDecoration: 'none' }}>Internships</Link>
            </li>
            <li style={{ margin: '20px 0' }}>
              <Link to="/admindashboard/clients" style={{ color: 'white', textDecoration: 'none' }}>Clients</Link>
            </li>
            <li style={{ margin: '20px 0' }}>
              <Link to="/admindashboard/queries" style={{ color: 'white', textDecoration: 'none' }}>Queries</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Dynamic Content Area */}
      <div className='ad_outlet'>
      
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
