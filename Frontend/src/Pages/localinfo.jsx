import React, { useState } from "react";

const LocalHealthInfoSection = () => {
  const data = {
    hospitals: [
      { location: "Bhopal", name: "AIIMS Bhopal" },
      { location: "Mumbai", name: "Kokilaben Dhirubhai Ambani Hospital" },
      { location: "Delhi", name: "Sir Ganga Ram Hospital" },
    ],
    ambulanceServices: [
      { location: "Bhopal", name: "108 Ambulance Service" },
      { location: "Mumbai", name: "Mumbai Ambulance Service" },
      { location: "Delhi", name: "CureFast Ambulance" },
    ],
    doctors: [
      { location: "Bhopal", name: "Dr. Neha Sharma (Cardiologist)" },
      { location: "Mumbai", name: "Dr. Rajesh Mehta (Orthopedist)" },
      { location: "Delhi", name: "Dr. Anil Grover (Oncologist)" },
    ],
  };

  const [hospitalQuery, setHospitalQuery] = useState("");
  const [ambulanceQuery, setAmbulanceQuery] = useState("");
  const [doctorQuery, setDoctorQuery] = useState("");
  const [filteredHospitals, setFilteredHospitals] = useState([]);
  const [filteredAmbulances, setFilteredAmbulances] = useState([]);
  const [filteredDoctors, setFilteredDoctors] = useState([]);

  const handleHospitalSearch = () => {
    setFilteredHospitals(
      data.hospitals.filter((item) =>
        item.location.toLowerCase().includes(hospitalQuery.toLowerCase())
      )
    );
  };

  const handleAmbulanceSearch = () => {
    setFilteredAmbulances(
      data.ambulanceServices.filter((item) =>
        item.location.toLowerCase().includes(ambulanceQuery.toLowerCase())
      )
    );
  };

  const handleDoctorSearch = () => {
    setFilteredDoctors(
      data.doctors.filter((item) =>
        item.location.toLowerCase().includes(doctorQuery.toLowerCase())
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Local Health Information</h1>
      <p className="text-center mb-8 text-lg text-gray-700">
        Search for health services near you by location.
      </p>

      {/* Search Sections */}
      <div className="space-y-8">
        {/* Hospitals Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-600">Nearby Hospitals</h2>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-lg w-full focus:ring focus:ring-blue-400"
            placeholder="Enter location for hospitals"
            value={hospitalQuery}
            onChange={(e) => setHospitalQuery(e.target.value)}
          />
          <button
            onClick={handleHospitalSearch}
            className="bg-blue-600 text-white mt-3 px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Search Hospitals
          </button>
          <ul className="mt-4 list-disc ml-6 text-gray-700">
            {filteredHospitals.length > 0 ? (
              filteredHospitals.map((item, index) => <li key={index}>{item.name}</li>)
            ) : (
              <li>No hospitals found for this location.</li>
            )}
          </ul>
        </div>

        {/* Ambulance Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-red-600">Ambulance Services</h2>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-lg w-full focus:ring focus:ring-red-400"
            placeholder="Enter location for ambulance services"
            value={ambulanceQuery}
            onChange={(e) => setAmbulanceQuery(e.target.value)}
          />
          <button
            onClick={handleAmbulanceSearch}
            className="bg-red-600 text-white mt-3 px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Search Ambulance
          </button>
          <ul className="mt-4 list-disc ml-6 text-gray-700">
            {filteredAmbulances.length > 0 ? (
              filteredAmbulances.map((item, index) => <li key={index}>{item.name}</li>)
            ) : (
              <li>No ambulance services found for this location.</li>
            )}
          </ul>
        </div>

        {/* Doctors Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-green-600">Available Doctors</h2>
          <input
            type="text"
            className="border border-gray-300 p-2 rounded-lg w-full focus:ring focus:ring-green-400"
            placeholder="Enter location for doctors"
            value={doctorQuery}
            onChange={(e) => setDoctorQuery(e.target.value)}
          />
          <button
            onClick={handleDoctorSearch}
            className="bg-green-600 text-white mt-3 px-4 py-2 rounded-lg hover:bg-green-700"
          >
            Search Doctors
          </button>
          <ul className="mt-4 list-disc ml-6 text-gray-700">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((item, index) => <li key={index}>{item.name}</li>)
            ) : (
              <li>No doctors found for this location.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LocalHealthInfoSection;
