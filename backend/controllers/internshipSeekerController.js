// controllers/internshipSeekerController.js

import InternshipSeeker from '../models/internshipSeeker.js';

// Create a new internship seeker
export const createInternshipSeeker = async (req, res) => {
  const {
    name,
    email,
    phone,
    resume,
    link1,
    link2,
    appliedFor,
    educationLevel,
    degree,
    stream,
    yearPassing,
    college,
    gender,
    city,
    state,
    cgp
  } = req.body;


  try {
        // Check if the user has already applied for the same internship
        const existingApplicant = await InternshipSeeker.findOne({ email, appliedFor });
    
        if (existingApplicant) {
          return res.status(400).json({ message: 'You have already applied for this internship.' });
        }
    
    const newInternshipSeeker = new InternshipSeeker({
      name,
      email,
      phone,
      resume,
      link1,
      link2,
      appliedFor,
      educationLevel,
      degree,
      stream,
      yearPassing,
      college,
      gender,
      city,
      state,
      cgp,
    });

    await newInternshipSeeker.save();
    res.status(201).json({ message: 'Internship Applied successfully'});
  } catch (error) {
    res.status(400).json({ message: 'Error applying internship', error });
  }
};

// Get all internship seekers
export const getAllInternshipSeekers = async (req, res) => {
  try {
    const internshipSeekers = await InternshipSeeker.find();
    res.status(200).json(internshipSeekers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Internship Seekers', error });
  }
};

// Delete an internship seeker by ID
export const deleteInternshipSeeker = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedInternshipSeeker = await InternshipSeeker.findByIdAndDelete(id);
    if (!deletedInternshipSeeker) {
      return res.status(404).json({ message: 'Internship Seeker not found' });
    }
    res.status(200).json({ message: 'Internship Seeker deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Internship Seeker', error });
  }
};

// Update opened status of an internship seeker
export const updateInternSeeker = async (req, res) => {
    const { id } = req.params; // Get the ID from the request parameters
  
    try {
      // Update the opened field to "yes"
      const updatedSeeker = await InternshipSeeker.findByIdAndUpdate(
        id,
        { opened: "yes" }, // Update opened field
        { new: true } // Return the updated document
      );
  
      if (!updatedSeeker) {
        return res.status(404).json({ message: 'intern seeker not found' });
      }
  
      res.status(200).json({ message: 'internship notification opened'});
    } catch (error) {
      res.status(400).json({ message: 'Error updating internship Seeker', error });
    }
  };