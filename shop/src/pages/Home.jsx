import React from "react";
import NavBar from "../components/NavBar";
import SearchBar from "../components/SearchBar";
import MultiBanner from "../components/MultiBanner";

function Home() {
  return (
    <>
    <div className="w-full h-full">
      <NavBar />
      <SearchBar />
      <MultiBanner />
    </div>
    </>
  );
}

export default Home;
