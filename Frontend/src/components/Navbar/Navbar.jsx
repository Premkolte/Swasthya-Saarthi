import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdMenu } from "react-icons/md";
import { FaChevronDown, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import { toast } from "react-toastify";
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
  const dropdownRef = useRef(null);
  const { user, logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = async () => {
    try {
      const result = await logoutUser();
      toast.success(result.message);
      navigate("/signin");
    } catch (error) {
      toast.error(error.message);
    }
  };

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
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <span className="font-medium">{user.name}</span>
                  <FaChevronDown />
                </div>
              ) : (
                <>
                  <FaUserCircle className="text-2xl text-blue-600" />
                  <FaChevronDown />
                </>
              )}
            </button>
            {dropdownOpen && (
              <motion.ul
                ref={dropdownRef}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden"
              >
                {user ? (
                  <>
                    <li className="px-4 py-3 border-b border-gray-100">
                      <p className="text-sm text-gray-500">Signed in as</p>
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {user.email}
                      </p>
                    </li>
                    <li>
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <FaUserCircle />
                        <span>Dashboard</span>
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 flex items-center space-x-2"
                      >
                        <FaSignOutAlt />
                        <span>Sign out</span>
                      </button>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link
                        to="/signin"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Sign in
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/signup"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Create account
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
              {user ? (
                <>
                  <li className="pt-4 border-t border-gray-200">
                    <Link
                      to="/dashboard"
                      className="block text-gray-700 font-medium hover:text-blue-600 transition"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-red-600 font-medium hover:text-red-700 transition"
                    >
                      Sign out
                    </button>
                  </li>
                </>
              ) : (
                <li className="pt-4 border-t border-gray-200">
                  <Link
                    to="/signin"
                    className="block text-blue-600 font-medium hover:text-blue-700 transition"
                  >
                    Sign in
                  </Link>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navbar;
