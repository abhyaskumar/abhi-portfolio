import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const res = await axios.post('/api/contact', formData);
      const res = await axios.post('https://abhi-portfolio-ql3v.onrender.com/api/contact', formData);
      alert('Message sent successfully!');
      setFormData({ fullName: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      alert('Error sending message.');
    }
  };

  return (
    <div id="Contact" className="min-h-screen bg-[#0f1321] flex items-center justify-center px-4">
      <div className="w-full max-w-4xl">
        <h2 className="text-center text-4xl font-extrabold text-white mb-8">
          Contact <span className="text-cyan-400">Me!</span>
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="bg-transparent border border-cyan-400 text-white p-3 rounded-md focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="bg-transparent border border-cyan-400 text-white p-3 rounded-md focus:outline-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="WhatsApp Number"
              className="bg-transparent border border-cyan-400 text-white p-3 rounded-md focus:outline-none"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Email Subject"
              className="bg-transparent border border-cyan-400 text-white p-3 rounded-md focus:outline-none"
              required
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            placeholder="Your Message"
            className="w-full bg-transparent border border-cyan-400 text-white p-3 rounded-md focus:outline-none"
            required
          ></textarea>

          <div className="text-center">
            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-md font-semibold transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
