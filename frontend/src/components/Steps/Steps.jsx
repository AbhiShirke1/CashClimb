import React from 'react';
import '../Footer/footer.css';

const Steps = () => {
  return (
    <>
          <div id="features" class="bg-white py-[80px]">
            <div class="max-w-[1240px] flex flex-col items-center pb-0 pl-0 pr-0 mx-auto">
              <div class="w-[100%] h-[100%] bg-[#6952ff] pt-[32px] pb-[32px] pl-[32px] rounded-[8px] flex relative justify-between">
                <div class="flex flex-col">
                  <h1 class="rounded-[1px] font-montserrat border-black text-white text-left mt-[16px] pt-[8px] pr-[8px] pb-[8px] font-bold text-[32px] mb-[0.67em]">
                    How it works - <br />4 simple steps
                  </h1>
                  <div class="pb-[24px] flex">
                    <img
                      src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218dc634d09a262453cbc03_Group%204.svg"
                      loading="lazy"
                      alt="Bullet point"
                      class="pr-[10px]"
                    />
                    <div class="max-w-[500px] font-montserrat text-white text-left text-[18px] leading-7 tracking-normal font-normal">
                      Create your account
                    </div>
                  </div>
                  <div class="pb-[24px] flex">
                    <img
                      src="https://assets-global.website-files.com/6218834c85e0406691f22826/621cc05f982fbe6e4a814ae9_Group%204%20(1).svg"
                      loading="lazy"
                      alt="Bullet point"
                      class="pr-[10px]"
                    />
                    <div class="max-w-[500px] font-montserrat text-white text-left text-[18px] leading-7 tracking-normal font-normal">
                      Create your fundraise plan
                    </div>
                  </div>
                  <div class="pb-[24px] flex">
                    <img
                      src="https://assets-global.website-files.com/6218834c85e0406691f22826/621cc08499744ba25c74a509_Group%204%20(2).svg"
                      loading="lazy"
                      alt="Bullet point"
                      class="pr-[10px]"
                    />
                    <div class="max-w-[500px] font-montserrat text-white text-left text-[18px] leading-7 tracking-normal font-normal">
                      Search our dedicated guides for help and tips
                    </div>
                  </div>
                  <div class="pb-[24px] flex">
                    <img
                      src="https://assets-global.website-files.com/6218834c85e0406691f22826/621cc0ab13d1d2753525771e_Group%205.svg"
                      loading="lazy"
                      alt="Bullet point"
                      class="pr-[10px]"
                    />
                    <div class="max-w-[500px] font-montserrat text-white text-left text-[18px] leading-7 tracking-normal font-normal">
                      Access easy to use tools and other resources
                    </div>
                  </div>
                  <div class="max-w-[620px]  mb-[40px] text-white text-left text-[16px] leading-7 tracking-normal font-normal">
                    <strong class="text-white  font-montserrat text-[20px] font-bold">
                      Raise with confidence!
                    </strong>
                  </div>
                  <a
                    href=""
                    target="_blank"
                    class="max-w-[400px] tracking-[1px] font-montserrat font-medium  bg-[white] text-[#6952ff] text-[20px] mr-[14px] px-[24px] py-[32px] rounded-[6px] text-center leading-[30px] border-transparent border-0 border-solid shadow-md inline-block "
                  >
                    Sign up
                  </a>
                </div>
                <div>
                  <img
                    src="https://assets-global.website-files.com/6218834c85e0406691f22826/621cbcb0583807f06d411b86_Dashboard%20mockup.png"
                    loading="lazy"
                    width="400"
                    sizes="(max-width: 479px) 37vw, (max-width: 767px) 47vw, (max-width: 991px) 28vw, 400px"
                    alt="Dashboard mockup"
                    srcset="
            https://assets-global.website-files.com/6218834c85e0406691f22826/621cbcb0583807f06d411b86_Dashboard%20mockup-p-500.png   500w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/621cbcb0583807f06d411b86_Dashboard%20mockup-p-800.png   800w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/621cbcb0583807f06d411b86_Dashboard%20mockup-p-1080.png 1080w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/621cbcb0583807f06d411b86_Dashboard%20mockup.png        1620w
          "
                    class=" w-[400px] absolute top-[15%] left-auto bottom-0 right-0"
                  />
                </div>
              </div>
            </div>
          </div>
    </>
  )
}

export default Steps
