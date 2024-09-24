import JobSeeker from '../models/jobSeekersModel.js';

// POST route to handle job seeker data submission and file upload
export const postForm =  async (req, res) => {
  const {
    name, email, phone, link1, link2, educationLevel, degree, stream,resume,
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
    immediateAvailable: immediateAvailable === 'yes',
    gender,
    city,
    state,
    expectedCTC
  });

  try {
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