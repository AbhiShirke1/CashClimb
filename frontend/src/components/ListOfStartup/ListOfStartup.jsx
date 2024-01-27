import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchStartup from './SearchStartup';
import StartupList from './StartupList';
import FilterStartup from './FilterStartup';
import { FcIdea } from "react-icons/fc";
import search_icon from './search_icon.png';
import search from './search.png';



const ListOfStartup = () => {
  return (
    <>
      <Navbar/>
      <section className="bg-[#050029] h-[500px] rounded-br-[140px]">
        <div className='flex'>
          <div>
            <h3 className="text-white font-Montserrat text-[12px] pt-[180px] px-10 flex items-center space-x-4 text-left">
                      <FcIdea size={15} className="pr-"/>
                      For Investors
            </h3>
            <h1 className="text-white font-[Nunito,sans-serif] font-bold text-[50px] px-10 text-left">Search for your Startup below</h1>

            <p className="text-[#9ca3af] font-[Nunito,sans-serif] text-base px-10 w-[800px] text-left">
                      Powered by the largest team of Analysts tracking  innovative compaines acrross 250M+
                      Technology Sectors 600+ Emerging Themes
            </p>
          </div>
          <img src={search} className="loading=lazy z-0 w-[400px] h-[300px] mt-[90px] ml-[200px] bg-blend-multiply" alt="" />
        </div>
        <SearchStartup className="z-4"/>
         
      </section>
      <div className='flex justify-center '>
          <FilterStartup/>
          <StartupList/>
      </div>
    </>
  )
}

export default ListOfStartup
