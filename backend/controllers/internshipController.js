import Internship from '../models/internshipModel.js';


// Create a new internship
export const createInternship = async (req, res) => {
    const { internshipName, internshipDescription, skills, location, duration } = req.body;
  
    try {
      const newInternship = new Internship({
        internshipName,
        internshipDescription,
        skills,
        location,
        duration,  // Added duration here
      });
  
      await newInternship.save();
      res.status(201).json({ message: 'Internship Posted successfully' });
    } catch (error) {
      res.status(400).json({ message: 'Error creating internship', error });
    }
  };


// Get all internships
export const getInternships = async (req, res) => {
    try {
      const internships = await Internship.find();
      res.status(200).json(internships);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching internships', error });
    }
  };


// Delete an internship by ID
export const deleteInternship = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedInternship = await Internship.findByIdAndDelete(id);
      if (!deletedInternship) {
        return res.status(404).json({ message: 'Internship not found' });
      }
      res.status(200).json({ message: 'Internship deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting internship', error });
    }
  };