import React from 'react';
import { CgWebsite,CgNametag  } from "react-icons/cg";
import { FcIdea } from "react-icons/fc";
import { PiNumberSquareTwoDuotone} from "react-icons/pi";
import { GrLicense } from "react-icons/gr";
import { MdSummarize } from "react-icons/md";


const CompanyInfo = ({page}) => {
  return (
  <div className='w-full flex justify-center items-center '> 
    <div className='w-[500px] '>
      <h3 className='flex justify-center items-center font-montserrat text-[30px] font-semibold mt-[-70px]'>Company Information</h3>
      <form action="" className='flex flex-col p-10 mt-10'>
        <div className='flex items-center font-bold relative m-2'>
          {/* <label htmlFor="companyName" className='font-montserrat'>Company Name:</label> */}
          <GrLicense className='mt-4' size={25}/>
          <input
          type="text"
          className="w-[400px] border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
          placeholder="Company CIN Number"
          />
        </div>
        <div className='flex items-center font-bold relative m-2'>
          {/* <label htmlFor="companyName" className='font-montserrat'>Company Name:</label> */}
          <CgNametag  className='mt-4' size={25}/>
          <input
          type="text"
          className="w-[400px] border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
          placeholder="Company Name"
          />
        </div>

        <div className='flex items-center font-bold relative m-2'>
          {/* <label htmlFor="companywebsite" className='font-montserrat'>Company Website:</label> */}
          <CgWebsite  className='mt-4' size={25}/>
          <input
          type="text"
          className="w-[400px] border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
          placeholder="Company Website"
          />
        </div>

        <div className='flex items-center font-bold relative m-2'>
          {/* <label htmlFor="companywebsite" className='font-montserrat'>Company Website:</label> */}
          <MdSummarize className='mt-4' size={25}/>
          <input
          type="text"
          className="w-[400px] border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
          placeholder="Summary"
          />
        </div>
      </form>
     
    </div> 
    <div className='bg-[#050029] w-[500px] h-[600px] rounded-r-md flex justify-center items-center'>
      <div className='flex flex-col '>
        <h2 className='flex justify-center items-center mt-[-100px] text-white text-2xl'>
          Step <PiNumberSquareTwoDuotone className='mr-2' size={40}/> 
        </h2>
        <h2 className='text-white font-montserrat font-semibold ml-[45px] mt-10 flex justify-center '>
          <FcIdea size={30} className="mr-2"/>
          Tell  Us About Your Company
          and help Investor to  Understand More About You.

        </h2>
      </div>

    </div>
  </div>
  )
}

export default CompanyInfo
