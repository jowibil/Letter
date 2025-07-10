import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import User from '../models/Users.js';
import dotenv from 'dotenv';

dotenv.config();

const { sign, verify } = jwt;

// Temporary in-memory store for email-code mapping
const codes = new Map();

/** 📩 Send Verification Code */
export const sendCode = async (req, res) => {
  const { email } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already registered. Please login.' });
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();
    codes.set(email, code);

    // Auto-expire code after 10 minutes
    setTimeout(() => codes.delete(email), 10 * 60 * 1000);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Syntax Rush" <${process.env.GMAIL_USER}>`,
      to: email,
      subject: 'Your Syntax Rush Verification Code',
      text: `
        Welcome to Syntax Rush – the battleground where coding minds collide!

        You're one step away from joining exciting coding tournaments where you pick problems, challenge others, and race to solve them first.

        🔐 Your Syntax Rushh Verification Code: ${code}

        This code will expire in 10 minutes. If you didn’t sign up for CodeClash, please ignore this email.

        — The Syntax Rush Team
      `,
    });

    res.json({ message: 'Verification code sent to email.' });
  } catch (error) {
    console.error('Send Code Error:', error);
    res.status(500).json({ message: 'Failed to send verification code.' });
  }
};

/** ✅ Signup with Email Verification */
export const signup = async (req, res) => {
  try {
    const { name, email, password, code } = req.body;

    const storedCode = codes.get(email);
    if (!storedCode || storedCode !== code) {
      return res.status(400).json({ message: 'Invalid or expired verification code.' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      verified: true,
    });

    await newUser.save();
    codes.delete(email); // Remove code after successful signup

    res.json({ message: 'Signup successful.' });
  } catch (err) {
    console.error('Signup Error:', err);
    res.status(500).json({ message: 'Server error during signup.' });
  }
};

/** 🔐 Login */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found!' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Password is incorrect!' });
    }

    const token = sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Login Error:', err);
    res.status(500).json({ message: 'Server error during login.' });
  }
};
