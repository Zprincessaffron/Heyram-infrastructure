// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashBoard from './components/dashboard/Dashboard';
import ProtectedRoute from './components/protectedRoute';
import Clients from './components/dashboard/Clients';
import Jobs from './components/dashboard/Jobs';
import Internships from './components/dashboard/Internships';
import Queries from './components/dashboard/Queries';
import Login from './components/login/login';
import MainPage from './components/home/MainPage';
const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Login />} />
         */}
         <Route path="/" element={<MainPage/>} />
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<DashBoard />}>
            <Route path="clients" element={<Clients />} />
            <Route path="jobs" element={<Jobs />} />
            <Route path="internships" element={<Internships />} />
            <Route path="queries" element={<Queries />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
