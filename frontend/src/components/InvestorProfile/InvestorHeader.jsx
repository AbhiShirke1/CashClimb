import React, {useState}from 'react';
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { HiBadgeCheck } from "react-icons/hi";
import { TbWorldWww } from "react-icons/tb";


const  img_url = "https://assets-global.website-files.com/6218834c85e0406691f22826/62305b0f3a3882d68cd64cdb_Favicon%20256x256%20(1).svg"
const summary = "Online Fundraising platform where ideas meet's Innovation"
const social_icons = [{
  id: 1,
  icon: <FaFacebookSquare className="fill-[#1a143e]" size={20} />,
}, {
  id: 2,
  icon: <AiFillInstagram className="fill-[#1a143e]" size={20} />,
}, {
  id: 3,
  icon: <FaLinkedinIn className="fill-[#1a143e]" size={20} />,
}, {
  id: 4,
  icon: < IoIosMail className="fill-[#1a143e]" size={20} />,
}
]



const InvestorHeader = ( {editChange,setEditChange,handleEditChange}) => {
  const [inputSummary,setInputValue] = useState(summary);
  const [username,setUsername]=useState(JSON.parse(localStorage.getItem('user')).full_name);
  const [location,setLocation]=useState(JSON.parse(localStorage.getItem('user')).address);
  console.log(location)
  const [cname,setCname]=useState(JSON.parse(localStorage.getItem('user')).company);
  const [userImg,setUserImg]=useState(JSON.parse(localStorage.getItem('user')).pic);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
  return (
    <>
    <section className='flex mt-8 font-montserrat mr-[30px]'>
    <div className="bg-white h-[400px]  w-[300px] flex justify-center items-center flex-col rounded-md shadow-xl">
    <div className="w-[150px] h-[150px] bg-[#ffff] shadow-xl rounded-full flex justify-center items-center flex-col p-2 m-2">
            <img
              src={userImg}
              alt="company_logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div>
            <h2 className="text-[#050029] font-montserrat font-semibold text-2xl p-2 flex items-center ">
              {username}
              <HiBadgeCheck className='ml-[10px]' fill='blue'/>
            </h2>
            <div className="flex flex-row justify-start items-center  ">
              <div className="w-[4px] bg-[#bf62d9] h-[20px] rounded-full"></div>
              <h2 className="text-[#131212eb]  font-montserrat font-bold text-sm p-2 flex whitespace-nowrap">
                Company Name : 
              </h2>
              <span>{cname}</span>
              
            </div>
            <div className="flex flex-row justify-start items-center  ">
              <div className="w-[4px] bg-[#bf62d9] h-[20px] rounded-full"></div>
              <h2 className="text-[#131212eb]  font-montserrat font-bold text-sm p-2 flex whitespace-nowrap">
                Location : 
              </h2>
              <span>{location}</span>
              
            </div>
            
          </div>


            <button className="text-white h-10 rounded-sm  text-[14px] font-bold bg-[#6952ff] w-[200px]"
              onClick={handleEditChange}>
              {editChange ? 'Edit Profile' : 'Save'}
            </button>
  
    </div>             
    </section>
  </>
  )
}

export default InvestorHeader;
