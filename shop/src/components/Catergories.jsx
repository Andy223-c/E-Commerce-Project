import React from "react";
import { Link } from "react-router-dom";
import OutfitCard from "./OutfitCard";
import menImg from "../assets/men.png";
import womenImg from "../assets/women.png";
import CatergoriesButton from "./CatergoriesButton";
function Catergories() {
  const outFit = [
    {
      id: 1,
      title: "Men's outfit",
      image: menImg,
    },
    {
      id: 2,
      title: "Wonmen's outfit",
      image: womenImg,
    },
  ];
  return (
    <>
      <div className="py-10 px-10 bg-gray-100 dark:bg-gray-900 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Catergories
          </h2>

          <div className="">
            <Link to="/">See All</Link>
          </div>
        </div>
        <div className="">
          <CatergoriesButton />
        </div>
        <div className="flex justify-between gap-5 px-2">
          {outFit.map((item) => (
            <OutfitCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Catergories;
