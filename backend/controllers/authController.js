import transporter from '../config/emailConfig.js';
import { generateOtp } from '../utils/otpGenerator.js';
import dotenv from 'dotenv';

dotenv.config();

let currentOtp = null;
let otpExpiryTime = null;
const adminEmail = process.env.EMAIL;

// Send OTP email
export const sendOtp = async (req, res) => {
   

    currentOtp = generateOtp();
    otpExpiryTime = Date.now() + 5 * 60 * 1000; // OTP expires in 5 minutes

    const mailOptions = {
        from: adminEmail,
        to: adminEmail,
        subject: 'OTP For Heyram Admin',
        text: `Your OTP code is ${currentOtp}. It will expire in 5 minutes.`,
    };


    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'OTP sent to your email' });
    } catch (error) {
        return res.status(500).json({ message: 'Error sending OTP', error });
    }
};

// Verify OTP
export const verifyOtp = (req, res) => {
    const { otp } = req.body;

    if (otp !== currentOtp || Date.now() > otpExpiryTime) {
        return res.status(400).json({ message: 'Invalid or expired OTP' });
    }

    currentOtp = null; // Reset OTP after successful login
    otpExpiryTime = null;
    return res.status(200).json({ message: 'Login successful' });
};

// Resend OTP
export const resendOtp = async (req, res) => {

    currentOtp = generateOtp();
    otpExpiryTime = Date.now() + 5 * 60 * 1000;

    const mailOptions = {
        from: adminEmail,
        to: adminEmail,
        subject: 'OTP For Heyram Admin',
        text: `Your OTP code is ${currentOtp}. It will expire in 5 minutes.`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'OTP resent to your email' });
    } catch (error) {
        return res.status(500).json({ message: 'Error resending OTP', error });
    }
};
