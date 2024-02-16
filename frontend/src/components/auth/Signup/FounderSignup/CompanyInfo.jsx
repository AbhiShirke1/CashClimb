import React, { useState } from 'react';
import { CgWebsite,CgNametag  } from "react-icons/cg";
import { FcIdea } from "react-icons/fc";
import { PiNumberSquareTwoDuotone} from "react-icons/pi";
import { GrLicense } from "react-icons/gr";
import { MdSummarize } from "react-icons/md";
import { Link, useLocation } from 'react-router-dom';


const CompanyInfo = ({page}) => {

    const location=useLocation();
    const {regInfo}=location.state;
    console.log(regInfo);

    const[cin,setCin]=useState("");
    const[cname,setCname]=useState("");
    const[website,setWebsite]=useState("");
    const[summary,setSummary]=useState("");

    const handleCinChange = (e) => {
      setCin(e.target.value);
    };

    const handleCnameChange = (e) => {
      setCname(e.target.value);
    };

    const handleWebsiteChange = (e) => {
      setWebsite(e.target.value);
    };

    const handleSummaryChange = (e) => {
      setSummary(e.target.value);
    };

    const data={
      ...regInfo,
      cin,
      cname,
      website,
      summary,
    }

    console.log(data)
  return (
    <div className='w-full h-screen  flex '>
      <div className='w-[50%] h-full'> 
        <h2 className='flex justify-center items-center font-montserrat font-semibold text-[40px] mt-[100px]'>
          Company Information  
        </h2>
        <form action="" className='flex flex-col p-10 mt-10 justify-center items-center'>
          <div className='flex items-center relative m-2'>
            <GrLicense className='mt-4' size={25}/>
            <input
            type="text"
            className="w-[400px] border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
            placeholder="Company CIN Number"
            value={cin}
            onChange={handleCinChange}
            />
          </div>
          <div className='flex items-center  relative m-2'>

            <CgNametag  className='mt-4' size={25}/>
            <input
            type="text"
            className="w-[400px] border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
            placeholder="Company Name"
            value={cname}
            onChange={handleCnameChange}
            />
          </div>

          <div className='flex items-center  relative m-2'>

            <CgWebsite  className='mt-4' size={25}/>
            <input
            type="text"
            className="w-[400px] border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
            placeholder="Company Website"
            value={website}
            onChange={handleWebsiteChange}
            />
          </div>

          <div className='flex items-center relative m-2'>

            <MdSummarize className='mt-4' size={25}/>
            <input
            type="text"
            className="w-[400px] border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
            placeholder="Summary"
            value={summary}
            onChange={handleSummaryChange}
            />
          </div>

          <Link to='/welcome/pastfunding' state={{firstdata:data}}>Submit</Link>
        </form>

      </div>

      <div className='bg-[#050029] w-[50%] h-full'>
        <div className='flex flex-col '>
          <h2 className='flex justify-center items-center mt-[200px] text-white text-5xl font-semibold'>
            Step <PiNumberSquareTwoDuotone className='mr-2 mt-2' size={60}/> 
          </h2>
          <h2 className='text-white text-lg  font-montserrat font-semibold flex-wrap mt-10 flex justify-center '>
            <FcIdea size={30} className="mr-2"/>
            <div className='w-[500px]'>
              <h4>Tell  Us About Your Company
              and help Investor to  Understand More About You.
              </h4>
            </div>
          </h2>
        </div> 
      </div>
    </div>
  )
}

export default CompanyInfo



{/* <form action="" className='flex flex-col p-10 mt-10'>
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
</form> */}


{/* <div className='flex flex-col '>
<h2 className='flex justify-center items-center mt-[-100px] text-white text-2xl'>
  Step <PiNumberSquareTwoDuotone className='mr-2' size={40}/> 
</h2>
<h2 className='text-white font-montserrat font-semibold ml-[45px] mt-10 flex justify-center '>
  <FcIdea size={30} className="mr-2"/>
  Tell  Us About Your Company
  and help Investor to  Understand More About You.

</h2>
</div> */}