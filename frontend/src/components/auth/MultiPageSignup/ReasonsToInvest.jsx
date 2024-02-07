import React, { useState } from 'react';
import { FcIdea } from "react-icons/fc";
import {PiNumberSquareThreeDuotone } from "react-icons/pi";
import { GrLicense } from "react-icons/gr";
import { SiReason } from "react-icons/si";


const ReasonsToInvest = () => {
  const [inputFields, setInputFields] = useState([{ id: 1, value: '' }]);

  const handleAddField = (e) => {
    e.preventDefault();
    const newInputFields = [...inputFields, { id: inputFields.length + 1, value: '' }];
    setInputFields(newInputFields);
  };

  const handleChange = (id, event) => {
    const newInputFields = inputFields.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setInputFields(newInputFields);
  };


  return (
    <div className='w-full h-screen  flex font-montserrat'>
    <div className='w-[50%] h-full'> 
      <h2 className='flex justify-center items-center  font-semibold text-[45px] mt-[100px]'>
        Reason to Invest 
      </h2>
      <div className='flex mt-20 justify-center items-center  flex-col'>
        <h2 className='font-semibold text-gray-700 text-md w-[400px]  place-content-center'>
          Tell Investors why they should invest in you? 
        </h2>
        <p className='font-semibold text-gray-700 text-sm'>
          Eg: 1.) Team credentials &nbsp;
              2.)  Market potential &nbsp;
              3.) Product or service uniqueness. etc..
        </p>

        
      </div>
      <form  className='flex flex-col p-10 mt-10 justify-center items-center'>
      {inputFields.map((field) => ( 
        <div key={field.id} className='flex items-center font-bold relative m-2'>
          <SiReason className='mt-4' size={25}/>
          <input
          type="text"
          value={field.value}
          onChange={(e) => handleChange(field.id, e)}
          className="w-[400px] border-b-[2px] border-gray-400 focus:border-black mt-5 py-2 pl-8 pr-2 focus:outline-none placeholder:font-montserrat placeholder:font-normal"
          placeholder="Reasons"
          />
        </div>
      ))}
      <button onClick={handleAddField} className='mt-10 border border-[#050029] border-1 p-1 font-semibold'>Add Highlight</button>

      </form>

    </div>

    <div className='bg-[#050029] w-[50%] h-full'>
      <div className='flex flex-col '>
        <h2 className='flex justify-center items-center mt-[200px] text-white text-5xl font-semibold'>
          Step <PiNumberSquareThreeDuotone className='mr-2 mt-2' size={60}/> 
        </h2>
        <h2 className='text-white text-lg  font-semibold flex-wrap mt-10 flex justify-center '>
          <div className='w-[500px] flex justify-center items-center'>
            <FcIdea size={30} className="mr-2"/>
            <h4>Top reasons to invest in your company. <br />
            Tell us that you're proud of like traction,team credentials or other accomplishments.
            </h4>
          </div>
        </h2>
      </div> 
    </div>
  </div>
  )
}

export default ReasonsToInvest
