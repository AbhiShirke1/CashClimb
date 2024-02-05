import React from 'react';
import { FcIdea } from "react-icons/fc";
import { PiNumberSquareFourDuotone } from "react-icons/pi";


const PastFunding = () => {
  return (
    <div className='w-full   flex justify-center items-center '> 
    <div className='w-[500px] '>
      <h3 className='flex justify-center items-center font-montserrat font-semibold text-[30px] mt-[-100px]'>Past Funding</h3>
      <form action="" className='flex flex-col p-10'>
        <div className='flex flex-col mt-10 font-bold'>
          {/* <label htmlFor="companyName" className='font-montserrat'>Company Name:</label> */}
          <input
          type="text"
          className=" border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
          placeholder="Company Name"
          />
        </div>

        <div className='flex flex-col mt-10 '>
          {/* <label htmlFor="companywebsite" className='font-montserrat'>Company Website:</label> */}
          <input
          type="text"
          className=" border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
          placeholder="Company Website"
          />
        </div>

        <div className='flex flex-col mt-10 font-bold'>
          {/* <label htmlFor="companywebsite" className='font-montserrat'>Company Website:</label> */}
          <input
          type="text"
          className=" border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
          placeholder="Tell us about what you're building"
          />
        </div>
      </form>
     
    </div> 
    <div className='bg-[#050029] w-[500px] h-[600px] rounded-r-md flex justify-center items-center '>
      <div className='flex flex-col '>
        <h2 className='flex justify-center items-center ] mt-[-100px] text-white text-2xl'>
          Step <PiNumberSquareFourDuotone className='mr-2' size={40}/> 
        </h2>
        <h2 className='text-white font-montserrat font-semibold ml-[40px] p-2 mt-10 flex justify-center '>
          <FcIdea size={25} className="mr-2"/>
          Describe your previous funding round. <br />
          If not raised any money Then, Choose NO.
        </h2>
      </div>
    </div>
  </div>
  )
}

export default PastFunding
