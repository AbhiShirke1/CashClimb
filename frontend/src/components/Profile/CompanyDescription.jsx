import React, { useState } from 'react';
import { GrAchievement } from "react-icons/gr";
import { MdFoundation,MdFormatListBulletedAdd  } from "react-icons/md";
import { GiTakeMyMoney } from "react-icons/gi";
import { IoPersonAdd } from "react-icons/io5";


const achievement = ["Online Fundraising platform where ideas meet's Innovation","Online Fundraising platform where ideas meet's Innovation",
"Walmart is a multinational retail giant that operates a chain of discount department stores","Online Fundraising platform where ideas meet's Innovation"]
const summary = "Online Fundraising platform where ideas meet's Innovation"
const description = "Walmart is a multinational retail giant that operates a chain of discount department stores, hypermarkets, and grocery stores. Founded by Sam Walton in 1962, Walmart has grown to become one of the largest and most successful retail corporations globally."
const founders = ["Siddharth Yadav","Sandeep Sinha","Abhishek Shirke","Aadi Vora"]
const investors = ["Siddharth Yadav","Sandeep Sinha","Abhishek Shirke","Aadi Vora"]

const CompanyDescription = () => {
  const [editChange,setEditChange] = useState("true");
  const [inputSummary,setInputValue] = useState(summary)
  const [founder,setFounders] = useState(founders)
  const [investor,setInvestors] = useState(investors)
  const [describe,setDescription] = useState(description)
  const [achieve,setAchieve] = useState(achievement)
  const [newFounder, setNewFounder] = useState("");
  const [newInvestor, setNewInvestor] = useState("");
  const [newAchieve,setNewAchieve] = useState("");

  const handleEditChange = () => setEditChange(!editChange)

  const handleChange = (e) => {
    setInputValue(e.target.value)
}
const handleFounders = (index, event) => {
  const updatedFounders = [...founders];
  updatedFounders[index] = event.target.value;
  setFounders(updatedFounders);
};

const handleAddFounder = () => {
  if (newFounder.trim() !== "") {
    setFounders([...founder, newFounder]);
    setNewFounder("");
  }
};


const handleInvestors = (index,event) => {
  const updatedInvestors = [...investors];
  updatedInvestors[index] = event.target.value;
  setInvestors(updatedInvestors);
}

const handleAddInvestor = () => {
  if (newInvestor.trim() !== "") {
    setInvestors([...investor, newInvestor]);
    setNewInvestor("");
  }
};


const handleAchieve = (index,event) => {
  const updatedAchieves = [...achieve];
  updatedAchieves[index] = event.target.value;
  setAchieve(updatedAchieves);
}

const handleAddAchieve = () => {
  if (newAchieve.trim() !== "") {
    setAchieve([...achieve, newAchieve]);
    setNewAchieve("");
  }
};


const handleDescription = (e) => {
  setDescription(e.target.value)
}

  return (
    <>
          <div className="w-2/3 ml-[100px] mt-10 flex justify-center z-3">
            
                    <div className=" flex-col">
                              <div className="p-2 font-[Nunito,sans-serif]">
                                        <h2 className=" font-bold text-[18px] py-1">Business Summary</h2>
                                        {editChange ? (
                                           <p >{inputSummary}</p>

                                          ) : (
                                            <input
                                            type="text"
                                            value={inputSummary}
                                            onChange={handleChange}
                                            className="w-[600px] border border-gray-200 focus:outline-none p-2 rounded-md shadow-md"
                                          />
                                        )}
                              </div>
                              
                            <div className=" flex flex-col p-2 font-[Nunito,sans-serif]">
                              <h2 className="font-bold text-[18px] py-1 flex  items-center"><MdFoundation size={20}/>Founders</h2>
                              <div className='flex flex-wrap'>
                              {founder.map((founder, index) => (
                                <div key={index} className='m-2 flex'>
                                  {editChange ? (
                                    <p className=' bg-[#6952ff] p-2 text-white rounded-md'>{founder}</p>
                                    
                                  ) : (
                                    <input
                                    type="text"
                                    value={founder}
                                    onChange={(event) => handleFounders(index, event)}
                                    className=" border border-gray-200 focus:outline-none p-2 rounded-sm shadow-md bg-[#6952ff] text-white"
                                  />
                                    
                                  )}
                                </div>
                              ))}
                              </div>
                              
                              {!editChange && (
                                <div className=" flex space-x-4 m-2">
                                  <input
                                    type="text"
                                    value={newFounder}
                                    onChange={(event) => setNewFounder(event.target.value)}
                                    className="border  border-gray-200 focus:outline-none p-2 rounded-sm shadow-md  "
                                    placeholder="New Founder"
                                  />
                                  <button  onClick={handleAddFounder}><IoPersonAdd size={20}/></button>
                                </div>
                              )}
                            </div> 
  
                            <div className=" flex flex-col p-2 font-[Nunito,sans-serif]">
                              <h2 className="font-bold text-[18px] py-1 flex items-center"><GiTakeMyMoney size={20}/>Investors</h2>
                              <div className='flex flex-wrap'>
                              {investor.map((investor, index) => (
                                <div key={index} className='m-2 flex'>
                                  {editChange ? (
                                    <p className=' bg-[#1dc275] p-2 text-white  rounded-md'>{investor}</p>
                                  
                                  ) : (
                                    <input
                                    type="text"
                                    value={investor}
                                    onChange={(event) => handleInvestors(index, event)}
                                    className=" border border-gray-200 focus:outline-none p-2 rounded-sm shadow-sm bg-[#1dc275] text-white"
                                  />
                                    
                                  )}
                                </div>
                              ))}
                              </div>
                              
                              {!editChange && (
                                <div className=" flex space-x-4 m-2">
                                  <input
                                    type="text"
                                    value={newInvestor}
                                    onChange={(event) => setNewInvestor(event.target.value)}
                                    className="border  border-gray-200 focus:outline-none p-2 rounded-md shadow-md"
                                    placeholder="New Investor"
                                  />
                                  <button  onClick={handleAddInvestor}><IoPersonAdd  size={20}/></button>
                                </div>
                              )}
                            </div> 

                            <div className="p-2 font-[Nunito,sans-serif]">
                                        <h2 className=" font-bold text-[18px] py-1">Description</h2>
                                        <p>
                                        {editChange ? (
                                          <p className='w-[600px]'>{describe}</p>

                                          ) : (
                                            <textarea
                                            type="text"
                                            value={describe}
                                            onChange={handleDescription}
                                            className="w-[600px] h-[150px] border border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
                                          />
                                        )}
                                        </p>
                              </div>

                              <div className=" flex flex-col p-2 font-[Nunito,sans-serif]">
                              <h2 className="font-bold text-[18px] py-1 flex items-center">Achivements</h2>
                              <div className='flex flex-wrap'>
                              {achieve.map((achieve, index) => (
                                <div key={index} className='m-2 flex items center'>
                                  {editChange ? (
                                    <p className=' flex items center p-2  rounded-md'> 
                                    <GrAchievement className="fill-[#ffe51d] mr-2" size={15}/>
                                    {achieve}
                                    </p>
                                  
                                  ) : (
                                    <div className='flex items-center'>
                                    <GrAchievement className="fill-[#ffe51d] mr-2" size={15}/>
                                    <input
                                    type="text"
                                    value={achieve}
                                    onChange={(event) => handleAchieve(index, event)}
                                    className="w-[500px] border border-gray-200 focus:outline-none p-2 rounded-sm shadow-sm "
                                  />
                                  </div>
                                  )}
                                </div>
                              ))}
                              </div>
                              
                              {!editChange && (
                                <div className=" flex space-x-4 m-2">
                                  <input
                                    type="text"
                                    value={newAchieve}
                                    onChange={(event) => setNewAchieve(event.target.value)}
                                    className="border  border-gray-200 focus:outline-none p-2 rounded-md shadow-md"
                                    placeholder="New Achievement"
                                  />
                                  <button  onClick={handleAddAchieve}><MdFormatListBulletedAdd size={20}/></button>
                                </div>
                              )}
                            </div> 

                    </div>
        </div>
        <button className="text-[#050029] m-2 h-10 rounded-sm  text-[14px] font-bold border border-[#050029] w-[200px]"
        onClick={handleEditChange}>
           {editChange ? 'Edit Profile' : 'Save'}
        </button>

    </>    
  )
}

export default CompanyDescription
