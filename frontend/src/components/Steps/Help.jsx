import React from "react";
import "../Footer/footer.css";

const Help = () => {
  return (
    <>
      <div id="features" class="text-center bg-[#f2f2f2] relative py-[80px]">
        <div class="items-start pb-[45px] p-[10px] flex flex-col max-w-[1240px] mx-auto">
          <h2 class="mb-[40px] leading-[58px] text-left  static pl-0 text-[#050029] text-[48px] font-bold font-montserrat ">
            We help aspiring or early stage founders raise their investment
            rounds successfully
          </h2>
          <img
            src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218d8e98c126ff6e571e757_chart.svg"
            loading="lazy"
            alt="Graph image"
            class="text-left z-[1] pl-0 absolute top-[70%] bottom-[0%] left-[6%] max-w-[100%] inline-block align-middle "
          />
          <div class="mx-[-10px] max-w-[1240px] block">
            <div class="w-[75%] float-left min-h-[1px] relative px-[10px]">
              <img
                src="https://assets-global.website-files.com/6218834c85e0406691f22826/6230776f87662b1ef9eff008_iStock-927809432.png"
                loading="lazy"
                sizes="(max-width: 479px) 92vw, (max-width: 767px) 83vw, (max-width: 991px) 68vw, (max-width: 1919px) 73vw, 910px"
                srcset="
            https://assets-global.website-files.com/6218834c85e0406691f22826/6230776f87662b1ef9eff008_iStock-927809432-p-500.png   500w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/6230776f87662b1ef9eff008_iStock-927809432-p-800.png   800w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/6230776f87662b1ef9eff008_iStock-927809432-p-1080.png 1080w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/6230776f87662b1ef9eff008_iStock-927809432-p-1600.png 1600w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/6230776f87662b1ef9eff008_iStock-927809432-p-2000.png 2000w,
            https://assets-global.website-files.com/6218834c85e0406691f22826/6230776f87662b1ef9eff008_iStock-927809432.png        2119w
          "
                alt=""
                class="w-[100%] align-center rounded-[8px] pr-[20px] static max-w-[100%] inline-block"
              />
            </div>
            <div class="w-[25%] float-left min-h-[1px] px-[10px] relative font-montserrat">
              <div class="flex flex-col">
                <div class="w-280 bg-white rounded-lg items-start mb-[16px] pt-[16px] px-[16px] shadow-md pb-[10px] flex flex-col text-left">
                  <img
                    src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218d78be19ea8f7bd59ce87_academicons_ideas-repec.svg"
                    height="40"
                    alt="Idea icon"
                    class="items-start flex-initial mb-[12px] max-w-[100%] align-middle inline-block"
                  />
                  <h3 class="text-[#6952ff] uppercase text-[14px] font-bold leading-5 tracking-[1.5px]">
                    IDEA
                  </h3>
                  <h3 class="text-left leading-7 text-[#050029] mb-auto font-bold max-w-[750px] text-[18px]">
                    Planning stages
                  </h3>
                  <h3 class="text-left mb-[24px] text-[18px] leading-7 font-normal max-w-[750px] text-[#050029]">
                    Preparing for the journey
                  </h3>
                </div>
                <div class="w-280 bg-white rounded-lg items-start mb-[16px] pt-[16px] px-[16px] shadow-md pb-[10px] flex flex-col text-left">
                  <img
                    src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218d72b2c90c37f11c6d850_ion_rocket-outline.svg"
                    height="40"
                    alt="Rocket icon"
                    class="items-start flex-initial mb-[12px] max-w-[100%] align-middle inline-block"
                  />
                  <h3 class="text-[#6952ff] uppercase text-[14px] font-bold leading-5 tracking-[1.5px]">
                    MVP
                  </h3>
                  <h3 class="text-left leading-7 text-[#050029] mb-auto font-bold max-w-[750px] text-[18px]">
                    Pre &amp; Seed funding
                  </h3>
                  <h3 class="text-left mb-[24px] text-[18px] leading-7 font-normal max-w-[750px] text-[#050029]">
                    Getting ready to Launch
                  </h3>
                </div>
                <div class="w-280 bg-white rounded-lg items-start mb-[16px] pt-[16px] px-[16px] shadow-md pb-[10px] flex flex-col text-left">
                  <img
                    src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218d3c35b23935150d74481_carbon_autoscaling.svg"
                    height="40"
                    alt="Scaling icon"
                    class="items-start flex-initial mb-[12px] max-w-[100%] align-middle inline-block"
                  />
                  <h3 class="text-[#6952ff] uppercase text-[14px] font-bold leading-5 tracking-[1.5px]">
                    Scaling
                  </h3>
                  <h3 class="text-left leading-7 text-[#050029] mb-auto font-bold max-w-[750px] text-[18px]">
                    Series A+
                  </h3>
                  <h3 class="text-left mb-[24px] text-[18px] leading-7 font-normal max-w-[750px] text-[#050029]">
                    Finding growth capital
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
