// 📁 backend/index.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'https://abhi-portfolio-uptt.onrender.com'
}));

app.use(express.json());

// 📌 MongoDB Schema
const contactSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// 📬 Email Transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.EMAIL_PASS
  }
});

// ✅ POST route
app.post('/api/contact', async (req, res) => {
  const { fullName, email, phone, subject, message } = req.body;

  try {
    // 1. Save to MongoDB
    const newContact = new Contact({ fullName, email, phone, subject, message });
    await newContact.save();

    // 2. Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact Message: ${subject}`,
      html: `
        <h3>New Message from ${fullName}</h3>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `
    });

    res.status(200).json({ message: 'Message received and email sent!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to process request' });
  }
});

// 🔌 Connect to MongoDB and Start Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => console.log('Server running on http://localhost:5000'));
  })
  .catch(err => console.error('MongoDB connection error:', err));
