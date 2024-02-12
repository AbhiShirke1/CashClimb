import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar';
import InvestorHeader from '../components/InvestorProfile/InvestorHeader';
import InvestorDescription from '../components/InvestorProfile/InvestorDescription';

const InvestorProfilePage = () => {
    const [editChange,setEditChange] = useState(true);
    
    const handleEditChange = () => setEditChange(!editChange);
  return (
    <div>
        <Navbar/>
        <section className="flex justify-center  space-x-10  ">
            <InvestorHeader editChange= {editChange} setEditChange= {setEditChange}  handleEditChange= {handleEditChange} />
            <div className='flex justify-center items-center flex-col'>
                {/* <ToogleSection  handleCompanyInfo={handleCompanyInfo} handleFinance={handleFinance} handlePost={handlePost}/> */}
                <InvestorDescription  editChange= {editChange} setEditChange= {setEditChange}  handleEditChange= {handleEditChange}/>
            </div>

        </section>
      
    </div>
  )
}

export default InvestorProfilePage
