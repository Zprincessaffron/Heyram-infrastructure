import React, { useEffect } from 'react';
import '../../styles/JobSeekerDetail.css'
import axios from 'axios';
import { IoMdClose } from "react-icons/io";

const InternSeekerDetail = ({ seekerData,setShowDetail,setShowMain,loadJobSeekerDetail }) => {

    useEffect(() => {
        if (seekerData && seekerData._id) {
          // Clean the _id value
          const cleanedValue = seekerData._id.replace(/['":]/g, '').trim();
    
          const updateData = async () => {
            try {
              const response = await axios.put(`/internseeker/${cleanedValue}`); // Correct URL format
              console.log('Data updated successfully:', response.data);
            } catch (error) {
              console.error('Error updating data:', error);
            }
          };
    
          updateData();
        }
      }, []); 


      function handleClose(){
        setShowDetail(close)
        loadJobSeekerDetail()
      }
    
  return (
    <div className="detail-container">
      <div className="card_jsd">
      <div className='pjd_closediv' >
          <div onClick={handleClose}><IoMdClose/></div>
        </div>
        <div className="info">
          <p><strong>Name:</strong> {seekerData.name}</p>
          <p><strong>Applied For:</strong> {seekerData.appliedFor}</p>
          <p><strong>City:</strong> {seekerData.city}</p>
          <p><strong>State:</strong> {seekerData.state}</p>
          <p><strong>Email:</strong> {seekerData.email}</p>
          <p><strong>Phone:</strong> {seekerData.phone}</p>
          <p><strong>Gender:</strong> {seekerData.gender}</p>
          <p><strong>College:</strong> {seekerData.college}</p>
          <p><strong>Education Level:</strong> {seekerData.educationLevel}</p>
          <p><strong>Degree:</strong> {seekerData.degree}</p>
          <p><strong>Stream:</strong> {seekerData.stream}</p>
          <p><strong>Year Passed:</strong> {seekerData.yearPassing}</p>
          <p><strong>Total CGp:</strong> {seekerData.cgp}</p>
          <p><strong>Resume:</strong> <a href={seekerData.resume} target="_blank" rel="noopener noreferrer">View Resume</a></p>
          <p><strong>Links:</strong> 
            <ul>
              <li><a href={seekerData.link1} target="_blank" rel="noopener noreferrer">Link 1</a></li>
              <li><a href={seekerData.link2} target="_blank" rel="noopener noreferrer">Link 2</a></li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default InternSeekerDetail;
