import React from 'react';
import '../Footer/footer.css';

const Pillars = () => {
  return (
    <>
          <div id="features" class="relative py-[80px] bg-white">
            <div class=" items-start pb-[45px] flex flex-col max-w-[1240px] mx-auto font-montserrat">
              <img
                src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218c8458837e56155eb45ff_Pillars.svg"
                loading="lazy"
                alt="6 pillars image"
                class="pr-0 pt-0 absolute max-w-[80%] top-[0%] bottom-auto left-auto right-[0%]"
              />
              <h2 class="text-left pl-0 leading-[60px] static max-w-[940px] mb-[40px] text-[48px] font-bold p-[10px]  text-[#050029]">
                Our simple 6 pillars framework guides you through step by step
              </h2>
            </div>
            <div class="max-w-[1240px] flex flex-col items-center mx-auto pb-0 pl-0 pr-0">
              <img
                src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218c8458837e56155eb45ff_Pillars.svg"
                loading="lazy"
                alt="6 pillars image"
                class="pr-0 pt-0 absolute max-w-[80%] top-[0%] bottom-auto left-auto right-[0%]"
              />
              <div class="w-[100%] max-w-[100%] pt-[0px] pb-[20px] flex justify-between ">
                <div class="pl-0 pr-[20px] object-fill w-[33.33%] float-left min-h-[1px] relative">
                  <div class="h-[100%] bg-[#f23d61] rounded-[12px] px-[20px] pt-[20px] pb-[10px] ">
                    <h3 class="text-white text-center mb-[24px] text-[32px] font-montserrat font-bold leading-10">
                      Raise <br />
                      Strategy
                    </h3>
                    <p class="max-w-[500px] text-white font-montserrat leading-7 text-center  mb-[40px] text-[18px] font-normal">
                      Design a clear fundraising plan to capture strategic needs, a
                      realistic timeline and budget.
                    </p>
                  </div>
                </div>
                <div class="pl-0 pr-[20px] object-fill w-[33.33%] float-left min-h-[1px] relative">
                  <div class="h-[100%] bg-[#fc8700] rounded-[12px] px-[20px] pt-[20px] pb-[10px]  ">
                    <h3 class="text-white text-center font-montserrat mb-[24px] text-[32px]  font-bold leading-10">
                      Raise amount &amp;
                      <br />
                      valuation
                    </h3>
                    <h3 class="max-w-[500px] text-white font-montserrat leading-7  mb-[40px] text-center text-[18px] font-normal">
                      Understand how to determine the right level to raise and at
                      what valuation.
                    </h3>
                  </div>
                </div>
                <div class="pl-0 pr-[20px] object-fill w-[33.33%] float-left min-h-[1px] relative">
                  <div class="h-[100%] bg-[#fcbb00] rounded-[12px] px-[20px] pt-[20px] pb-[10px]  ">
                    <h3 class="text-white text-center font-montserrat mb-[24px] text-[32px] font-bold leading-10">
                      Investment <br />
                      Landscape
                    </h3>
                    <h3 class="max-w-[500px] text-white font-montserrat leading-7  mb-[40px] text-center text-[18px] font-normal">
                      Learn the different investor types and plan who to approach,
                      their benefits and critically, when.
                    </h3>
                  </div>
                </div>
              </div>
              <div class="w-[100%] max-w-[100%] pt-0 pb-[20px] mx-[-10px] flex justify-between">
                <div class="pl-0 pr-[20px] object-fill w-[33.33%] float-left min-h-[1px] relative">
                  <div class="h-[100%] bg-[#1dc275] rounded-[12px] px-[20px] pt-[20px] pb-[10px]  ">
                    <h3 class="text-white text-center  font-montserrat mb-[24px] text-[32px] font-bold leading-10">
                      Investment <br />
                      Materials
                    </h3>
                    <p class="max-w-[500px] text-white font-montserrat leading-7 mb-[40px] text-center text-[18px] font-normal">
                      Know what key investment materials you need, in what format
                      and how to create them.
                    </p>
                  </div>
                </div>
                <div class="pl-0 pr-[20px] object-fill w-[33.33%] float-left min-h-[1px] relative">
                  <div class="h-[100%] bg-[#6952ff] rounded-[12px] px-[20px] pt-[20px] pb-[10px] ">
                    <h3 class="text-white text-center font-montserrat mb-[24px] text-[32px] font-bold leading-10">
                      Pitch <br />
                      Preparation
                    </h3>
                    <h3 class="max-w-[500px] text-white font-montserrat leading-7 mb-[40px] text-center text-[18px] font-normal">
                      Create an effective pitch, ensuring investors understand your
                      business opportunity.
                    </h3>
                  </div>
                </div>
                <div class="pl-0 pr-[20px] object-fill w-[33.33%] float-left min-h-[1px] relative">
                  <div class="h-[100%] bg-[#bf62d9] rounded-[12px] px-[20px] pt-[20px] pb-[10px] ">
                    <h3 class="text-white text-center  font-montserrat mb-[24px] text-[32px] font-bold leading-10">
                      Due <br />
                      Diligence
                    </h3>
                    <h3 class="max-w-[500px] text-white font-montserrat leading-7 mb-[40px] text-center text-[18px] font-normal">
                      Prepare your complete due diligence dataroom for a swift
                      closing process, stress free.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Pillars