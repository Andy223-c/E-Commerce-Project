import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import MultiBanner from "../components/MultiBanner";
import CatergoriesSection from "../components/Section/CatergoriesSection";
import NewArrivalSection from "../components/Section/NewArrivalSection";
import MensSection from "../components/Section/MensSection";
import WomensSection from "../components/Section/WomensSection";
import SummerSection from "../components/Section/SummerSection";
import AccessoriesSection from "../components/Section/AccessoriesSection";

function Home() {
  return (
    <>
    <div className="w-full h-full">
      <NavBar />
      <SearchBar />
      <MultiBanner />
      <CatergoriesSection/>
      <NewArrivalSection/>
      <SummerSection/>
      <MensSection/>
      <WomensSection/>
      <AccessoriesSection/>
    </div>
    </>
  );
}

export default Home;
