import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const API_KEY = "pub_672007f5a5023ac7b067e69ad0491c0256297"; // Replace with your NewsData.io API Key
const NEWS_URL = `https://newsdata.io/api/1/news?country=in&category=health&apikey=${API_KEY}`;

const HealthNewsPage = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(NEWS_URL);
        if (response.data.results) {
          setNewsData(response.data.results.slice(0, 3)); // Display 3 news articles
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
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
            {news.image_url && (
              <img
                src={news.image_url}
                alt={news.title}
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
                to={news.link}
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
