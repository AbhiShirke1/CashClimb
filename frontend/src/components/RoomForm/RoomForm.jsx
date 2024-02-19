import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Rooms from '../../pages/Rooms';
import RoomCard from '../RoomCard/RoomCard';
import meet from './meet.png';
import { FcIdea } from "react-icons/fc";
import { FaMeetup } from "react-icons/fa";
import { IoReaderOutline } from "react-icons/io5";
import { FcViewDetails } from "react-icons/fc";
import { RiAuctionFill } from "react-icons/ri";





const logo_url ="https://assets-global.website-files.com/6218834c85e0406691f22826/62305b0f3a3882d68cd64cdb_Favicon%20256x256%20(1).svg"
const icon = [
  {
  id: 1,
  icon: <IoReaderOutline size={30} className='m-2'/>,
}, 
{
  id: 2,
  icon: <FcViewDetails size={30} className='m-2'/> ,
}, 
{
  id: 3,
  icon: <RiAuctionFill  size={30} className='m-2'/>,
}
]


const RoomForm = () => {

  const [companyName,setCompanyName] = useState(JSON.parse(localStorage.getItem('user')).company);
  const [ask,setAsk] = useState("");
  const [percentage,setPercentage] = useState("");
  const [startDate,setStartDate] = useState("");
  const [endDate,setEndDate] = useState("");
  const [roomCreated,setRoomCreated] = useState(false)
  
const handleSubmit =async(e)=>
{
  e.preventDefault();
  const data={
    active:true,
    money:ask,
    percent:percentage,
  }
  const response=await fetch("http://localhost:8000/api/room/createRoom",
  {
    method:"POST",
    body: JSON.stringify(data),
    headers: {
        'content-type': 'application/json', 'authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
    }
  })
  const responseData=await response.json();
  console.log(responseData)
  setRoomCreated(!roomCreated)
}
  
  const handleForm = (e)  => { 
    e.preventDefault();
    setRoomCreated(true);
    console.log(companyName,ask,percentage,startDate,endDate);
  }


  return (
    <>
      <div className="flex justify-center items-center font-[Nunito,sans-serif]">
      { roomCreated ?
              <RoomCard
              companyName={companyName}
              ask={ask}
              percentage={percentage}
              startDate={startDate}
              endDate={endDate}
            />
      : 
          <section className="w-[900px] h-[600px] mt-10 rounded-md flex flex-row font-montserrat">
                    <div className='p-2  bg-[#050029] w-1/2 rounded-l-md'>
                              <div className='flex items-center p-2'>
                                        <img src={logo_url}  className="w-[50px]" alt="" />
                                        <h3 className=" font-bold text-base text-white"> CashClimb</h3>
                              </div>
                              <div className='text-white flex flex-col justify-center items-center p-2'>
                                        <h3 className='font-bold text-base flex'><FcIdea size={20} className="pr-2"/>Welcome to</h3>
                                        <h1 className='font-bold text-4xl'>CashClimb</h1>
                              </div>
                              <img src={meet} 
                              className="w-[450px]" alt="" />
                    </div>

                    <div className='w-1/2 rounded-r-md p-2 bg-[#EEF5FF]'>
                             <h2 className="text-xl font-bold flex justify-center items-center mt-4">
                              <FaMeetup />
                              Create a Room for Investment 
                             </h2>
                            <div className='flex justify-center items-center mt-8 space-x-8'>
                            {
                              icon.map((items) => (
                              <div className='w-[50px] h-[50px] bg-white rounded-full shadow-md' key={items.id}>
                                 <>{items.icon}</>
                              </div>
                            ))}
                            </div>

                          <form onSubmit={handleSubmit} className='mt-2 p-2 flex flex-col justify-center items-center' >
                            <div className='flex font-bold space-x-2 m-2 text-xl'>
                             <p className='font-bold  '>Company Name :</p>
                             <span className=''>{companyName}</span>
                            </div>
                            <div className='flex  flex-row space-x-4 m-2'>
                              <div className='flex flex-col'>
                                <label htmlFor="name" className='font-bold'>Ask in (Rs):</label>
                                <input 
                                type="text" 
                                name="base_amount"  
                                value={ask}
                                placeholder="Eg: Rs 2 Cr"  
                                onChange={(e) =>setAsk(e.target.value)} 
                                className='w-[170px] mt-2 border-gray-200 focus:outline-none p-2 rounded-md shadow-md '/>
                              </div>  
                              <div className='flex flex-col'>
                                <label htmlFor="name" className='font-bold'>Percentage (%) :</label>
                                <input 
                                type="text" 
                                name="base_percentage"  
                                value={percentage}
                                placeholder="Eg: 2%"  
                                onChange={(e) =>setPercentage(e.target.value)} 
                                className='w-[100px] mt-2 border-gray-200 focus:outline-none p-2 rounded-md shadow-md '/>
                              </div>
                            </div>
                            <button className='flex justify-center items-center mt-6 bg-[#6952ff] p-2 font-bold text-white' >
                              Create Room
                            </button>
                        </form>  
                    </div>
          </section>
          }
      </div>
    </>
  )
}

export default RoomForm;
