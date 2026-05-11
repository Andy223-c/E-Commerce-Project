import React from "react";

/**
 * @param {Object} item - The category data (name, path)
 * @param {Boolean} isActive - Controls the highlighted styling
 */
function Button({ item, isActive }) {
  return (
    <>
      <div className="flex flex-col items-center gap-2 group">
        <div
          className={`
      w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center
          overflow-hidden border-2 transition-all duration-300
        ${
          isActive
            ? "bg-black text-white dark:bg-white dark:text-black shadow-md border-black dark:border-white"
            : "bg-white text-gray-400 border border-gray-100 dark:bg-gray-800 dark:border-gray-700 hover:text-black dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-500"
        }
      `}
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover duration-500 transition-transform group-hover:scale-110"
          />
        </div>
        <span
          className={`
          text-xs md:text-sm font-bold transition-colors
          ${
            isActive
              ? "text-black dark:text-white"
              : "text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200"
          }
        `}
        >
          {" "}
          {item.name}
        </span>
      </div>
    </>
  );
}

export default Button;
