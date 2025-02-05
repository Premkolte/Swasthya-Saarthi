import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  FaHeartbeat, FaHospital, FaSyringe, FaPills, 
  FaNotesMedical, FaVideo, FaBookMedical, FaNewspaper 
} from "react-icons/fa6";

const featureList = [
  {
    id: 1,
    name: "Health Monitoring",
    icon: <FaHeartbeat />,
    color: "#0063ff",
    delay: 0.2,
    route: "/health-monitoring",
  },
  {
    id: 2,
    name: "Nearby Hospitals",
    icon: <FaHospital />,
    color: "#00c986",
    delay: 0.3,
    route: "/hospitals",
  },
  {
    id: 3,
    name: "Vaccination Drives",
    icon: <FaSyringe />,
    color: "#922aee",
    delay: 0.4,
    route: "/vaccination-drives",
  },
  {
    id: 4,
    name: "Medication Reminders",
    icon: <FaPills />,
    color: "#ea7516",
    delay: 0.5,
    route: "/medication-reminders",
  },
  {
    id: 5,
    name: "Medical Records",
    icon: <FaNotesMedical />,
    color: "#075267",
    delay: 0.6,
    route: "/medical-records",
  },
  {
    id: 6,
    name: "Local Health Info",
    icon: <FaHospital />,
    color: "#986d1d",
    delay: 0.7,
    route: "/local-health",
  },
  {
    id: 7,
    name: "Emergency Contacts",
    icon: <FaNotesMedical />,
    color: "#b93838",
    delay: 0.8,
    route: "/emergency-contacts",
  },
  {
    id: 8,
    name: "Video Tutorials",
    icon: <FaVideo />,
    color: "#ff6600",
    delay: 0.9,
    route: "/video-tutorials",
  },
  {
    id: 9,
    name: "Medical Terms Learn",
    icon: <FaBookMedical />,
    color: "#008080",
    delay: 1.0,
    route: "/medical-terms",
  },
  {
    id: 10,
    name: "Health News",
    icon: <FaNewspaper />,
    color: "#3333cc",
    delay: 1.1,
    route: "/health-news",
  },
  {
    id: 11,
    name: "See All Features",
    icon: <FaNotesMedical />,
    color: "#464646",
    delay: 1.2,
    route: "/features",
  },
];

const FeatureCard = () => {
  return (
    <div className="container py-14 md:py-24">
      {/* Header Section */}
      <div className="space-y-4 p-6 text-center max-w-[650px] mx-auto mb-5">
        <h1 className="uppercase font-semibold text-orange-500">
          Our Key Features
        </h1>
        <p className="font-semibold text-3xl">
          Explore Swasthya Saarthi's Offerings
        </p>
      </div>
      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {featureList.map((feature) => (
          <Link to={feature.route} key={feature.id}>
            <motion.div
              initial={{ opacity: 0, x: -200 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                delay: feature.delay,
              }}
              className="border rounded-lg border-secondary/20 p-4 flex justify-start items-center gap-4 hover:scale-105 hover:shadow-xl duration-200 cursor-pointer"
            >
              <div
                style={{
                  color: feature.color,
                  backgroundColor: feature.color + "20",
                }}
                className="w-10 h-10 rounded-md flex justify-center items-center"
              >
                {feature.icon}
              </div>
              <p>{feature.name}</p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FeatureCard;
