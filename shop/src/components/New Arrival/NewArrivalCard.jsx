import { Cart, Heart } from "@boxicons/react";
import React from "react";

function NewArrivalCard({ item }) {
  if (!item) return null;

  return (
    <div className="group relative w-full  dark:bg-gray-800 rounded-[32px] p-4 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 dark:border-gray-700 cursor-pointer">
      {/* Product Image Container */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[24px] bg-[#f8f8f8] dark:bg-gray-900/50 flex items-center justify-center">
        {/* Floating Badge for Limited Offers */}
        {item.isLimited && (
          <span className="absolute top-3 left-3 z-10 bg-black text-white text-[10px] px-3 py-1 rounded-full uppercase font-bold tracking-tighter">
            Limited
          </span>
        )}

        {/* Wishlist Button */}
        <button className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white/80 backdrop-blur-md rounded-full text-gray-800 hover:bg-red-500 hover:text-white transition-all">
        <Heart/>
        </button>

        <img
          src={item.image || null}
          alt={item.title}
          className="w-full h-full rounded-2xl object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out drop-shadow-2xl"
        />
      </div>

      {/* Product Details - Rating Removed */}
      <div className="mt-4 px-2 space-y-1">
        <p className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest">
          {item.category}
        </p>
        <h3 className="text-lg font-black text-gray-900 dark:text-white leading-tight line-clamp-1">
          {item.title}
        </h3>

        <div className="flex justify-between items-center pt-3">
          <p className="text-xl font-black text-gray-900 dark:text-white">
            ${item.price.toFixed(2)}
          </p>

          {/* Circular Add to Cart Button */}
          <button className="w-10 h-10 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
            <Cart/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewArrivalCard;
