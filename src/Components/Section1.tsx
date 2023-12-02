import React from "react";
import { motion } from "framer-motion"
import { FaArrowCircleRight, FaPlayCircle } from "react-icons/fa";
import Variants from "./Animation";

export const Section1 = () => {
  return (
    <div className="bg-gradient-to-b from-[#FDF2EC] pt-1">
    <div className="flex flex-col mx-auto w-4/5 justify-center items-center gap-4 mt-10">
      <motion.div  variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3}} initial="initial" whileInView="animate" viewport={{once:true}} className="border text-sm sm:text-base border-gray-400 rounded-md bg-white text-[#8247FF] py-1 px-2 w-fit ">
        <span className="mr-1">👋</span>Welcome to manage wise!
      </motion.div>
      <motion.h1 variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3,delay:0.1}} initial="initial" whileInView="animate" viewport={{once:true}} className="font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-7xl text-center">
        Empower your business with{" "}
        <span className="text-orange-500">Strategic</span> insights
      </motion.h1>
      <motion.p variants={Variants} transition={{duration:1,type:"spring",bounce:0.3,delay:0.3}} initial="initial" whileInView="animate" viewport={{once:true}} className="text-base md:text-lg text-[#767575] mt-4">
        Powerful management platform designed to streamline your business
        operations, boost productivity, and drive success
      </motion.p>
      <motion.div variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3,delay:0.2}} initial="initial" whileInView="animate" viewport={{once:true}} className="flex flex-col sm:flex-row gap-5 mt-4">
        <button className="w-48 lg:w-60 px-4 p-[10px] text-lg lg:text-2xl text-white font-semibold hover:shadow-custom bg-[#8247FF] rounded-2xl group transition-all duration-200 align-middle">
          Get Started{" "}
          <span className="bg-[#8247FF] text-white align-middle transition-all text-[0] pb-1 duration-300 inline-block group-hover:text-xl">
            <FaArrowCircleRight />
          </span>
        </button>
        <button className="w-48 lg:w-60 px-4 p-[10px] text-lg lg:text-2xl font-bold border border-gray-300 hover:border-black rounded-2xl">
          Watch Demo{" "}
          <span className="inline-block align-middle text-xl pb-1">
            <FaPlayCircle />
          </span>
        </button>
      </motion.div>

      <motion.img variants={Variants} transition={{duration:0.5}} initial="initialImg" whileInView="animateImg" viewport={{once:true}} className="mt-20 rounded-3xl" src="https://framerusercontent.com/images/t9qCSNfZSNdBCMSiohCGNEIl4.jpg?scale-down-to=2048" alt="" />
    </div>
    </div>
  );
};
