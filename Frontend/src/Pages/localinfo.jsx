import React, { useState } from "react";
import axios from "axios";

const LocalHealthInfo = () => {
  const [hospitalSearch, setHospitalSearch] = useState("");
  const [ambulanceSearch, setAmbulanceSearch] = useState("");
  const [doctorSearch, setDoctorSearch] = useState("");
  const [results, setResults] = useState([]);

  const API_KEY = "YOUR_GOOGLE_API_KEY_HERE"; // Replace with your actual API key

  const handleSearch = async (type) => {
    let keyword;
    if (type === "hospital") keyword = hospitalSearch;
    else if (type === "ambulance") keyword = ambulanceSearch;
    else keyword = doctorSearch;

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/textsearch/json`,
        {
          params: {
            query: `${keyword} ${type}`,
            key: API_KEY,
          },
        }
      );

      setResults(response.data.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResults([]);
    }
  };

  return (
    <div className="min-h-screen p-8 bg-blue-50">
      <h1 className="text-4xl font-bold text-center mb-10">Local Health Information</h1>
      <div className="space-y-8">
        {/* Hospital Search */}
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Search Nearby Hospitals</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter location or keyword..."
              value={hospitalSearch}
              onChange={(e) => setHospitalSearch(e.target.value)}
              className="w-full border rounded-md p-2"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => handleSearch("hospital")}
            >
              Search
            </button>
          </div>
        </div>

        {/* Ambulance Search */}
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Search Ambulance Services</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter location or keyword..."
              value={ambulanceSearch}
              onChange={(e) => setAmbulanceSearch(e.target.value)}
              className="w-full border rounded-md p-2"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => handleSearch("ambulance")}
            >
              Search
            </button>
          </div>
        </div>

        {/* Doctor Search */}
        <div className="p-6 bg-white rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Search Nearby Doctors</h2>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter location or keyword..."
              value={doctorSearch}
              onChange={(e) => setDoctorSearch(e.target.value)}
              className="w-full border rounded-md p-2"
            />
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={() => handleSearch("doctor")}
            >
              Search
            </button>
          </div>
        </div>

        {/* Results Section */}
        {results.length > 0 && (
          <div className="mt-8 p-6 bg-green-50 rounded-md">
            <h2 className="text-2xl font-semibold mb-4">Search Results:</h2>
            <ul className="list-disc ml-6 space-y-2">
              {results.map((result, index) => (
                <li key={index} className="text-lg text-gray-800">
                  <span className="font-semibold">{result.name}</span> - {result.formatted_address}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocalHealthInfo;
