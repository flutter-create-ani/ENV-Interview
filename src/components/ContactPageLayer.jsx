import React, { useState } from 'react';

const ContactPageLayer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! 🚀');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="min-h-screen px-4 sm:px-8 lg:px-16 py-20 bg-custom-gray-50">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-custom-gray-900 mb-2">Get in Touch</h2>
          <p className="text-custom-gray-500">
            Have questions, feedback, or need support? Drop us a message and we’ll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="floating-card p-8 rounded-2xl space-y-6 shadow-custom-green"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-custom-gray-700 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-custom-gray-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-[var(--custom-green-500)] outline-none"
              placeholder="John Doe"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-custom-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-custom-gray-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-[var(--custom-blue-500)] outline-none"
              placeholder="you@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-custom-gray-700 mb-1">Your Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-custom-gray-200 rounded-md p-3 text-sm focus:ring-2 focus:ring-[var(--custom-green-400)] outline-none"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="bg-[var(--custom-green-600)] hover:bg-[var(--custom-green-700)] text-white font-semibold px-6 py-3 rounded-md transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPageLayer;
