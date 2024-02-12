import React from 'react';
import { PiNumberSquareFourDuotone,PiNumberSquareThreeDuotone,PiNumberSquareTwoDuotone,PiNumberSquareOneDuotone } from "react-icons/pi";


const ToogleSection = ({handleCompanyInfo,handleFinance,handlePost,handlePitch}) => {
  return (
    <div className='font-montserrat mt-10'>
         <div className=' font-semibold text-[#3578ed]  flex-wrap flex-row  w-[700px] flex justify-between'>
            <div className='flex flex-col items-center'>
              <button onClick={handleCompanyInfo}
              className='p-2.5 bg-white  hover:text-gray-500 flex items-center'>
                <PiNumberSquareOneDuotone className='mr-1' fill='black'/>
                Company Info
              </button>
             {/* <div className='w-[30px] bg-[#6952ff]  hover:bg-[#514b77] h-[2px] rounded-full shadow-2xl'></div> */}
            </div>

            <div className='flex flex-col items-center'>
              <button onClick={handleFinance}
              className='p-2.5 bg-white hover:text-gray-500 flex items-center'>
                <PiNumberSquareTwoDuotone className='mr-1' fill='black'/>
                Finanical Status
              </button>
               {/* <div className='w-[30px] bg-[#6952ff]  hover:bg-[#514b77] h-[2px] rounded-full'></div> */}
            </div>

            <div className='flex flex-col items-center'>
              <button onClick={handlePost}
              className='p-2.5 bg-white  hover:text-gray-500 flex items-center'>
                <PiNumberSquareThreeDuotone className='mr-1' fill='black'/>
                Post Section
              </button>
              {/* <div className='w-[30px] bg-[#6952ff]  hover:bg-[#514b77] h-[2px] rounded-full'></div> */}
            </div>

            <div className='flex flex-col items-center'>
              <button onClick={handlePitch}
              className='p-2.5 bg-white  hover:text-gray-500 flex items-center'>
                <PiNumberSquareFourDuotone className='mr-1' fill='black'/>
                Pitch Section
              </button>
              {/* <div className='w-[30px] bg-[#6952ff] hover:bg-[#514b77] h-[2px] rounded-full'></div> */}
            </div>
          </div>
      
    </div>
  )
}

export default ToogleSection;
