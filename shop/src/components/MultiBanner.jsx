import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bannerData = [
  {
    id: 1,
    title: "First Purchase Enjoy a Special Offer",
    offer: "Limited Offer",
    bgColor: "bg-[#B4D36E]",
    image:"",  },
  {
    id: 2,
    title: "Summer Collection is Live - 30% Off",
    offer: "New Arrival",
    bgColor: "bg-[#ff9f43]/40",
    image:"" , },
  {
    id: 3,
    title: "MEN AND WOMEN",
    offer: "Special Deal",
    bgColor: "bg-[#a29bfe]/40",
    image: "", },
];

const MultiBanner = () => {
  const [current, setCurrent] = useState(0);

  // Auto-play logic: moves left to right every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerData.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full px-6 py-4 overflow-hidden">
      <div className="relative h-[200px] md:h-[250px] w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            // "Move from left to right" effect
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={`absolute inset-0 ${bannerData[current].bgColor} rounded-[32px] p-6 flex items-center overflow-hidden`}
          >
            {/* Text Content */}
            <div className="z-10 w-3/5">
              <span className="bg-black text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold">
                {bannerData[current].offer}
              </span>
              <h2 className="text-gray-900 text-xl md:text-2xl font-black mt-2 leading-tight">
                {bannerData[current].title}
              </h2>
              <button className="mt-4 bg-black text-white flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium">
                Shop Now <i className="bx bx-right-top-arrow-circle"></i>
              </button>
            </div>

            {/* Image Render */}
            <div className="absolute right-0 bottom-0 w-2/5 h-full flex items-end">
              <img
                src={bannerData[current].image}
                className="h-[90%] w-full object-contain drop-shadow-2xl"
                alt="banner"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Custom Indicators (Pill Style) */}
      <div className="flex justify-center gap-2 mt-4">
        {bannerData.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
              current === i ? "w-6 bg-black" : "w-2 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MultiBanner;
