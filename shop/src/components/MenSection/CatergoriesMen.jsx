import React from "react";

function CatergoriesMen() {
  // Data structure directly pulled from your Zando reference image
  const dropdownData = [
    {
      title: "New In",
      items: ["All", "Lifestyle", "Smart Casual", "Sportlife", "New In Top", "New In Bottom", "New In Dress"],
    },
    {
      title: "Clothing",
      items: [
        "All", "Tops", "Dresses", "T-Shirts", "Polo Shirts", "Shirts & Blouses", 
        "Jumpsuits", "Blazers & Jackets", "Vests & Cardigans", "Hoodies & Sweatshirts", 
        "Sportswear", "Skorts & Skirts", "Trousers", "Shorts"
      ],
    },
    {
      title: "Accessories",
      items: ["All", "Bags", "Socks", "Caps & Hats", "Glasses", "Merchandise"],
    },
    {
      title: "Shoes",
      items: ["All", "Heels", "Sandals", "Sneakers", "Flats & Loafers"],
    },
    {
      title: "Shop by collection",
      items: ["All", "SAVAGE", "CLOCK IT", "Summer 2026", "Urban Getaway", "Urban Executive"],
    },
    {
      title: "SALE",
      isSale: true, // Special red highlight marker
      items: ["Clothing", "Accessories", "Shoes", "Shop by collection"],
    },
  ];

  // Your updated list of 5 categories
  const cat = [
    { id: 1, title: "Men's Outfit" },
    { id: 2, title: "Women's Outfit" },
    { id: 3, title: "Kids' Outfit" },
    { id: 4, title: "Sportswear" },
    { id: 5, title: "Accessories" },
  ];

  return (
    <div className="relative py-10 px-6 md:px-10 bg-gray-50 dark:bg-gray-950 transition-all duration-300">
      
      {/* CHANGED: Turned this into a dynamic grid system.
        - On Mobile: 2 items per row (grid-cols-2)
        - On Desktop: 5 items in a single row (md:grid-cols-5)
      */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
        {cat.map((item) => (
          <CatButton key={item.id} item={item} dropdownData={dropdownData} />
        ))}
      </div>

    </div>
  );
}

const CatButton = ({ item, dropdownData }) => (
  /* relative group tells the child dropdown to watch this specific card for hovers */
  <div className="relative group">
    
    {/* Clean, minimalist text button trigger */}
    <div className="h-20 flex flex-col justify-center items-center rounded-2xl shadow-sm bg-white dark:bg-gray-900 p-4 border border-gray-100 dark:border-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-md cursor-pointer transition-all duration-300">
      {/* FIXED text size: Changed md:text-xs to md:text-base so it stays readable */}
      <h3 className="text-sm md:text-base font-black text-gray-950 dark:text-white group-hover:text-indigo-600 transition-colors text-center line-clamp-1">
        {item.title}
      </h3>
      <span className="text-[10px] font-bold text-gray-400 mt-0.5 flex items-center gap-0.5">
        View <i className="bx bx-chevron-down text-xs"></i>
      </span>
    </div>

    {/* ZANDO MEGA DROPDOWN MENU
      - Uses absolute positioning so it breaks out of the small grid box
      - md:-left-auto forces alignment relative to your max-w-7xl content field on large screens
    */}
    <div className="hidden group-hover:block absolute left-0 md:-left-20 lg:-left-40 top-[105%] bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-2xl border border-gray-100 dark:border-gray-800 z-50 w-[85vw] sm:w-[70vw] md:w-[80vw] lg:w-[85vw] max-w-6xl p-8 rounded-2xl transition-all">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-left">
        
        {dropdownData.map((column, idx) => (
          <div key={idx} className="space-y-4">
            {/* Column Heading Title */}
            <h4 className={`text-xs md:text-sm font-black tracking-tight ${column.isSale ? "text-red-500" : "text-gray-950 dark:text-white"}`}>
              {column.title}
            </h4>
            
            {/* Navigation Lists */}
            <ul className="space-y-2">
              {column.items.map((subItem, subIdx) => (
                <li key={subIdx}>
                  <a
                    href={`/shop/${subItem.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className={`text-xs block transition-colors duration-200 font-medium
                      ${column.isSale 
                        ? "text-red-400 hover:text-red-600 font-bold" 
                        : "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
                      }`}
                  >
                    {subItem}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </div>

  </div>
);

export default CatergoriesMen;