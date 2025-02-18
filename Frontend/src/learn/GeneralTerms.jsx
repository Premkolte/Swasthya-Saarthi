import React from "react";
import { medicalTerms } from "./data";
import { motion } from "framer-motion";

const GeneralTerms = ({ searchTerm }) => {
  const filteredTerms = medicalTerms.general.filter(term =>
    term.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-6"
    >
      <h2 className="text-2xl font-semibold mb-2">General Terms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredTerms.map((term, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <strong>{term.term}:</strong> {term.definition}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default GeneralTerms; 