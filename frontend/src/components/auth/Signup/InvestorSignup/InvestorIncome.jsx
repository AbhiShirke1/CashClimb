import React, { useState } from "react";
import { FcIdea } from "react-icons/fc";
import { PiNumberSquareThreeDuotone } from "react-icons/pi";
import { Link, useLocation } from "react-router-dom";

const InvestorIncome = () => {
  const [companyValue, setCompanyValue] = useState(0);
  const location = useLocation();
  const {info}=location.state;
  console.log(info)
  const handleCompanyValueChange = (e) => {
    setCompanyValue(e.target.value);
  };

  const formatValue = (value) => {
    if (value < 1000) {
      return `$${value}K`;
    } else if (value >= 1000 && value < 1000000) {
      return `$${(value / 1000).toFixed(0)}K`;
    } else {
      return `$${(value / 1000000).toFixed(0)}M+`;
    }
  };
  const [annualSalary, setAnnualSalary] = useState(0);

  const handleSalaryChange = (e) => {
    setAnnualSalary(e.target.value);
  };



  const formatSalary = (salary) => {
    if (salary < 50000) {
      return `$${salary}`;
    } else if (salary >= 50000 && salary < 100000) {
      return `$${(salary / 1000).toFixed(0)}K`;
    } else if (salary >= 100000 && salary < 200000) {
      return `$${(salary / 1000).toFixed(0)}K`;
    } else if (salary >= 200000 && salary < 300000) {
      return `$${(salary / 1000).toFixed(0)}K`;
    } else {
      return `$${(salary / 1000).toFixed(0)}K+`;
    }
  };

  const [isAccreditedInvestor, setIsAccreditedInvestor] = useState(false);

  const handleAccreditedInvestorChange = () => {
    setIsAccreditedInvestor(!isAccreditedInvestor);
  };
    const investorIncome={
      ...info,
      companyValue,
      annualSalary,
      isAccreditedInvestor,

    };
    console.log(investorIncome)
  return (
    <>
      <div className="w-full h-screen flex font-montserrat mb-[20px]">
        <div className="w-[50%] h-full px-10 py-3">
          <h2 className=" text-left font-montserrat font-semibold text-[30px] mt-20 whitespace-nowrap">
            Let's find out how much you can invest
          </h2>
          <h3 className="text-[20px] font-montserrat whitespace-nowrap">
            The law limits how much you can invest in each year{" "}
          </h3>
          <form action="" className="flex flex-col p-10">
            <div className="flex flex-col mt-10 font-bold">
              <label htmlFor="">What is your net worth?</label>
              <input
                type="range"
                min="0"
                max="5000000"
                step="100000"
                value={companyValue}
                onChange={handleCompanyValueChange}
                className="border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
              />
              <div className="mt-3">{formatValue(companyValue)}</div>
            </div>
            <div className="flex flex-col mt-10 font-bold">
                <label htmlFor="">What is your annual income?</label>
              <input
                type="range"
                min="0"
                max="300000"
                step="5000"
                value={annualSalary}
                onChange={handleSalaryChange}
                className="border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
              />
              <div className="mt-3">
            {formatSalary(annualSalary)}
              </div>
            </div>
            <div className="flex flex-col mt-10 font-bold">
      <label className="flex items-center space-x-1">
        <input
          type="checkbox"
          checked={isAccreditedInvestor}
          onChange={handleAccreditedInvestorChange}
          className="mr-2 "
        />
        Are you an    
        <Link to='https://www.indiainfoline.com/knowledge-center/share-market/what-Is-an-accredited-investor' className="underline hover:bg-orange-300 " > accredited investor?</Link>
      </label>
    </div>
    <Link to='/welcome/choices' state={{income:investorIncome}}>Submit</Link>
          </form>
        </div>
        <div className="bg-[#050029] h-full w-[50%] ">
          <div className="flex flex-col mt-[30vh]">
            <h2 className="flex justify-center items-center  text-white text-5xl">
              Step <PiNumberSquareThreeDuotone className="mr-2" size={60} />
            </h2>
            <h2 className="text-white font-montserrat font-semibold ml-[140px] p-2 mt-10 flex  ">
              <FcIdea size={30} className="mr-2" />
              Top reasons to invest in your company. <br />
              Tell us that you're proud of like traction,team credentials or
              other accomplishments.
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorIncome;
