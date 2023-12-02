import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
let NavItems = ["Features", "FAQ", "Pricing", "Testimonials"];
import { RxCross1 } from "react-icons/rx";
import Variants, {menu } from "./Animation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#FDF2EC] pb-5">
      { !isOpen &&
     (<>
     <div className="text-3xl absolute z-10 top-6 right-8 my-auto lg:hidden" onClick={()=>setIsOpen(!isOpen)}><RxCross1 /></div>

    <motion.div 
      {...menu} className={`items-center flex absolute w-screen h-screen bg-white flex-col justify-center gap-6 lg:hidden`}>
        {NavItems.map((item, index) => (
          <motion.div variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3}} initial="initial" whileInView="animate" viewport={{once:true}} className="flex items-center">
            <a className="text-xl p-[10px] hover:text-[#8247FF]" href="#" key={index}>
              {item}
            </a>
          </motion.div>
        ))}
        <button className="px-4 p-[10px] font-semibold border text-white bg-[#8247FF] rounded-xl">Buy Template</button>
      </motion.div>
      </>
  )
    }
    <div className="flex w-full px-8 justify-between p-4">
      <div className="flex justify-center items-center gap-1">
        <img
        className="w-12 h-12"
          src="https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png"
          alt=""
        />
        <h3 className="font-bold text-3xl">ManageWise</h3>
      </div>
      <div className="text-2xl my-auto lg:hidden" onClick={()=>setIsOpen(!isOpen)}><FaBars/></div>
      <div className=" items-center justify-center gap-6 hidden lg:flex">
        {NavItems.map((item, index) => (
          <div className="flex items-center">
            <a className="text-lg p-[10px] hover:text-[#8247FF]" href="#" key={index}>
              {item}
            </a>
            {
                index !== NavItems.length-1 && <div className="w-1 h-1 bg-gray-400"></div>
            }
          </div>
        ))}
        <button className="px-4 p-[10px] font-semibold border bg-white border-gray-300 hover:border-black rounded-lg">Buy Template</button>
      </div>
    </div>
    </div>
  );
};

export default NavBar;
