import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Filter from './Filter';
import { BsDot, BsSearch, BsThreeDots, BsTwitterX } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { SlBell } from "react-icons/sl";
import { BsEnvelope } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { CgMoreVerticalO } from "react-icons/cg";

import MainComponent from "../ProfilePage/MainComponent";
import TrendingPage from "./TrendingPage";

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
const HomePage = () => {
  return (
    <div className="h-full flex justify-center relative bg-white text-white flex-col">
       <Navbar/>
      <div className=" h-full flex justify-center relative ml-10 space-x-10">
        <Filter/>
        <MainComponent />
      </div>
    </div>
  );
};

export default HomePage;