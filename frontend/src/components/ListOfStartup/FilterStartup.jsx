import React, { useState } from 'react';
import category from './category';

const FilterStartup = () => {
  const [loadMore,setLoadMore] = useState(false)
  return (
    <div>
      <section className="w-[300px] mt-[100px] bg-[#EEF5FF]  mb-2 rounded-md border border-solid border-transparent p-4 ">
          <div className='flex  flex-col justify-center items-center'>
                    <h3 className="text-[#050029] font-[Nunito,sans-serif] text-base p-4 font-bold">
                              Filter by Category
                    </h3>
                    <div className="flex flex-wrap"> 
                          {category.length > 10 && loadMore ? category.map((sector)=>(
                            <button className=" m-1 px-1.5 py-1.5 text-sm font-[Nunito,sans-serif] 
                            bg-[#092635] text-white  rounded-md justify-center items-center flex 
                            hover:bg-[#EEF5FF] hover:border border-black  hover:text-black">
                              {sector} 
                            </button>
                          )) : 
                          category.slice(0,11).map((sector)=>(
                            <button className=" m-1 px-1.5 py-1.5 text-sm font-[Nunito,sans-serif] 
                            bg-[#092635] text-white  rounded-md justify-center items-center flex
                            hover:bg-[#EEF5FF] hover:border border-black  hover:text-black">
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
