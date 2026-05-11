import React from "react";
import NewArrivalCard from "../New Arrival/NewArrivalCard";
import { newArrival } from "../../Data/NewArrival";

function NewArrivalSection() {
  return (
    <>
      <div className="py-8 px-10 bg-gray-200 dark:bg-gray-900 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-950 dark:text-white">
            New Arrival
          </h2>
        </div>

        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {newArrival.map((item) => (
            <NewArrivalCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default NewArrivalSection;
