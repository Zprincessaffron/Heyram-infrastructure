import Job from '../models/jobModel.js';

// Route to create a new job posting
export const createJobs = async (req, res) => {
  const { jobName, jobDescription, jobType, skills, location, minExperience, maxExperience } = req.body;

  const newJob = new Job({
    jobName,
    jobDescription,
    jobType,
    skills,
    location,
    minExperience,
    maxExperience
  });

  try {
    await newJob.save();
    res.status(200).json({ message: 'Job created successfully' });

  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Route to get all job postings
export const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a job posting by ID
export const deleteJobs =  async (req, res) => {
    const { id } = req.params;
    
    try {
      const deletedJob = await Job.findByIdAndDelete(id);
      
      if (!deletedJob) {
        return res.status(404).json({ message: 'Job not found' });
      }
  
      res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

