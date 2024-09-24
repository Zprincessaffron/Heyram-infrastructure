import express from 'express';
import { sendOtp, verifyOtp, resendOtp } from '../controllers/authController.js';
import { createClient, getClients, deleteClient } from '../controllers/clientController.js';
import { getJobs, deleteJobs, createJobs } from '../controllers/jobController.js';
import { postForm, getFormData, deleteJobsSeekerData } from '../controllers/jobSeekerController.js';
import { createContact, getContacts, deleteContact } from '../controllers/contactController.js';


const router = express.Router();


//OTP
router.post('/send-otp', sendOtp);
router.post('/verify-otp', verifyOtp);
router.post('/resend-otp', resendOtp);


// Client Form
router.post('/client', createClient);
router.get('/client', getClients);
router.delete('/client/:id', deleteClient); 


// Job Openings
router.post('/job', createJobs);
router.get('/job', getJobs);
router.delete('/job/:id', deleteJobs); 


//Jobseekers data
router.post('/js', postForm);
router.get('/js', getFormData);
router.delete('/js/:id', deleteJobsSeekerData);


// Contact us data
router.post('/contact', createContact);
router.get('/contact', getContacts);
router.delete('/contact/:id', deleteContact);


export default router;
