import React from 'react';
import SearchStartup from './SearchStartup';
import { FcIdea } from "react-icons/fc";


const HeadingSection = () => {
  return (
    <>
      <section className="bg-[#050029] h-[500px] rounded-br-[100px] flex justify-center items-center">
        <div className='flex'>
          <div>
            <h3 className="text-white font-Montserrat text-[12px] mt-[60px] px-10 flex items-center space-x-4 text-left">
                      <FcIdea size={15} className="pr-"/>
                      For Investors
            </h3>
            <h1 className="text-white font-[Nunito,sans-serif] font-bold text-[50px] px-10 text-left">Search for your Startup below</h1>

            <p className="text-[#9ca3af] font-[Nunito,sans-serif] text-base px-10 w-[800px] text-left">
                      Powered by the largest team of Analysts tracking  innovative compaines acrross 250M+
                      Technology Sectors 600+ Emerging Themes
            </p>
            <SearchStartup className="z-4"/>
          </div>

          <img src="https://assets-global.website-files.com/6218834c85e0406691f22826/621e559e0e534906eef41e3d_unsplash_sK0dKnDOcEM.svg" 
          className="loading=lazy z-0 w-[400px] h-[300px] mt-[60px] ml-[100px] bg-blend-multiply" alt="" />
        </div>
       
         
      </section>
    </>
  )
}

export default HeadingSection
