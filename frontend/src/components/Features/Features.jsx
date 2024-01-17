import React from 'react';
import { FcIdea } from "react-icons/fc";
import feature_data from './feature-data';


const Features = () => {
  return (
    <>
      <div className="feature bg-[#050029] pt-20 pb-20 relative justify-center">
          <img src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218a56cf0ba2938d2f4c0ca_Logo.svg"  
          className="max-w-[80%] pt-3 pr-4 absolute top-0 right-0" alt="logo"/>
          <div className="flex space-x-4  items-center pl-[120px]">
                    <FcIdea size={70}/>
                    <h2 className="static text-4xl font-black font-Montserrat leading-normal text-left  text-white w-[1000px]"> 
                              Remove the stress, simplify the fundraise
                              process and raise funding like a Pro
                    </h2>
          </div>

          <div className="feature-item flex justify-center w-full mt-[80px] pb-10">
                    <div className="px-3 relative flex space-x-5">
                    {    
                        feature_data.map((items) =>(
                              <div className="bg-[#6952ff] text-left rounded-md flex-col items-start font-Montserrat px-4 py-4 flex w-[300px]" key={items.id}>
                                        <img src={items.img_icon} className="items-start mb-3 "/>
                                        <h3 className="text-lg leading-7 text-white font-bold ">
                                                  {items.name}
                                        </h3>
                                        <p className="text-white mb-6 text-base  leading-7 font-normal">
                                                  {items.text}
                                        </p>
                                        <ul className="mb-3 text-white font-Montserrat">
                                                  <li className="px-3 py-3">{items.list_1}</li>
                                                  <li className="px-3 py-3">{items.list_2}</li>
                                                  <li className="px-3 py-3">{items.list_3}</li>
                                        </ul>
                              </div>
                        ))
                    }
                    </div>
          </div>

      </div>
    </>
  )
}

export default Features
