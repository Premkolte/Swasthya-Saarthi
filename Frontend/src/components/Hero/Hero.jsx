import React from "react";
// import HeroImg from "../../assets/hero.png";
import { FaPlay } from "react-icons/fa";
import { motion } from "framer-motion";
import { SlideRight } from "../../utility/animation";
import { User } from "lucide-react";
import bg from "../../assets/bg.webp";
const Hero = ({ userName, userImage }) => {
  return (
    <>
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative bg-cover bg-center bg-no-repeat backdrop-blur-lg" style={{ backgroundImage: `url(${bg})` }}>
        <div className="flex flex-col justify-center py-14 md:pr-16 xl:pr-40 md:py-0">
          <div className="text-center md:text-left space-y-6">
          <motion.div
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate="visible"
        className="flex items-center space-x-4"
      >
        {userImage ? (
          <img
            src={userImage}
            alt={`${userName}'s profile`}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <User className="w-12 h-12 text-gray-400" />
        )}
        <p className="text-orange-600 uppercase font-semibold">
          Hello, {userName || "User"}!
        </p>
      </motion.div>
            <motion.h1
              variants={SlideRight(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-semibold lg:text-6xl !leading-tight"
            >
              Your Personal  <span className="text-primary">Health Companion</span>
            </motion.h1>
            <motion.p
              variants={SlideRight(0.8)}
              initial="hidden"
              animate="visible"
            >
              Accessible Healthcare, Empowering Every Individual
            </motion.p>
            {/* button section */}
            <motion.div
              variants={SlideRight(1.0)}
              initial="hidden"
              animate="visible"
              className="flex gap-8 justify-center md:justify-start !mt-8 items-center"
            >
              <button className="primary-btn text-white">Get Started</button>
              <button className="flex justify-end items-center gap-2 font-semibold">
                <span className="w-10 h-10 bg-secondary/15 rounded-full flex justify-center items-center">
                  <FaPlay className="text-secondary" />
                </span>
                See how it works
              </button>
            </motion.div>
          </div>
        </div>
        {/* Hero image
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={HeroImg}
            alt=""
            className="w-[350px] md:w-[550px] xl:w-[700px]"
          />
        </div> */}
      </div>
    </>
  );
};

export default Hero;
