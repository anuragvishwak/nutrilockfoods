import React from "react";
import Navbar from "./Navbar";
import { FaArrowRightLong, FaCubesStacked } from "react-icons/fa6";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiLeafLine } from "react-icons/ri";
import Footer from "./Footer";
import { motion } from "framer-motion";
import img5 from "./peanut butter.png";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { BiRightArrowAlt } from "react-icons/bi";
import { TbHeartCheck, TbTestPipeOff } from "react-icons/tb";
import img6 from "./hero-section.png";

function DefaultLandingPage() {
  return (
    <div className="min-h-screen h-full">
      <Navbar />
      <div className="">
        <div className="bg-gradient-to-r mix-blend-multiply flex items-center justify-center sm:space-x-28 from-[#d7ffde] to-white h-[380px] sm:h-[500px] md:h-screen">
          <div className="p-7 sm:p-0 sm:m-10">
            <motion.p
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-7xl text-[#150500] mb-3 font-bold "
            >
              Smart Nutrition for
            </motion.p>
            <motion.p
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-4xl sm:text-7xl text-[#004527] mb-3 font-bold "
            >
              Everyday Life.
            </motion.p>
            <motion.p
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="sm:text-2xl text-[#7a5137] w-full sm:w-10/12"
            >
              Enjoy healthy goodness in every sip.
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

          <div className="relative hidden sm:block">
            <div className="relative flex items-center justify-center">
              <motion.img
                src={img5}
                alt="Product"
                initial={{ y: -100, opacity: 0, rotate: -45 }}
                animate={{ y: 0, opacity: 0.7, rotate: -45 }}
                transition={{ duration: 0.8 }}
                className="h-[140px] sm:h-[180px] -mr-10 mt-20 object-contain z-0"
              />

              <motion.img
                src={img5}
                alt="Product"
                initial={{ y: -100, opacity: 0, rotate: -20 }}
                animate={{ y: 0, opacity: 0.85, rotate: -20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="h-[230px] -mr-8 mt-8 object-contain z-10"
              />

              <motion.img
                src={img5}
                alt="Product"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="h-[350px] object-contain z-30"
              />

              <motion.img
                src={img5}
                alt="Product"
                initial={{ y: -100, opacity: 0, rotate: 20 }}
                animate={{ y: 0, opacity: 0.85, rotate: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="h-[230px] -ml-8 mt-8 object-contain z-10"
              />

              <motion.img
                src={img5}
                alt="Product"
                initial={{ y: -100, opacity: 0, rotate: 45 }}
                animate={{ y: 0, opacity: 0.7, rotate: 45 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="h-[140px] sm:h-[180px] -ml-10 mt-20 object-contain z-0"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center py-10 sm:py-20 bg-gradient-to-br from-[#d7ffde] via-[#f4ffd8] to-yellow-50">
          <div className="relative w-full max-w-5xl h-[420px] sm:h-[600px] overflow-hidden">
            <motion.img
              src={img5}
              initial={{ x: -80, opacity: 0, rotate: -45 }}
              animate={{ x: 0, opacity: 0.5, rotate: -45 }}
              transition={{ duration: 0.8 }}
              className="absolute left-[-40px] top-1/2 -translate-y-1/2 h-[140px] sm:h-[200px] object-contain z-0"
            />

            <motion.img
              src={img5}
              initial={{ x: -80, opacity: 0, rotate: -20 }}
              animate={{ x: 0, opacity: 0.7, rotate: -20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute left-10 top-1/2 -translate-y-1/2 h-[220px] object-contain z-10"
            />

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute inset-0 flex items-center justify-center z-30"
            >
              <div className="relative bg-[#ffffdc] border border-[#e7dccf] rounded-[40px] px-10 sm:px-24 pt-6 sm:pt-10 shadow-sm rotate-[-3deg]">
                <div className="absolute -right-6 top-6 sm:-right-10 sm:top-8 rotate-[6deg]">
                  <div className="bg-[#004527] px-3 py-1.5 sm:px-6 sm:py-4 text-white rounded-xl sm:rounded-3xl shadow-xl">
                    <p className="text-xs sm:text-sm tracking-wide opacity-80">
                      NEW LAUNCH
                    </p>
                    <p className="font-semibold sm:font-bold sm:text-2xl">
                      Banana × Peanut
                    </p>
                  </div>
                </div>

                <img
                  src={img5}
                  alt="Product"
                  className="h-80 sm:h-[500px] object-contain"
                />
              </div>
            </motion.div>

            <motion.img
              src={img5}
              initial={{ x: 80, opacity: 0, rotate: 20 }}
              animate={{ x: 0, opacity: 0.7, rotate: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-10 top-1/2 -translate-y-1/2 h-[220px] object-contain z-10"
            />

            <motion.img
              src={img5}
              initial={{ x: 80, opacity: 0, rotate: 45 }}
              animate={{ x: 0, opacity: 0.5, rotate: 45 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute right-[-40px] top-1/2 -translate-y-1/2 h-[140px] sm:h-[200px] object-contain z-0"
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

        <div className="py-14 sm:my-20 mx-7 sm:mx-10">
          <div className="my-8">
            <p className="text-lg mb-1 text-[#7a5137] ">WHY NUTRILOCK</p>
            <p className="text-[#150500] font-bold text-3xl sm:">
              Built on four simple,
            </p>
            <p className="text-[#150500] font-bold text-3xl sm:text-4xl">
              <span className="text-[#004527]">non-negotiable</span> promises.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0 }}
              className="border-l-8 border-green-500"
            >
              <div className="flex items-center w-auto justify-center px-8 hover:bg-white hover:shadow-xl h-44 border border-gray-300">
                <div>
                  <FaCubesStacked
                    size={40}
                    className="rounded bg-yellow-200 text-yellow-500 p-2"
                  />
                  <p className="text-[#004527] font-bold text-lg sm:text-xl">
                    Zero Added Sugar
                  </p>
                  <p className="text-[#7a5137] text-sm sm:text-base">
                    Naturally sweetened with real banana goodness.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-l-8 border-pink-500"
            >
              <div className="hover:bg-white hover:shadow-xl h-44 flex items-center px-8 justify-center border border-gray-300">
                <div>
                  <TbTestPipeOff
                    size={40}
                    className="rounded bg-green-200 text-green-500 p-2"
                  />
                  <p className="text-[#004527] font-bold text-lg sm:text-xl">
                    No Preservatives
                  </p>
                  <p className="text-[#7a5137] text-sm sm:text-base">
                    Clean ingredients with nothing artificial.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="border-l-8 border-orange-500"
            >
              <div className="flex items-center justify-center px-8 hover:bg-white hover:shadow-xl border h-44 border-gray-300">
                <div>
                  <TbHeartCheck
                    size={40}
                    className="rounded bg-orange-200 text-[#7a5137] p-2"
                  />
                  <p className="text-[#004527] font-bold text-lg sm:text-xl">
                    Cholesterol Free
                  </p>
                  <p className="text-[#7a5137] text-sm sm:text-base">
                    Heart-friendly nutrition for your daily routine.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="border-l-8 border-yellow-500"
            >
              <div className="flex items-center justify-center hover:bg-white hover:shadow-xl border h-44 border-gray-300">
                <div>
                  <BsFillLightningChargeFill
                    size={40}
                    className="rounded bg-yellow-200 text-yellow-500 p-2"
                  />
                  <p className="text-[#004527] font-bold text-lg sm:text-xl">
                    Instant Shake Mix
                  </p>
                  <p className="text-[#7a5137] text-sm sm:text-base">
                    Just pour, shake and enjoy in seconds.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="py-14 sm:py-28 bg-gradient-to-r from-[#e9ffee] to-blue-100 px-5 sm:px-24">
          <div className="relative max-w-7xl mx-auto min-h-[500px]">
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0 }}
              className="absolute top-0 left-0"
            >
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg px-2.5 sm:px-5 py-2 sm:py-4 rotate-[7deg] sm:mr-20 sm:rotate-[25deg]">
                <p className="text-[#723814] font-bold sm:text-3xl whitespace-nowrap">
                  Real Banana Powder
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 right-0"
            >
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg px-2.5 sm:px-5 py-2 sm:py-4 ml-36 sm:ml-0 rotate-[-8deg] sm:rotate-[-25deg]">
                <p className="text-yellow-500 font-bold sm:text-3xl whitespace-nowrap">
                  Peanut Goodness
                </p>
              </div>
            </motion.div>

            <div className="flex justify-center items-center min-h-[500px]">
              <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                }}
                className="bg-white shadow-xl border border-gray-300 rounded-3xl p-8 sm:p-14 w-full max-w-4xl"
              >
                <div className="mb-4">
                  <p className="text-lg mb-2 text-[#7a5137]">THE INGREDIENTS</p>

                  <h2 className="text-[#150500] font-bold text-3xl sm:text-5xl leading-tight">
                    Real bananas. Real nuts.
                    <span className="text-[#004527] block">Real goodness.</span>
                  </h2>
                </div>

                <p className="text-[#7a5137] text-lg sm:text-xl leading-relaxed">
                  Made with real bananas and crunchy nuts. Rich in nut-powered
                  protein and daily energy. A quick and healthy choice for busy
                  days. No added sugar or preservatives. Just simple ingredients
                  with great taste.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 left-0"
            >
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg px-2.5 sm:px-5 py-2 sm:py-4 rotate-[-8deg] sm:rotate-[-20deg]">
                <p className="text-[#d1885b] font-bold sm:text-3xl whitespace-nowrap">
                  Almond Nutrition
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-0 right-0"
            >
              <div className="bg-white border border-gray-200 rounded-xl shadow-lg px-2.5 sm:px-5 py-2 sm:py-4 rotate-[8deg] sm:rotate-[20deg]">
                <p className="text-[#004527] font-bold sm:text-3xl whitespace-nowrap">
                  Naturally Delicious
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="my-14 sm:my-20 bg-gradient-to-r sm:w-8/12 rounded-3xl from-[#004527] to-[#511f01] p-10 sm:p-20 mx-7 sm:mx-20">
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
