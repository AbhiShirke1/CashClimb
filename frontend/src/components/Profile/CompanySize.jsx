import React, { useState } from 'react';
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

const social_icons = [{
  id: 1,
  icon: <FaFacebookSquare className="fill-[#050029]" size={20} />,
}, {
  id: 2,
  icon: <AiFillInstagram className="fill-[#050029]" size={20} />,
}, {
  id: 3,
  icon: <FaLinkedinIn className="fill-[#050029]" size={20} />,
}, {
  id: 4,
  icon: < IoIosMail className="fill-[#050029]" size={20} />,
}
]
const category = ["Fundaraising","Investment","Online Auction","Business"]
const compnaysize = 800
const foundedin = 2024
const companystage = "Public"
const companyrevenue = 70000000


const CompanySize = () => {
  const [editChange,setEditChange] = useState("false");
  const [size,setSize] = useState(compnaysize)
  const [found,setFounded] = useState(foundedin)
  const [stage,setStage] = useState(companystage)
  const [revenue,setRevenue] = useState(companyrevenue)

  const handleEditChange = () => setEditChange(!editChange)


  const handlesize  = (e) => {
    setSize(e.target.value)
}
const handlefounded  = (e) => {
  setFounded(e.target.value)
}
const handlestage  = (e) => {
  setStage(e.target.value)
}
const handlerevenue  = (e) => {
  setRevenue(e.target.value)
}

  return (
    <div className="w-[550px] ml-10 mt-10 rounded-md items-center ">
        <div className=" flex flex-col justify-center bg-[#EEF5FF]
         text-[#050029] font-[Nunito,sans-serif] font-bold">
          <div className="flex justify-between p-4">
            <h3 className="text-left">Company Size : </h3>
            {editChange ? (
              <h3 >{size} Member</h3>

                ) : (
                  <input
                  type="text"
                  value={size}
                  onChange={handlesize}
                  className="w-[280px] border border-black p-2"
                />
                )}

          </div>

          <div className="flex justify-between p-4">
            <h3 className="text-left">Founded In : </h3>
            {editChange ? (
               <h3 >{found}</h3>

                ) : (
                  <input
                  type="text"
                  value={found}
                  onChange={handlefounded}
                  className="w-[280px] border border-black p-2"
                />
                )}
          </div>

          <div className="flex justify-between p-4">
            <h3 className="text-left">Company Sector : </h3>
            {editChange ? (
               <h3 >{stage} Sector</h3>

                ) : (
                  <input
                  type="text"
                  value={stage}
                  onChange={handlestage}
                  className="w-[280px] border border-black p-2"
                />
                )}
          </div>

          <div className="flex justify-between p-4">
            <h3 className="text-left">Revenue : </h3>
            {editChange ? (
                  <h3 >Rs {revenue}</h3>
                ) : (
                  <input
                  type="text"
                  value={revenue}
                  onChange={handlerevenue}
                  className="w-[280px] border border-black p-2"
                />
                   
                )}
          </div>

          <div className="flex justify-between p-4">
            <h3 className="text-left">
              Social Media : 
            </h3>
            <div className='flex space-x-6 fill-[#e8e8e8]'>
            {
              social_icons.map((items) => (
                <>{items.icon}</>

              ))
            }
          </div>
          </div>
          <button className="bg-[#050029] m-2 h-10 rounded-sm text-white text-[14px] font-normal">
            Visit CashClimb 
          </button>
          <button className="text-[#050029] m-2 h-10 rounded-sm  text-[14px] font-bold border border-[#050029]" onClick={handleEditChange}>
          {editChange ? 'Edit Company Size' : 'Save'}
          </button>

          <div>
            <h3 className="flex text-left p-4">Business Category</h3>
            <div className="flex justify-center">
            {category.map((sector)=>(
              <button className="mx-2 my-2 px-1.5 py-1.5 text-sm font-[Nunito,sans-serif] 
              bg-[#092635] text-white  rounded-md justify-center items-center flex 
              hover:bg-[#EEF5FF] hover:border border-black  hover:text-black" key={sector}>
                  {sector} 
              </button>
            ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default CompanySize
