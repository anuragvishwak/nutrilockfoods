import React from "react";
import Navbar from "./Navbar";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from "./Footer";

function ContactUs() {
  return (
    <div className="w-full min-h-screen h-full">
      <Navbar />
      <div className="sm:flex my-20 sm:my-40 mx-10 sm:mx-28 items-center justify-center sm:space-x-20">
        <div>
          <div className="mb-8 sm:mb-14">
            <p className="text-lg mb-1 text-[#7a5137] ">CONTACT US</p>
            <p className="text-[#150500] font-bold text-4xl sm:text-6xl">
              Let's <span className="text-[#004527]">talk</span> nutrition.
            </p>
            <p className="sm:text-xl w-full text-justify text-[#7a5137] mt-3 sm:w-10/12">
              Distribution enquiry, bulk order, partnership, or just a hello —
              drop us a line and a real human from our team will reply within 24
              hours.
            </p>
          </div>

          <div className="sm:flex items-center sm:space-x-10">
            <div className="bg-[#fff2eb] hover:bg-white hover:shadow-xl p-5 border rounded-xl border-gray-300">
              <p className="mb-1 text-[#7a5137] ">CALL US</p>
              <div className="flex items-center space-x-1">
                <FaPhone size={30} className="bg-yellow-500 p-2 rounded" />
                <p className="font-bold text-[#150500] text-lg sm:text-xl">
                  +91 9274027745
                </p>
              </div>
              <p className="text-[#7a5137] text-sm sm:text-base">
                Mon - Sat, 10am - 7pm
              </p>
            </div>

            <div className="bg-[#fff2eb] mt-5 sm:mt-0 hover:bg-white hover:shadow-xl p-5 border rounded-xl border-gray-300">
              <p className="mb-1 text-[#7a5137] ">EMAIL</p>
              <div className="flex items-center space-x-1">
                <MdEmail size={30} className="bg-yellow-500 p-1.5 rounded" />
                <p className="font-bold text-[#150500] text-lg sm:text-xl">
                  nutrilockagrofoods@gmail.com
                </p>
              </div>
              <p className="text-[#7a5137] text-sm sm:text-base">
                We respond within 24 hours.
              </p>
            </div>
          </div>
        </div>

        <div className="border-4 border-gray-200 p-2 sm:p-4 rounded-xl mt-10 sm:mt-0 w-full sm:w-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3389.5723405801177!2d72.80201002469154!3d20.150755217356068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72c082be235cd%3A0xa795ef2c2734a229!2sIndia%20Colony%2C%20Maharashtra%20401606!5e1!3m2!1sen!2sin!4v1778688968770!5m2!1sen!2sin"
            className="w-full sm:w-[500px] h-[300px] sm:h-[450px] rounded-xl"
            allowFullScreen=""
            loading="lazy"
            title="Google Map Location"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUs;
