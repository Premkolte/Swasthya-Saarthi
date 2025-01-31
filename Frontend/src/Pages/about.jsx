import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-blue-600 mb-6">
          About Swasthya Saarthi
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Swasthya Saarthi is your AI-powered healthcare companion, designed to simplify access to healthcare information. From checking symptoms to scanning prescriptions and receiving real-time health alerts, we empower you to manage your health effortlessly in your preferred language.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-500 mb-3">
              Our Vision
            </h2>
            <p className="text-gray-600">
              To make healthcare information accessible and understandable for everyone by leveraging AI and localized solutions, breaking down barriers of language and complexity.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-500 mb-3">
              Key Features
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Personalized Health Dashboard</li>
              <li>Smart Symptom Analyzer</li>
              <li>Localized Healthcare Information</li>
              <li>Multilingual Voice Assistance</li>
              <li>Medication Scanning & Suggestions</li>
              <li>Emergency Health Tutorials</li>
              <li>Virtual Health Assistant (Saarthi Bot)</li>
            </ul>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-500 mb-3">
              Our Technology
            </h2>
            <p className="text-gray-600">
              We use modern technologies such as React, Node.js, TensorFlow, and AI-driven Natural Language Processing (NLP). Our backend is scalable and secure, ensuring a seamless user experience.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-blue-500 mb-3">
              Our Impact
            </h2>
            <p className="text-gray-600">
              Swasthya Saarthi simplifies healthcare, promotes proactive health management, and enhances accessibility through localized, culturally relevant services. We help users make informed health decisions and lead healthier lives.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-extrabold text-blue-600 mb-3">
            Join Us on Our Journey
          </h2>
          <p className="text-gray-700">
            Experience healthcare like never before with Swasthya Saarthi—your trusted health assistant, empowering you to live a healthier, informed life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
