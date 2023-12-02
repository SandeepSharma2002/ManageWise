import React from "react";
import { FaBell, FaFire, FaTools } from "react-icons/fa";
import { BsFillPhoneFill } from "react-icons/bs";
import Variants from "./Animation";
import { motion } from "framer-motion";

export const Section3 = () => {
  return (
    <div className="bg-[#1C1C1C]">
      <div className="flex flex-col mx-auto w-4/5 gap-4 mt-28">
        <div className="border border-gray-400 rounded-md bg-white text-[#8247FF] py-1 px-2 w-fit mt-20">
          <span className="mr-1">🤩</span>AND MORE...
        </div>
        <motion.h1  variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3}} initial="initial" whileInView="animate" viewport={{once:true}} className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-5xl text-white">
          Explore an array of features that elevate your{" "}
          <span className="text-orange-500">Productivity</span> to new heights
        </motion.h1>
        <p className="text-sm sm:text-lg text-[#767575] font-medium sm:mt-4">
          Discover the tools that will revolutionize the way you manage and
          optimize your operations
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8 relative">
          <motion.div variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3}} initial="initial" whileInView="animate" viewport={{once:true}} className="flex flex-col gap-4 rounded-2xl bg-[#212121] items-center px-3 py-4">
            <div className="bg-[#8247FF] p-2 text-6xl w-fit h-fit rounded-2xl mt-8 text-white">
              <BsFillPhoneFill />
            </div>
            <div className="flex flex-col gap-1 m-6">
              <h3 className="text-2xl font-medium text-center text-white">
                Cross-Platform Compatibility
              </h3>
              <p className="text-[#767575] text-center text-lg">
                Enjoy the flexibility of cross-platform compatibility. Our
                product works seamlessly across desktop, web, and mobile
                devices, allowing you to work from your preferred device.
              </p>
            </div>
          </motion.div>
          <motion.div variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3,delay:0.1}} initial="initial" whileInView="animate" viewport={{once:true}} className="flex flex-col gap-4 rounded-2xl bg-[#212121] items-center px-3 py-4">
            <div className="bg-[#8247FF] p-2 text-6xl w-fit h-fit rounded-2xl mt-8 text-white">
              <FaBell />
            </div>
            <div className="flex flex-col gap-1 m-6">
              <h3 className="text-2xl font-medium text-center text-white">
                Stay Informed with Essential Notifications
              </h3>
              <p className="text-[#767575] text-center text-lg">
                Automate support from first customer contact to closing the
                ticket. Drastically improve time to resolution.Automate support
                from first customer contact to closing the ticket.
              </p>
            </div>
          </motion.div>
          <motion.div variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3,delay:0.2}} initial="initial" whileInView="animate" viewport={{once:true}} className="flex flex-col gap-4 rounded-2xl bg-[#212121] items-center px-3 py-4">
            <div className="bg-[#8247FF] p-2 text-6xl w-fit h-fit rounded-2xl mt-8 text-white">
              <FaFire />
            </div>
            <div className="flex flex-col gap-1 m-6">
              <h3 className="text-2xl font-medium text-center text-white">
                Secure Data Encryption at all times
              </h3>
              <p className="text-[#767575] text-center text-lg">
                Trust in our robust data encryption to keep your sensitive
                information safe and secure. Rest easy knowing your data is
                protected at all times.
              </p>
            </div>
          </motion.div>
          <div className="absolute text-white -bottom-20 w-full h-[1px] bg-[#767575]"></div>
        </div>

        <div className="flex justify-center">
          <div>
            <div>
                <div>
                </div>
            </div>
          </div>
          <div className="flex flex-col mt-36 gap-4 lg:gap-8 w-1/2">
            <div className="border border-gray-400 text-sm sm:text-lg font-medium rounded-md bg-white text-[#8247FF] py-1 px-2 w-fit mx-auto">
              <span className="mr-1 text-[#8247FF] inline-block mx-1"><FaTools /></span>INTEGRATIONS
            </div>
            <motion.h1  variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3}} initial="initial" whileInView="animate" viewport={{once:true}} className="font-semibold text-white text-xl sm:text-3xl lg:text-5xl text-center">
              Enable <span className="text-orange-500">integration</span> with
              other popular tools and platforms
            </motion.h1>
            <p className="text-lg text-[#767575] mt-4 text-center">
            Seamlessly connect and amplify your workflow by enabling integration with a diverse array of widely-used tools and platforms.
            </p>
            <motion.img  variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3,delay:0.2}} initial="initial" whileInView="animate" viewport={{once:true}} src="https://framerusercontent.com/images/sQd7MkwgkdQRRQ1a99k5Z1zLfA.png?scale-down-to=1024" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
