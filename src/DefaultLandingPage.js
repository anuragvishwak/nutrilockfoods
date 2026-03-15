import React from "react";
import Navbar from "./Navbar";
import img1 from "./peanut bar image.png";
import { FaArrowRightArrowLeft, FaArrowRightLong } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiLeafLine } from "react-icons/ri";
import Footer from "./Footer";

function DefaultLandingPage() {
  return (
    <div className="bg-gradient-to-t to-[#effeff] from-[#e4eeff] w-full h-full">
      <Navbar />
      <div className="">
        <div className="w-full h-[600px] bg-gradient-to-r to-[#effeff] from-[#e4eeff] py-5 flex items-center justify-center space-x-8 ">
          <div className="">
            <p className="text-5xl text-center mb-3 font-bold text-[#1b9aaa] font-merri">
              Lock in your Daily Nutrition
            </p>
            <p className="text-lg text-[#03256c] font-merri text-center font-semibold">
              Fuel your ambition with precision-balanced fuel designed to keep
              you at your peak from sunrise to sunset.
            </p>
            <div className="flex items-center  mt-5 justify-center space-x-5">
              <button className="border-2 border-[#1b9aaa] py-1 px-3 font-semibold rounded bg-[#1b9aaa] text-white">
                <div className="flex items-center space-x-2">
                  <p className="">Buy Now</p> <AiOutlineShoppingCart />
                </div>
              </button>
              <button className="border-2 border-[#03256c] py-1 px-3 font-semibold rounded hover:bg-[#03256c] hover:text-white text-[#03256c]">
                <div className="flex items-center space-x-2">
                  <p className="">Learn More</p> <FaArrowRightLong />
                </div>
              </button>
            </div>
          </div>
          <img src={img1} className="h-[500px] w-auto" />
        </div>

        <div className="py-28">
          <div className="mb-10">
            <p className="text-3xl text-center mb-3 font-bold text-[#1b9aaa] font-merri">
              Why Choose Nutrilock?
            </p>
            <p className="text-lg text-[#03256c] font-merri text-center font-semibold">
              Four pillars of nutrition science powering every product....
            </p>
          </div>

          <div className="flex items-center justify-center">
            <div className="grid grid-cols-4 w-10/12 gap-5 ">
              <div className="shadow hover:shadow-xl bg-white border p-4 rounded-xl hover:border-gray-300">
                <div className="flex justify-center">
                  <RiLeafLine size={40} className="text-green-500" />
                </div>
                <p className="text-center font-bold text-2xl text-[#1b9aaa]">
                  100% Natural
                </p>
                <p className="text-justify text-[#03256c]">
                  Made from premium natural ingredients with no artificial
                  additives or preservatives.
                </p>
              </div>

              <div className="shadow hover:shadow-xl bg-white border p-4 rounded-xl hover:border-gray-300">
                <div className="flex justify-center">
                  <RiLeafLine size={40} className="text-green-500" />
                </div>
                <p className="text-center font-bold text-2xl text-[#1b9aaa]">
                  100% Natural
                </p>
                <p className="text-justify text-[#03256c]">
                  Made from premium natural ingredients with no artificial
                  additives or preservatives.
                </p>
              </div>

              <div className="shadow hover:shadow-xl bg-white border p-4 rounded-xl hover:border-gray-300">
                <div className="flex justify-center">
                  <RiLeafLine size={40} className="text-green-500" />
                </div>
                <p className="text-center font-bold text-2xl text-[#1b9aaa]">
                  100% Natural
                </p>
                <p className="text-justify text-[#03256c]">
                  Made from premium natural ingredients with no artificial
                  additives or preservatives.
                </p>
              </div>

              <div className="shadow hover:shadow-xl bg-white border p-4 rounded-xl hover:border-gray-300">
                <div className="flex justify-center">
                  <RiLeafLine size={40} className="text-green-500" />
                </div>
                <p className="text-center font-bold text-2xl text-[#1b9aaa]">
                  100% Natural
                </p>
                <p className="text-justify text-[#03256c]">
                  Made from premium natural ingredients with no artificial
                  additives or preservatives.
                </p>
              </div>
            </div>
          </div>

          <div className="px-20 py-36 mt-20 mb-10 bg-white">
            <p className="text-[#1b9aaa] font-merri font-bold text-5xl">Ready to Lock in Your Nutrition?</p>
            <div className="flex justify-center">
                <p className="text-[#03256c] w-8/12 my-7 font-semibold text-xl font-merri">
                Join thousands of health-conscious individuals who've made Nutrilock part of their daily routine.
            </p>
            </div>
            <button className="bg-[#03256c] text-white py-4 px-8 rounded">Get Started Today</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DefaultLandingPage;
