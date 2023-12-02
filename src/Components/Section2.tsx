import React from "react";
import Variants from "./Animation";
import { motion } from "framer-motion";

export const Section2 = () => {
  return (
    <div className="flex flex-col mx-auto w-4/5 justify-center items-center gap-4 mt-28">
      <motion.div variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3}} initial="initial" whileInView="animate" viewport={{once:true}} className="border text-sm sm:text-base border-gray-400 rounded-md bg-white text-[#8247FF] py-1 px-2 w-fit ">
        <span className="mr-1">🔥</span>PREMIER FEATURES
      </motion.div>
      <motion.h1 variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3,delay:0.2}} initial="initial" whileInView="animate" viewport={{once:true}} className="font-semibold text-xl sm:text-3xl lg:text-5xl text-center">
        Discover our product's{" "}
        <span className="text-orange-500">Capabilities</span>
      </motion.h1>
      <motion.p variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3}} initial="initial" whileInView="animate" viewport={{once:true}} className="text-sm sm:text-lg text-[#767575] mt-4">
        Don't settle for mediocrity - embrace the future of management with
        Manage Wise.
      </motion.p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 mb-4">
        <motion.div variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3,delay:0.2}} initial="initial" whileInView="animate" viewport={{once:true}} className="bg-[#EDEDFA] p-4 md:p-8 rounded-2xl">
          <div className="bg-white p-1 text-4xl w-fit h-fit rounded-2xl mt-2 lg:mt-8 align-middle">
            ⭐️
          </div>
          <p className="text-lg sm:text-2xl lg-text-4xl mt-4 font-medium leading-[1.3]">
            Boost productivity and streamline workflow with us. Enjoy our
            intuitive interface and robust features.
          </p>
        </motion.div>
        <motion.div variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3,delay:0.3}} initial="initial" whileInView="animate" viewport={{once:true}} className="flex flex-col gap-4 border-2 border-[#EDEDFA] rounded-2xl">
          <img
            src="https://framerusercontent.com/images/qJeaFhSmQ29M1S55GRW5kYb4.png?scale-down-to=1024"
            alt=""
          />
          <div className="flex flex-col gap-1 m-6">
          <h3 className="text-2xl font-medium">Smart Task Management</h3>
          <p className=" text-[#767575]">
          Say goodbye to chaos with our smart task management system
          </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3,delay:0.2}} initial="initial" whileInView="animate" viewport={{once:true}} className="flex flex-col gap-4 border-2 border-[#EDEDFA] rounded-2xl">
          <img
            src="https://framerusercontent.com/images/LFrHT3kBfxtMGAZfWkyLvYAKsbg.png?scale-down-to=512"
            alt=""
          />
          <div className="flex flex-col gap-1 m-2 p-4">
          <h3 className="text-2xl font-medium">Flexible Scheduling</h3>
          <p className="text-[#767575]">
            Stay productive with our flexible scheduling system
          </p>
          </div>
        </motion.div>
        <motion.div variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3,delay:0.3}} initial="initial" whileInView="animate" viewport={{once:true}} className="flex flex-col gap-4 border-2 border-[#EDEDFA] rounded-2xl">
          <img
            src="https://framerusercontent.com/images/p65qwfjd0cd0ZHZoNFpsh7XU.png?scale-down-to=512"
            alt=""
          />
          <div className="flex flex-col gap-1 m-2 p-4">
          <h3 className=" text-2xl font-medium">Easy Communication</h3>
          <p className=" text-[#767575]">
            Collaborate seamlessly with your team in real-time
          </p>
          </div>
        </motion.div>
        <motion.div variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3,delay:0.4}} initial="initial" whileInView="animate" viewport={{once:true}} className="flex flex-col gap-4 border-2 border-[#EDEDFA] rounded-2xl">
          <img
            src="https://framerusercontent.com/images/FaY6aekE67ytWg6HDfDpy2FaHY.png?scale-down-to=512"
            alt=""
          />
          <div className="flex flex-col gap-1 m-2 p-4">
          <h3 className=" text-2xl font-medium">Analytics</h3>
          <p className=" text-[#767575]">
            Gain valuable insights with our advanced analytics feature
          </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
