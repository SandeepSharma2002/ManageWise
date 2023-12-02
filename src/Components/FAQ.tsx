import React from "react";
import { motion } from "framer-motion";
import Variants from "./Animation";

const faqs = [
  {
    que: "What is Manage Wise and what does it offer?",
    ans: "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
  },
  {
    que: "Is Manage Wise suitable for small businesses and larger enterprises alike?",
    ans: "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
  },
  {
    que: "Can I access Manage Wise from different devices and platforms?",
    ans: "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
},
  {
    que: "What kind of support options do you offer to users?",
    ans: "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
   },
  {
    que: "How secure is the data stored within Manage Wise?",
    ans: "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
  }
];

export const FAQ = () => {
  return (
    <div className="flex flex-col lg:flex-row mx-auto w-4/5 gap-10 mt-28">
      <div className="flex flex-col gap-4 lg:w-2/5">
        <div className="border border-gray-400 rounded-md bg-white font-semibold text-sm lg:text-xl p-1 text-[#8247FF] py-1 px-2 w-fit mt-20">
          <span className="mr-1">🙋‍♀️</span>FAQ
        </div>
        <motion.h1 variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3}} initial="initial" whileInView="animate" viewport={{once:true}} className="font-semibold text-xl sm:text-xl md:text-5xl lg:text-7xl text-black">
          Need <span className="text-orange-500">Answers?</span>
        </motion.h1>
        <p className="text-lg md:text-2xl text-[#767575] font-medium lg:mt-2">
          Check out our most commonly asked questions below to find the
          information you need.
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:gap-8 mt-8 relative w-full">
        {
            faqs.map((data,index)=>
            <motion.details variants={Variants} transition={{duration:0.5,type:"spring",bounce:0.1,delay:0.1*index}} initial="initial" whileInView="animate" viewport={{once:true}}  key = {index} className=" rounded-2xl bg-[#F7F8FD] p-4 relative open:shadow-lg mb-1 bg-none duration-300 w-full open:text-[#8247FF]">
          <summary className="list-none relative text-lg sm:text-xl font-bold cursor-pointer pr-7  ">
            {data.que}
            <div className="absolute top-2 right-0 bg-slate-200 rounded-full px-1 py-0.5 cursor-pointer visible open:invisible">
              <svg
                className="h-5 w-4 text-[#8247FF]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="{1.5}"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </summary>
          <p className=" text-sm sm:text-lg pt-3 text-[#767575] open:text-[#767575]">
            {data.ans}
          </p>
        </motion.details>
            )
        }
        
      </div>
    </div>
  );
};
