import React, { useState } from "react";
import { CgWebsite, CgNametag } from "react-icons/cg";
import { FcIdea } from "react-icons/fc";
import { PiNumberSquareTwoDuotone } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const InvestorInfo = ({ formData, setFormData }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [legalName, setLegalName] = useState("");
  const [location, setLocation] = useState("");
  const [panNumber, setPanNumber] = useState("");

  const loc = useLocation();
  const {regInfo} = loc.state;
  console.log(regInfo)
  
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const handleLegalNameChange = (e) => {
    setLegalName(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  const handlePanNumberChange = (e) => {
    setPanNumber(e.target.value);
  };

    const investorInfo = {
      ...regInfo,
      legalName,
      phoneNumber,
      location,
      panNumber,
    };
    // Update formData state in the parent component
    // setFormData((prevData) => ({ ...prevData, investorInfo }));
    console.log(investorInfo);

  return (
    <>
      <div className="w-full h-screen  flex mb-[20px]">
        <div className="w-[50%] h-full">
          <h2 className="flex justify-center items-center font-montserrat font-semibold text-[40px] mt-[100px] ">
            Investor Information
          </h2>
          <form
            action=""
            // onSubmit={handleSubmit}
            className="flex flex-col justify-center items-center space-y-6 mt-10 text-xl"
          >
            <div className="flex items-center font-bold m-2 relative">
              {/* <label htmlFor="companyName" className='font-montserrat'>Company Name:</label> */}
              <FaRegUserCircle className="w-6 h-6 absolute cursor-pointer" />
              <input
                type="text"
                className="w-[400px] border-b-[2px] border-gray-400 focus:border-black  py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
                placeholder="Legal Name"
                value={legalName}
                onChange={handleLegalNameChange}
              />
            </div>
            <div className="flex items-center font-bold relative m-2">
              {/* <label htmlFor="companyName" className='font-montserrat'>Company Name:</label> */}
              <IoCall className="w-6 h-6 absolute cursor-pointer" />
              <input
                type="number"
                className="w-[400px] border-b-[2px] border-gray-400 focus:border-black  py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            </div>

            <div className="flex items-center font-bold relative m-2">
              {/* <label htmlFor="companywebsite" className='font-montserrat'>Company Website:</label> */}
              <FaLocationDot className="w-6 h-6 absolute cursor-pointer" />
              <input
                type="text"
                className="w-[400px] border-b-[2px] border-gray-400 focus:border-black py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
                placeholder="Location"
                value={location}
                onChange={handleLocationChange}
              />
            </div>

            <div className="flex items-center font-bold relative m-2">
              {/* <label htmlFor="companywebsite" className='font-montserrat'>Company Website:</label> */}
              <RiSecurePaymentLine className="w-6 h-6 absolute cursor-pointer" />
              <input
                type="number"
                className="w-[400px] border-b-[2px] border-gray-400 focus:border-black py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
                placeholder="Pan Number"
                value={panNumber}
                onChange={handlePanNumberChange}
              />
            </div>
            <Link to="/welcome/income" state={{info:investorInfo}}>
              Go to ProfileTwo
            </Link>
          </form>
        </div>

        <div className="bg-[#050029] w-[50%] h-full">
          <div className="flex flex-col ">
            <h2 className="flex justify-center items-center mt-[200px] text-white text-5xl font-semibold">
              Step <PiNumberSquareTwoDuotone className="mr-2 mt-2" size={60} />
            </h2>
            <h2 className="text-white text-lg  font-montserrat font-semibold flex-wrap mt-10 flex justify-center ">
              <FcIdea size={30} className="mr-2" />
              <div className="w-[500px]">
                <h4>
                  Tell Us About Your Company and help Investor to Understand
                  More About You.
                </h4>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorInfo;
