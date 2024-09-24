import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  jobName: { type: String, required: true },
  jobDescription: { type: String, required: true },
  jobType: { type: String, required: true },  // e.g., Full-time, Part-time
  skills: { type: [String], required: true },  // array of skills
  location: { type: String, required: true },
  jobPostedDate: { type: Date, default: Date.now },  // auto-fetch current date and time
  minExperience: { type: String, required: true },   // minimum experience in years
  maxExperience: { type: String, required: true }    // maximum experience in years
});

const Job = mongoose.model('Job', jobSchema);

export default Job;