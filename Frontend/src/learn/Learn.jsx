import React, { useState } from "react";
import GeneralTerms from "./GeneralTerms";
import DiseaseTerms from "./DiseaseTerms";
import { motion } from "framer-motion";

const Learn = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h1 className="text-3xl font-bold mb-4">Learn Medical Terminology</h1>
      <input
        type="text"
        placeholder="Search for terms..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border rounded-lg w-full"
      />
      <GeneralTerms searchTerm={searchTerm} />
      <DiseaseTerms searchTerm={searchTerm} />
    </motion.div>
  );
};

export default Learn; 