import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Jobs from './Jobs';
import Internships from './Internships';
import Clients from './Clients';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar */}


      {/* Main Content Area */}
      <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
        <Routes>
          <Route path="/dashboard" element={<div>Admin Dashboard Home</div>} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="internship" element={<Internships />} />
          <Route path="client" element={<Clients />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
