import { motion } from "framer-motion";
import React from "react";
import { FaArrowCircleRight, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import Variants from "./Animation";
let NavItems = ["Features", "FAQ", "Pricing", "Testimonials"];

export const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-[#FDF2EC]">
    <motion.div  variants={Variants} transition={{ duration:1, delay:0.2}} initial="initialCard" whileInView="animateCard" viewport={{once:true}} className="flex flex-col bg-white justify-center items-center border rounded-xl py-8 mx-auto w-4/5  gap-4 my-20">
      <div className="border text-sm font-semibold md:text-lg border-gray-400 rounded-md bg-white text-[#8247FF] py-1 px-2 w-fit ">
        <span className="mr-1">👋</span>DON'T MISS OUT
      </div>
      <h1 className="font-semibold text-xl sm:text-3xl lg:text-5xl">
        Unleash your <span className="text-orange-500">Potential </span> with us
      </h1>
      <p className="text-lg text-[#767575] m-4">
        Join our community of ambitious individuals and organizations eager to
        make a difference.
      </p>
      <button className="w-40 lg:w-60 px-4 p-[10px] text-lg sm:text-2xl text-white font-semibold hover:shadow-custom bg-[#8247FF] rounded-2xl group transition-all duration-200 align-middle">
        Get Started{" "}
        <span className="bg-[#8247FF] text-white align-middle transition-all text-[0] pb-1 duration-300 inline-block group-hover:text-xl">
          <FaArrowCircleRight />
        </span>
      </button>
    </motion.div>
    <div className="relative flex w-4/5 justify-between mx-auto my-32">
      <div className="flex justify-center items-center gap-1 self-start">
        <img
        className="w-12 h-12"
          src="https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png"
          alt=""
        />
        <h3 className="font-bold text-3xl hidden sm:flex">ManageWise</h3>
      </div>
      <div className="flex flex-col items-center justify-center">
        {NavItems.map((item, index) => (
          <div className="flex items-center">
            <a className="text-lg p-[10px] hover:text-[#8247FF]" href="#" key={index}>
              {item}
            </a>
          </div>
        ))}
      </div>
      <div className="absolute text-white -bottom-20 w-full h-[1px] bg-[#c4c1c1]"></div>
    </div>
    <div className="flex justify-between mx-auto w-4/5 mb-2">
        <p className="text-lg">© 2022 ManageWise, Inc.</p>
        <ul className="flex gap-4 text-xl">
            <li><FaSquareInstagram /></li>
            <li><FaXTwitter /></li>
            <li><FaLinkedin /></li>
        </ul>

    </div>
    </div>
  );
};
