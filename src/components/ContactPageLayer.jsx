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
    <section className="min-h-screen px-4 sm:px-8 lg:px-16 py-20 bg-hero-gradient">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary-gradient mb-2">
            Get in Touch
          </h2>
          <p className="text-custom-gray-700 max-w-xl mx-auto">
            Have questions, feedback, or need support? Drop us a message and we’ll get back to you soon.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="glassmorphism p-8 rounded-2xl space-y-6 shadow-custom-green-lg floating-card"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-custom-gray-700 mb-1">
              Your Name
            </label>
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
            <label htmlFor="email" className="block text-sm font-medium text-custom-gray-700 mb-1">
              Email Address
            </label>
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
            <label htmlFor="message" className="block text-sm font-medium text-custom-gray-700 mb-1">
              Your Message
            </label>
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full text-white font-semibold px-6 py-3 rounded-md transition duration-300"
            style={{
              background: 'linear-gradient(to right, var(--custom-green-500), var(--custom-green-600))',
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPageLayer;
