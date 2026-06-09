import React, { useState, useEffect } from "react";
import img1 from "./logo.png";
import { FaBars } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { CgShoppingCart } from "react-icons/cg";

function Navbar({ count, setcount, setopen_cart }) {
  const currentLocation = useLocation();
  const navigation = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open_navbar, setopen_navbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex items-center w-full py-3 px-5 fixed top-0 justify-between transition-all duration-300 z-50 
${
  isScrolled
    ? "bg-white/30 backdrop-blur-lg shadow-md border-b border-white/20 py-2"
    : "bg-transparent py-4"
}`}
    >
      <img src={img1} className="h-8 sm:h-12 w-auto" alt="logo" />

      <div className="hidden sm:flex items-center space-x-5 text-xl font-semibold">
        <button
          className={`${currentLocation.pathname === "/" ? "text-[#7a5137]" : "text-gray-700"}`}
          onClick={() => navigation("/")}
        >
          Home
        </button>

        <button
          className={`${currentLocation.pathname === "/AboutUs" ? "text-[#7a5137]" : "text-gray-700"}`}
          onClick={() => navigation("/AboutUs")}
        >
          About Us
        </button>
        <button
          className={`${currentLocation.pathname === "/ContactUs" ? "text-[#7a5137]" : "text-gray-700"}`}
          onClick={() => navigation("/ContactUs")}
        >
          Contact Us
        </button>
      </div>

      {open_navbar && (
        <div className="bg-white p-5 rounded-lg shadow-xl fixed right-5 border border-gray-300 top-16 flex flex-col sm:hidden font-semibold">
          <button
            className={`${currentLocation.pathname === "/" ? "text-[#7a5137]" : "text-gray-700"}`}
            onClick={() => navigation("/")}
          >
            Home
          </button>
          {/* 
          <button
            className={`${currentLocation.pathname === "/Product" ? "text-[#7a5137]" : "text-gray-700"}`}
            onClick={() => navigation("/Product")}
          >
            Products
          </button> */}
          <button
            className={`${currentLocation.pathname === "/AboutUs" ? "text-[#7a5137]" : "text-gray-700"}`}
            onClick={() => navigation("/AboutUs")}
          >
            About Us
          </button>
          <button
            className={`${currentLocation.pathname === "/ContactUs" ? "text-[#7a5137]" : "text-gray-700"}`}
            onClick={() => navigation("/ContactUs")}
          >
            Contact Us
          </button>
        </div>
      )}

      <div className="flex relative h-14 items-center space-x-3 sm:space-x-2">
        <button
          onClick={() => {
            setopen_cart(true);
          }}
          className="relative"
        >
          <p className="absolute -top-2 -right-2 bg-red-500 text-xs rounded-full min-w-[20px] h-5 flex items-center justify-center text-white font-bold">
            {count}
          </p>

          <CgShoppingCart className="border text-[32px] sm:text-4xl border-[#03256c] text-[#333333] p-1 rounded-full" />
        </button>
        <button
          onClick={() => {
            setopen_navbar(!open_navbar);
          }}
        >
          <FaBars
            size={30}
            className="border border-[#03256c] sm:hidden text-[#333333] p-1 rounded-full"
          />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
