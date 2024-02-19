import React, { useState } from "react";
import { CgWebsite, CgNametag } from "react-icons/cg";
import { FcIdea } from "react-icons/fc";
import { PiNumberSquareTwoDuotone } from "react-icons/pi";
import { GrLicense } from "react-icons/gr";
import { MdSummarize } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const CompanyInfo = ({ page }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const { state } = useLocation();
  console.log(state);
  const navigate = useNavigate();

  const [cin, setCin] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [summary, setSummary] = useState("");

  const handleCinChange = (e) => {
    setCin(e.target.value);
  };

  const handleCnameChange = (e) => {
    setCompany(e.target.value);
  };

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };

  const handleSummaryChange = (e) => {
    setSummary(e.target.value);
  };

  const data = {
    ...state,
    cin,
    company,
    website,
    summary,
  };

  console.log(data);
  const onSubmit = () => {
    const path = "/welcome/pastfunding";
    navigate(path, { state: { ...data } });
  };
  return (
    <div className="w-full h-screen  flex font-montserrat ">
      <div className="w-[50%] h-full">
        <h2 className="flex justify-center items-center font-montserrat font-semibold text-[40px] mt-[100px]">
          Company Information
        </h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col p-10 mt-10 justify-center items-center space-y-8 text-xl"
        >
          <div className="relative">
            <GrLicense className="absolute top-2" size={25} />
            <input
              type="text"
              className="border-b-[2px] border-gray-400 focus:border-black py-2 pl-8 pr-2 focus:outline-none w-[400px]"
              placeholder="Company CIN Number"
              name="cin"
              value={cin}
              onChange={handleCinChange}
            />
          </div>
          <div className="  relative ">
            <CgNametag className=" absolute top-2" size={25} />
            <input
              type="text"
              className="w-[400px] border-b-[2px] border-gray-400 focus:border-black  py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
              placeholder="Company Name"
              name="company"
              value={company}
              onChange={handleCnameChange}
            />
          </div>

          <div className="relative">
            <CgWebsite className="absolute top-2" size={25} />
            <input
              type="text"
              className="w-[400px] border-b-[2px] border-gray-400 focus:border-black py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
              placeholder="Company Website"
              name="website"
              value={website}
              onChange={handleWebsiteChange}
            />
          </div>

          <div className=" relative">
            <MdSummarize className="absolute top-2" size={25} />
            <input
              type="text"
              className="w-[400px] border-b-[2px] border-gray-400 focus:border-black  py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
              placeholder="Summary"
              name="summary"
              value={summary}
              onChange={handleSummaryChange}
            />
          </div>

          {/* <Link to='/welcome/pastfunding' state={{firstdata:data}}>Submit</Link> */}
          <button type="submit" className="border-2 bg-blue-600 p-2 w-[20%] mt-7">
            Next
          </button>
        </form>
      </div>

      <div className="bg-[#050029] w-[50%] h-full">
        <div className="flex flex-col ">
          <h2 className="flex justify-center items-center mt-[200px] text-white text-5xl font-semibold">
            Step <PiNumberSquareTwoDuotone className="mr-2 mt-2" size={60} />
          </h2>
          <h2 className="text-white text-lg  font-montserrat font-semibold flex-wrap mt-10 flex justify-center ">
            <FcIdea size={30} className="mr-2" />
            <div className="w-[500px]">
              <h4>
                Tell Us About Your Company and help Investor to Understand More
                About You.
              </h4>
            </div>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;

{
  /* <form action="" className='flex flex-col p-10 mt-10'>
<div className='flex items-center font-bold relative m-2'>
  <GrLicense className='mt-4' size={25}/>
  <input
  type="text"
  className="w-[400px] border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
  placeholder="Company CIN Number"
  />
</div>
<div className='flex items-center font-bold relative m-2'>

  <CgNametag  className='mt-4' size={25}/>
  <input
  type="text"
  className="w-[400px] border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
  placeholder="Company Name"
  />
</div>

<div className='flex items-center font-bold relative m-2'>

  <CgWebsite  className='mt-4' size={25}/>
  <input
  type="text"
  className="w-[400px] border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
  placeholder="Company Website"
  />
</div>

<div className='flex items-center font-bold relative m-2'>

  <MdSummarize className='mt-4' size={25}/>
  <input
  type="text"
  className="w-[400px] border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
  placeholder="Summary"
  />
</div>
</form> */
}

{
  /* <div className='flex flex-col '>
<h2 className='flex justify-center items-center mt-[-100px] text-white text-2xl'>
  Step <PiNumberSquareTwoDuotone className='mr-2' size={40}/> 
</h2>
<h2 className='text-white font-montserrat font-semibold ml-[45px] mt-10 flex justify-center '>
  <FcIdea size={30} className="mr-2"/>
  Tell  Us About Your Company
  and help Investor to  Understand More About You.

</h2>
</div> */
}
