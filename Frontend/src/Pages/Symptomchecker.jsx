import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SymptomChecker = () => {
  const [symptoms, setSymptoms] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return;

    try {
      setLoading(true);
      // Validate input
      if (!symptoms) {
        throw new Error("Please enter your symptoms.");
      }

      // Handle file upload if needed
      if (file) {
        // Implement file upload logic here (e.g., to a server or cloud storage)
        console.log("File ready for upload:", file);
      }

      // Simulate form submission
      toast.success("Symptoms submitted successfully!");
      // Reset form
      setSymptoms('');
      setFile(null);
    } catch (error) {
      toast.error(error.message || "Failed to submit symptoms.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <ToastContainer position="top-center" autoClose={3000} />
      <h1 className="text-3xl font-bold mb-4">Symptom Checker</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Describe your symptoms:</label>
          <textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            rows="4"
            className="w-full border rounded-lg p-2"
            placeholder="Enter your symptoms here..."
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Upload a file (optional):</label>
          <input
            type="file"
            onChange={handleFileChange}
            className="w-full border rounded-lg p-2"
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 rounded-lg font-semibold text-white ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Symptoms"}
        </button>
      </form>
    </div>
  );
};

export default SymptomChecker;