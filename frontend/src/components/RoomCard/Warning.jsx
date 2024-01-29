import React from 'react';
import { MdOutlineMeetingRoom } from "react-icons/md";

const Warning = () => {
  return (

          <div className="font-[Nunito,sans-serif] w-[400px] overflow-hidden relative bg-white text-left rounded-md shadow-xl p-6">
                              <div className="p-5 bg-white">
                                        <div className="flex mx-auto bg-[#FEE2E2] flex-shrink-0 justify-center items-center w-12 h-12 rounded-full">
                                                  <MdOutlineMeetingRoom  size={30}/>
                                        </div>
                                        <div className="mt-3 text-center">
                                                  <span className="text-gray-900 text-lg font-semibold leading-6">
                                                            Sorry ,You have not created any 
                                                            investment room yet
                                                  </span>
                                                  <p className="mt-2 text-gray-600 text-sm leading-5">
                                                  Please fill the form with description of Eg:                                                  
                                                  Company Name : CashClimb  
                                                  Original Ask : 80 Lakh 
                                                  Percentage : 5%
                                                  Start Date : 9-10-2024
                                                  End Date : 10-11-2024</p>
                                        </div>
                                        <div className="m-3 bg-gray-100">
                                                  <button className="inline-flex justify-center items-center p-2 bg-red-600 text-white text-base font-medium leading-6 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 w-full rounded-md">
                                                            Fill Form
                                                  </button>
                                        </div>
                              </div>
          </div>

  )
}

export default Warning
