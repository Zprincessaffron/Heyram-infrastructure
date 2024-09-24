import mongoose from 'mongoose';

const jobSeekerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  resume: { type: String, required: true },  // Path to the uploaded resume
  link1: { type: String },
  link2: { type: String },
  appliedFor: { type: String, required: true },
  educationLevel: { type: String, required: true },
  degree: { type: String, required: true },
  stream: { type: String, required: true },
  yearPassed: { type: Number, required: true },
  currentOrganization: { type: String, required: true },
  totalExperience: { type: Number, required: true },  // In years
  noticePeriod: { type: String, required: true },
  immediateAvailable: { type: Boolean, required: true },  // Yes/No
  gender: { type: String },
  city: { type: String, required: true },
  state: { type: String, required: true },
  expectedCTC: { type: Number, required: true },
  opened: { type: String, default: 'no' }, 

});

const JobSeeker = mongoose.model('JobSeeker', jobSeekerSchema);
export default JobSeeker;
