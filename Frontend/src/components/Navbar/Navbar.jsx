import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import GoogleTranslate from "./Language.jsx";
import TextToSpeech from "./TexttoSpeach.jsx";
import ThemeChange from "./Themechange.jsx";
import logo from "../../../public/assets/Swasthya-Saarthi.png";

// Navbar Menu Items
const NavbarMenu = [
  { id: 1, title: "Home", link: "/" },
  { id: 2, title: "Meds Info", link: "/meds-info" },
  { id: 3, title: "Symptom Checker", link: "/symptom-checker" },
  { id: 4, title: "Contact Us", link: "/contact" },
  { id: 5, title: "Local Health Info", link: "/local-health" },
  { id: 6, title: "Medical Records", link: "/medical-records" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <>
      {/* ✅ Accessibility Features (Above Navbar) */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gray-100 py-2 px-6 flex justify-between items-center text-sm"
      >
        <div className="flex space-x-4">
          <ThemeChange />
          <TextToSpeech />
        </div>
        <GoogleTranslate />
      </motion.div>

      {/* ✅ Navbar Section */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-md sticky top-0 z-50"
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Left: Logo */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-gray-700">Swasthya Saarthi</span>
          </div>

          {/* Center: Menu */}
          <ul className="hidden lg:flex items-center space-x-6">
            {NavbarMenu.map((item) => (
              <li key={item.id} className="relative group">
                <Link
                  to={item.link}
                  className="text-gray-700 font-medium hover:text-blue-600 transition relative after:block after:h-[2px] after:w-0 after:bg-blue-600 after:transition-all after:duration-300 group-hover:after:w-full"
                >
                  {item.title}
                </Link>
              </li>
            ))}

            {/* Dropdown Example */}
            <li className="relative group">
              <button
                className="text-gray-700 font-medium hover:text-blue-600 flex items-center space-x-1"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>More</span> <FaChevronDown />
              </button>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <li>
                    <Link
                      to="/resources"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Resources
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/faq"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      FAQ
                    </Link>
                  </li>
                </motion.ul>
              )}
            </li>
          </ul>

          {/* Right: Sign In Button */}
          <div className="hidden lg:flex">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <MdMenu className="text-3xl text-gray-700" />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-100 shadow-md"
          >
            <ul className="py-4 px-6 space-y-4">
              {NavbarMenu.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.link}
                    className="block text-gray-700 font-medium hover:text-blue-600 transition"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            <button className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition">
              Sign In
            </button>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
