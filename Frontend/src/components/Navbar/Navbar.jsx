import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { FaChevronDown, FaUserCircle } from "react-icons/fa";
import GoogleTranslate from "./Language.jsx";
import TextToSpeech from "./TexttoSpeach.jsx";
import ThemeChange from "./Themechange.jsx";
import logo from "../../../public/assets/Swasthya-Saarthi.png";

const NavbarMenu = [
  { id: 1, title: "Meds Info", link: "/meds-info" },
  { id: 2, title: "Symptom Checker", link: "/symptom-checker" },
  { id: 3, title: "Contact Us", link: "/contact" },
  { id: 4, title: "Local Health Info", link: "/local-health" },
  { id: 5, title: "Medical Records", link: "/medical-records" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null); // Simulated user state
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
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

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-md sticky top-0 z-50"
      >
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <Link to="/" className="text-xl font-bold text-gray-700">
              Swasthya Saarthi
            </Link>
          </div>

          <ul className="hidden lg:flex items-center space-x-12">
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
          </ul>

          <div className="relative hidden lg:flex items-center">
            <button
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {user ? (
                <img
                  src={user.profilePic}
                  alt="Profile"
                  className="w-8 h-8 rounded-full border"
                />
              ) : (
                <FaUserCircle className="text-2xl text-blue-600" />
              )}
              <FaChevronDown />
            </button>
            {dropdownOpen && (
              <motion.ul
                ref={dropdownRef} // Attach the ref here
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-lg overflow-hidden"
              >
                {user ? (
                  <li>
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/signin"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Register
                      </Link>
                    </li>
                  </>
                )}
              </motion.ul>
            )}
          </div>

          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <MdMenu className="text-3xl text-gray-700" />
            </button>
          </div>
        </div>

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
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
