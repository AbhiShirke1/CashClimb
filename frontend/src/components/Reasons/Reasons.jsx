import React from 'react';
import data from './data';
import { TiWarning } from "react-icons/ti";
import { FcIdea } from "react-icons/fc";


const Reasons = () => {
  return (
    <>
      <section class="bg-white py-20">
          <div class="features max-w-7xl flex flex-col items-center pb-0 pl-0 pr-0">
                    <h2 class="text-center items-center mb-4 pl-[200px] font-Montserrat font- text-5xl leading-58 font-black">
                              Why is fundraising so hard ?
                    </h2>
                    <div class=" text-left pl-[200px] border-b-0  font-Montserrat  flex justify-center items-center  font-normal">
                              <FcIdea class='space-x-4'/>
                              The biggest issue faced by founders when fundraising
                              <FcIdea />
                    </div>

                    <div class="samll-features max-w-6xl justify-center pl-[250px] pt-10 pb-10 flex">
                              <div class="flex-col">
                                        <div class="float-left min-h-1 px-3 relative flex space-x-5 items-center " >
                                        { 
                                        data.map((items) =>(
                                                  <div className='flex-col' key={items.id}>
                                                            <div class="feature-item bg-[#6952ff] px-4 py-6 items-center rounded-md w-[300px] h-[250px]" >
                                                                      <img src={items.img_link} class="pl-[105px] mb-2" alt=""/>
                                                                      <h3 class="text-center  font-Montserrat text-white mb-6 text-3xl font-extrabold pt-2 ">
                                                                                {items.name}
                                                                      </h3>
                                                                      <h3 class="text-center  text-white text-lg font-light font-Montserrat ">
                                                                                {items.text}
                                                                      </h3>
                                                            </div>
                                                            <div class=" bg-[#f23d61] mt-2 text-base font-medium text-center pt-2 pb-2 flex justify-center items-center space-x-2 rounded-md">
                                                                      <TiWarning class="fill-white"/>
                                                                      <p class='text-white  font-Montserrat font-normal'>{items.warning}</p>
                                                            </div>

                                                  </div>
                                        ))
                                        }
                                        </div>
                                        <div class="text-center mt-[100px]  text-base font-normal ">
                                                  {/* ClashClimb helps founders navigate these common issues */}
                                        </div>
                              </div>
                    </div>
          </div>
      </section>
    </>
  )
}

export default Reasons
