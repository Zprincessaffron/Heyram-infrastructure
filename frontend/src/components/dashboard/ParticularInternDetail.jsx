

import React from 'react';
import '../../styles/ParticularJobDetail.css'; // External CSS file for styling
import { IoMdClose } from "react-icons/io";

const ParticularInternDetail = ({  ParticularJobData,setShowParticularJobDetail }) => {
  return (
    <div className="job-details-container">
      <div className="job-details-main">
      <div className='pjd_closediv' >
          <div onClick={()=>{setShowParticularJobDetail(false)}}><IoMdClose/></div>
        </div>
        <h1 className="job-title">{ParticularJobData.internshipName}</h1>
        <p className="job-type">{ParticularJobData.duration}</p>
        <p className="job-description">{ParticularJobData.internshipDescription}</p>

        <div className="job-info">
          <h2>Job Information</h2>
          <div className="job-info-item">
            <span>Location: </span>
            {ParticularJobData.location}
          </div>
          
          <div className="job-info-item">
            <span>Posted On: </span>
            {new Date(ParticularJobData.internshipPostedDate).toLocaleDateString()}
          </div>
        </div>

        <div className="skills-section">
          <h2>Skills Required</h2>
          <ul className="skills-list">
            {ParticularJobData.skills.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        
      </div>
    </div>
  );
};

export default ParticularInternDetail;
