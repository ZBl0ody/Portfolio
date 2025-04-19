import { Download, Linkedin } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      className="flex lg:flex-row flex-col items-center mx-5"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Left Section */}
      <motion.div
        className="flex-1 text-center lg:text-left mb-5"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="font-bold text-3xl mb-4">
          Hi,
          <br />
          I’m Ahmed <span className="text-main">Alnajar</span>
        </h2>
        <div className="leading-none text-base lg:text-lg tracking-widest mb-5">
          Front end Developer <br />
          <span className="-ml-5">&</span>
          <br /> User Interface Designer
        </div>

        <a
          target="_blank"
          href="https://www.linkedin.com/in/ahmed-sameer-abdon-b99156280/"
        >
          <motion.div
            whileTap={{ scale: 0.95 }}
            className="flex items-center p-2 max-w-[200px] mx-auto lg:mx-0 bg-main hover:bg-second rounded-md justify-between shadow-md hover:shadow-lg transition"
          >
            <div className="text-white text-lg">Hire Me</div>
            <div className="bg-second text-white rounded py-1 px-2">
              <Linkedin />
            </div>
          </motion.div>
        </a>
      </motion.div>

      {/* Avatar Section */}
      <motion.div
        className="w-fit flex flex-col flex-1 md:my-10 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <img
          className="w-[150px] lg:w-[200px] hover:scale-105 transition-transform duration-300"
          src="/main.png"
          alt="avatar"
        />
        <p className="tracking-widest mt-2">Eng.ahmedsameer0@gmail.com</p>
      </motion.div>

      {/* Right Section */}
      <motion.div
        className="max-w-[300px] mt-10 md:mt-0 lg:ml-16 flex-1 text-center lg:text-left"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="text-main text-xl font-semibold tracking-wide mb-2">
          Expert on
        </div>
        <div className="text-white text-xl lg:text-3xl font-normal tracking-wider">
          Based in Egypt
          <br />
          I’m Developer and <br />
          UI/UX Designer.
        </div>
        <div className="text-stone-500 lg:text-xl text-sm tracking-wide my-5">
          Hey, are you looking for a designer to build your brand and grow your
          business? Let’s shake hands with me.
        </div>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1kxiN6P27Pk0g04lgPKhNvBm-sFWldflh/view?usp=sharing"
        >
          <motion.div
            className="flex flex-col items-center lg:items-start cursor-pointer group "
            whileTap={{ scale: 0.95 }}
          >
            <div className="text-main text-xl flex gap-2 items-center font-medium  transition group-hover:text-second">
              Download CV
              <Download />
            </div>
            <span className="w-[165px] border-2 border-main mt-1 group-hover:border-second" />
          </motion.div>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Home;
