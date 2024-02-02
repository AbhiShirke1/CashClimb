import React,{useState} from 'react';
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import background from './image/background.png';


const  img_url = "https://assets-global.website-files.com/6218834c85e0406691f22826/62305b0f3a3882d68cd64cdb_Favicon%20256x256%20(1).svg"
const summary = "Online Fundraising platform where ideas meet's Innovation"
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


const ProfileHeader = ({handleCompanyInfo,handleFinance,handlePost}) => {
  const [editChange,setEditChange] = useState(true);
  const [inputSummary,setInputValue] = useState(summary);

  const handleEditChange = () => setEditChange(!editChange);

  const handleChange = (e) => {
    setInputValue(e.target.value)
}

  return (
  <>
    <section className='flex mt-8 font-montserrat'>
    <div className="bg-white h-[400px]  w-[1080px] flex flex-col items-center rounded-md shadow-md">
      <div className=' w-full h-[200px]'>
        <img src= {background}
        className='h-[200px] w-full bg-cover' alt="" />
      </div>
          <div className="flex justify-center items-center flex-row p-4 mt-[-50px]">
                    <div className="w-[150px] h-[150px] border border-white-2 bg-gray-100 rounded-full flex justify-center items-center">
                              <img src={img_url} alt="company_logo" className='w-[400px] ' />
                    </div>    
                    
                    <div className='flex flex-row  space-x-[50px] items-center p-4'>
                      <div className='pt-4'>
                        <h2 className="text-[#050029] font-montserrat font-bold text-2xl ">
                                  CashClimb
                        </h2>
                        <p className='text-gray-500  text-sm '>Mumbai,Maharashtra</p>
                                {editChange ? (
                                  <p className=' font-bold text-md w-[600px] mt-2 text-gray-700'>{inputSummary}</p>
                                  ) : (
                                      <input
                                      type="text"
                                      value={inputSummary}
                                      onChange={handleChange}
                                      className="w-[600px] border border-gray-200 focus:outline-none p-2 
                                      rounded-md shadow-md"
                                      />
                                  )}
                      </div>
                      <div className="flex flex-col justify-between p-4 m-2">
                        <div className='flex space-x-6 fill-[#e8e8e8] mt-3'>
                          {
                            social_icons.map((items) => (
                              <>{items.icon}</>

                            ))
                          }
                        </div>

                        <button className="border border-[#050029] bg-white rounded-sm mt-5 h-10  text-[#050029] text-[14px]font-[Nunito,sans-serif] font-bold">
                          Visit CashClimb 
                        </button>
                      </div>
                    </div>
          </div>
          <div className='flex justify-between items-center w-full  font-bold text-gray-400'>
            <button onClick={handleCompanyInfo}
            className='p-2.5 bg-white  hover:bg-[#E1F0DA] hover:text-gray-500 w-[400px] '>Company Information</button>
            <button onClick={handleFinance}
            className='p-2.5 bg-white hover:bg-[#E1F0DA] hover:text-gray-500 w-[400px]  '>Financial Status</button>
            <button onClick={ handlePost}
            className='p-2.5 bg-white hover:bg-[#E1F0DA] hover:text-gray-500 w-[400px]  '>Posts</button>

          </div>
    </div>
    </section>
  </>
  )
}

export default ProfileHeader

  // const [editChange,setEditChange] = useState(true);
  // const [inputSummary,setInputValue] = useState(summary);

  // const handleEditChange = () => setEditChange(!editChange);
                      {/* <button className="text-[#050029] m-2 h-10 rounded-sm  text-[14px] font-bold border border-[#050029] w-[200px]"
                      onClick={handleEditChange}>
                      {editChange ? 'Edit Profile' : 'Save'}
                      </button> */}
                      {/* <div className='flex flex-col '>
                        <h2 className="text-[#050029] font-[Nunito,sans-serif] font-bold text-[25px]">
                                  CashClimb
                        </h2>
                        <p className='text-[#050029] font-[Nunito,sans-serif] text-base '>Mumbai,Maharashtra</p>
                      </div>

                      <div>
                        <button className="text-[#050029] m-2 h-10 rounded-sm  text-[14px] font-bold border border-[#050029] w-[200px]"
                        onClick={handleEditChange}>
                          {editChange ? 'Edit Profile' : 'Save'}
                        </button>
                      </div> */}
                                {/* <img src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218c8458837e56155eb45ff_Pillars.svg" 
          className="mt-[-200px] ml-[1112px]"
          alt="" /> */}
      {/* <div>
        <h2 className="text-[#050029] font-[Nunito,sans-serif] font-bold text-[25px]">
            CashClimb
        </h2>
      </div> */}