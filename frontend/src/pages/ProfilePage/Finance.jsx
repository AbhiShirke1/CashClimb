import React, { useState } from "react";
import cash from "./img/cash.png";
import liabilities from "./img/liabilities.png";
import valuation from "./img/valuation.png";
import revenue from "./img/revenue.png";
import loss from "./img/loss.png";
import { FcSalesPerformance } from "react-icons/fc";
import { MdAttachMoney } from "react-icons/md";
import { FaCircleArrowRight } from "react-icons/fa6";
import { BiEdit } from "react-icons/bi";
import { HiPencil } from "react-icons/hi";
import { updateUserAsync } from "../../components/auth/authSlice";
import { useDispatch } from "react-redux";

const Finance = () => {
  const [userData, setUserData] = useState(localStorage.getItem("user"));
  const [netRevenue, setNetRevenue] = useState(
    JSON.parse(localStorage.getItem("user")).finances.revenue
  );
  const [netloss, setLoss] = useState(
    JSON.parse(localStorage.getItem("user")).finances.net_lp
  );
  const [debt, setDebt] = useState(
    JSON.parse(localStorage.getItem("user")).finances.debt
  );
  const [cvaluation, setValuation] = useState(
    JSON.parse(localStorage.getItem("user")).finances.raised_money
  );
  const [salesMonth, setSalesMonth] = useState(JSON.parse(localStorage.getItem('user')).sales && JSON.parse(localStorage.getItem('user')).sales.month);
  const [salesYear, setYear] = useState(JSON.parse(localStorage.getItem('user')).sales && JSON.parse(localStorage.getItem('user')).sales.year);
  const [profit, setProfit] = useState(JSON.parse(localStorage.getItem('user')).sales && JSON.parse(localStorage.getItem('user')).sales.profit);
  const [editChange, setEditChange] = useState(true);
  const [editSalesChanges,setEditSalesChange]=useState(true);
  const handleRevenue = (e) => {
    setNetRevenue(e.target.value);
  };
  const handleLoss = (e) => {
    setLoss(e.target.value);
  };
  const handleDebt = (e) => {
    setDebt(e.target.value);
  };
  const handleValuation = (e) => {
    setValuation(e.target.value);
  };
  const handleSalesMonth = (e) => {
    setSalesMonth(e.target.value);
  };
  const handleSalesYear = (e) => {
    setYear(e.target.value);
  };
  const handleProfit = (e) => {
    setProfit(e.target.value);
  };

  const dispatch = useDispatch();
  const handleEditChange = (e) => {
    setEditChange(!editChange);
  };
  const handleEditSalesChange = (e) => {
    setEditSalesChange(!editSalesChanges);
  };
  const handleFinanceSave = async () => {
    const newFinance = {
      revenue: netRevenue,
      net_lp: netloss,
      debt: debt,
      raised_money: cvaluation,
    };
    console.log(newFinance);
    const updatedUser = {
      ...userData,
      finances: newFinance,
    };
    console.log(updatedUser);
    setEditChange(!editChange);
    await dispatch(updateUserAsync(updatedUser));
    console.log(updatedUser);
    setUserData(updatedUser);
  };
  const handleSalesSave = async () => {
    const newSales = {
      year: salesYear,
      month: salesMonth,
      profit: profit,
    };
    console.log(newSales)
    const updatedUser = {
      ...userData,
      sales: newSales,
    };
    console.log(updatedUser);
    setEditSalesChange(!editSalesChanges);
    await dispatch(updateUserAsync(updatedUser));
    console.log(updatedUser);
    setUserData(updatedUser);
  };
  console.log(userData)

  return (
    <>
      <div className="flex flex-col w-[800px] font-montserrat">
        <div className=" flex flex-col mx-10">
          {" "}
          <h2 className=" font-bold text-[20px] flex items-center mt-10 ml-6">
            <div className="w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4"></div>
            Finance{" "}
            <HiPencil
              className="text-green-500 mx-1"
              onClick={editChange ? handleEditChange : handleFinanceSave}
            />
          </h2>
        </div>
        <div class="flex text-center w-full justify-around  flex-wrap">
          <div class=" text-center flex items-center w-[270px]  mx-4  rounded-md ">
            <div className="w-[100px] h-[100px] bg-[#ffff] shadow-xl rounded-full flex justify-center items-center flex-col p-2 m-2">
              <img class="inline-block h-16 m-2 shadow-2xl" src={revenue} />
            </div>
            <div class="text-sm mt-4 mb-2 ml-10 justify-center flex flex-col">
              <span class="text-md font-bold uppercase flex">Net Revenue</span>
              <span class="text-md font-semibold text-[#575757] uppercase">
                {editChange ? (
                  <span>₹{netRevenue}</span>
                ) : (
                  <input
                    type="text"
                    value={netRevenue}
                    onChange={handleRevenue}
                    className="w-[120px] h-[30px] border border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
                  />
                )}
              </span>
            </div>
          </div>

          <div class="pr-2 pb-4 text-center flex items-center w-[270px]  mx-4">
            <div className="w-[100px] h-[100px] bg-[#ffff] shadow-xl rounded-full flex justify-center items-center flex-col p-2 m-2">
              <img class="inline-block h-16 m-2 shadow-2xl" src={loss} />
            </div>
            <div class="text-sm mt-4 mb-2 ml-10 justify-center flex flex-col">
              <span class="text-md font-bold uppercase">Net Loss</span>
              <span class="text-md font-semibold text-[#575757] uppercase">
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
              <img class="inline-block h-16 m-2 shadow-2xl" src={liabilities} />
            </div>
            <div class="text-sm mt-4 mb-2 ml-10 justify-center flex flex-col">
              <span class="text-md font-bold uppercase">Total Debt</span>
              <span class="text-md font-semibold text-[#575757] uppercase">
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

          <div class=" text-center flex items-center w-[270px]">
            <div className="w-[90px] h-[90px] bg-[#ffff] shadow-xl rounded-full flex justify-center items-center flex-col m-2">
              <img class="inline-block h-16 m-2 shadow-2xl" src={cash} />
            </div>

            <div class="text-sm mt-4 mb-2 ml-10 justify-center flex flex-col">
              <span class="text-md font-bold uppercase">Raised Money</span>
              <span class="text-md font-semibold text-[#575757] uppercase">
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
        </div>

        <div className="ml-6 p-4">
          <h2 className=" font-bold text-[20px] flex items-center mt-10 ml-6">
            <div className="w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4"></div>
            Sales
            <HiPencil
              className="text-green-500 mx-1"
              onClick={editSalesChanges ? handleEditSalesChange : handleSalesSave}
            />
          </h2>
          <div className="flex text-center w-full justify-around  flex-wrap mt-5">
            <div className="w-[200px]  mt-4 h-24 shadow-lg bg-[#1dc275] rounded-md">
              <h2 className="text-md font-bold uppercase text-white mt-4 flex items-center justify-center">
                <FcSalesPerformance size={30} className="mr-2" />
                Per Month
              </h2>
              <span class="text-xl font-semibold text-[#ededed] uppercase">
                {editSalesChanges ? (
                  <span>₹{salesMonth}</span>
                ) : (
                  <input
                    type="text"
                    value={salesMonth}
                    onChange={handleSalesMonth}
                    className="w-[120px] h-[30px] border text-[#575757] border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
                  />
                )}
              </span>
            </div>
            <div className="w-[200px]  mt-4 h-24 shadow-lg bg-[#1dc275] rounded-md">
              <h2 className="text-md font-bold uppercase  text-white mt-4 flex items-center justify-center">
                <FcSalesPerformance size={30} className="mr-2" />
                Per Year
              </h2>
              <span class="text-xl font-semibold text-[#ededed] uppercase">
                {editSalesChanges ? (
                  <span>₹{salesYear}</span>
                ) : (
                  <input
                    type="text"
                    value={salesYear}
                    onChange={handleSalesYear}
                    className="w-[120px] h-[30px] border text-[#575757] border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
                  />
                )}
              </span>
            </div>
            <div className="w-[200px]  mt-4 h-24 shadow-lg bg-[#1dc275] rounded-md">
              <h2 className="text-md font-bold uppercase  text-white mt-4 flex items-center justify-center">
                <FcSalesPerformance size={30} className="mr-2" />
                Net Profit
              </h2>
              <span class="text-xl font-semibold text-[#ededed] uppercase">
                {editSalesChanges ? (
                  <span>₹{profit}</span>
                ) : (
                  <input
                    type="text"
                    value={profit}
                    onChange={handleProfit}
                    className="w-[120px] h-[30px] border text-[#575757] border-gray-200 focus:outline-none p-2 rounded-md shadow-md "
                  />
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="ml-6 p-4">
          <h2 className=" font-bold text-[20px] flex items-center mt-10 ml-6">
            <div className="w-[4px] bg-[#fcbb00] h-[20px] rounded-full mr-4"></div>
            Past Funding
          </h2>

          <div className="flex text-center w-full justify-around  flex-wrap mt-5">
            <ol type="1" className="flex">
              <li className="m-4">
                <div className="w-[250px]  mt-4 h-24 shadow-lg rounded-md">
                  <h2 class="text-md font-semibold text-[#3578ed] uppercase">
                    Year 2024
                  </h2>
                  <h2 className="text-sm font-bold uppercase  text-black mt-4 ">
                    Amount Raised
                  </h2>
                  <span class="text-xl font-semibold text-[#1dc275] uppercase flex items-center justify-center">
                    <MdAttachMoney className="mr-2" size={20} fill="green" />
                    30 Lakhs
                  </span>
                </div>
              </li>
              <div className="flex items-center justify-center mt-">
                <FaCircleArrowRight size={20} />
              </div>

              <li className="m-4">
                <div className="w-[250px]  mt-4 h-24 shadow-lg rounded-md">
                  <h2 class="text-md font-semibold text-[#3578ed] uppercase">
                    Year 2023
                  </h2>
                  <h2 className="text-sm font-bold uppercase  text-black mt-4 flex items-center justify-center">
                    Amount Raised
                  </h2>
                  <span class="text-xl font-semibold text-[#1dc275] uppercase flex items-center justify-center">
                    <MdAttachMoney className="mr-2" size={20} fill="green" />
                    30 Lakhs
                  </span>
                </div>
              </li>
              <div className="flex items-center justify-center">
                <FaCircleArrowRight size={20} />
              </div>

              <li className="m-4">
                <div className="w-[250px]  mt-4 h-24 shadow-lg rounded-md">
                  <h2 class="text-md font-semibold text-[#3578ed] uppercase">
                    Year 2020
                  </h2>
                  <h2 className="text-sm font-bold uppercase  text-black mt-4 flex items-center justify-center">
                    Amount Raised
                  </h2>
                  <span class="text-xl font-semibold text-[#1dc275] uppercase flex items-center justify-center">
                    <MdAttachMoney className="mr-2" size={20} fill="green" />
                    30 Lakhs
                  </span>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Finance;
