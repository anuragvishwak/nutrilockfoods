import React from "react";
import Navbar from "./Navbar";
import { FaArrowRightLong, FaShield } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiLeafLine } from "react-icons/ri";
import Footer from "./Footer";
import { motion } from "framer-motion";
import img5 from "./peanut butter.png";
import { FaHeart, FaStar } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";

function DefaultLandingPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 h-full">
      <Navbar />
      <div className="">
        <div className="bg-gradient-to-r mix-blend-multiply flex items-center from-[#ffefe5] to-white h-[500px] sm:h-[700px]">
          <div className="m-10">
            <motion.p
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-7xl text-[#150500] mb-3 font-bold "
            >
              Making India
            </motion.p>
            <motion.p
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-7xl text-[#150500] mb-3 font-bold "
            >
              tastes like{" "}
              <span className="text-[#004527] font-bold">Honest food.</span>
            </motion.p>
            <motion.p
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="sm:text-2xl text-[#7a5137] w-full sm:w-7/12"
            >
              Fuel your ambition with precision-balanced fuel designed to keep
              you at your peak from sunrise to sunset.
            </motion.p>
            <div className="flex items-center  mt-5 space-x-5">
              <motion.button
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-yellow-500 px-3 py-1.5 sm:px-6 sm:py-4 font-semibold rounded-full shadow-xl bg-yellow-500 text-white"
              >
                <div className="flex items-center space-x-2">
                  <p className="">Buy Now</p> <AiOutlineShoppingCart />
                </div>
              </motion.button>
              <motion.button
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 px-3 py-1.5 sm:px-6 sm:py-4 rounded-full border-gray-200 font-semibold hover:bg-black hover:text-white"
              >
                <div className="flex items-center space-x-2">
                  <p className="">Learn More</p> <FaArrowRightLong />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10 sm:py-20 bg-gradient-to-br from-[#fff2eb] to-blue-100">
          <div className="relative bg-[#fdf6ea] border border-[#e7dccf] rounded-[40px] px-10 sm:px-24 pt-5 sm:pt-10 pb-0 shadow-sm rotate-[-4deg]">
            <div className="absolute -right-10 top-8 rotate-[6deg]">
              <div className="bg-[#004527] px-3 py-1.5 sm:px-6 sm:py-4 text-white rounded-xl sm:rounded-3xl shadow-xl">
                <p className="text-sm tracking-wide opacity-80">NEW LAUNCH</p>
                <p className="font-semibold sm:font-bold sm:text-2xl">
                  Banana × Peanut
                </p>
              </div>
            </div>

            <img
              src={img5}
              alt="product image"
              className="h-96 sm:h-[600px] object-contain"
            />
          </div>
        </div>

        <div className="bg-[#004527] w-full overflow-hidden py-5">
          <div className="flex w-max animate-marquee whitespace-nowrap items-center gap-6 px-4">
            <div className="flex items-center space-x-2 shrink-0">
              <p className="font-bold text-white text-sm sm:text-base">
                Made in India
              </p>
              <RiLeafLine size={20} className="text-yellow-500" />
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <p className="font-bold text-white text-sm sm:text-base">
                Zero Sugar
              </p>
              <RiLeafLine size={20} className="text-yellow-500" />
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <p className="font-bold text-white text-sm sm:text-base">
                100% Natural
              </p>
              <RiLeafLine size={20} className="text-yellow-500" />
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <p className="font-bold text-white text-sm sm:text-base">
                Cholesterol Free
              </p>
              <RiLeafLine size={20} className="text-yellow-500" />
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <p className="font-bold text-white text-sm sm:text-base">
                10 Second Shake
              </p>
              <RiLeafLine size={20} className="text-yellow-500" />
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <p className="font-bold text-white text-sm sm:text-base">
                No Preservatives
              </p>
              <RiLeafLine size={20} className="text-yellow-500" />
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <p className="font-bold text-white text-sm sm:text-base">
                Made in India
              </p>
              <RiLeafLine size={20} className="text-yellow-500" />
            </div>

            <div className="flex items-center space-x-2 shrink-0">
              <p className="font-bold text-white text-sm sm:text-base">
                Zero Sugar
              </p>
              <RiLeafLine size={20} className="text-yellow-500" />
            </div>
          </div>
        </div>

        <div className="py-20 sm:my-40 mx-10 sm:mx-20">
          <div className="mb-5">
            <p className="text-lg mb-1 text-[#7a5137] ">WHY NUTRILOCK</p>
            <p className="text-[#150500] font-bold text-3xl sm:">
              Built on four simple,
            </p>
            <p className="text-[#150500] font-bold text-3xl sm:text-4xl">
              <span className="text-[#004527]">non-negotiable</span> promises.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-[#fff2eb] hover:bg-white hover:shadow-xl p-3 sm:p-5 border rounded-xl border-gray-300">
              <FaHeart
                size={40}
                className="rounded bg-yellow-200 text-yellow-500 p-2"
              />
              <p className="text-[#004527] font-bold text-lg sm:text-xl">
                Zero Sugar
              </p>
              <p className="text-[#7a5137] text-sm sm:text-base">
                No added sugars. Naturally sweet from real bananas.
              </p>
            </div>

            <div className="bg-[#fff2eb] hover:bg-white hover:shadow-xl p-3 sm:p-5 border rounded-xl border-gray-300">
              <FaShield
                size={40}
                className="rounded bg-green-200 text-green-500 p-2"
              />
              <p className="text-[#004527] font-bold text-lg sm:text-xl">
                No Preservatives
              </p>
              <p className="text-[#7a5137] text-sm sm:text-base">
                Honest ingredients, nothing artificial.
              </p>
            </div>

            <div className="bg-[#fff2eb] hover:bg-white hover:shadow-xl p-3 sm:p-5 border rounded-xl border-gray-300">
              <FaStar
                size={40}
                className="rounded bg-orange-200 text-[#7a5137] p-2"
              />
              <p className="text-[#004527] font-bold text-lg sm:text-xl">
                Cholesterol Free
              </p>
              <p className="text-[#7a5137] text-sm sm:text-base">
                Heart-friendly nutrition for the everyday hustle.
              </p>
            </div>

            <div className="bg-[#fff2eb] hover:bg-white hover:shadow-xl p-3 sm:p-5 border rounded-xl border-gray-300">
              <BsFillLightningChargeFill
                size={40}
                className="rounded bg-yellow-200 text-yellow-500 p-2"
              />
              <p className="text-[#004527] font-bold text-lg sm:text-xl">
                Instant Mix
              </p>
              <p className="text-[#7a5137] text-sm sm:text-base">
                Tear, pour, shake — your protein is ready.
              </p>
            </div>
          </div>
        </div>

        <div className="py-14 sm:py-40 bg-[#fff2eb] px-10 sm:px-20">
          <div className="mb-3">
            <p className="text-lg mb-1 text-[#7a5137]">THE INGREDIENTS</p>
            <p className="text-[#150500] font-bold text-3xl sm:text-4xl">
              Real bananas. Real peanuts. Real Chocolates{" "}
              <span className="text-[#004527]">Real simple.</span>
            </p>
          </div>

          <p className="text-[#7a5137] sm:text-lg text-justify">
            We don’t believe in complicated ingredient lists or hidden
            additives. Every Nutrilock product is built from honest, everyday
            superfoods — the kind you’d find in a real kitchen, not a lab. No
            syrups. No fillers. No artificial “flavours” pretending to be food.
            Just clean nutrition, the way nature intended.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 mt-5 sm:mt-10">
            <div className="p-5 bg-white border rounded-xl border-gray-200">
              <p className="text-yellow-500 font-bold text-xl">Banana</p>
              <p className="text-[#7a5137]">
                Natural sweetness, potassium-rich energy for the body.
              </p>
            </div>

            <div className="p-5 bg-white border rounded-xl border-gray-200">
              <p className="text-[#d1885b] font-bold text-xl">Peanut</p>
              <p className="text-[#7a5137]">
                Plant protein powerhouse with healthy fats.
              </p>
            </div>

            <div className="p-5 bg-white border rounded-xl border-gray-200">
              <p className="text-[#723814] font-bold text-xl">
                Cocoa / Chocolate
              </p>
              <p className="text-[#511f01]">
                Rich taste with natural antioxidants.
              </p>
            </div>

            <div className="p-5 bg-white border rounded-xl border-gray-200">
              <p className="text-[#004527] font-bold text-xl">
                Whey / Plant Protein
              </p>
              <p className="text-[#511f01]">Pure muscle-supporting protein.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="my-10 sm:my-20 bg-gradient-to-r sm:w-8/12 rounded-3xl from-[#004527] to-[#511f01] p-10 sm:p-20 mx-10 sm:mx-20">
            <p className="text-3xl sm:text-4xl font-bold text-white">
              Ready to make your <span className="text-yellow-500">shake</span>{" "}
              matter?
            </p>
            <p className="text-white sm:text-lg my-4">
              Whether you're a distributor, retailer or a curious customer —
              let's talk. We respond within 24 hours.
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

export default DefaultLandingPage;
