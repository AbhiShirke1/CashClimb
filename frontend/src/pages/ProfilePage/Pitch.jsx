import React, { useState } from "react";
import {
  PiNumberSquareFourDuotone,
  PiNumberSquareThreeDuotone,
  PiNumberSquareTwoDuotone,
  PiNumberSquareOneDuotone,
} from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoggedInUser,
  updateUserAsync,
} from "../../components/auth/authSlice";
import { HiPencil } from "react-icons/hi";

const Pitch = () => {
  const [editChange, setEditChange] = useState(true);
  const [userData, setUserData] = useState(localStorage.getItem("user"));

  const [pitchTitle, setPitchTitle] = useState(JSON.parse(localStorage.getItem("user")).pitch &&
    JSON.parse(localStorage.getItem("user")).pitch.pitch_title
  );
  const [pitchLink, setPitchLink] = useState(JSON.parse(localStorage.getItem("user")).pitch &&
    JSON.parse(localStorage.getItem("user")).pitch.pitch_link
  );

  const dispatch = useDispatch();
  const handleEditChange = (e) => {
    setEditChange(!editChange);
  };
  const handlePitchTitleChange = (e) => {
    setPitchTitle(e.target.value);
  };
  const handlePitchLinkChange = (e) => {
    setPitchLink(e.target.value);
  };
  const handlePitchSave = async () => {
    const newPitch = {
      pitch_title: pitchTitle,
      pitch_link: pitchLink,
    };
    console.log(newPitch);
    const updatedUser = {
      ...userData,
      pitch: newPitch,
    };
    console.log(updatedUser);
    setEditChange(!editChange)
    await dispatch(updateUserAsync(updatedUser));
    console.log(updatedUser);
    setUserData(updatedUser);
  };
  // const user = useSelector(selectLoggedInUser);
  return (
    <div className="w-[800px] font-montserrat">
      <div className="ml-12">
        <h2 className="font-bold text-[18px] py-1 flex  items-center mt-6">
          <div className="w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4"></div>
          Pitch Title
          <HiPencil
            className="text-green-500 mx-1 "
            onClick={editChange ? handleEditChange : handlePitchSave}
          />
        </h2>
        <span className="mt-4 mb-4">
          {editChange ? (
            <span>{pitchTitle}</span>
          ) : (
            <input
              type="text"
              value={pitchTitle}
              onChange={handlePitchTitleChange}
              className="w-full border border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
            />
          )}
        </span>
        <div className="mt-5">
        {editChange ? (
            <iframe
            src={pitchLink}
            className="w-full h-[400px]"
          ></iframe>
          ) : ( <input
            type="text"
            value={pitchLink}
            onChange={handlePitchLinkChange}
            className="w-full border border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
          />
           
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Pitch;
