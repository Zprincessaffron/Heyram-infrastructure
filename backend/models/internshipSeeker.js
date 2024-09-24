// models/internshipSeeker.js

import mongoose from 'mongoose';

const internshipSeekerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true},
  phone: { type: String, required: true },
  resume: { type: String, required: true },  // This will store the document link as a string
  link1: { type: String },
  link2: { type: String },
  appliedFor: { type: String, required: true },  // This refers to the internship they applied for
  educationLevel: { type: String, required: true },
  degree: { type: String, required: true },
  stream: { type: String, required: true },
  opened: { type: String, default: 'no' }, 
  yearPassing: { type: Number, required: true },
  college: { type: String, required: true },
  gender: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  cgp: { type: Number, required: true },  // CGP (Cumulative Grade Point)
});

const InternshipSeeker = mongoose.model('InternshipSeeker', internshipSeekerSchema);

export default InternshipSeeker;
