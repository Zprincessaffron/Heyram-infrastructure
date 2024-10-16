import express from "express";
import cors from "cors";
import { mongoose } from "mongoose";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import path from "path";  // Add this line to handle paths
import authRoutes from './routes/authRoutes.js';

const app = express();
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(`${process.env.MONGO_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use backend routes
app.use('/api', authRoutes);  // Changed to /api to separate backend routes

// Serve static files from the React frontend app
const __dirname = path.resolve();  // Required for serving frontend
app.use(express.static(path.join(__dirname, 'build')));  // Serve the build folder

// Catch-all route to serve the React frontend's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on http://localhost:${process.env.PORT || 5000}`);
});
