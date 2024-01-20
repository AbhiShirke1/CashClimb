import React from 'react';
import { FcIdea } from "react-icons/fc";

const HeadingSection = () => {
  return (
    <>
          <section className='bg-[#050029] h-[450px] rounded-br-[140px]'>
                    <h3 className='text-white font-Montserrat text-[18px] pt-[180px] px-10 flex items-center space-x-4 text-left'>
                              <FcIdea size={20} className='pr-1'/>
                              For Investors
                    </h3>
                    <h1 className='text-white font-[Nunito,sans-serif] text-[50px] px-10 text-left'>Search for your Startup below</h1>
                    <p className='text-white font-[Nunito,sans-serif] text-base px-10 w-[800px] text-left'>
                              Powered by the largest team of Analysts tracking  innovative compaines acrross 250M+
                              Technology Sectors 600+ Emerging Themes
                    </p>
          </section>
    </>
  )
}

export default HeadingSection
