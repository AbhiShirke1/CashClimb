import React from "react";
import { Link } from "react-router-dom";

const StepOnePage = () => {
  return (
    <>
      <div className="flex mt-10">
        {" "}
        <div class="w-full  md:m-[175px]  font-montserrat md:w-1/2 space-y-8 max-w-lg md:max-w-md md:justify-center">
          {/* <div className="w-full space-y-8 flex flex-col m-[50px] font-montserrat  "> */}
          <h2 class="text-base md:text-lg font-medium">Step 2</h2>
          <h1 class="text-3xl lg:text-4xl font-medium">
            Tell us what you like investing in
          </h1>
          <div class="space-y-4">
            <div class="">
              <h3 class="inline text-base lg:text-lg">
                We can notify you when startups match your interests. We’ll also
                personalize CashClimb for your interests.
              </h3>
            
            </div>
      
          </div>
        </div>
        <div class="w-full max-w-lg mx-auto md:max-w-none flex justify-start md:w-1/2 md:justify-center ">
          <img
            src="https://wefunder-production.s3.amazonaws.com/2021/welcome-step-two.svg"
            class="rounded-lg w-[70%] "
          />
        </div>
      </div>

      <div className="absolute right-10 border-2 bg-black text-white p-2 bottom-4 font-semibold font-montserrat">
        <Link to="/step2">Next</Link>
      </div>
    </>
  );
};

export default StepOnePage;
