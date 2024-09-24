import express from "express";
import cors from "cors";
import {mongoose} from "mongoose";
import dotenv from 'dotenv';
import jwt from "jsonwebtoken"
import authRoutes from './routes/authRoutes.js';


const app = express();
const port = 3000;
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());



// MongoDB connection
mongoose.connect('mongodb+srv://heyraminfrastructure:Princes111@cluster0.3qzmx.mongodb.net/main', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Use routes
app.use('/', authRoutes )


// Start server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});