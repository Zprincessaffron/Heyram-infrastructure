import express from 'express';
import { sendOtp, verifyOtp, resendOtp } from '../controllers/authController.js';
import { createClient, getClients, deleteClient,updateClientNotification } from '../controllers/clientController.js';
import { getJobs, deleteJobs, createJobs } from '../controllers/jobController.js';
import { postForm, getFormData, deleteJobsSeekerData,updateJobSeeker } from '../controllers/jobSeekerController.js';
import { createContact, getContacts, deleteContact,updatequeryNotification } from '../controllers/contactController.js';

import {
    createInternship,
    getInternships,
    deleteInternship,
  } from '../controllers/internshipController.js';
import {
  createInternshipSeeker,
  getAllInternshipSeekers,
  deleteInternshipSeeker,
  updateInternSeeker
} from '../controllers/internshipSeekerController.js';





const router = express.Router();


//OTP
router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);
router.post('/resend-otp', resendOtp);


// Client Form
router.post('/client', createClient);
router.get('/client', getClients);
router.delete('/client/:id', deleteClient); 
router.put('/client/:id', updateClientNotification)



// Job Openings
router.post('/job', createJobs);
router.get('/job', getJobs);
router.delete('/job/:id', deleteJobs); 


//Jobseekers data
router.post('/js', postForm);
router.get('/js', getFormData);
router.delete('/js/:id', deleteJobsSeekerData);
router.put('/js/:id', updateJobSeeker)



// Contact us data
router.post('/contact', createContact);
router.get('/contact', getContacts);
router.delete('/contact/:id', deleteContact);
router.put('/contact/:id', updatequeryNotification)


//internship
router.post('/intern', createInternship);
router.get('/intern', getInternships);
router.delete('/intern/:id', deleteInternship);

//internshipseeker data

router.post('/internseeker', createInternshipSeeker);

router.get('/internseeker', getAllInternshipSeekers);

router.delete('/internseeker/:id', deleteInternshipSeeker);

router.put('/internseeker/:id', updateInternSeeker)




export default router;
