import React, { useState } from 'react';
import company from './fav';
import { FaInfoCircle } from "react-icons/fa";





const InvestorDescription = () => {
  const [category,setCategory]=useState(JSON.parse(localStorage.getItem('user')).investing_category);
  const [readMore, setReadMore] = useState(false);
  return (
    <div>
      <div className='w-[800px] font-montserrat mt-8'>
        <div>
          <h2 className=" font-bold text-[18px] flex items-center">
            <div className='w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4'></div>
            Investing Category
          </h2>
          <div className='m-2 flex justify-center p-2'>
            {category.map((items) => (
              <div className='bg-[#3578ed] m-2 p-2 text-white font-semibold rounded-md'>{items}</div>
            ))}
          </div>
          <h2 className=" font-bold text-[18px] flex items-center">
            <div className='w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4'></div>
            Favourites
          </h2>
          <div className='w-full flex flex-wrap mb-4'>
            {company.map((item) => (
              <div className="w-[380px] flex justify-center items-center border border-gray-300 rounded shadow-lg p-2 m-1 mt-4" key={item.id}>
                <div className="flex flex-col">
                  <div className='flex justify-between items-center'>
                    <h3 className="font-[Nunito,sans-serif] text-lg font-bold text-gray-500">
                      {item.title}
                    </h3>
                    <span className="font-[Nunito,sans-serif] text-normal text-[#65B741]">
                      {item.valuation}
                    </span>

                  </div>
                  <p className="font-[Nunito,sans-serif] text-[#262626] text-sm pt-2 h-[100px]">
                    {readMore ? item.desc : `${item.desc.substring(0, 200)}  `}
                    <button onClick={() => setReadMore(!readMore)}
                      className=' ml-3 text-blue-500'>
                      {readMore ? "...show less" : "  ...read more"}
                    </button>
                  </p>
                  <button className="m-1 px-1.5 py-1.5 text-sm font-bold font-[Nunito,sans-serif] 
                  bg-[#FFECD6] text-[#092635]  rounded-md justify-center items-center flex ">
                    <FaInfoCircle size={20} className='pr-1'/>
                      Know More
                  </button>
                </div>
              </div>

            ))}
          </div>
          <h2 className=" font-bold text-[18px] flex items-center">
            <div className='w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4'></div>
            Invested Company
          </h2>
          <div className='w-full flex flex-wrap mb-4'>
          {company.map((item) => (
              <div className="w-[380px] flex justify-center items-center border border-gray-300 rounded shadow-lg p-2 m-1 mt-4" key={item.id}>
                <div className="flex flex-col">
                  <div className='flex justify-between items-center'>
                    <h3 className="font-[Nunito,sans-serif] text-lg font-bold text-gray-500">
                      {item.title}
                    </h3>
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex space-x-4'>
                      <span className='font-semibold text-sm'>Invested Amount : </span>
                      <span className='text-[#1dc275] font-bold'> ₹90278254</span>
                    </div>
                    <div className='flex space-x-4'>
                      <span className='font-semibold text-sm'>Percentage : </span>
                      <span className='text-[#1dc275] font-bold'>20%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InvestorDescription;
