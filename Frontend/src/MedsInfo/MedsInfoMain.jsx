// src/MedsInfo/MedsInfoMain.jsx
import React, { useState } from "react";
import Scanner from "./Scanner";
import TextSelector from "./TextSelector";

const MedsInfoMain = () => {
  const [extractedText, setExtractedText] = useState("");

  const handleExtractedText = (text) => {
    setExtractedText(text);
  };

  return (
    <div className="meds-info-container p-4">
      <h2 className="text-2xl font-bold mb-4">Meds Info Scanner</h2>
      <Scanner onExtractedText={handleExtractedText} />
      {extractedText && <TextSelector extractedText={extractedText} />}
    </div>
  );
};

export default MedsInfoMain;
