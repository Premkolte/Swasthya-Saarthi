import React from "react";
import { NavbarMenu } from "../../mockData/data.js";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import logo from "../../../public/assets/Swasthya-Saarthi.png";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import GoogleTranslate  from "./Language.jsx";
import TextToSpeech from "./TexttoSpeach.jsx";
import ThemeChange from "./Themechange.jsx";
import { FaHighlighter, FaTextHeight } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  // const [showTextResizer, setShowTextResizer] = useState(false);
  return (
    <>
      
    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      > 
        <div className="flex items-center justify-between">
        <div className="flex m-2 ml-2 space-x-4">
        <FaHighlighter size={24} className="cursor-pointer hover:text-black" title="Highlight Text" />
            <FaTextHeight
              size={24}
              className="cursor-pointer hover:text-black"
              title="Text Resize"
              onClick={() => setShowTextResizer(true)} // Show the Text Resizer popup
            />
            
            <ThemeChange/>
            <TextToSpeech/>
          </div>
          <div>
            <GoogleTranslate/>
          </div>
        </div>

        <div className="container flex justify-between items-center py-6">
          
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            {logo && <img src={logo} alt="logo" className="w-10 h-10" />}
            <p>Swasthya Saarthi</p>
          </div>

          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block text-gray-600 text-sm xl:text-base py-1 px-2 xl:px-3 hover:text-secondary transition-all duration-300 font-semibold"
                    >
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CTA Button section */}
          <div className="hidden lg:block space-x-6">
            <button className="font-semibold">Sign in</button>
            <button className="text-white bg-secondary font-semibold rounded-full px-6 py-2 ">
              Register
            </button>
          </div>
          {/* Mobile Hamburger Menu */}
          <div className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>

      {/* mobile Sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
