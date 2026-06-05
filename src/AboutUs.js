import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaHeart, FaLeaf, FaUsers } from "react-icons/fa";
import { FaPlantWilt } from "react-icons/fa6";
import { BiRightArrowAlt } from "react-icons/bi";
import img1 from "./mission-img.png";
import img3 from "./founder's photo.png";

function AboutUs() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="my-14 sm:my-32">
        <div className="mx-7 sm:mx-10 mb-14">
          <p className="text-lg mb-1 text-[#7a5137] ">
            ABOUT NUTRILOCK AGRO FOODS
          </p>
          <p className="text-[#150500] mt-3 font-bold text-4xl sm:text-6xl">
            Nutrition Simplified,
          </p>
          <p className="text-[#004527] mb-8 mt-1.5 font-bold text-4xl sm:text-6xl">
            Better Health, Every Single Day.
          </p>

          <p className="sm:text-xl w-full text-justify text-[#7a5137] mt-3">
            Nutrilock is a nutrition-focused brand created with one simple goal
            — to make daily nutrition simple, quick, and accessible for
            everyone. In today’s busy lifestyle, maintaining proper nutrition
            can be difficult. Nutrilock focuses on creating products that help
            people get clean and convenient nutrition Nutrilock’s Instant shake
            premix is a banana-peanut based nutrition blend designed to provide
            quick energy and daily nourishment. Lab tested for quality and
            safety, Nutrilock contains no added sugar, no preservatives, zero
            cholesterol, and zero Trans fats. Ready in just 10 seconds,
            Nutrilock helps you lock in your daily nutrition — anytime,
            anywhere.
          </p>
        </div>

        <div className="sm:flex items-center sm:space-x-8 bg-[#fff6e6] border">
          <img src={img1} alt="mission" className="h-40 sm:h-auto" />
          <div className="p-5 sm:p-10">
            <div>
              <p className="text-lg mb-1 mt-5 text-[#7a5137] ">OUR MISSION</p>
              <p className="text-[#150500] mb-5 font-bold text-3xl sm:text-4xl">
                Nutrition Made <span className="text-[#004527]">Easy.</span>
              </p>
              <p className="sm:text-xl w-full text-justify text-[#7a5137] mt-3 sm:w-10/12">
                To inspire people to choose healthier lifestyles by making
                nutrition simple, delicious, and convenient.
              </p>
            </div>
            <div className="p-3 sm:p-4 rounded-xl w-64 shadow border border-gray-300 mt-7 bg-white">
              <p className="text-lg sm:text-xl font-bold">Est. 2024</p>
              <p className="text-sm sm:text-lg mb-1 text-[#7a5137] ">
                Talasari, Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        <div className="mx-7 sm:mx-10 my-14 border border-gray-300 p-6 shadow sm:my-20">
          <p className="text-lg mb-1 text-[#7a5137] ">OUR VISION</p>
          <p className="text-[#150500] font-bold text-3xl sm:text-4xl">
            Healthy Living for <span className="text-[#004527]">Everyone.</span>
          </p>
          <p className="sm:text-2xl w-full text-justify text-[#7a5137] mt-3 sm:w-10/12">
            To build a trusted nutrition brand that makes healthy living simple,
            convenient, and accessible for everyone.
          </p>
        </div>

        <div className="mx-7 sm:mx-10 my-10 sm:my-20">
          <p className="sm:text-lg mb-1 text-[#7a5137]">WHAT WE STAND FOR</p>
          <p className="text-[#150500] font-bold text-3xl sm:text-4xl">
            Four values, <span className="text-[#004527]">no compromises.</span>
          </p>

          <div className="grid grid-cols-1 mt-5 sm:grid-cols-2 gap-5">
            <div className="bg-[#fff2eb] hover:bg-white hover:shadow-xl p-3 sm:p-5 border rounded-xl border-gray-300">
              <FaHeart
                size={40}
                className="rounded bg-[#004527] text-yellow-500 p-2"
              />
              <p className="text-[#004527] font-bold text-lg sm:text-xl">
                Health First
              </p>
              <p className="text-[#7a5137] text-sm sm:text-base">
                Every formulation begins with one question — is it genuinely
                good for you?
              </p>
            </div>

            <div className="bg-[#fff2eb] hover:bg-white hover:shadow-xl p-3 sm:p-5 border rounded-xl border-gray-300">
              <FaLeaf
                size={40}
                className="rounded bg-[#004527] text-yellow-500 p-2"
              />
              <p className="text-[#004527] font-bold text-lg sm:text-xl">
                Honest Ingredients
              </p>
              <p className="text-[#7a5137] text-sm sm:text-base">
                Short labels. Real food. No artificial shortcuts, ever.
              </p>
            </div>

            <div className="bg-[#fff2eb] hover:bg-white hover:shadow-xl p-3 sm:p-5 border rounded-xl border-gray-300">
              <FaPlantWilt
                size={40}
                className="rounded bg-[#004527] text-yellow-500 p-2"
              />
              <p className="text-[#004527] font-bold text-lg sm:text-xl">
                HMade in India
              </p>
              <p className="text-[#7a5137] text-sm sm:text-base">
                Born in Talasari, Maharashtra, India — sourcing from Indian
                farms, made for Indian families.
              </p>
            </div>

            <div className="bg-[#fff2eb] hover:bg-white hover:shadow-xl p-3 sm:p-5 border rounded-xl border-gray-300">
              <FaUsers
                size={40}
                className="rounded bg-[#004527] text-yellow-500 p-2"
              />
              <p className="text-[#004527] font-bold text-lg sm:text-xl">
                For Everyone
              </p>
              <p className="text-[#7a5137] text-sm sm:text-base">
                From school-going kids to working adults — nutrition shouldn't
                be a luxury.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-7 sm:mx-10 my-10 sm:my-20 sm:flex items-center justify-center">
          <div>
            <div className="flex justify-center">
              <p className="mb-1 text-center font-semibold mt-5 bg-[#defff1] px-3 py-1.5 rounded-full border border-[#004527] text-[#004527]">
                Our Story
              </p>
            </div>
            <p className="text-[#150500] font-bold mt-5 text-center text-2xl sm:text-4xl">
              From a Simple Question to
            </p>
            <p className="text-[#004525] text-3xl mb-7 text-center sm:text-4xl font-bold">
              Better Nutrition.
            </p>
            <p className="sm:text-2xl w-full text-center text-[#7a5137] mt-3 sm:w-11/12">
              It started with a simple question — why should daily nutrition be
              complicated? This thought inspired the idea of Nutrilock, a brand
              built to make healthy nutrition simple, quick, and accessible for
              everyday life.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#fff2eb] mb-14 sm:mb-32 py-10 sm:py-20 to-blue-100">
          <div className="sm:flex items-center bg-white p-6 sm:p-16 rounded-3xl border border-gray-400 shadow-lg mx-10 sm:mx-36 space-x-2 justify-center">
            <div className="flex justify-center">
              <img
                src={img3}
                className="h-60 sm:hidden object-contain"
                alt="Meshwa Patel"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, black 87%, transparent 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, sm:hidden black 90%, transparent 100%)",
                }}
              />
            </div>
            <div>
              <p className="text-[#150500] font-bold mt-5 mb-5 text-2xl sm:text-4xl">
                Meet the Founder -{" "}
                <span className="text-[#004525]"> Meshwa Patel</span>
              </p>

              <p className="sm:text-2xl w-full text-justify text-[#7a5137] mt-3 sm:w-11/12">
                The idea was brought to life by Meshwa Patel, the founder of
                Nutrilock. With a vision to simplify everyday nutrition, she
                aimed to create healthier and easy options for people with busy
                lifestyles. Nutrilock is built to make daily nutrition simple,
                quick, and convenient.
              </p>
            </div>

            <img
              src={img3}
              className="h-96 hidden sm:block object-contain"
              alt="Founder Image"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 87%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 90%, transparent 100%)",
              }}
            />
          </div>
        </div>

        <div className="mx-7 sm:mx-0 flex justify-center">
          <div className="bg-gradient-to-r sm:w-8/12 rounded-3xl from-[#004527] to-[#511f01] p-8 sm:p-20">
            <p className="text-2xl sm:text-4xl font-bold text-white">
              Want to be part of the{" "}
              <span className="text-yellow-500">journey?</span>
            </p>
            <p className="text-white text-sm sm:text-lg my-4">
              Partner with us, stock our products, or just say hi — we'd love to
              hear from you.
            </p>

            <button className="border-2 sm:text-lg border-yellow-500 px-3 sm:px-6 py-1.5 sm:py-4 font-semibold rounded-full shadow-xl bg-yellow-500">
              <div className="flex items-center space-x-2">
                <p>Get in Touch</p>
                <BiRightArrowAlt size={30} />
              </div>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
