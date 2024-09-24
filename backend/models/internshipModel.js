
import mongoose from 'mongoose';

const internshipSchema = new mongoose.Schema({
  internshipName: { type: String, required: true },
  internshipDescription: { type: String, required: true },
  skills: { type: [String], required: true },  // array of skills
  location: { type: String, required: true },
  duration: { type: String, required: true },  // duration of the internship, e.g., '3 months'
  internshipPostedDate: { type: Date, default: Date.now },  // auto-fetch current date and time

});

const Internship = mongoose.model('Internship', internshipSchema);

export default Internship;
