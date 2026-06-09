import React from "react";
import img5 from "./peanut butter.png";
import {
  FaIndianRupeeSign,
  FaMinus,
  FaPlus,
  FaWhatsapp,
} from "react-icons/fa6";
import { BiSolidShoppingBags } from "react-icons/bi";

function Cart({ count, setcount, setopen_cart }) {
  return (
    <div className="bg-black z-50 flex flex-col justify-center items-center fixed inset-0 bg-opacity-70">
      <div className="p-7 bg-white mx-7 sm:mx-0 sm:w-4/12">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <BiSolidShoppingBags className="text-[#004527] text-2xl sm:text-4xl" />
            <div>
              <p className="text-[#004527] text-xl font-bold">Your Cart</p>
              <p className="text-yellow-500 hidden sm:block">
                You're one step closer to better nutrition.
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              setopen_cart(false);
            }}
            className="font-semibold text-red-500"
          >
            Close
          </button>
        </div>

        <div className="border p-6 my-6 border-gray-300 rounded-lg">
          <div className="sm:flex items-center sm:space-x-5">
            <div className="flex justify-center">
              <img
                src={img5}
                alt="Nutrilock Banana Peanut Instant Shake"
                className="h-32"
              />
            </div>
            <div className="">
              <p className="text-[#004527] my-3 sm:my-0 font-bold">
                Nutrilock Banana Peanut Instant Shake
              </p>
              <div className="flex sm:block items-center space-x-2 sm:space-x-0">
                <div className="flex items-center">
                  <FaIndianRupeeSign size={20} />
                  <p className="font-bold text-2xl">50/-</p>
                </div>
                <div className="flex px-3 sm:mt-4 py-1 border border-gray-400 rounded-full items-center w-32 justify-between">
                  <button
                    onClick={() => {
                      setcount(count - 1);
                    }}
                  >
                    <FaMinus />
                  </button>
                  <p className="font-bold text-lg">{count}</p>
                  <button
                    onClick={() => {
                      setcount(count + 1);
                    }}
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-300 my-4" />
          <div className="flex items-center font-semibold justify-between">
            <p className="text-lg">Total:</p>
            <div className="flex items-center">
              <FaIndianRupeeSign />
              <p className="text-lg">{count * 50}/-</p>
            </div>
          </div>
        </div>
        <div className="sm:flex justify-end">
          <button className="bg-yellow-500 w-full py-1.5 rounded-full shadow text-lg font-semibold text-[#004527]">
            <div className="flex items-center justify-center space-x-1">
              <FaWhatsapp size={20} />
              <p>Buy on Whatsapp</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
