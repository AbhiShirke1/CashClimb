import React, { useState } from 'react';
import categoryList from '../../components/ListOfStartup/category';
import { BsSearch } from "react-icons/bs";

const Filter = () => {
  const [loadMore, setLoadMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  
  const filteredCategories = categoryList.filter(category =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <section className="w-[300px] ml-[80px] mt-10 bg-[#050029]  mb-2 rounded-md border border-solid border-transparent p-4 ">
            <h3 className="text-white font-[Nunito,sans-serif] text-base p-4 font-bold">
                Filter by Category
            </h3>
            <div className='m-2'>
                <div className="relative w-full h-full group flex justify-center items-center">
                <input
                    type="text"
                    className="outline-none peer text-black focus:border-[#194fffdd] focus:border bg-white w-full h-[50px] rounded-md py-4 pl-14 pr-4 mb-4 placeholder:text-gray-800 placeholder:font-semibold placeholder:font-montserrat "
                    name=""
                    id=""
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <label
                    htmlFor="searchBox"
                    className="absolute top-0 left-0 h-full flex items-center justify-center p-4 text-black peer-focus:text-[#194fffdd]"
                >
                    <BsSearch className="w-5 h-5 mt-[-10px]" />
                </label>
                </div>
            </div>
          <div className='flex  flex-col justify-center items-center'>
                    <div className="flex flex-wrap"> 
                          {loadMore ? filteredCategories.map((sector)=>(
                            <button className=" m-1 px-1.5 py-1.5 text-sm font-[Nunito,sans-serif] 
                            bg-[#092635] text-white  rounded-md justify-center items-center flex 
                            hover:bg-[#EEF5FF] hover:border border-black  hover:text-black" key={sector}>
                              {sector} 
                            </button>
                          )) : 
                          filteredCategories.slice(0,11).map((sector)=>(
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

export default Filter;

// // [#EEF5FF]