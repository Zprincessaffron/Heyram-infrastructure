import mongoose from 'mongoose';

// Sub-schema for each question
const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: { type: [String], required: true },  // Array of options
  answer: { type: String, required: true }       // Index of the correct option
});

// Main job schema
const jobSchema = new mongoose.Schema({
  jobName: { type: String, required: true },
  jobDescription: { type: String, required: true },
  jobType: { type: String, required: true },  // e.g., Full-time, Part-time
  skills: { type: [String], required: true },  // Array of skills
  location: { type: String, required: true },
  jobPostedDate: { type: Date, default: Date.now },  // Auto-fetch current date and time
  minExperience: { type: String, required: true },
  maxExperience: { type: String, required: true },
  questions: { type: [questionSchema],required:false, validate: [arrayLimit, 'Cannot Post more than 3 questions.'] }  // Up to 3 questions
});

// Validator to allow 0 to 3 questions
function arrayLimit(val) {
  return val.length <= 3;  // Allow up to 3 questions
}

const Job = mongoose.model('Job', jobSchema);
export default Job;
