import React, { useEffect, useState } from "react";
import { GrAchievement } from "react-icons/gr";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { IoPersonAdd } from "react-icons/io5";
import { TbUserSquareRounded, TbUserPentagon } from "react-icons/tb";
import { FaPencilAlt } from "react-icons/fa";
import {
  selectLoggedInUser,
  updateUserAsync,
} from "../../components/auth/authSlice";
import { HiPencil } from "react-icons/hi";
import { useDispatch } from "react-redux";

const achievement = [
  "Online Fundraising platform where ideas meet's Innovation",
  "Online Fundraising platform where ideas meet's Innovation",
  "Walmart is a multinational retail giant that operates a chain of discount department stores",
  "Online Fundraising platform where ideas meet's Innovation",
];
const description =
  "Walmart is a multinational retail giant that operates a chain of discount department stores, hypermarkets, and grocery stores. Founded by Sam Walton in 1962, Walmart has grown to become one of the largest and most successful retail corporations globally.";
const founders = [
  "Siddharth Yadav",
  "Sandeep Sinha",
  "Abhishek Shirke",
  "Aadi Vora",
];
const investors = [
  "Siddharth Yadav",
  "Sandeep Sinha",
  "Abhishek Shirke",
  "Aadi Vora",
];
const category = ["Fundaraising", "Investment", "Online Auction", "Business"];

