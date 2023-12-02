import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Variants from "./Animation";

export const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    cssEase: "linear",
    rtl: true,
    responsive: [
        {
            breakpoint: 1680,
            settings: {
              slidesToShow: 3,
            },
          },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
  };

  return (
    <div className="flex flex-col mx-auto w-4/5 gap-4 my-28">
      <div className="border border-gray-400 font-semibold text-sm md:text-base rounded-md bg-white text-[#8247FF] py-1 px-2 w-fit mt-20">
        <span className="mr-1">🤩</span>AND MORE...
      </div>
      <motion.h1  variants={Variants} transition={{ duration:1,type:"spring",bounce:0.3}} initial="initial" whileInView="animate" viewport={{once:true}} className="font-semibold text-xl sm:text-3xl  lg:text-5xl text-black">
        Hear from our <span className="text-orange-500">Satisfied</span> clients
      </motion.h1>
      <p className="text-lg text-[#767575] font-medium lg:mt-4 max-w-lg">
        Discover why our clients love working with us. Read their testimonials
        and learn how we has helped businesses.
      </p>
      <div className="relative m-auto w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <Slider {...settings}>
          <div className="p-2">
            <div className="flex flex-col gap-4 p-4 md:p-8 border rounded-xl">
              <p className="text-lg sm:text-xl md:text-2xl text-black font-medium">
              "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.
              </p>
              <div className="flex gap-2">
                <img
                  className="w-12 h-12"
                  src="https://framerusercontent.com/images/mIAsKrgLvd7WbLFFsh6f6YobhSc.jpg"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">David</p>
                  <p className="text-lg text-[#767575]">Freelancer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
          <div className="flex flex-col gap-4 p-4 md:p-8 border rounded-xl ">
            <p className="text-lg sm:text-xl md:text-2xl text-black font-medium">
            "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly."
            </p>
            <div className="flex gap-2">
              <img
                className="w-12 h-12"
                src="https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Sarah</p>
                <p className="text-lg text-[#767575]">Project Manager</p>
              </div>
            </div>
          </div>
          </div>
          <div className="p-2">
          <div className="flex flex-col gap-4 p-4 md:p-8 border rounded-xl">
            <p className="text-lg sm:text-xl md:text-2xl text-black font-medium">
            "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations."
            </p>
            <div className="flex gap-2">
              <img
                className="w-12 h-12"
                src="https://framerusercontent.com/images/dgHsIQVrsxRxtadpghDWppPujE.jpg"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Emily</p>
                <p className="text-lg text-[#767575]">Art Director</p>
              </div>
            </div>
          </div>
          </div>
          <div className="p-2">
          <div className="flex flex-col gap-4 p-4 md:p-8 border rounded-xl">
            <p className="text-lg sm:text-xl md:text-2xl text-black font-medium">
            "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks."
            </p>
            <div className="flex gap-2">
              <img
                className="w-12 h-12"
                src="https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Alex</p>
                <p className="text-lg text-[#767575]">IT Manager</p>
              </div>
            </div>
          </div>
          </div>
          <div className="p-2">
            <div className="flex flex-col gap-4 p-8 border rounded-xl">
              <p className="text-lg sm:text-xl md:text-2xl text-black font-medium">
              "Using this product has been a game-changer for our team. The collaboration features and intuitive interface have greatly improved our productivity.
              </p>
              <div className="flex gap-2">
                <img
                  className="w-12 h-12"
                  src="https://framerusercontent.com/images/mIAsKrgLvd7WbLFFsh6f6YobhSc.jpg"
                  alt=""
                />
                <div className="flex flex-col gap-1">
                  <p className="font-semibold">David</p>
                  <p className="text-lg text-[#767575]">Freelancer</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2">
          <div className="flex flex-col gap-4 p-4 md:p-8 border rounded-xl ">
            <p className="text-lg sm:text-xl md:text-2xl text-black font-medium">
            "The customer support team behind this product is exceptional. They have been incredibly responsive and helpful, addressing any questions or concerns promptly."
            </p>
            <div className="flex gap-2">
              <img
                className="w-12 h-12"
                src="https://framerusercontent.com/images/OOtXrjMtLK5Xx3QTQXHynwpqYi4.jpg"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Sarah</p>
                <p className="text-lg text-[#767575]">Project Manager</p>
              </div>
            </div>
          </div>
          </div>
          <div className="p-2">
          <div className="flex flex-col gap-4 p-4 md:p-8 border rounded-xl">
            <p className="text-lg sm:text-xl md:text-2xl text-black font-medium">
            "Manage Wise transformed our team's productivity. The intuitive interface and powerful features have made a significant impact on our daily operations."
            </p>
            <div className="flex gap-2">
              <img
                className="w-12 h-12"
                src="https://framerusercontent.com/images/dgHsIQVrsxRxtadpghDWppPujE.jpg"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Emily</p>
                <p className="text-lg text-[#767575]">Art Director</p>
              </div>
            </div>
          </div>
          </div>
          <div className="p-2">
          <div className="flex flex-col gap-4 p-4 md:p-8 border rounded-xl">
            <p className="text-lg sm:text-xl md:text-2xl text-black font-medium">
            "I can't imagine running my business without this product. The automation features have saved me hours of manual work, allowing me to focus on strategic tasks."
            </p>
            <div className="flex gap-2">
              <img
                className="w-12 h-12"
                src="https://framerusercontent.com/images/PIlOZWlmobm4uLtBhKFfw7HS4.jpg"
                alt=""
              />
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Alex</p>
                <p className="text-lg text-[#767575]">IT Manager</p>
              </div>
            </div>
          </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
