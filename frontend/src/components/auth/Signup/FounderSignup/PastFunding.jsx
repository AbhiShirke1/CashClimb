import React, { useState } from 'react';
import { FcIdea } from "react-icons/fc";
import { PiNumberSquareFourDuotone } from "react-icons/pi";
import { CgWebsite,CgNametag  } from "react-icons/cg";
import { GrLicense } from "react-icons/gr";
import { FaDollarSign } from "react-icons/fa6";
import { useForm } from 'react-hook-form';
import { useLocation ,Link } from 'react-router-dom';


const PastFunding = () => {
  const [role, setRole] = useState("Founder");
  const {
    register,
    handleSubmit,
  } = useForm();

  const location=useLocation();
  const {firstdata}=location.state;
  console.log(firstdata);

  const[funds,setFunds]=useState("");
  const[investorName,setInvestorName]=useState("");

  const handleFundsChange=(e)=>
  {
    setFunds(e.target.value)
  }

  const handleInvestorNameChange=(e)=>
  {
    setInvestorName(e.target.value)
  }


  const data={
    ...firstdata,
    funds,
    investorName,
  }
  console.log(data)
  return (
    <div className='w-full h-screen  flex '>
    <div className='w-[50%] h-full'> 
      <h2 className='flex justify-center items-center font-montserrat font-semibold text-[40px] mt-[100px]'>
        Past Funding 
      </h2>
      <form action="" className='flex flex-col p-10 mt-10 justify-center items-center'>
        <div className="flex justify-around w-[300px] m-2">
            <div className='flex flex-col justify-center items-center'>
              <label htmlFor="funds" className='font-montserrat font-semibold text-lg '>
                  Have you raised funds?
              </label>
              <div className="flex space-x-2 p-2">
                <input
                  type="radio"
                  name="funds"
                  value="Yes"
                  {...register("role", { defaultValue: "Yes" })}
                  checked={role === "Yes"}
                  onChange={() => setRole("Yes")}
                />
                <span>Yes</span>
              </div>

              <div className="flex space-x-2">
                <input
                  type="radio"
                  name="funds"
                  value="No"
                  {...register("role", { defaultValue: "No" })}
                  checked={role === "No"}
                  onChange={() => setRole("No")}
                />
                <span>No</span>
              </div>
            </div>  
        </div>
        {
         role == 'Yes' && (
          <>
        <div className='flex items-center font-bold relative m-2'>
          <FaDollarSign  className='mt-4' size={25}/>
          <input
          type="text"
          className="w-[400px] border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
          placeholder="Total Funds"
          value={funds}
          onChange={handleFundsChange}

          />
        </div>

        <div className='flex items-center font-bold relative m-2'>
          <CgWebsite  className='mt-4' size={25}/>
          <input
          type="text"
          className="w-[400px] border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
          placeholder="Investor Name"
          value={investorName}
          onChange={handleInvestorNameChange}
          />
        </div>
        </>
      )}
      <Link to='/welcome/reasons' state={{secondData:data}}>Submit</Link>


      </form>

    </div>

    <div className='bg-[#050029] w-[50%] h-full'>
      <div className='flex flex-col '>
        <h2 className='flex justify-center items-center mt-[200px] text-white text-5xl font-semibold'>
          Step <PiNumberSquareFourDuotone className='mr-2 mt-2' size={60}/> 
        </h2>
        <h2 className='text-white text-lg  font-montserrat font-semibold flex-wrap mt-10 flex justify-center '>
          <div className='w-[500px] flex justify-center items-center'>
          <FcIdea size={30} className="mr-2"/>
            <h4>Describe your previous funding round. <br />
          If not raised any money Then, Choose NO.
            </h4>
          </div>
        </h2>
      </div> 
    </div>
  </div>
  )
}

export default PastFunding