const CompanyDescription = ({}) => {
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("user"))
  );
  const [founder, setFounders] = useState(JSON.parse(localStorage.getItem("user")).founders);
  const [investor, setInvestors] = useState(investors);
  const [describe, setDescription] = useState(
    JSON.parse(localStorage.getItem("user")).summary
  );
  const [achieve, setAchieve] = useState(achievement);
  const [founderName, setFounderName] = useState("");
  const [founderDesignation, setFounderDesignation] = useState("");
  const [newFounder, setNewFounder] = useState("");
  const [newInvestor, setNewInvestor] = useState("");
  const [newAchieve, setNewAchieve] = useState("");
  const [editChange, setEditChange] = useState("");
  const dispatch = useDispatch();
  const [editDescribe, setEditDescribe] = useState(true);
  const [editFounder, setEditFounder] = useState(true);
  const [editAchievement, setEditAchievement] = useState(true);

  const handleSave = async () => {
    const updatedUser = {
      ...userData,
      summary: describe,
    };
    setEditDescribe(!editDescribe);
    await dispatch(updateUserAsync(updatedUser));
    setUserData(updatedUser);
  };
  const handleFounderSave = async () => {
    const newFounder = { name: founderName, designation: founderDesignation };

    const updatedUser = {
      ...userData,
      founders: [...userData.founders, newFounder], // Add the new founder to the existing array
    };
    setEditFounder(!editFounder);
    await dispatch(updateUserAsync(updatedUser));
    console.log(updatedUser)
    setUserData(updatedUser);
    setFounderName("");
    setFounderDesignation("");
  };

  useEffect(() => {
    const updated = JSON.parse(localStorage.getItem("user"));
    setUserData(updated);
  }, []);

  const handleFounders = (index, event) => {
    const updatedFounders = [...founders];
    updatedFounders[index] = event.target.value;
    setFounders(updatedFounders);
  };

  const handleAddFounder = () => {
    if (newFounder.trim() !== "") {
      setFounders([...founder, newFounder]);
      setNewFounder("");
    }
  };

  const handleInvestors = (index, event) => {
    const updatedInvestors = [...investors];
    updatedInvestors[index] = event.target.value;
    setInvestors(updatedInvestors);
  };

  const handleAddInvestor = () => {
    if (newInvestor.trim() !== "") {
      setInvestors([...investor, newInvestor]);
      setNewInvestor("");
    }
  };

  const handleAchieve = (index, event) => {
    const updatedAchieves = [...achieve];
    updatedAchieves[index] = event.target.value;
    setAchieve(updatedAchieves);
  };

  const handleAddAchieve = () => {
    if (newAchieve.trim() !== "") {
      setAchieve([...achieve, newAchieve]);
      setNewAchieve("");
    }
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleEditDescribe = (e) => {
    setEditDescribe(!editDescribe);
  };
  const handleEditFounder = (e) => {
    setEditFounder(!editFounder);
  };

  const handleEditAchievement = (e) => {
    setEditAchievement(!editAchievement);
  };

  return (
    <>
      <div className="w-[800px] mt-10 flex justify-center items-center font-montserrat">
        <div className="w-full flex-col ml-12">
          <div className="p-4 font-montserrat ">
            <div className="flex space-x-3">
              <h2 className=" font-bold text-[18px] flex items-center">
                <div className="w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4"></div>
                Description
              </h2>
              <div className="mt-[0.17rem]">
                <HiPencil
                  size={20}
                  className=" text-green-500"
                  onClick={editDescribe ? handleEditDescribe : handleSave}
                />
              </div>
            </div>

            <p>
              {editDescribe ? (
                <p className="w-[600px] m-2  text-[#303030]">{describe}</p>
              ) : (
                <textarea
                  type="text"
                  name="summary"
                  value={describe}
                  onChange={handleDescription}
                  className="w-[550px] h-[150px] border border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
                />
              )}
            </p>
          </div>

          <div className=" flex flex-col w-[600px] p-2 font-montserrat">
            <div className="flex space-x-3">
              <h2 className="font-bold text-[18px] py-1 flex  items-center">
                <div className="w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4"></div>
                Founders
              </h2>
              <div className="mt-1">
                <HiPencil
                  size={20}
                  className=" text-green-500"
                  onClick={handleEditFounder}
                />
              </div>
            </div>
            <div className="flex flex-wrap">
              {userData.founders.map((founder, index) => (
                <div key={index} className="m-2 flex">
                  {editFounder ? (
                    <div className=" flex flex-row shadow-md w-[270px] h-[100px] justify-center items-center">
                      <TbUserSquareRounded size={25} className="mr-5" />
                      <p className=" font-semibold p-2 text-black rounded-sm flex flex-col justify-start">
                        {founder.name}
                        <span className="text-base font-semibold flex justify-start text-[#575757] ">
                          {founder.designation}
                        </span>
                      </p>
                    </div>
                  ) : (
                    <div className="flex border-2 border-black">
                      <input
                        type="text"
                        value={founder.name}
                        onChange={(event) => handleFounders(index, event)}
                        className=" border border-gray-200 focus:outline-none p-2 font-semibold  text-black rounded-sm flex flex-col justify-starte"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {!editFounder && (
              <div className=" flex flex-col m-2 space-y-4 border-2 border-black p-2 rounded-lg">
                <h2 className="text-blue-700 font-bold mx-1">
                  Add a new founder
                </h2>
                <input
                  type="text"
                  value={founderName}
                  onChange={(event) => setFounderName(event.target.value)}
                  className="border  border-gray-200 focus:outline-none p-2 rounded-sm shadow-md  "
                  placeholder="New Founder"
                />
                <input
                  type="text"
                  value={founderDesignation}
                  onChange={(event) =>
                    setFounderDesignation(event.target.value)
                  }
                  className="border  border-gray-200 focus:outline-none p-2 rounded-sm shadow-md  "
                  placeholder="Designation"
                />
                <button onClick={handleFounderSave} className="p-2 ">
                  <IoPersonAdd
                    size={20}
                    className="border-2 border-white shadow-md rounded-full "
                  />
                </button>
              </div>
            )}
          </div>

          <div className=" flex flex-col w-[600px] p-2 mt-2 font-montserrat">
            <h2 className="font-bold text-[18px] py-1 flex items-center">
              <div className="w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4 mb-2 items-center flex"></div>
              Investors
            </h2>
            <div className="flex flex-wrap">
              {investor.map((investor, index) => (
                <div key={index} className="m-2 flex">
                  {editChange ? (
                    <div className=" flex flex-row shadow-md w-[270px] h-[100px] justify-center items-center bg-[#EEF5FF]">
                      <TbUserPentagon size={25} className="mr-5" />
                      <p className=" font-semibold p-2 text-black rounded-sm flex flex-col justify-start">
                        {investor}
                        <span className="text-base font-semibold flex justify-start text-[#575757] "></span>
                      </p>
                    </div>
                  ) : (
                    <input
                      type="text"
                      value={investor}
                      onChange={(event) => handleInvestors(index, event)}
                      className=" border border-gray-200 focus:outline-none p-2 rounded-sm shadow-sm bg-[#EEF5FF] text-black font-semibold"
                    />
                  )}
                </div>
              ))}
            </div>

            {!editChange && (
              <div className=" flex space-x-4 m-2">
                <input
                  type="text"
                  value={newInvestor}
                  onChange={(event) => setNewInvestor(event.target.value)}
                  className="border  border-gray-200 focus:outline-none p-2 rounded-md shadow-md"
                  placeholder="New Investor"
                />
                <button onClick={handleAddInvestor}>
                  <IoPersonAdd size={20} />
                </button>
              </div>
            )}
          </div>

          <div className=" flex flex-col p-2 font-montserrat w-[600px] mt-2 mb-2">
            <h2 className="font-bold text-[18px] py-1 flex items-center">
              <div className="w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4"></div>
              Achievements
            </h2>{" "}
            {/* <HiPencil
              size={20}
              className=" text-green-500"
              onClick={handleEditAchievement}
            /> */}
            <div className="flex flex-wrap">
              {achieve.map((achieve, index) => (
                <div key={index} className="m-2 flex items center">
                  {editAchievement ? (
                    <p className=" flex items-center">
                      <GrAchievement className="mr-2 fill-black" size={15} />
                      <span className=" p-2 rounded-sm  text-[#050029]">
                        {achieve}
                      </span>
                    </p>
                  ) : (
                    <div className="flex items-center">
                      <GrAchievement className="mr-2" size={15} />
                      <input
                        type="text"
                        value={achieve}
                        onChange={(event) => handleAchieve(index, event)}
                        className="w-[500px]  text-[#050029] focus:outline-none p-2 rounded-sm shadow-sm "
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
            {!editAchievement && (
              <div className=" flex spacex-x-2 m-2 items-center">
                <GrAchievement className="mr-2" size={15} />
                <input
                  type="text"
                  value={newAchieve}
                  onChange={(event) => setNewAchieve(event.target.value)}
                  className="border w-[500px] border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
                  placeholder="New Achievement"
                />
                <button onClick={handleAddAchieve}>
                  <MdFormatListBulletedAdd size={20} />
                </button>
              </div>
            )}
          </div>

          <div>
            <h3 className="font-bold text-[18px] py-1 flex items-center">
              <div className="w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4"></div>
              Business Category
            </h3>
            <div className="flex">
              {category.map((sector) => (
                <button
                  className="m-2 p-2 shadow-md bg-[#bf62d9] text-white font-semibold rounded-md"
                  key={sector}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDescription;
