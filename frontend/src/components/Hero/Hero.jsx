import React from 'react';
import './hero.css';

const hero_img = "https://assets-global.website-files.com/6218834c85e0406691f22826/62188f41437c9fbc2e9feb94_Illustration.svg"

const Hero = () => {
  return (
    <>
      <section className="main bg-[#050029] pt-[85px] bg-cover drop-shadow-sm w-full flex justify-center items-center">
        <div className="conatiner ">
          <div className="vision flex flex-row">
            <div className="left pl-[200px] mt-[100px]">
              <h1 className="text-white font-[Nunito,sans-serif] font-black text-[72px] leading-[80px] ">
                Simple
                <br />
                Startup Fundraising
              </h1>
              <p className="text-white text-left text-base leading-6 max-w-xl pt-5 font-[Nunito,sans-serif]">
                Only 1% of startups successfully raise their early stage investment. How can you be in that 1%?
              </p>
              <button className="bg-[#6952ff] text-white mt-5 w-[150px] h-[50px]  font-[Nunito,sans-serif] text-base rounded-md font-medium leading-5">Signup</button>

            </div>
            <div className="right  w-full min-h-1 pl-[150px] ">
              <img src={hero_img}
              className="max-w-full align-middle" alt='hero' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
