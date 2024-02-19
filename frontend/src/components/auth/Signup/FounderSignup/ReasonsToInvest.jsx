import React, { useState } from "react";
// import { FcIdea } from "react-icons/fc";
import myImg from "../signup-Photoroom.png-Photoroom__1_-removebg-preview (1).png";

import { PiHandWavingFill, PiNumberSquareFourDuotone } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUserAsync } from "../../authSlice";

const ReasonsToInvest = () => {
  const { register, handleSubmit } = useForm();

  const investmentDomains = [
    "Technology",
    "Finance",
    "Healthcare",
    "Retail",
    "Manufacturing",
    "Energy",
    "Telecommunications",
    "Transportation",
    "Real Estate",
    "Hospitality",
    "Entertainment",
    "Education",
    "Agriculture",
    "Automotive",
    "Biotechnology",
    "Media",
    "Construction",
    "Pharmaceuticals",
    "Environmental Services",
    "Consulting",
    "Insurance",
    "Food and Beverage",
    "Fashion",
    "Legal Services",
    "Fitness and Wellness",
    "Travel",
    "E-commerce",
    "Human Resources",
    "Renewable Energy",
    "Social Services",
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  const [loadMore, setLoadMore] = useState(false);
  const [selectedDomains, setSelectedDomains] = useState([]);

  console.log(selectedDomains);
  const domain = {
    ...selectedDomains,
  };
  console.log(domain);
  const handleButtonClick = (sector) => {
    // Check if the sector is already selected
    const isSelected = selectedDomains.includes(sector);

    // Update the selectedDomains state based on the current selection
    if (isSelected) {
      setSelectedDomains(
        selectedDomains.filter((selectedSector) => selectedSector !== sector)
      );
    } else {
      setSelectedDomains([...selectedDomains, sector]);
    }
  };

  const data = {
    ...state,
    // domain:[domain],
  };
  console.log(data);

  return (
    <>
      {" "}
      <div className="flex w-full justify-between h-screen font-montserrat">
        <div className="w-[50%] items-center mt-[20px] flex flex-col space-y-6 ">
          <h2 className="text-3xl font-bold">Your Domain</h2>
          <form
            className="grid md:grid-cols-3 grid-cols-2 gap-4 font-semibold"
            onSubmit={handleSubmit(() => {
              dispatch(
                createUserAsync({
                  ...data,
                  posts: [], // Assuming 'posts' is part of createUserAsync payload
                })
              );
              navigate("/");
              console.log(data);
            })}
          >
            {loadMore
              ? investmentDomains.map((sector) => (
                  <button
                    className={`m-1 p-1 text-[15px]  shadow-md border-[1px] border-gray-400 justify-center items-center flex whitespace-nowrap
                  ${
                    selectedDomains.includes(sector)
                      ? "bg-[#EEF5FF] border-black text-black"
                      : "hover:bg-[#EEF5FF] hover:border border-black hover:text-black"
                  }`}
                    key={sector}
                    onClick={(e) => {
                      e.preventDefault();
                      handleButtonClick(sector);
                    }}
                  >
                    {sector}
                  </button>
                ))
              : investmentDomains.slice(0, 11).map((sector) => (
                  <button
                    className={`m-1 p-2 text-[18px] shadow-md border-[1px] border-gray-400 justify-center items-center flex whitespace-nowrap
                  ${
                    selectedDomains.includes(sector)
                      ? "bg-[#EEF5FF] border-black text-black"
                      : "hover:bg-[#EEF5FF] hover:border border-black hover:text-black"
                  }`}
                    key={sector}
                    onClick={(e) => {
                      e.preventDefault();
                      handleButtonClick(sector);
                    }}
                  >
                    {sector}
                  </button>
                ))}
            <button
              onClick={(e) => {
                e.preventDefault();
                setLoadMore(!loadMore);
              }}
              className="ml-3 text-blue-500"
            >
              {loadMore ? "...show less" : "...load more"}
            </button>
            <button type="submit" className="border-2 bg-blue-600 p-2 ">
              Submit
            </button>
          </form>
        </div>
        <div className="bg-[#050029] w-[50%] h-full">
          <div className="flex flex-col justify-center items-center mt-20 text-white font-montserrat text-xl font-semibold">
            <h2 className="flex justify-center items-center text-4xl">
              <PiHandWavingFill className="mr-2 fill-yellow-500" size={0} />
              Welcome to CashClimb
            </h2>
            <p className="text-sm font-normal mt-2">
              Where ideas meet's innovation
            </p>
          </div>
          <img
            src={myImg}
            className=" h-[50%] w-[80%] mx-auto rounded-md mt-20"
          />
        </div>
      </div>
    </>
  );
};

export default ReasonsToInvest;
