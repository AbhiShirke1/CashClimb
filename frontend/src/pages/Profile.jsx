import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProfileHeader from "../components/Profile/ProfileHeader";
import CompanyDescription from "../components/Profile/CompanyDescription";
import CompanySize from "../components/Profile/CompanySize";
import Finance from "../components/Profile/Finance";
import Post from "../components/Profile/Post";
import ToogleSection from "../components/Profile/ToogleSection";
import Pitch from "../components/Profile/Pitch";

const Profile = () => {
  const [editChange,setEditChange] = useState(true);
  const [companyInfo ,setCompanyInfo] = useState(true);
  const [financialStatus,setFinancial] = useState(false);
  const [postPage,setPostPage] = useState(false);
  const [pitchPage,setPitchPage] = useState(false);

  const handleEditChange = () => setEditChange(!editChange);

  const handleCompanyInfo=()=> {
    setCompanyInfo(!companyInfo)  
    setFinancial(false)
    setPostPage(false)
    setPitchPage(false);
  };
  const handleFinance=()=>{
    setFinancial(!financialStatus) 
    setCompanyInfo(false)
    setPostPage(false)
    setPitchPage(false);
  };
  const handlePost=()=> {
    setPostPage(!postPage)
    setCompanyInfo(false)
    setFinancial(false)
    setPitchPage(false)
  };
  const handlePitch=()=> {
    setPitchPage(!pitchPage);
    setCompanyInfo(false);
    setFinancial(false);
    setPostPage(false);
  };



  return (
    <>
    <Navbar/>
    <section className="flex justify-center  space-x-10  ">
    <ProfileHeader editChange= {editChange} setEditChange= {setEditChange}  handleEditChange= {handleEditChange} />
    {companyInfo && (
      <div className='flex justify-center items-center flex-col'>
        <ToogleSection  handleCompanyInfo={handleCompanyInfo} handleFinance={handleFinance} handlePost={handlePost} handlePitch={handlePitch}/>
        <CompanyDescription  editChange= {editChange} setEditChange= {setEditChange}  handleEditChange= {handleEditChange}/>
        {/* <CompanySize  editChange= {editChange} setEditChange= {setEditChange}  handleEditChange= {handleEditChange} /> */}
      </div>
    ) }
    {financialStatus && (
       <div className="flex flex-col items-center">
        <ToogleSection  handleCompanyInfo={handleCompanyInfo} handleFinance={handleFinance} handlePost={handlePost} handlePitch={handlePitch}/>
        <Finance editChange= {editChange} setEditChange= {setEditChange}  handleEditChange= {handleEditChange}/>
      </div>
    ) }  
    {postPage && (
      <div className="flex flex-col items-center">
       <ToogleSection  handleCompanyInfo={handleCompanyInfo} handleFinance={handleFinance} handlePost={handlePost} handlePitch={handlePitch}/>
        <Post/>
      </div>
    ) } 
    {pitchPage && (
      <div className="flex flex-col items-center">
       <ToogleSection  handleCompanyInfo={handleCompanyInfo} handleFinance={handleFinance} handlePost={handlePost} handlePitch={handlePitch}/>
        <Pitch/>
      </div>
    ) } 

    </section>
    </>
  )
}

export default Profile
