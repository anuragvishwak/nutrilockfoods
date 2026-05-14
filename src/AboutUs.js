import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaHeart, FaLeaf, FaUsers } from "react-icons/fa";
import { FaPlantWilt } from "react-icons/fa6";
import { BiRightArrowAlt } from "react-icons/bi";

function AboutUs() {
  return (
    <div className="w-full">
      <Navbar />
      <div className="my-20 sm:my-32">
        <div className="mb-8 mx-10 sm:mb-14">
          <p className="text-lg mb-1 text-[#7a5137] ">
            ABOUT NUTRILOCK AGRO FOODS
          </p>
          <p className="text-[#150500] font-bold text-4xl sm:text-6xl">
            Let's nutrition.
          </p>
          <p className="text-[#004527] font-bold text-4xl sm:text-6xl">
            better and healthier
          </p>
          <p className="text-[#150500] font-bold text-4xl sm:text-6xl">
            one shake at a time.
          </p>
          <p className="sm:text-xl w-full text-justify text-[#7a5137] mt-3 sm:w-10/12">
            We're a young Indian food company, founded in 2024 in Umargam,
            Gujarat. We believe nutrition shouldn't need a chemistry degree to
            understand — so we make instant, wholesome shake mixes built around
            ingredients you already know and trust.
          </p>
        </div>

        <div className="p-10 bg-[#fff6e6] border">
          <div>
            <p className="text-lg mb-1 text-[#7a5137] ">THE MISSION</p>
            <p className="text-[#150500] font-bold text-3xl sm:text-4xl">
              A nation runs on what its{" "}
              <span className="text-[#004527]">people eat.</span>
            </p>
            <p className="sm:text-xl w-full text-justify text-[#7a5137] mt-3 sm:w-10/12">
              Across India, mornings are rushed, evenings are tired, and
              "healthy" often becomes "expensive" or "boring." We started
              Nutrilock to change that — to put a 20g pouch of real nutrition in
              every kitchen drawer, school bag, and gym locker. Made with love
              in Umargam, Gujarat — built for every Indian who wants more from
              their food, without the fuss.
            </p>
          </div>

          <div className="p-3 sm:p-4 rounded-xl w-52 shadow border border-gray-300 mt-7 bg-white">
            <p className="text-lg sm:text-xl font-bold">Est. 2024</p>
            <p className="text-sm sm:text-lg mb-1 text-[#7a5137] ">
              UMARGAM, GUJARAT
            </p>
          </div>
        </div>

        <div className="mx-10 my-10 sm:my-20">
          <p className="sm:text-lg mb-1 text-[#7a5137] ">WHAT WE STAND FOR</p>
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
                Born in Umargam, Gujarat — sourcing from Indian farms, made for
                Indian families.
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

          <div className="flex justify-center w-full">
            <div className="mt-10 sm:mt-20 bg-gradient-to-r w-full sm:w-8/12 rounded-3xl from-[#004527] to-[#511f01] p-10 sm:p-20">
              <p className="text-3xl sm:text-4xl font-bold text-white">
                Want to be part of the{" "}
                <span className="text-yellow-500">journey?</span>
              </p>
              <p className="text-white sm:text-lg my-4">
                Partner with us, stock our products, or just say hi — we'd love
                to hear from you.
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
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
