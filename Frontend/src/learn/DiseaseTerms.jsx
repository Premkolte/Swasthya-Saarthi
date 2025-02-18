import React from "react";
import { medicalTerms } from "./data";
import { motion } from "framer-motion";

const DiseaseTerms = ({ searchTerm }) => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold mb-2">Disease-Specific Terms</h2>
      {Object.keys(medicalTerms.diseases).map((category) => {
        const filteredTerms = medicalTerms.diseases[category].filter(term =>
          term.term.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
          <div key={category} className="mb-4">
            <h3 className="text-xl font-bold">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredTerms.map((term, index) => (
                <div key={index} className="p-4 border rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  <strong>{term.term}:</strong> {term.definition}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </motion.div>
  );
};

export default DiseaseTerms; 