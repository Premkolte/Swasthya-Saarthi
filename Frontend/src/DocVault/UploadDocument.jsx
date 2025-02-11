import React, { useState } from "react";
import { motion } from "framer-motion";
import { uploadDocument } from "./docVaultConfig";
import { Upload, FileText, Calendar, User } from "lucide-react";

const UploadDocument = ({ userId }) => {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [examinedBy, setExaminedBy] = useState("");
  const [date, setDate] = useState("");
  const [uploadedDocs, setUploadedDocs] = useState([]);

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    try {
      await uploadDocument(file, userId);
      alert("File uploaded successfully!");
      setUploadedDocs([...uploadedDocs, { file, description, examinedBy, date }]);
    } catch (error) {
      alert("Upload failed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-400 to-purple-600 p-6">
      {/* Upload Box */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }} 
        className="w-full max-w-lg bg-white shadow-xl rounded-xl p-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Upload Document</h2>
        <form onSubmit={handleUpload} className="flex flex-col gap-4">
          {/* File Input */}
          <label className="flex items-center gap-2 border rounded-lg p-3 bg-gray-100 cursor-pointer">
            <Upload className="text-gray-500" />
            <input type="file" className="hidden" onChange={(e) => setFile(e.target.files[0])} accept="image/*,application/pdf" required />
            <span>{file ? file.name : "Select a file..."}</span>
          </label>

          {/* Description */}
          <div className="relative">
            <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required 
              className="pl-10 py-2 border rounded-lg w-full" />
          </div>

          {/* Examined By */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input type="text" placeholder="Examined By" value={examinedBy} onChange={(e) => setExaminedBy(e.target.value)} required 
              className="pl-10 py-2 border rounded-lg w-full" />
          </div>

          {/* Date */}
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required 
              className="pl-10 py-2 border rounded-lg w-full" />
          </div>

          {/* Upload Button */}
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }} 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold"
          >
            Upload Document
          </motion.button>
        </form>
      </motion.div>

      {/* Document List Section */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.3 }} 
        className="w-full max-w-lg bg-white shadow-xl rounded-xl p-6 mt-6"
      >
        <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">Uploaded Documents</h2>
        {uploadedDocs.length === 0 ? (
          <p className="text-center text-gray-500">No documents uploaded yet.</p>
        ) : (
          <ul className="divide-y divide-gray-300">
            {uploadedDocs.map((doc, index) => (
              <li key={index} className="py-2 flex justify-between items-center">
                <span className="text-gray-700">{doc.description}</span>
                <span className="text-sm text-gray-500">{doc.date}</span>
              </li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  );
};

export default UploadDocument;
