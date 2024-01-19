import React,{ useState} from 'react';
import company from './company_data';
import { IoPeople } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";

const CompanyCard = () => {
const [readMore, setReadMore] = useState(false);
  return (
    <>
          <div className='flex flex-col justify-center items-center mt-8 mb-4 space-y-4'>
          {company.map((item)=>(
                    <div className="w-3/4 flex justify-center items-center border border-gray-300 rounded shadow-md p-4" key={item.id}>
                                        <div className="w-1/3">
                                                  <img src={item.img_url} className="w-20" alt="company_logo" />
                                        </div>
                                        <div className="flex flex-col">
                                                  <div className='flex justify-between items-center'>
                                                            <h3 className="font-[Nunito,sans-serif] text-lg font-bold">
                                                            {item.title}
                                                            </h3>
                                                            <span className="font-[Nunito,sans-serif] text-normal font-bold text-[#65B741]">
                                                            {item.valuation}
                                                            </span>
                                                            
                                                  </div>
                                        <p className="font-[Nunito,sans-serif] text-[#262626] text-sm pt-2">
                                                {readMore ? item.desc : `${item.desc.substring(0, 200)}  `}
                                                  <button onClick={() => setReadMore(!readMore)} 
                                                  className=' ml-3 text-blue-500'>
                                                            {readMore ? "...show less" : "  ...read more"}
                                                  </button>
                                        </p>
                                        <div className='flex h-8'>
                                        {
                                                  item.category.map((sector)=>(
                                                            <span className=" m-1 px-1.5 py-1.5 text-sm font-[Nunito,sans-serif] 
                                                            bg-[#092635] text-white  rounded-md justify-center items-center flex">
                                                            {sector} 
                                                            </span>
                                                  ))
                                        }
                                        </div>
                                        <div className="flex justify-between items-center pt-3 font-[Nunito,sans-serif]
                                         text-sm space-x-2">
                                                  <span className='flex items-center space-x-3'>
                                                  {  item.no_employess >= 100 ?  <FaPeopleGroup size={25}/>:
                                                            <IoPeople size={25}/>
                                                  }  { item.no_employess} Employees</span>
                                                  <button className="m-1 px-1.5 py-1.5 text-sm font-bold font-[Nunito,sans-serif] 
                                                   bg-[#FFECD6] text-[#092635]  rounded-md justify-center items-center flex ">
                                                    Know More
                                                  </button>
                                        </div>
                              </div>
                    </div>
          ))} 
          </div>
    </>
  )
}

export default CompanyCard
