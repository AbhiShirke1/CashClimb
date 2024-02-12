import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import Signup from './Signup';
import CompanyInfo from './CompanyInfo';
import ReasonsToInvest from './ReasonsToInvest';
import PastFunding from './PastFunding';

const MainForm = () => {
  const [page,setPage] = useState(0);
  

  const FormTitles = ["Signup","Company Info","Reasons to Invest","Past Funding"];


  return (
    <div >
      {/* <Navbar/> */}
      <div >
        {page == 0 && <Signup/>}
        {page == 1 && <CompanyInfo />}
        {page == 2 && <ReasonsToInvest />}
        {page == 3 && <PastFunding />}
        {/* {page == 4 && <PastFunding />} */}
        <div className='flex w-[600px] ml-[70px] mt-[-140px] justify-center items-center'>
            <button
              disabled={ page==0}
              className=' w-[100px] rounded-md text-white bg-[#092635] m-auto p-2 whitespace-nowrap'
              onClick={()=> {setPage((currPage)=> currPage -1)}}
            >Prev
            </button>
            <span className='font-montserrat font-semibold'>{page+1 }/{FormTitles.length }</span>
            <button
              className=' w-[100px] rounded-md text-white bg-[#092635] m-auto p-2  whitespace-nowrap'
              onClick={()=>{
              if (page === FormTitles.length - 1){
                console.log("form submittted");
              }else{
              setPage((currPage)=>currPage+1);
              }
              }}
            >
            {page ===FormTitles.length-1 ? "Submit" : "Next"}
            </button>
        </div>
      </div>

    </div>
  )
}

export default MainForm
