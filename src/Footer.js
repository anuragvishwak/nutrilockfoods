import React from "react";
import { BiMailSend } from "react-icons/bi";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { RiLeafLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="bg-[#221a15] p-10">
      <div className="flex justify-between gap-5 sm:gap-10 flex-wrap">
        <div className="flex-1 min-w-[250px]">
          <div className="flex items-center space-x-3">
            <RiLeafLine
              size={40}
              className="text-white bg-yellow-500 p-2 rounded-lg"
            />
            <div>
              <p className="text-[#f8ecdf] font-bold text-2xl">Nutrilock</p>
              <p className="text-yellow-500">AGRO FOODS</p>
            </div>
          </div>

          <p className="text-white text-sm sm:text-base mt-3">
            Nutrilock brings together taste, nutrition and simplicity. Crafted
            for your healthy daily routine.
          </p>
        </div>

        <div className="flex-1 min-w-[150px]">
          <p className="font-bold text-yellow-500">Explore</p>

          <div className="flex flex-col items-start text-white mt-2 gap-1">
            <button>Home</button>
            <button>Products</button>
            <button>About Us</button>
            <button>Contact Us</button>
          </div>
        </div>

        <div className="flex-1 min-w-[200px]">
          <p className="font-bold text-yellow-500">Reach Us</p>

          <div className="flex items-center space-x-2 mt-2">
            <FaPhone className="text-yellow-500" />
            <p className="text-white">+91 9274027745</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <BiMailSend className="text-yellow-500" />
            <p className="text-white">nutrilockagrofoods@gmail.com</p>
          </div>

          <div className="flex items-center space-x-2 mt-2">
            <FaLocationDot className="text-yellow-500" />
            <p className="text-white">Talasari, Maharashtra, India</p>
          </div>
        </div>
      </div>

      <hr className="my-5 sm:my-10 border-gray-500" />

      <p className="text-gray-300 text-sm sm:text-base text-center">
        © 2024 Nutrilock Agro Foods. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
