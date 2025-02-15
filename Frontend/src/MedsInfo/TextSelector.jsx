// src/MedsInfo/TextSelector.jsx
import React, { useState } from "react";
import axios from "axios";

const TextSelector = ({ extractedText }) => {
  const [selectedText, setSelectedText] = useState("");
  const [medicineInfo, setMedicineInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTextClick = (word) => {
    setSelectedText(word);
    fetchMedicineInfo(word);
  };

  const fetchMedicineInfo = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.googleapis.com/customsearch/v1?q=${query}+medicine+uses+side+effects+dosage&key=YOUR_GOOGLE_API_KEY&cx=YOUR_CUSTOM_SEARCH_ENGINE_ID`
      );
      if (response.data.items && response.data.items.length > 0) {
        setMedicineInfo(response.data.items[0].snippet);
      } else {
        setMedicineInfo("No information found.");
      }
    } catch (error) {
      console.error("Error fetching medicine info:", error);
      setMedicineInfo("Error fetching information.");
    }
    setLoading(false);
  };

  return (
    <div className="text-selector">
      <h3>Extracted Text:</h3>
      <div className="border p-2 my-2">
        {extractedText.split(" ").map((word, index) => (
          <span
            key={index}
            className="cursor-pointer text-blue-600 hover:underline"
            onClick={() => handleTextClick(word)}
          >
            {word}{" "}
          </span>
        ))}
      </div>
      {loading ? (
        <p>Fetching details...</p>
      ) : (
        medicineInfo && (
          <div className="medicine-info border p-2 mt-2">
            <h4>Medicine Information:</h4>
            <p>{medicineInfo}</p>
          </div>
        )
      )}
    </div>
  );
};

export default TextSelector;
