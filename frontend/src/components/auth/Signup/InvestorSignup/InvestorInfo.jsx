import React, { useState } from "react";
import { CgWebsite, CgNametag } from "react-icons/cg";
import { FcIdea } from "react-icons/fc";
import { PiNumberSquareTwoDuotone, PiUserRectangleBold } from "react-icons/pi";
import { FaRegUserCircle } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const InvestorInfo = ({ formData, setFormData }) => {
  const [companyName, setCompanyName] = useState("");
  const [legalName, setLegalName] = useState("");
  const [location, setLocation] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {state}= useLocation();
  console.log(state)
  
  const handleCompanyNameChange = (e) => {
    setCompanyName(e.target.value);
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
   const navigate=useNavigate();
    const data = {
      ...state,
      company:companyName,
      address:location,
      pan:panNumber,
    };
    // Update formData state in the parent component
    // setFormData((prevData) => ({ ...prevData, investorInfo }));
    console.log(data);
    const onSubmit = () => {
      const path = "/welcome/income";
      navigate(path, { state: { ...data } });
    };

  return (
    <>
      <div className="w-full h-screen  flex mb-[20px]">
        <div className="w-[50%] h-full">
          <h2 className="flex justify-center items-center font-montserrat font-semibold text-[40px] mt-[100px] ">
            Investor Information
          </h2>
          <form
            action=""
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col justify-center items-center space-y-6 mt-10 text-xl"
          >
            <div className="flex items-center font-bold m-2 relative">
              {/* <label htmlFor="companyName" className='font-montserrat'>Company Name:</label> */}
              <FaRegUserCircle className="w-6 h-6 absolute cursor-pointer" />
              <input
                type="text"
                className="w-[400px] border-b-[2px] border-gray-400 focus:border-black  py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
                placeholder="Legal Name"
                value={state.full_name}
                onChange={handleLegalNameChange}
              />
            </div>
            <div className="flex items-center font-bold relative m-2">
              {/* <label htmlFor="companyName" className='font-montserrat'>Company Name:</label> */}
              <IoCall className="w-6 h-6 absolute cursor-pointer" />
              <input
                type="text"
                name="company"
                className="w-[400px] border-b-[2px] border-gray-400 focus:border-black  py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
                placeholder="Company Name"
                value={companyName}
                onChange={handleCompanyNameChange}
              />
            </div>

            <div className="flex items-center font-bold relative m-2">
              {/* <label htmlFor="companywebsite" className='font-montserrat'>Company Website:</label> */}
              <FaLocationDot className="w-6 h-6 absolute cursor-pointer" />
              <input
                type="text"
                name="address"
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
                type="text"
                className="w-[400px] border-b-[2px] border-gray-400 focus:border-black py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
                placeholder="Pan Number"
                name="pan"
                value={panNumber}
                {...register("pan", {
                  required:"pan required",
                  minLength:10,
                })}
                onChange={handlePanNumberChange}
              />
            </div>
            <button
              type="submit"
              className="border-2 bg-blue-600 p-2 w-[20%] mt-7"
            >
              Next
            </button>
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
