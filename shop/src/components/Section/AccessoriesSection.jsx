import React, { useEffect, useState } from "react";
import NewArrivalCard from "../New Arrival/NewArrivalCard";

function AccessoriesSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  return (
    <>
      <div className="py-8 px-10 bg-gray-200 dark:bg-gray-900 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 mb-7 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-950 dark:text-white">
            Accessories
          </h2>
          <button className="text-sm font-bold text-indigo-600 hover:underline">
            See All
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((n) => (
              <div
                key={n}
                className="w-full h-80 bg-gray-100 dark:bg-gray-800 animate-pulse rounded-[32px]"
              ></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((item) => (
              <NewArrivalCard
                key={item.id}
                item={{
                  ...item,
                  category: "Accessories",
                  isLimited: item.rating.rate > 4,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default AccessoriesSection;
