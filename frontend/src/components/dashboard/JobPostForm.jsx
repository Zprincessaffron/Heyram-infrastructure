import React, { useState } from 'react';
import '../../styles/JobPostForm.css'; // External CSS file for styling
import axios from 'axios';
import { IoMdClose } from "react-icons/io";

const JobPostForm = ( {setshowAddForm} ) => {
  // State variables for the main form fields
  const [jobName, setJobName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [jobType, setJobType] = useState('');
  const [location, setLocation] = useState('');
  const [minExperience, setMinExperience] = useState('');
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
      jobType,
      location,
      minExperience,
      maxExperience,
      skills,
      questions,
    };
    try {
        axios.post('/job',{
            jobName:jobData.jobName,
            jobDescription:jobData.jobDescription,
            jobType:jobData.jobType,
            location:jobData.location,
            minExperience:jobData.minExperience,
            maxExperience:jobData.maxExperience,
            skills:jobData.skills,
            questions:jobData.questions,
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
            <div><IoMdClose /></div>
        </div>
        <div className="form-group">
          <label>Job Name</label>
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
          <label>Job Description</label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Describe the job responsibilities"
            required
          />
        </div>

        {/* Job Type Selection */}
        <div className="form-group">
          <label>Job Type</label>
          <select value={jobType} onChange={(e) => setJobType(e.target.value)} required>
            <option value="">Select Type</option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>

        {/* Location Input */}
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location of the Job"
            required
          />
        </div>

        {/* Experience Range */}
        <div className="form-group">
          <label>Experience (in years)</label>
          <div className="experience-range">
            <input
              type="number"
              value={minExperience}
              onChange={(e) => setMinExperience(e.target.value)}
              placeholder="Min Experience"
              required
            />
            <input
              type="number"
              value={maxExperience}
              onChange={(e) => setMaxExperience(e.target.value)}
              placeholder="Max Experience"
              required
            />
          </div>
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

        {/* Dynamic Questions Section */}
        <div className="form-group">
          <label>Interview Questions (Up to 3)</label>
          {questions.map((q, index) => (
            <div key={index} className="question-section">
              <input
                type="text"
                value={q.question}
                onChange={(e) => handleQuestionChange(index, 'question', e.target.value)}
                placeholder={`Question ${index + 1}`}
                required
              />

              {/* Options for Each Question */}
              <div className="options-section">
                {q.options.map((option, optionIndex) => (
                  <input
                    key={optionIndex}
                    type="text"
                    value={option}
                    onChange={(e) => handleQuestionChange(index, optionIndex, e.target.value)}
                    placeholder={`Option ${optionIndex + 1}`}
                    required
                  />
                ))}
              </div>

              {/* Expected Answer Input */}
              <input
                type="text"
                value={q.answer}
                onChange={(e) => handleQuestionChange(index, 'answer', e.target.value)}
                placeholder="Correct Answer"
                required
              />
            </div>
          ))}

          {/* Add New Question Button */}
          {questions.length < 3 && (
            <button type="button" className="add-button" onClick={handleAddQuestion}>
              + Add Question
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

export default JobPostForm;
