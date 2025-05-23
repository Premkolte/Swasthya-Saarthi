import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const API_KEY = "9966d80f968ce7a9b06e0ca725fea8e7"; // Replace with valid GNews API Key
const NEWS_URL = `https://gnews.io/api/v4/top-headlines?category=health&lang=en&country=in&apikey=${API_KEY}`;

const HealthNewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryCount, setRetryCount] = useState(3);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(NEWS_URL);
        console.log("API Response:", response.data);
  
        if (response.data.articles && response.data.articles.length > 0) {
          setNewsData(response.data.articles.slice(0, 3)); // Display 3 news articles
          setError("");
          setLoading(false); // ✅ Set loading to false on success
        } else {
          setError("No articles found.");
          setLoading(false);
        }
      } catch (err) {
        if (err.response && err.response.status === 429 && retryCount > 0) {
          console.warn(`Rate limit hit. Retrying in 5 seconds... (${retryCount} retries left)`);
          setRetryCount((prev) => prev - 1);
          setTimeout(fetchNews, 5000);
          return;
        } else {
          console.error("Error fetching news:", err);
          setError("Failed to fetch news. Please try again later.");
          setLoading(false); // ✅ Ensure loading is set to false on error
        }
      }
    };
  
    fetchNews();
  }, []); 
  

  if (loading) {
    return (
      <motion.div
        className="text-center p-6 text-xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Loading latest health news...
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        className="text-center p-6 text-red-600 text-xl font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {error}
      </motion.div>
    );
  }

  return (
    <motion.div
      className="container mx-auto p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Latest Health News in India
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newsData.map((news, index) => (
          <motion.div
            key={index}
            className="border p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300"
            whileHover={{ scale: 1.02 }}
          >
            {news.image ? (
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover rounded-md mb-4"
                onError={(e) => { e.target.src = "https://via.placeholder.com/300"; }}
              />
            ) : (
              <img
                src="https://via.placeholder.com/300"
                alt="Default News"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            )}

            <h3 className="text-xl font-semibold">{news.title}</h3>
            <p className="text-gray-600 mt-2">{news.description}</p>
            <motion.div
              className="mt-4 text-center"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={news.url}
                target="_blank"
                className="text-blue-600 font-semibold text-lg hover:underline"
              >
                Read More →
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default HealthNewsPage;
