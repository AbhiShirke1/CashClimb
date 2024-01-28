import React from 'react'


const  img_url = "https://assets-global.website-files.com/6218834c85e0406691f22826/62305b0f3a3882d68cd64cdb_Favicon%20256x256%20(1).svg"

const ProfileHeader = () => {
  return (
    <>
          <section className="bg-[#050029] h-[350px]">
          <div className="flex justify-center items-center flex-col">
                    <div className="w-[100px] h-[100px] bg-white rounded-3xl mt-[120px]">
                              <img src={img_url} alt="company_logo" className='w-[100px] flex justify-center items-center' />
                    </div>    
                    
                    <h2 className="text-white font-[Nunito,sans-serif] font-bold text-[25px] py-1">
                              CashClimb
                    </h2>
                    <p className='text-white font-[Nunito,sans-serif] text-base'>Mumbai,Maharashtra</p>
          </div>
          <img src="https://assets-global.website-files.com/6218834c85e0406691f22826/6218c8458837e56155eb45ff_Pillars.svg" 
          className="mt-[-200px] ml-[1112px]"
          alt="" />
    </section>
    </>
  )
}

export default ProfileHeader
