import React, { useEffect, useState } from "react";
import NewArrivalCard from "../New Arrival/NewArrivalCard";

function SummerSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => console.error("Error fetching items:", err));
  }, []);

  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-end mb-7">
          <div>
            <h2 className="text-3xl font-black text-gray-900 dark:text-white">
              Best for Summer
            </h2>
          </div>
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
                  category: "Womenswear",
                  isLimited: item.rating.rate > 4,
                }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default SummerSection;
