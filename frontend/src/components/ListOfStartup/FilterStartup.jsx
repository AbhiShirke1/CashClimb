import React, { useState } from 'react';
import category from './category';

const FilterStartup = () => {
  const [loadMore,setLoadMore] = useState(false)
  return (
    <div>
      <section className="w-[300px] mt-10 bg-[#050029]  mb-2 rounded-md border border-solid border-transparent p-4 ">
          <div className='flex  flex-col justify-center items-center'>
                    <h3 className="text-white font-[Nunito,sans-serif] text-base p-4 font-bold">
                              Filter by Category
                    </h3>
                    <div className="flex flex-wrap"> 
                          {loadMore ? category.map((sector)=>(
                            <button className=" m-1 px-1.5 py-1.5 text-sm font-[Nunito,sans-serif] 
                            bg-[#092635] text-white  rounded-md justify-center items-center flex 
                            hover:bg-[#EEF5FF] hover:border border-black  hover:text-black" key={sector}>
                              {sector} 
                            </button>
                          )) : 
                          category.slice(0,11).map((sector)=>(
                            <button className=" m-1 px-1.5 py-1.5 text-sm font-[Nunito,sans-serif] 
                            bg-[#092635] text-white  rounded-md justify-center items-center flex
                            hover:bg-[#EEF5FF] hover:border border-black  hover:text-black" key={sector}>
                              {sector} 
                            </button>
                          ))
                          }
                          <button onClick={() => setLoadMore(!loadMore)} 
                            className=' ml-3 text-blue-500'>
                            {loadMore ? "...show less" : "  ...load more"}
                          </button>
                    </div> 
          </div>

      </section>
    </div>
  )
}

export default FilterStartup

// [#EEF5FF]