import React from 'react';

const Hero = () => {
  return (
    <>
          <section class="main bg-[#050029] pt-[85px] bg-cover drop-shadow-sm ">
                    <div class="conatiner w-full">
                              <div class="vision flex justify-center items-center ">
                                        <div class="left w-1/2 pl-[200px]">
                                                  <h1 class="text-white font-Montserrat  font-black text-[72px] leading-[80px]">
                                                            Simple
                                                            <br/>
                                                            Startup Fundraising
                                                  </h1>
                                                  <p class="text-white text-left text-base leading-6 max-w-xl pt-5 font-Montserrat">
                                                            Only 1% of startups successfully raise their early stage investment. How can you be in that 1%?
                                                  </p>
                                                  <button class="bg-[#6952ff] text-white mt-5 w-[150px] h-[50px]  font-Montserrat font-sans text-base rounded-md font-medium leading-5">Signup</button>
          
                                        </div>
                                        <div class="right float-left w-full min-h-1 pl-[150px] ">
                                                  <img src="https://assets-global.website-files.com/6218834c85e0406691f22826/62188f41437c9fbc2e9feb94_Illustration.svg" class="max-w-full align-middle"/>
                                        </div>
                              </div>
                    </div> 
          </section>
    </>
  )
}

export default Hero
