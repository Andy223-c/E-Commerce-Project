import React from "react";

function OutfitCard({ item }) {
  return (
    <>
      <div className="w-[50%] h-28 flex justify-between items-center gap-5 rounded-xl shadow-md overflow-hidden hover:shadow-xl  dark:hover:shadow-indigo-900/20 transition-all duration-300 border border-transparent dark:border-gray-700 cursor-pointer group ">
        <div className="p-5 space-y-2">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white line-clamp-1">
            {item.title}
          </h3>
        </div>
        <div className="w-24 h-24 flex justify-center items-center p-2">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain  mix-blend-multiply hover:scale-105 transition-all duration-300"
          />
        </div>
      </div>
    </>
  );
}

export default OutfitCard;
