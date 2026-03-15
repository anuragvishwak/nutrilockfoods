import React from "react";
import { RiLeafLine } from "react-icons/ri";

function Footer() {
  return (
    <div className="bg-[#03256c] p-10">
      <div className="flex items-start justify-center space-x-40">
        <div>
          <div className="flex items-center space-x-2">
            <RiLeafLine size={30} className="text-green-500" />
          <p className="text-green-500 font-bold text-2xl">Nutrilock</p>
          </div>
          <p className="text-white font-semibold text-start">Premium nutrition designed for</p>
          <p className="text-white text-start font-semibold">your peak performance.</p>
        </div>
        <div className="flex flex-col">
          <p className="text-[#1b9aaa] font-bold text-lg">Company</p>
          <button className="text-white">About Us</button>
          <button className="text-white">Products</button>
        </div>
        <div className="flex flex-col">
          <p className="text-[#1b9aaa] font-bold text-lg">Support</p>
          <button className="text-white">Contact</button>
          <button className="text-white">FAQ</button>
        </div>
      </div>
      <hr className="my-4 border-gray-400" />
      <p className="text-gray-300 font-semibold">
        © 2024 Nutrilock Agro Foods. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
