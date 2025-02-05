import React from "react";

const MedicalTermsSection = () => {
  const medicalTerms = [
    {
      term: "Cardiology",
      definition: "The study of the heart and its functions.",
    },
    {
      term: "Neurology",
      definition: "Study of the nervous system and brain disorders.",
    },
    {
      term: "Oncology",
      definition: "The branch of medicine focused on cancer diagnosis and treatment.",
    },
    {
      term: "Pediatrics",
      definition: "The medical care of infants, children, and adolescents.",
    },
    {
      term: "Gynecology",
      definition: "Focuses on the female reproductive system and its disorders.",
    },
    {
      term: "Orthopedics",
      definition: "Medical branch concerned with bones, joints, and muscles.",
    },
    {
      term: "Dermatology",
      definition: "The study of skin, its diseases, and treatments.",
    },
    {
      term: "Endocrinology",
      definition: "Deals with hormones and the endocrine system.",
    },
    {
      term: "Gastroenterology",
      definition: "Focuses on the digestive system and its disorders.",
    },
    {
      term: "Radiology",
      definition: "Medical field that uses imaging techniques for diagnosis.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-10">
      <h1 className="text-4xl font-bold text-center mb-8">Learn Medical Terms</h1>
      <p className="text-center mb-4 text-lg text-gray-700">
        Discover important medical terms in a simple and fascinating way!
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicalTerms.map((termObj, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              {termObj.term}
            </h2>
            <p className="text-lightblue-600 text-base">
              {termObj.definition}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalTermsSection;
