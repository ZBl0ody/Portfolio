import React from "react";

import Btn from "../Component/Btn";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h2 className="uppercase text-4xl ">my services</h2>
      <p className="my-10 text-xs w-4/5 mx-auto  ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum
        voluptatibus a odit ut, recusandae consectetur fuga tenetur aliquid
        placeat praesentium dolor ex maiores nobis quas pariatur accusantium
      </p>
      <ul className="flex justify-between items-center mb-16">
        <motion.li
          className="flex flex-col w-56 items-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className=" text-4xl"></div>
          <h3 className="font-bold uppercase my-5">user interface design</h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            dignissimos dolorem delectus eaque ipsam
          </p>
        </motion.li>
        <motion.li
          className="flex flex-col w-56 items-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className=" text-4xl"></div>
          <h3 className="font-bold uppercase my-5 text-main">
            mobile app design
          </h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            dignissimos dolorem delectus eaque ipsam
          </p>
        </motion.li>
        <motion.li
          className="flex flex-col w-56 items-center"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className=" text-4xl"></div>
          <h3 className="font-bold uppercase my-5">graphic design</h3>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            dignissimos dolorem delectus eaque ipsam
          </p>
        </motion.li>
      </ul>
      <motion.div
        className="flex justify-center "
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Btn to="hire" type="primary">
          Hire Me
        </Btn>
      </motion.div>
    </motion.div>
  );
};

export default Services;
