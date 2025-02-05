import React from "react";

const EmergencyContactSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Emergency Contacts</h1>
      <p className="text-center mb-4 text-lg text-gray-700">
        Here is a list of important emergency contacts that can help in critical situations.
      </p>

      <div className="space-y-12">
        {/* Emergency Contact 1 */}
        <div className="flex items-start gap-6">
          <div className="w-1/3 bg-gray-300 aspect-w-16 aspect-h-9 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Doctor's Contact</p>
          </div>
          <div className="w-2/3">
            <h2 className="font-semibold text-xl">Dr. John Doe</h2>
            <p className="text-gray-600 mt-2">
              A trusted physician available for urgent medical advice.
            </p>
            <p className="text-gray-700 mt-2">Phone: +123 456 7890</p>
          </div>
        </div>

        {/* Emergency Contact 2 */}
        <div className="flex items-start gap-6">
          <div className="w-1/3 bg-gray-300 aspect-w-16 aspect-h-9 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Ambulance</p>
          </div>
          <div className="w-2/3">
            <h2 className="font-semibold text-xl">City Ambulance Service</h2>
            <p className="text-gray-600 mt-2">
              Immediate response service for accidents or health emergencies.
            </p>
            <p className="text-gray-700 mt-2">Phone: +987 654 3210</p>
          </div>
        </div>

        {/* Emergency Contact 3 */}
        <div className="flex items-start gap-6">
          <div className="w-1/3 bg-gray-300 aspect-w-16 aspect-h-9 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Fire Department</p>
          </div>
          <div className="w-2/3">
            <h2 className="font-semibold text-xl">Fire Department</h2>
            <p className="text-gray-600 mt-2">
              Quick response in case of fire or any related accidents.
            </p>
            <p className="text-gray-700 mt-2">Phone: +111 222 3333</p>
          </div>
        </div>

        {/* Emergency Contact 4 */}
        <div className="flex items-start gap-6">
          <div className="w-1/3 bg-gray-300 aspect-w-16 aspect-h-9 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Police Department</p>
          </div>
          <div className="w-2/3">
            <h2 className="font-semibold text-xl">Local Police Station</h2>
            <p className="text-gray-600 mt-2">
              For immediate police assistance in emergency situations.
            </p>
            <p className="text-gray-700 mt-2">Phone: +444 555 6666</p>
          </div>
        </div>

        {/* Emergency Contact 5 */}
        <div className="flex items-start gap-6">
          <div className="w-1/3 bg-gray-300 aspect-w-16 aspect-h-9 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Pharmacy</p>
          </div>
          <div className="w-2/3">
            <h2 className="font-semibold text-xl">Pharmacy - Quick Med</h2>
            <p className="text-gray-600 mt-2">
              A 24/7 pharmacy for essential medicines during emergencies.
            </p>
            <p className="text-gray-700 mt-2">Phone: +555 666 7777</p>
          </div>
        </div>

        {/* Emergency Contact 6 */}
        <div className="flex items-start gap-6">
          <div className="w-1/3 bg-gray-300 aspect-w-16 aspect-h-9 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Mental Health Support</p>
          </div>
          <div className="w-2/3">
            <h2 className="font-semibold text-xl">Mental Health Helpline</h2>
            <p className="text-gray-600 mt-2">
              Provides immediate support for mental health issues or crises.
            </p>
            <p className="text-gray-700 mt-2">Phone: +777 888 9999</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyContactSection;
