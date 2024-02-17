import React from "react";
import { BsSearch } from "react-icons/bs";

const TrendingPage = () => {
  return (
    <section className="w-full sticky top-2 mt-2 flex flex-col items-stretch h-screen px-6 ">
      <div>
        <div className="relative w-full h-full group">
          <input
            type="text"
            className="outline-none peer focus:border-[#194fffdd] focus:border bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-14 pr-4"
            name=""
            id=""
            placeholder="Search Twitter"
          />
          <label
            htmlFor="searchBox"
            className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-[#194fffdd]"
          >
            <BsSearch className="w-5 h-5" />
          </label>
        </div>
      </div>
      <div className="flex flex-col rounded-xl my-4 border-2 border-black/40 ">
        <h3 className="font-bold text-xl my-4 px-4">What's Trending</h3>
        <div>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="hover:bg-white/10 p-4 last:rounded-b-xl ">
              <div className="font-bold text-lg ">#trending{i + 1}</div>
              <div className="text-xs text-neutral-400">35.4k</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingPage;


// bg-[#1d1648]