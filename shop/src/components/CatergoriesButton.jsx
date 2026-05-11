import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./button.css"; // Import the CSS file directly, not a variable
import Isacc from "../assets/image/acc.png";
import Isshirt from "../assets/image/shirt.png";
import Ishat from "../assets/image/hat.png";
import Ishoodies from "../assets/image/hoodies.png";
import Isjacket from "../assets/image/jacket.png";
import Isjean from "../assets/image/jean.png";
import Ispant from "../assets/image/pant.png";
import Istshirt from "../assets/image/t-shirt.png";
function CatergoriesButton() {
  const [active, setActive] = useState("All");
  const catergories = [
    {
      name: "All",
      path: "/",
      img: "https://i.pinimg.com/1200x/e4/70/de/e470de2191b7d18eaebed27824e037ee.jpg",
    },
    { name: "Shirt", path: "/shirts", img: Isshirt },
    { name: "T-Shirt", path: "/t-shirts", img: Istshirt },
    { name: "Hoodies", path: "/hoodies", img: Ishoodies },
    { name: "Jacket", path: "/jackets", img: Isjacket },
    { name: "Pant", path: "/pants", img: Ispant },
    { name: "Jean", path: "/jeans", img: Isjean },
    { name: "Hat", path: "/hats", img: Ishat },
    { name: "Shoes", path: "/shoes", img: Isacc },
    { name: "Glass", path: "/accessories", img: Isacc },
    { name: "Belt", path: "/accessories", img: Isacc },
    { name: "Chain", path: "/accessories", img: Isacc },
    { name: "Key-Chain", path: "/accessories", img: Isacc },
    { name: "Accessories", path: "/accessories", img: Isacc },
  ];

  return (
    <div className="w-full py-6 dark:bg-gray-900 transition-all">
      <div className="max-w-7xl mx-auto px-6 flex items-center gap-3 overflow-x-auto custom-scroll pb-8">
        {catergories.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            onClick={() => setActive(link.name)}
            className="flex-shrink-0"
          >
            <Button item={link} isActive={active === link.name} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CatergoriesButton;
