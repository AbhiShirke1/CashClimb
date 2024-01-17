import React from 'react';
import data from './data';
import { TiWarning } from "react-icons/ti";
import { FcIdea } from "react-icons/fc";


const Reasons = () => {
  return (
    <>
      <section className="bg-white py-20">
          <div className="features max-w-7xl flex-col justify-center items-center pb-0 pl-0 pr-0">
                    <h2 className="text-center items-center mb-4 pl-[200px] font-Montserrat  text-5xl leading-58 font-black">
                              Why is fundraising so hard ?
                    </h2>
                    <div className="pl-[200px] text-left  border-b-0  font-Montserrat flex justify-center items-center font-normal">
                              <FcIdea />
                              The biggest issue faced by founders when fundraising
                              <FcIdea />
                    </div>

                    <div className="samll-features max-w-6xl pt-10 pb-10">
                                        <div className=" px-3 flex justify-center items-center space-x-5 pl-[400px] " >
                                        { 
                                          data.map((items) =>(
                                                  <div key={items.id}>
                                                            <div className="feature-item bg-[#6952ff] px-4 py-6 items-center rounded-md w-[300px] h-[250px]" >
                                                                      <img src={items.img_link} className="pl-[105px] mb-2" alt=""/>
                                                                      <h3 className="text-center  font-Montserrat text-white mb-6 text-3xl font-extrabold pt-2 ">
                                                                                {items.name}
                                                                      </h3>
                                                                      <h3 className="text-center  text-white text-lg font-light font-Montserrat ">
                                                                                {items.text}
                                                                      </h3>
                                                            </div>
                                                            <div className=" bg-[#f23d61] mt-2 text-base font-medium text-center pt-2 pb-2 flex justify-center items-center space-x-2 rounded-md">
                                                                      <TiWarning className="fill-white"/>
                                                                      <p className='text-white  font-Montserrat font-normal'>{items.warning}</p>
                                                            </div>

                                                  </div>
                                        ))
                                        }
                                        </div>
                                        {/* <div className="text-center mt-[100px]  text-base font-normal ">
                                                    ClashClimb helps founders navigate these common issues
                                        </div> */}
                      </div>
          </div>
      </section>
    </>
  )
}

export default Reasons
