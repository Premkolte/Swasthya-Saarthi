import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-600 text-center mb-8">
          Contact Us
        </h1>

        <p className="text-lg text-gray-700 text-center mb-12">
          We'd love to hear from you! Reach out for any queries, feedback, or partnership opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-500 mb-6">
              Send Us a Message
            </h2>
            <form action="#" method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 p-3 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Type your message here"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-500 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              Feel free to reach us via the following contact details.
            </p>

            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="text-blue-500 font-bold mr-2">📍</span>
                <span>123 Health Street, Wellness City, India</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 font-bold mr-2">📞</span>
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 font-bold mr-2">✉️</span>
                <span>support@swasthya-saarthi.com</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-blue-500 mt-8 mb-3">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-500 hover:text-blue-700">
                🌐 Website
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                🔵 LinkedIn
              </a>
              <a href="#" className="text-blue-500 hover:text-blue-700">
                🐦 Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
