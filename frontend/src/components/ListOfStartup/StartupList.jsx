import React from 'react';
import company from './company_data';
import CompanyCard from './CompanyCard';

const StartupList = () => {
  return (
    <>
      <section className="w-2/3 mt-20">
          <div className="flex justify-around items-center">
                    <h3 className="font-[Nunito,sans-serif] font-bold text-lg text-[#5a5e64]">
                              {company.length} Founders 
                    </h3>
                    <button className="h-12 mt-4 px-6 bg-[#6952ff] text-white">
                              Sort by most relevant
                    </button>
          </div>
          <CompanyCard/>
      </section>
    </>
  )
}

export default StartupList
