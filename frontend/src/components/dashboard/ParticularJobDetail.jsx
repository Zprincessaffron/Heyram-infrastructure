

import React from 'react';
import '../../styles/ParticularJobDetail.css'; // External CSS file for styling
import { IoMdClose } from "react-icons/io";

const ParticularJobDetail = ({  ParticularJobData,setShowParticularJobDetail }) => {
  return (
    <div className="job-details-container">
      <div className="job-details-main">
        <div className='pjd_closediv' >
          <div onClick={()=>{setShowParticularJobDetail(false)}}><IoMdClose/></div>
        </div>
        <h1 className="job-title">{ParticularJobData.jobName}</h1>
        <p className="job-type">{ParticularJobData.jobType} Position</p>
        <p className="job-description">{ParticularJobData.jobDescription}</p>

        <div className="job-info">
          <h2>Job Information</h2>
          <div className="job-info-item">
            <span>Location: </span>
            {ParticularJobData.location}
          </div>
          <div className="job-info-item">
            <span>Experience Required: </span>
            {ParticularJobData.minExperience} - {ParticularJobData.maxExperience} years
          </div>
          <div className="job-info-item">
            <span>Posted On: </span>
            {new Date(ParticularJobData.jobPostedDate).toLocaleDateString()}
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

        <div className="questions-section">
          <h2>Interview Questions</h2>
          {ParticularJobData.questions.length > 0 ? (
            // <ul className="questions-list">
            //   {ParticularJobData.questions.map((question, index) => (
            //     <li key={index} className="question-item">
            //       <strong>Question {index + 1}: </strong>
            //       {question.question}
            //       <ul className="options-list">
                   
            //       </ul>
            //       <p className="answer">Answer: {question.answer}</p>
            //     </li>
            //   ))}
            // </ul>
            <div>
                 {ParticularJobData.questions.map((question, index) => (
                    <>
                    <div> <span>Question:{index+1}</span> <span></span> {question.question} </div>
                    
                    <p className="answer">Answer: {question.answer}</p>
                    </>

                 ))}
            </div>
          ) : (
            <p>No questions available for this job.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParticularJobDetail;
