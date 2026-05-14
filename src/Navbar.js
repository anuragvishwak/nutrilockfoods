import React, { useState, useEffect } from "react";
import img1 from "./NUTRILOCK AGRO FOODS_20251120_162643_0000.png";
import { FaBars, FaUser } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
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
      <img src={img1} className="h-8 sm:h-16 w-auto" alt="logo" />

      <div className="font-merri hidden sm:flex items-center space-x-5 text-xl font-semibold">
        <button
          className={`${currentLocation.pathname === "/" ? "text-[#7a5137]" : "text-gray-700"}`}
          onClick={() => navigation("/")}
        >
          Home
        </button>

        {/* <button
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

      {open_navbar && (
        <div className="font-merri bg-white p-5 rounded-lg shadow-xl fixed right-5 border border-gray-300 top-16 flex flex-col sm:hidden font-semibold">
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

      <div className="flex items-center space-x-2">
        <FaUser
          size={30}
          className="border border-[#03256c] text-[#333333] p-1 rounded-full"
        />
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
