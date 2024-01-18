import React from 'react';
import data from './data';
import { TiWarning } from "react-icons/ti";
import { FcIdea } from "react-icons/fc";
import './reason.css'


const Reasons = () => {
  return (
    <>
      <section className="bg-white py-20 flex justify-center items-center">
        <div className="features max-w-7xl pb-0">
          <h2 className="text-center items-center mb-4  font-Montserrat  text-5xl leading-58 font-black">
            Why is fundraising so hard ?
          </h2>
          <div className="idea  text-left  border-b-0  font-Montserrat flex justify-center items-center font-normal">
            <FcIdea />
            The biggest issue faced by founders when fundraising
            <FcIdea />
          </div>
          <div className="small-items px-3 py-10 flex justify-center items-center space-x-5">
              {
                data.map((items) => (
                  <div key={items.id} className="flex flex-col "> 
                    <div className="feature-item bg-[#6952ff] px-4 py-6 items-center rounded-md w-[300px] h-[250px]">
                      <img src={items.img_link} className="pl-[105px] mb-2" alt="" />
                      <h3 className="text-center font-Montserrat text-white mb-6 text-3xl font-extrabold pt-2">
                        {items.name}
                      </h3>
                      <h3 className="text-center text-white text-lg font-light font-Montserrat">
                        {items.text}
                      </h3>
                    </div>
                    <div className="bg-[#f23d61] mt-2 text-base font-medium text-center pt-2 pb-2 flex justify-center items-center space-x-2 rounded-md">
                      <TiWarning className="fill-white" />
                      <p className='text-white font-Montserrat font-normal'>{items.warning}</p>
                    </div>
                  </div>
                ))
              }
          </div>
        </div>
      </section>
    </>
  )
}

export default Reasons
