import { Search, SliderAlt } from "@boxicons/react";
import React, { useState } from "react";
function SearchBar() {
  const [query, setQuery] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const filtered = allData.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase()) ||
        item.instructor.toLowerCase().includes(value.toLowerCase()),
    );

    setResults(filtered);
  };
  return (
    <>
      <div className=" flex justify-center mt-4">
        <div className="flex w-full max-w-xl shadow-md rounded-lg overflow-hidden border-transparent dark:border-gray-700">
          <div className="shrink-0 p-2 flex justify-center items-center transition-colors bg-white ">
            <Search size="24px" />
          </div>
          <input
            type="text"
            placeholder="What are you looking for?"
            value={query}
            onChange={handleChange}
            className="w-full px-4 py-3 outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-white transition-colors"
          />
          <button className="p-2 flex items-center justify-center bg-white transition-colors">
            <SliderAlt  size="24px" />
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
