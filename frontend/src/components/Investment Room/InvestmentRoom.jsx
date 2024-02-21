import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { MdMeetingRoom } from "react-icons/md";
import { BiSolidBusiness } from "react-icons/bi";

const InvestmentRoom = () => {
  const [roomData, setRoomData] = useState([]);
  const [meetId, setMeetId] = useState([]);
  const [username,setUsername]=useState(JSON.parse(localStorage.getItem('user')).full_name)
  const [role,setRole]=useState(JSON.parse(localStorage.getItem('role')))
  const [openModal, setOpenModal] = useState(false);
  const handleClick = () => {
    
  };

  useEffect(() => {
    const checkRoom = async () => {
      const response = await fetch("http://localhost:8000/api/room/allRooms", {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error occurred during request");
      }

      const data = await response.json();
      console.log(data);
      setRoomData(data);
      setMeetId(data.roomId);
      // setRoomId(data.roomId);
    };
    checkRoom();
  }, []);
  console.log(meetId);
  

  // const getInfo = async () => {
  //   const id = "65d116187cb362fcb8af50c4";
  //   const response = await fetch("http://localhost:8000/api/room/founderData", {
  //     method: "POST",
  //     body: JSON.stringify(id), // Pass the array of roomIds
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // };

  console.log(roomData);
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="flex justify-start items-center mt-10 ml-2">
          <div className="w-[4px] bg-[#bf62d9] h-[20px] rounded-full"></div>
          <h2 className="text-[#131212eb] font-montserrat font-bold text-xl p-2 flex ">
            Investment Rooms
          </h2>
        </div>
        <div className="flex space-x-20">
          <div>
            <div className="flex justify-start items-center ml-2 mt-10">
              <div className="w-[4px] bg-[#bf62d9] h-[20px] rounded-full"></div>
              <h2 className="text-gray-600 font-montserrat font-bold text-sm p-2 flex ">
                New Rooms
              </h2>
            </div>
            <div className="mt-2 w-[900px] flex flex-wrap justify-center font-montserrat ">
              {roomData.map((data) => (
                <div
                  className=" w-[400px] shadow-md bg-[#050029] rounded-md p-2 mb-4 m-2"
                  key={roomData.roomId}
                >
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
                      <span className="message ml-1">Cashclimb</span>
                    </div>

                    <div className="flex space-x-6">
                      <div className="flex justify-center items-center p-2 text-[#1dc275]">
                        <p className="font-semibold  ">Ask :</p>
                        <span className=" ml-1 text-[#1dc275]">
                          {data.base_amount}
                        </span>
                      </div>
                      <div className="flex justify-center items-center p-2 text-[#1dc275]">
                        <p className="font-semibold ">Percentage :</p>
                        <span className="text-[#1dc275] ml-1">
                          {data.base_percentage}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="actions">
                    <a href={`http://localhost:5173/room?id=${data.roomId}&name=${username}&role=${role}`} target="_blank" className="read">
                      Join Now
                    </a>
                  </div>
                </div>
              ))}
              {/* {openModal && <Modal handleClick={handleClick} />} */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentRoom;
{
  /* Registered room */
}
{
  /* <div>
            <div className="flex justify-start items-center ml-2 mt-10">
              <div className="w-[4px] bg-[#bf62d9] h-[20px] rounded-full"></div>
              <h2 className="text-gray-600 font-montserrat font-bold text-sm p-2 flex ">
                Registered Rooms
              </h2>
            </div>
            <div className="mt-2 w-[800px] font-montserrat">
              <div className="card w-[400px] shadow-md mb-2 ">
                <div className="header">
                  <span className="icon">
                    <MdMeetingRoom />
                  </span>
                  <p className="font-semibold text-[#fc8700]">
                    Registered Room!
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <div className="flex justify-center items-center p-2">
                    <p className="text-gray-500 font-semibold flex justify-center items-center">
                      <BiSolidBusiness className="mr-2" />
                      Company Name :
                    </p>
                    <span className="message ml-1">CashClimb</span>
                  </div>

                  <div className="flex space-x-6">
                    <div className="flex justify-center items-center p-2 text-[#1dc275]">
                      <p className="font-semibold  ">Ask :</p>
                      <span className=" ml-1 text-[#1dc275]">Rs 90 Lakhs</span>
                    </div>
                    <div className="flex justify-center items-center p-2 text-[#1dc275]">
                      <p className="font-semibold ">Percentage :</p>
                      <span className="text-[#1dc275] ml-1">89 %</span>
                    </div>
                  </div>
                </div>

                <div className="actions">
                  <a href="" className="read">
                    {" "}
                    Take a Look{" "}
                  </a>
                </div>
              </div>

              <div className="card w-[400px] shadow-md ">
                <div className="header">
                  <span className="icon">
                    <MdMeetingRoom />
                  </span>
                  <p className="font-semibold text-[#fc8700]">
                    Registered Room!
                  </p>
                </div>
                <div className="flex flex-col justify-center items-center ">
                  <div className="flex justify-center items-center p-2">
                    <p className="text-gray-500 font-semibold flex justify-center items-center">
                      <BiSolidBusiness className="mr-2" />
                      Company Name :
                    </p>
                    <span className="message ml-1">CashClimb</span>
                  </div>

                  <div className="flex space-x-6">
                    <div className="flex justify-center items-center p-2 text-[#1dc275]">
                      <p className="font-semibold  ">Ask :</p>
                      <span className=" ml-1 text-[#1dc275]">Rs 90 Lakhs</span>
                    </div>
                    <div className="flex justify-center items-center p-2 text-[#1dc275]">
                      <p className="font-semibold ">Percentage :</p>
                      <span className="text-[#1dc275] ml-1">89 %</span>
                    </div>
                  </div>
                </div>

                <div className="actions">
                  <a href="" className="read">
                    {" "}
                    Take a Look{" "}
                  </a>
                </div>
              </div>
            </div>
          </div> */
}
