import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import RoomForm from "../components/RoomForm/RoomForm";
import RoomCard from "../components/RoomCard/RoomCard";
import { IoMdAddCircle } from "react-icons/io";

const Rooms = () => {
  const [createForm, setCreateForm] = useState(false);

  const handleRoomForm = () => {
    setCreateForm(!createForm);
  };
  const [roomId, setRoomId] = useState("");
  const[roomData,setRoomData]=useState("");

  useEffect(() => {
    const checkRoom = async () => {
      const response = await fetch("http://localhost:8000/api/room/checkRoom", {
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
      setRoomData(data);
      setRoomId(data.roomId);
    };
    checkRoom();
  }, []);

  return (
    <>
      <Navbar />
      {/* {createForm ? (
        <RoomForm />
      ) : (
        <>
          <RoomCard />
          <div className="absolute top-0 right-1 font-[Nunito,sans-serif] ">
            <button
              className="flex items-center  mt-[100px] bg-[#000000] p-3 font-bold text-white rounded-md"
              onClick={handleRoomForm}
            >
              <IoMdAddCircle size={20} className="mr-2" /> Create Room Form
            </button>
          </div>
        </>
      )} */}
      {
        roomId ?(
          <RoomCard meetingId={roomId} roomData={roomData}/>
        ):(
          <RoomForm/>
        )
      }
    </>
  );
};

export default Rooms;
