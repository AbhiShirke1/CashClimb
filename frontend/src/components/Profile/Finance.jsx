import React, { useState }from 'react';
import cash from './image/cash.png';
import liabilities from './image/liabilities.png';
import valuation from './image/valuation.png';
import revenue from './image/revenue.png';
import loss from './image/loss.png';
import { FcSalesPerformance } from "react-icons/fc";
import { MdAttachMoney } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";


const Finance = ({editChange,setEditChange,handleEditChange}) => {
  const [netRevenue,setNetRevenue] = useState(43687563784);
  const [netloss, setLoss] = useState(0)
  const [debt, setDebt] = useState(0)
  const [cvaluation, setValuation] = useState(0)
  const [companyCash,setCash] = useState(0);
  const [salesMonth, setSalesMonth] = useState(0)
  const [salesYear, setYear] = useState(0)
  const [profit,setProfit] = useState(0);

  const handleRevenue = (e) => {
    setNetRevenue(e.target.value)
  }
  const handleLoss= (e) => {
    setLoss(e.target.value)
  }
  const handleDebt = (e) => {
    setDebt(e.target.value)
  }
  const handleValuation = (e) => {
    setValuation(e.target.value)
  }
  const handleCash = (e) => {
    setCash(e.target.value)
  }
  const handleSalesMonth = (e) => {
    setSalesMonth(e.target.value)
  }
  const handleSalesYear = (e) => {
    setYear(e.target.value)
  }
  const handleProfit = (e) => {
    setProfit(e.target.value)
  }


  return (
    <>
    <div className='flex flex-col w-[800px] font-montserrat'>
      <div className=' flex flex-col mx-10'>
        {" "}
        <h2 className=" font-bold text-[20px] flex items-center mt-10 ml-6">
          <div className='w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4'></div>
          Finance
        </h2>
      </div>
      <div class="flex text-center w-full justify-around  flex-wrap">

        <div class=" text-center flex items-center w-[270px]  mx-4  rounded-md ">
          <div className="w-[100px] h-[100px] bg-[#ffff] shadow-xl rounded-full flex justify-center items-center flex-col p-2 m-2">
            <img
              class="inline-block h-16 m-2 shadow-2xl"
              src={revenue}
            />
          </div>
          <div class="text-sm mt-4 mb-2 ml-10 justify-center flex flex-col">
            <span class="text-md font-bold uppercase "> net Revenue</span>
            <span  class="text-md font-semibold text-[#575757] uppercase">
              {editChange ? (
                <span>₹{netRevenue}</span>

              ) : (
                <input
                  type="text"
                  value={netRevenue}
                  onChange={handleRevenue }
                  className="w-[120px] h-[30px] border border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
                />
              )}

            </span>
          </div>
        </div>

        <div class="pr-2 pb-4 text-center flex items-center w-[270px]  mx-4">
        <div className="w-[100px] h-[100px] bg-[#ffff] shadow-xl rounded-full flex justify-center items-center flex-col p-2 m-2">
            <img
              class="inline-block h-16 m-2 shadow-2xl"
              src={loss}
            />
          </div>
          <div class="text-sm mt-4 mb-2 ml-10 justify-center flex flex-col">
            <span class="text-md font-bold uppercase">Net Loss</span>
            <span  class="text-md font-semibold text-[#575757] uppercase">
            {editChange ? (
                <span>₹{netloss}</span>

              ) : (
                <input
                  type="text"
                  value={netloss}
                  onChange={handleLoss}
                  className="w-[120px] h-[30px] border border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
                />
              )}
            </span>
          </div>
        </div>

        <div class="pr-2 pb-4 text-center flex items-center w-[270px]  mx-4 ">
        <div className="w-[100px] h-[100px] bg-[#ffff] shadow-xl rounded-full flex justify-center items-center flex-col p-2 m-2">
            <img
              class="inline-block h-16 m-2 shadow-2xl"
              src={liabilities}
            />
          </div>
          <div class="text-sm mt-4 mb-2 ml-10 justify-center flex flex-col">
            <span class="text-md font-bold uppercase">Total Debt</span>
            <span  class="text-md font-semibold text-[#575757] uppercase">
            {editChange ? (
                <span>₹{debt}</span>

              ) : (
                <input
                  type="text"
                  value={debt}
                  onChange={handleDebt}
                  className="w-[120px] h-[30px] border border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
                />
              )}
            </span>
          </div>
        </div>

        <div class="pr-2 pb-4 text-center flex items-center w-[270px]  mx-4  ">
        <div className="w-[100px] h-[100px] bg-[#ffff] shadow-xl rounded-full flex justify-center items-center flex-col p-2 m-2">
            <img
              class="inline-block h-16 m-2 shadow-2xl"
              src={valuation}
            />
          </div>
          <div class="text-sm mt-4 mb-2 ml-10 justify-center flex flex-col">
            <span class="text-md font-bold uppercase"> Valualtion</span>
            <span  class="text-md font-semibold text-[#575757] uppercase">
            {editChange ? (
                <span>₹{cvaluation}</span>

              ) : (
                <input
                  type="text"
                  value={cvaluation}
                  onChange={handleValuation}
                  className="w-[120px] h-[30px] border border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
                />
              )}
            </span>
          </div>
        </div>

        <div class=" text-center flex items-center w-[270px]">
        <div className="w-[90px] h-[90px] bg-[#ffff] shadow-xl rounded-full flex justify-center items-center flex-col m-2">
            <img
              class="inline-block h-16 m-2 shadow-2xl"
              src={cash}
            />
          </div>

          <div class="text-sm mt-4 mb-2 ml-10 justify-center flex flex-col">
            <span class="text-md font-bold uppercase">Cash on Hand</span>
            <span  class="text-md font-semibold text-[#575757] uppercase">
            {editChange ? (
                <span>₹{companyCash}</span>

              ) : (
                <input
                  type="text"
                  value={companyCash}
                  onChange={handleCash }
                  className="w-[120px] h-[30px] border border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
                />
              )}
            </span>
          </div>
        </div>
      </div>
    

      <div className='ml-6 p-4'>
        <h2 className=" font-bold text-[20px] flex items-center mt-10 ml-6">
          <div className='w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4'></div>
          Sales
        </h2>
        <div className="flex text-center w-full justify-around  flex-wrap mt-5">
          <div className='w-[200px]  mt-4 h-24 shadow-lg bg-[#1dc275] rounded-md'>
            <h2  className="text-md font-bold uppercase text-white mt-4 flex items-center justify-center">
              <FcSalesPerformance size={30} className='mr-2'/>
              Per Month
            </h2>
            <span class="text-xl font-semibold text-[#ededed] uppercase">
            {editChange ? (
                <span>₹{salesMonth}</span>

              ) : (
                <input
                  type="text"
                  value={salesMonth}
                  onChange={handleSalesMonth }
                  className="w-[120px] h-[30px] border text-[#575757] border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
                />
              )}
            </span>

          </div>
          <div className='w-[200px]  mt-4 h-24 shadow-lg bg-[#1dc275] rounded-md'>
            <h2 className="text-md font-bold uppercase  text-white mt-4 flex items-center justify-center">
              <FcSalesPerformance size={30} className='mr-2'/>
              Per Year
            </h2>
            <span class="text-xl font-semibold text-[#ededed] uppercase">
            {editChange ? (
                <span>₹{salesYear}</span>

              ) : (
                <input
                  type="text"
                  value={salesYear}
                  onChange={handleSalesYear }
                  className="w-[120px] h-[30px] border text-[#575757] border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
                />
              )}
            </span>

          </div>
          <div className='w-[200px]  mt-4 h-24 shadow-lg bg-[#1dc275] rounded-md'>
            <h2  className="text-md font-bold uppercase  text-white mt-4 flex items-center justify-center">
              <FcSalesPerformance size={30} className='mr-2'/>
              Net Profit
            </h2>
            <span class="text-xl font-semibold text-[#ededed] uppercase">
            {editChange ? (
                <span>₹{profit}</span>

              ) : (
                <input
                  type="text"
                  value={profit}
                  onChange={handleProfit }
                  className="w-[120px] h-[30px] border text-[#575757] border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
                />
              )}
            </span>
          </div>
        </div>
      </div>

      <div className='ml-6 p-4'>
        <h2 className=" font-bold text-[20px] flex items-center mt-10 ml-6">
          <div className='w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4'></div>
          Past Funding
        </h2>

        <div className="flex text-center w-full justify-around  flex-wrap mt-5">
          <ol type='1' className='flex'>
            <li className='m-4'>
              <div className='w-[250px]  mt-4 h-24 shadow-lg rounded-md'>
                <h2 class="text-md font-semibold text-[#3578ed] uppercase">Year 2024</h2>
                <h2  className="text-sm font-bold uppercase  text-black mt-4 ">
                  Amount Raised
                </h2>
                <span class="text-xl font-semibold text-[#1dc275] uppercase flex items-center justify-center">
                  <MdAttachMoney className='mr-2' size={20} fill='green'/>
                  30 Lakhs
                </span>
              </div>
            </li>
            <div className='flex items-center justify-center mt-'>
              <FaCircleArrowRight size={20}/>
            </div>
            
            <li className='m-4'>
              <div className='w-[250px]  mt-4 h-24 shadow-lg rounded-md'>
                <h2 class="text-md font-semibold text-[#3578ed] uppercase">Year 2023</h2>
                <h2  className="text-sm font-bold uppercase  text-black mt-4 flex items-center justify-center">
                  Amount Raised
                </h2>
                <span class="text-xl font-semibold text-[#1dc275] uppercase flex items-center justify-center">
                  <MdAttachMoney className='mr-2' size={20} fill='green'/>
                  30 Lakhs
                </span>
              </div>
            </li>
            <div className='flex items-center justify-center'>
              <FaCircleArrowRight size={20}/>
            </div>

            <li className='m-4'>
              <div className='w-[250px]  mt-4 h-24 shadow-lg rounded-md'>
                <h2  class="text-md font-semibold text-[#3578ed] uppercase">Year 2020</h2>
                <h2  className="text-sm font-bold uppercase  text-black mt-4 flex items-center justify-center">
                  Amount Raised
                </h2>
                <span class="text-xl font-semibold text-[#1dc275] uppercase flex items-center justify-center">
                  <MdAttachMoney className='mr-2' size={20} fill='green'/>
                  30 Lakhs
                </span>
              </div>
            </li>
          </ol>


        </div>


      </div>
    </div>
    </>
  )
}

export default Finance
