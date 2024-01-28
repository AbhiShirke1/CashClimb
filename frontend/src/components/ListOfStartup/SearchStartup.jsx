import React, { useState } from 'react';


const SearchStartup = () => {
          const [search,setSearch] = useState("");

          const handleSearchInput = (e) => {
                    setSearch(e.target.value)
          }

          const handleSubmit = (e) => {
                    e.preventDefault();
                    setSearch("");
                    console.log(search)
          }

  return (
    <>
          <form onSubmit={handleSubmit} className=" flex ml-[40px] items-center flex-row  mt-[50px]">
                    <div  className="w-[700px] mb-4 flex flex-grow-2 border border-gray-300 rounded shadow-md">
                              <input 
                              type="text" 
                              value={search}
                              onChange={handleSearchInput}
                              placeholder="Enter Domain Name   (Eg: CashClimb.com)"
                              className="w-full h-18  float-left bg-white border border-solid border-transparent p-4 
                              text-center text-base font-bold
                              font-[Nunito,sans-serif] focus:outline-none"
                              />
                              <button 
                              disabled={ !search }
                              type="submit" 
                              onClick={handleSubmit}
                              className={`ml-[-120px] ${!search ? "bg-[#aca4e3]" : "bg-[#6952ff]"} 
                              h-12 mt-2 mb-2 px-6 bg-[#6952ff] text-white `}
                              >
                              Search
                              </button>
                    </div>
          </form>
    </>
  )
}

export default SearchStartup
