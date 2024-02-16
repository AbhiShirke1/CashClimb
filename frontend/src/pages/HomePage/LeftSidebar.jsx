import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsEnvelope, BsThreeDots, BsTwitterX } from "react-icons/bs";
import { CgMoreVerticalO } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { SlBell } from "react-icons/sl";
import { Link } from "react-router-dom";

const LeftSidebar = () => {
    const NAVIGATION_ITEMS = [
        {
          title: "Twitter",
          icon: BsTwitterX,
        },
      
        {
          title: "Home",
          icon: AiOutlineHome,
        },
      
        {
          title: "Explore",
          icon: FiSearch,
        },
      
        {
          title: "Notifications",
          icon: SlBell,
        },
      
        {
          title: "Messages",
          icon: BsEnvelope,
        },
      
        {
          title: "Profile",
          icon: FaRegUser,
        },
      
        {
          title: "More",
          icon: CgMoreVerticalO,
        },
      ];
  return (
      <section className="w-[23%] sticky top-0 flex flex-col h-screen items-stretch px-4">
        <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
          {NAVIGATION_ITEMS.map((item) => (
            <Link
              to={`/${item.title.toLowerCase()}`}
              key={item.title}
              className="hover:bg-white/10 text-2xl flex items-center justify-start w-fit space-x-4 rounded-3xl p-2"
            >
              <div>
                <item.icon />
              </div>
              {item.title !== "Twitter" && <div>{item.title}</div>}
            </Link>
          ))}
          <button className="rounded-full bg-[#1d9bf0] p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
            Search
          </button>
        </div>
        <button className="rounded-full flex items-center space-x-2 my-4 p-2 bg-transparent text-center hover:bg-white/10 transition duration-200 w-full justify-between">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-slate-400 w-10 h-10"></div>
            <div className="text-left text-sm">
              <div className="font-semibold">Sandeep Sinha</div>
              <div>@sandeep</div>
            </div>
          </div>
          <div>
            <BsThreeDots />
          </div>
        </button>
      </section>

  );
};

export default LeftSidebar;
