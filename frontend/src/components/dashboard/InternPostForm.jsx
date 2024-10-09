import React, { useState } from 'react';
import '../../styles/JobPostForm.css'; // External CSS file for styling
import axios from 'axios';

const InternPostForm = ( {setshowAddForm} ) => {
  // State variables for the main form fields
  const [jobName, setJobName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');
  const [duration, setDuration] = useState('');
  const [maxExperience, setMaxExperience] = useState('');
  const [skills, setSkills] = useState(['']); // Array for dynamic skill inputs
  const [questions, setQuestions] = useState([
    { question: '', options: ['', '', '', ''], answer: '' },
  ]); // Array for dynamic questions, options, and answer

  // Handler to add new skill input field
  const handleAddSkill = () => {
    setSkills([...skills, '']);
  };

  // Handler to change skill value
  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  // Handler to add new question
  const handleAddQuestion = () => {
    if (questions.length < 3) {
      setQuestions([...questions, { question: '', options: ['', '', '', ''], answer: '' }]);
    }
  };

  // Handler to change question, options, or answer
  const handleQuestionChange = (index, field, value) => {
    const newQuestions = [...questions];
    if (field === 'question' || field === 'answer') {
      newQuestions[index][field] = value;
    } else {
      newQuestions[index].options[field] = value; // field is the index of the option
    }
    setQuestions(newQuestions);
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const jobData = {
      jobName,
      jobDescription,
      location,
      duration,
      skills,
    };
    try {
        axios.post('/intern',{
          internshipName:jobData.jobName,
          internshipDescription:jobData.jobDescription,
            location:jobData.location,
            duration:jobData.duration,
            skills:jobData.skills,
        })
        console.log(jobData)
        setshowAddForm(false)
        window.location.reload()

    } catch (error) {
        console.log(error)
        
    }
    // Submit the jobData to the backend or API call here
  };

  return (
    <div className="form_container">
       
      <form onSubmit={handleSubmit} className="job-form">
        {/* Job Name Input */}
        <div className='jp_closebtn' onClick={()=>{setshowAddForm(false)}}>
            close
        </div>
        <div className="form-group">
          <label>Internship Name</label>
          <input
            type="text"
            value={jobName}
            onChange={(e) => setJobName(e.target.value)}
            placeholder="Enter Job Title"
            required
          />
        </div>

        {/* Job Description Input */}
        <div className="form-group">
          <label>Internship Description</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Describe the job responsibilities"
            required
          />
        </div>

        {/* Job Type Selection */}
        <div className="form-group">
          <label>Internship Duration</label>
          <input
            type="text"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Enter Duration"
            required
          />
        </div>

        {/* Location Input */}
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location of the Internship"
            required
          />
        </div>

  
        {/* Dynamic Skills Section */}
        <div className="form-group">
          <label>Skills Required</label>
          {skills.map((skill, index) => (
            <input
              key={index}
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              placeholder={`Skill ${index + 1}`}
              required
            />
          ))}
          {skills.length < 5 && (
            <button type="button" className="add-button" onClick={handleAddSkill}>
              + Add Skill
            </button>
          )}
        </div>

       

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Post Job
        </button>
      </form>
    </div>
  );
};

export default InternPostForm;
