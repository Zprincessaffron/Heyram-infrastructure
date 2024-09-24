import JobSeeker from '../models/jobSeekersModel.js';

// POST route to handle job seeker data submission and file upload
export const postForm =  async (req, res) => {
  const {
    name, email, phone, link1, link2, educationLevel, degree, stream,resume,appliedFor,
    yearPassed, currentOrganization, totalExperience, noticePeriod,
    immediateAvailable, gender, city, state, expectedCTC
  } = req.body;


  const newJobSeeker = new JobSeeker({
    name,
    email,
    phone,
    link1,
    link2,
    educationLevel,
    degree,
    stream,
    resume,
    yearPassed,
    currentOrganization,
    totalExperience,
    noticePeriod,
    appliedFor,
    immediateAvailable: immediateAvailable === 'yes',
    gender,
    city,
    state,
    expectedCTC
  });

  try {
    const existingApplicant = await JobSeeker.findOne({ email, appliedFor });
    
    if (existingApplicant) {
      return res.status(400).json({ message: 'You have already applied for this job.' });
    }
    await newJobSeeker.save();
    res.status(201).json({message :"applied sucessfully"});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const getFormData = async (req, res) => {
    try {
        const jobSeeker = await JobSeeker.find();
        res.json(jobSeeker);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };


// Delete a job applications by ID
export const deleteJobsSeekerData =  async (req, res) => {
    const { id } = req.params;
    
    try {
      const deletedJobSeeker = await JobSeeker.findByIdAndDelete(id);
      
      if (!deletedJobSeeker) {
        return res.status(404).json({ message: 'Data not found' });
      }
  
      res.status(200).json({ message: 'Job deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


// Update opened status of an job seeker
export const updateJobSeeker = async (req, res) => {
  const { id } = req.params; // Get the ID from the request parameters

  try {
    // Update the opened field to "yes"
    const updatedSeeker = await JobSeeker.findByIdAndUpdate(
      id,
      { opened: "yes" }, // Update opened field
      { new: true } // Return the updated document
    );

    if (!updatedSeeker) {
      return res.status(404).json({ message: 'job seeker not found' });
    }

    res.status(200).json({ message: 'jobseeker notification opened'});
  } catch (error) {
    res.status(400).json({ message: 'Error updating job Seeker', error });
  }
};