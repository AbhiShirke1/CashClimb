import React from 'react';
import Warning from './Warning';
import { MdMeetingRoom,MdOutlineDateRange } from "react-icons/md";
import { BiSolidBusiness } from "react-icons/bi";
import './card.css';


const RoomCard = ({companyName,ask,percentage,startDate,endDate}) => {


  return (
    <> 
    <div className='flex justify-center items-center'>
    {companyName || ask || percentage || startDate || endDate ?  
          <div className='mt-[100px] w-[800px] flex flex-wrap space-x-10font-[Nunito,sans-serif] '>
                    <div className="card w-[400px] shadow-md">
                              <div className="header">
                                        <span className="icon">
                                                  <MdMeetingRoom />
                                        </span>
                                        <p className="font-semibold text-[#fc8700]">New Investment Room!</p>
                              </div>
                              <div className='flex flex-col justify-center items-center'>
                                        <div className='flex justify-center items-center p-2'>
                                                  <p className="text-gray-500 font-semibold flex justify-center items-center">
                                                  <BiSolidBusiness  className='mr-2'/>Company Name : 
                                                  </p>
                                                  <span className="message ml-1">{companyName}</span>
                                        </div>

                                       
                                        <div className='flex space-x-6'>                              
                                        <div className='flex justify-center items-center p-2 text-[#1dc275]'>
                                                  <p className="font-semibold  ">
                                                  Ask : 
                                                  </p>
                                                  <span className=" ml-1 text-[#1dc275]">Rs {ask}</span>
                                        </div>
                                        <div className='flex justify-center items-center p-2 text-[#1dc275]'>
                                                  <p className="font-semibold ">
                                                  Percentage : 
                                                  </p>
                                                  <span className="text-[#1dc275] ml-1">{percentage} %</span>
                                        </div>
                                        </div>

                                        <div className='flex justify-center items-center p-2'>
                                                  <p className="text-gray-500 font-semibold flex justify-center items-center">
                                                  <MdOutlineDateRange className='mr-2'/>Start Date : 
                                                  </p>
                                                  <span className="message ml-1">{startDate}</span>
                                        </div>
                                        <div className='flex justify-center items-center p-2'>
                                                  <p className="text-gray-500 font-semibold flex justify-center items-center">
                                                  <MdOutlineDateRange className='mr-2'/>End Date : 
                                                  </p>
                                                  <span className="message ml-1">{endDate}</span>
                                        </div>
                              </div>

                              <div className="actions">
                                        <a href="" className="read"> Take a Look </a>
                              </div>
                    </div>

          </div>
          : <div className='mt-[100px] '>
              <Warning/>   
          </div>
    }
      
    </div>
    </>   
  )
}

export default RoomCard
