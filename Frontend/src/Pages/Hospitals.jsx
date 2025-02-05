import React, { useState, useEffect } from 'react';


const Hospitals = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [city, setCity] = useState('');
  const [location, setLocation] = useState('');
  const [filteredHospitals, setFilteredHospitals] = useState([]);

  // Dummy hospital data for illustration with city field added
  const dummyHospitals = [
    {
      id: 1,
      name: "City Hospital",
      address: "123 Main Street, New Delhi",
      contact: "+91 9876543210",
      city: "new-delhi",
      directionLink: "#",
    },
    {
      id: 2,
      name: "Metro Hospital",
      address: "456 Central Ave, Mumbai",
      contact: "+91 9123456789",
      city: "mumbai",
      directionLink: "#",
    },
    {
      id: 3,
      name: "Urban Care",
      address: "789 High Street, Bangalore",
      contact: "+91 9988776655",
      city: "bangalore",
      directionLink: "#",
    }
  ];

  // Initially show all hospitals
  useEffect(() => {
    setFilteredHospitals(dummyHospitals);
  }, []);

  // Handle search and filtering
  const handleSearch = () => {
    const filtered = dummyHospitals.filter((hospital) => {
      const nameMatch = hospital.name.toLowerCase().includes(searchQuery.toLowerCase());
      const cityMatch = city ? hospital.city.toLowerCase() === city.toLowerCase() : true;
      const locationMatch = location ? hospital.address.toLowerCase().includes(location.toLowerCase()) : true;
      return nameMatch && cityMatch && locationMatch;
    });
    setFilteredHospitals(filtered);
  };

  return (
    <div className="min-h-screen bg-blue-50">
     
      <div className="container mx-auto py-8">
        {/* Search Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800 mb-4 text-center">
            Hospitals
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Search hospitals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-1/3 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full md:w-1/4 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select City</option>
              <option value="new-delhi">New Delhi</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
            </select>
            <input
              type="text"
              placeholder="Enter location..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full md:w-1/3 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Search
            </button>
          </div>
        </div>

        {/* Hospitals Listing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHospitals.length > 0 ? (
            filteredHospitals.map((hospital) => (
              <div
                key={hospital.id}
                className="bg-white p-6 rounded-lg shadow-md border border-blue-100"
              >
                <h2 className="text-xl font-bold text-blue-800">
                  {hospital.name}
                </h2>
                <p className="text-gray-600 mt-2">{hospital.address}</p>
                <p className="text-gray-600 mt-1">
                  <span className="font-semibold">Contact:</span> {hospital.contact}
                </p>
                <div className="mt-4 flex space-x-4">
                  <a
                    href={hospital.directionLink}
                    className="text-blue-600 hover:underline"
                  >
                    Get Direction
                  </a>
                  <button className="text-blue-600 hover:underline">
                    Contact
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600">No hospitals found.</p>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default Hospitals;
