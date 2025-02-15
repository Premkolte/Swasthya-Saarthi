// src/MedsInfo/Scanner.jsx
import React, { useState } from "react";
import Tesseract from "tesseract.js";

const Scanner = ({ onExtractedText }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
      extractText(imageURL);
    }
  };

  const extractText = (imageURL) => {
    setLoading(true);
    Tesseract.recognize(
      imageURL,
      "eng",
      {
        logger: (m) => console.log(m),
      }
    )
      .then(({ data: { text } }) => {
        onExtractedText(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error("OCR Error:", err);
        setLoading(false);
      });
  };

  return (
    <div className="scanner">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />
      {selectedImage && <img src={selectedImage} alt="Selected" className="w-full mb-4" />}
      {loading && <p>Extracting text... Please wait.</p>}
    </div>
  );
};

export default Scanner;
