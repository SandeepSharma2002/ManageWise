import { motion } from "framer-motion";
import React from "react";
import { IoMdCheckmark } from "react-icons/io";
import Variants from "./Animation";

const Plans = [
  {
    name: "FREE",
    amount: "$0",
    options: [
      "Access to all basic features",
      "Reporting and analytics",
      "Up to 5 individual users",
      "Chat and email support",
    ],
  },
  {
    name: "STANDARD",
    amount: "$25",
    options: [
      "Access to all basic features",
      "Reporting and analytics",
      "Up to 5 individual users",
      "Chat and email support",
      "3+ integrations",
      "Account performance reporting",
    ],
  },
  {
    name: "BUSINESS",
    amount: "$45",
    options: [
      "Access to all basic features",
      "Reporting and analytics",
      "Up to 5 individual users",
      "Chat and email support",
      "3+ integrations",
    ],
  },
];

export const Pricing = () => {
  return (
    <div className="flex flex-col mx-auto w-4/5 justify-center items-center gap-4 mt-28">
      <div className="border font-semibold border-gray-400 rounded-md bg-white text-[#8247FF] py-1 px-2 w-fit ">
        <span className="mr-1">💲</span>PRICING
      </div>
      <motion.h1  variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3}} initial="initial" whileInView="animate" viewport={{once:true}} className="font-semibold text-xl sm:text-3xl md:text-5xl text-center">
        Select your ideal <span className="text-orange-500">Pricing</span> plan
      </motion.h1>
      <p className="text-lg text-[#767575] mt-4 text-medium text-center max-w-[450px]">
        At Manage Wise, we believe in providing you with pricing plans that
        adapt to your unique needs.
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">
        {
         Plans.map((item,index)=>
          <motion.div  variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3,delay:0.1*index}} initial="initial" whileInView="animate" viewport={{once:true}} key = {index.toString()} className={`flex flex-col justify-between rounded-xl space-y-4 p-8 ${index === 1 ?"bg-[#1C1C1C] -translate-y-4": "bg-[#EDEDFA]"}`}>
            <div className="flex flex-col gap-2">
            <div className="border text-xs rounded-md bg-white text-orange-500 font-bold py-1 px-2 w-fit ">
              {item.name}
            </div>
            <div className={`text-lg ${index === 1 ?"text-white": "text-black"}`}>
             <span className="text-5xl font-semibold">{item.amount}</span>/month
            </div>
            <div className="flex flex-col gap-2">
            {
            item.options.map((option,id)=>
            <p className="text-[#767575]" key={(index + id).toString()}>
                 <span className="text-xl translate-y-1 inline-block text-green-500 font-bold mr-1"><IoMdCheckmark /></span>
                 {option}
            </p>
            )
            }
           </div>
           </div>
           <button className={`rounded-xl font-semibold w-fit p-2 ${index === 1 ?"bg-[#8247FF] text-white hover:shadow-custom": "bg-white text-black"}`}>Get Started</button>
          </motion.div>  )
        }
      </div>
    </div>
  );
};
