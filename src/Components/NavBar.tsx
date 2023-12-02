import React from "react";
import { FaBars } from "react-icons/fa";
let NavItems = ["Features", "FAQ", "Pricing", "Testimonials"];

const NavBar = () => {
  return (
    <div className="bg-[#FDF2EC] pb-5">
    <div className="flex w-full px-8 justify-between p-4">
      <div className="flex justify-center items-center gap-1">
        <img
        className="w-12 h-12"
          src="https://framerusercontent.com/images/MwRbsJrk7ItYxeL7mKvPzrq3g.png"
          alt=""
        />
        <h3 className="font-bold text-3xl">ManageWise</h3>
      </div>
      <div className="text-2xl my-auto lg:hidden"><FaBars/></div>
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
