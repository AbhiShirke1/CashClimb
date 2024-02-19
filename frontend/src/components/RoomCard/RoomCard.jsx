import React, { useState } from "react";
import Warning from "./Warning";
import { MdMeetingRoom, MdOutlineDateRange } from "react-icons/md";
import { BiSolidBusiness } from "react-icons/bi";
import { Link, redirect } from "react-router-dom";
import "./card.css";

const RoomCard = ({ companyName, ask, percentage, startDate, endDate }) => {
  const[name,setName]=useState(JSON.parse(localStorage.getItem('user')).company);
  const[roomId,setRoomId]=useState(JSON.parse(localStorage.getItem('user'))._id);
  console.log(name)
  const meetingLink=`http://localhost:5173/room?id=${roomId}&name=${name}`
  return (
    <>
      <div className="flex font-montserrat">
        {companyName || ask || percentage || startDate || endDate ? (
          <div className="mt-10 w-[800px] flex flex-wrap space-x-10">
            <div className="card w-[400px] shadow-md">
              <div className="header">
                <span className="icon">
                  <MdMeetingRoom />
                </span>
                <p className="font-semibold text-[#fc8700]">
                  New Investment Room!
                </p>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="flex justify-center items-center p-2">
                  <p className="text-gray-500 font-semibold flex justify-center items-center">
                    <BiSolidBusiness className="mr-2" />
                    Company Name :
                  </p>
                  <span className="message ml-1">{companyName}</span>
                </div>

                <div className="flex space-x-6">
                  <div className="flex justify-center items-center p-2 text-[#1dc275]">
                    <p className="font-semibold">Ask :</p>
                    <span className=" ml-1 text-[#1dc275]">Rs {ask}</span>
                  </div>
                  <div className="flex justify-center items-center p-2 text-[#1dc275]">
                    <p className="font-semibold ">Percentage :</p>
                    <span className="text-[#1dc275] ml-1">{percentage} %</span>
                  </div>
                </div>
              </div>

              <div className="mt-2 mx-auto">
                <a className="border-2 bg-blue-600 p-2" href={meetingLink} target="_blank">Join Now</a>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-[100px] ">
            <Warning />
          </div>
        )}
      </div>
    </>
  );
};

export default RoomCard;
