import React from "react";

const VideoSection = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Health Videos</h1>
      <p className="text-center mb-4 text-lg text-gray-700">
        Explore informative health-related videos curated for your knowledge and well-being.
      </p>
      
      <div className="space-y-12">
        {/* Video 1 */}
        <div className="flex items-start gap-6">
          <div className="w-1/3 bg-gray-300 aspect-w-16 aspect-h-9 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Video 1 Placeholder</p>
          </div>
          <div className="w-2/3">
            <h2 className="font-semibold text-xl">Understanding Diabetes</h2>
            <p className="text-gray-600 mt-2">
              Learn the basics of diabetes, its symptoms, and effective ways to manage it.
            </p>
          </div>
        </div>

        {/* Video 2 */}
        <div className="flex items-start gap-6">
          <div className="w-1/3 bg-gray-300 aspect-w-16 aspect-h-9 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Video 2 Placeholder</p>
          </div>
          <div className="w-2/3">
            <h2 className="font-semibold text-xl">Tips for a Balanced Diet</h2>
            <p className="text-gray-600 mt-2">
              Discover practical tips for maintaining a healthy and balanced diet.
            </p>
          </div>
        </div>

        {/* Video 3 */}
        <div className="flex items-start gap-6">
          <div className="w-1/3 bg-gray-300 aspect-w-16 aspect-h-9 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Video 3 Placeholder</p>
          </div>
          <div className="w-2/3">
            <h2 className="font-semibold text-xl">Mental Health Awareness</h2>
            <p className="text-gray-600 mt-2">
              Understand the importance of mental health and ways to seek support.
            </p>
          </div>
        </div>

        {/* Video 4 */}
        <div className="flex items-start gap-6">
          <div className="w-1/3 bg-gray-300 aspect-w-16 aspect-h-9 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Video 4 Placeholder</p>
          </div>
          <div className="w-2/3">
            <h2 className="font-semibold text-xl">Exercise for Beginners</h2>
            <p className="text-gray-600 mt-2">
              Simple and effective exercises to help you stay fit and active.
            </p>
          </div>
        </div>

        {/* Video 5 */}
        <div className="flex items-start gap-6">
          <div className="w-1/3 bg-gray-300 aspect-w-16 aspect-h-9 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Video 5 Placeholder</p>
          </div>
          <div className="w-2/3">
            <h2 className="font-semibold text-xl">Heart Health Tips</h2>
            <p className="text-gray-600 mt-2">
              Learn how to maintain a healthy heart with expert advice.
            </p>
          </div>
        </div>

        {/* Video 6 */}
        <div className="flex items-start gap-6">
          <div className="w-1/3 bg-gray-300 aspect-w-16 aspect-h-9 rounded-md flex items-center justify-center">
            <p className="text-gray-500">Video 6 Placeholder</p>
          </div>
          <div className="w-2/3">
            <h2 className="font-semibold text-xl">Sleep Hygiene Essentials</h2>
            <p className="text-gray-600 mt-2">
              Tips and tricks to improve your sleep quality and overall health.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;

