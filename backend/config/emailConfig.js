import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL, // Gmail address
        pass: process.env.PASSWORD, // App password from Google
    },
});

export default transporter;
