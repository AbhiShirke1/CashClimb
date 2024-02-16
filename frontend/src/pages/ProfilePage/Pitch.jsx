import React from "react";
import {
  PiNumberSquareFourDuotone,
  PiNumberSquareThreeDuotone,
  PiNumberSquareTwoDuotone,
  PiNumberSquareOneDuotone,
} from "react-icons/pi";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../components/auth/authSlice";

const Pitch = () => {
  const user = useSelector(selectLoggedInUser);
  return (
    <div className="w-[800px] font-montserrat">
      <div className="ml-12">
        <h2 className="font-bold text-[18px] py-1 flex  items-center mt-6">
          <div className="w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4"></div>
          Pitch Title
        </h2>
        <span className="mt-4 mb-4">
          Online Fundraising platform where ideas meet's Innovation.{" "}
        </span>
        <div className="mt-5">
          <iframe
            src="https://www.youtube.com/embed/Mniyzsj3GXU"
            title="W3Schools Free Online Web Tutorials"
            className="w-full h-[400px]"
          ></iframe>
        </div>

        <div>
          <h2 className="font-bold text-[18px] py-1 flex  items-center mt-6">
            <div className="w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4"></div>
            Reasons
          </h2>
          <ul className="list-disc ">
            {user[0].fieldsValue.map((reason, index) => (
              <li key={index} className="flex items-center space-y-3 m-2">
                <PiNumberSquareFourDuotone size={20}/>
                <span className="text-sm font-semibold mx-2">{reason}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pitch;
