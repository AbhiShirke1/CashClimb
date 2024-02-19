import React, { useEffect, useState } from "react";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { HiBadgeCheck } from "react-icons/hi";
import { TbWorldWww } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoggedInUser,
  updateUserAsync,
} from "../../components/auth/authSlice";

const img_url =
  "https://assets-global.website-files.com/6218834c85e0406691f22826/62305b0f3a3882d68cd64cdb_Favicon%20256x256%20(1).svg";
const summary = "Online Fundraising platform where ideas meet's Innovation";
const social_icons = [
  {
    id: 1,
    icon: <FaFacebookSquare className="fill-[#1a143e]" size={20} />,
  },
  {
    id: 2,
    icon: <AiFillInstagram className="fill-[#1a143e]" size={20} />,
  },
  {
    id: 3,
    icon: <FaLinkedinIn className="fill-[#1a143e]" size={20} />,
  },
  {
    id: 4,
    icon: <IoIosMail className="fill-[#1a143e]" size={20} />,
  },
];

const ProfileHeader = ({ editChange, setEditChange, handleEditChange }) => {
  const [inputSummary, setInputValue] = useState(
    JSON.parse(localStorage.getItem("user")).description
  );
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [inputWebsite, setInputWebsite] = useState(
    JSON.parse(localStorage.getItem("user")).website
  );
  const [eyear, setEyear] = useState(
    JSON.parse(localStorage.getItem("user")).established_year
  );
  const [csize, setCsize] = useState(
    JSON.parse(localStorage.getItem("user")).no_of_employees
  );
  console.log(eyear);
  const dispatch = useDispatch();
  console.log(userData);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSave = async () => {
    const updatedUser = {
      ...userData,
      description: inputSummary,
      website: inputWebsite,
      established_year: eyear,
      no_of_employees: csize,
      pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3UEhcHLRhkLeuIOdUzQT982hNPBlzxcpVXQKD6Ozfl0-aJDiDPYE4bmO07N793Oz9IZM&usqp=CAU",
    };
    setEditChange(!editChange);
    await dispatch(updateUserAsync(updatedUser));
    setUserData(updatedUser);
  };

  useEffect(() => {
    const updated = JSON.parse(localStorage.getItem("user"));
    setUserData(updated);
  }, []);

  return (
    <>
      <section className="flex mt-8 font-montserrat mr-[30px]">
        <div className="bg-white h-[650px]  w-[400px] flex justify-center items-center flex-col rounded-md shadow-xl">
          <div className="w-[150px] h-[150px] bg-[#ffff] shadow-xl rounded-full flex justify-center items-center flex-col p-2 m-2">
            <img
              src={userData.pic}
              alt="company_logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div>
            <h2 className="text-[#050029] font-montserrat font-semibold text-2xl p-2 flex items-center ">
              {userData.company}
              <HiBadgeCheck className="ml-[10px]" fill="blue" />
            </h2>
          </div>
          <div className=" flex justify-start flex-col w-[300px]">
            <div className="flex flex-col justify-start items-center ">
              <div className="flex justify-start items-center ml-[-240px]">
                <div className="w-[4px] bg-[#bf62d9] h-[20px] rounded-full"></div>
                <h2 className="text-[#131212eb] font-montserrat font-bold text-md p-2 flex ">
                  Bio :
                </h2>
              </div>

              <p>
                {editChange ? (
                  <p className=" font-semibold text-sm   text-[#575757]">
                    {userData.description}
                  </p>
                ) : (
                  <input
                    type="text"
                    value={inputSummary}
                    onChange={handleChange}
                    className="w-[300px] border border-gray-200 focus:outline-none p-2 
                  rounded-md shadow-md"
                  />
                )}
              </p>
            </div>
            <div className="flex flex-row justify-start items-center mt-5">
              <div className="w-[4px] bg-[#bf62d9] h-[20px] rounded-full"></div>
              <div className="flex space-x-6 fill-[#e8e8e8]  items-center justify-center ml-4 cursor-pointer">
                {social_icons.map((items) => (
                  <>{items.icon}</>
                ))}
              </div>
            </div>

            <div className="flex flex-row justify-start items-center mt-2">
              <TbWorldWww />
              <h2 className="text-[#131212eb] font-montserrat font-bold text-sm p-2 flex ">
                Visit Site :
              </h2>
              {editChange ? (
                <span className="text-[#3578ed] font-semibold text-sm hover:text-[#b5ccf3] cursor-pointer">
                  {userData.website}
                </span>
              ) : (
                <input
                  type="text"
                  value={inputWebsite}
                  onChange={(e) => setInputWebsite(e.target.value)}
                  className="text-[#575757] mt-2 font-semibold text-sm border border-gray-200 focus:outline-none p-2 rounded-md shadow-md"
                />
              )}
            </div>
            <div className="flex flex-row justify-start items-center  ">
              <div className="w-[4px] bg-[#bf62d9] h-[20px] rounded-full"></div>
              <h2 className="text-[#131212eb] font-montserrat font-bold text-sm p-2 flex whitespace-nowrap">
                Company Size :
              </h2>
              <span className="text-[#575757] font-semibold text-sm hover:text-[#b5ccf3] cursor-pointer">
                {editChange ? (
                  <p className=" font-semibold text-sm   text-[#575757]">
                    {userData.no_of_employees}
                  </p>
                ) : (
                  <input
                    type="number"
                    name="no_of_employees"
                    value={csize}
                    onChange={(e) => setCsize(e.target.value)}
                    className="w-[170px] border border-gray-200 focus:outline-none p-2 
                  rounded-md shadow-md"
                  />
                )}
              </span>
            </div>
            <div className="flex flex-row justify-start items-center  mb-4">
              <div className="w-[4px] bg-[#bf62d9] h-[20px] rounded-full"></div>
              <h2 className="text-[#131212eb] font-montserrat font-bold text-sm p-2 flex ">
                Founded In :
              </h2>

              <span className="text-[#575757] font-semibold text-sm hover:text-[#b5ccf3] cursor-pointer">
                {editChange ? (
                  <p className=" font-semibold text-sm text-[#575757]">
                    {userData.established_year}
                  </p>
                ) : (
                  <input
                    type="text"
                    name="established_year"
                    value={eyear}
                    onChange={(e) => setEyear(e.target.value)}
                    className="w-[180px] border border-gray-200 focus:outline-none p-2 
                  rounded-md shadow-md"
                  />
                )}
              </span>
            </div>

            <button
              className="text-white h-10 rounded-sm text-[14px] font-bold bg-[#6952ff] w-[200px]"
              onClick={editChange ? handleEditChange : handleSave}
            >
              {editChange ? "Edit Profile" : "Save"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileHeader;
