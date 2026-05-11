import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import MultiBanner from "../components/MultiBanner";
import CatergoriesSection from "../components/Section/CatergoriesSection";
import NewArrivalCard from "../components/New Arrival/NewArrivalCard";
import NewArrivalSection from "../components/Section/NewArrivalSection";

function Home() {
  return (
    <>
    <div className="w-full h-full">
      <NavBar />
      <SearchBar />
      <MultiBanner />
      <CatergoriesSection/>
      <NewArrivalSection/>
    </div>
    </>
  );
}

export default Home;
