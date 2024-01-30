import React, { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProfileHeader from "../components/Profile/ProfileHeader";
import CompanyDescription from "../components/Profile/CompanyDescription";
import CompanySize from "../components/Profile/CompanySize";
import Finance from "../components/Profile/Finance";
import Post from "../components/Profile/Post";

const Profile = () => {
  const [companyInfo ,setCompanyInfo] = useState(true);
  const [financialStatus,setFinancial] = useState(false);
  const [postPage,setPostPage] = useState(false);


  const handleCompanyInfo=()=> {
    setCompanyInfo(!companyInfo)  
    setFinancial(false)
    setPostPage(false)
  };
  const handleFinance=()=>{
    setFinancial(!financialStatus) 
    setCompanyInfo(false)
    setPostPage(false)
  };
  const handlePost=()=> {
    setPostPage(!postPage)
    setCompanyInfo(false)
    setFinancial(false)
  };


  return (
    <>
    <Navbar/>
    <section className="flex justify-center items-center flex-col">
    <ProfileHeader handleCompanyInfo={handleCompanyInfo} handleFinance={handleFinance} handlePost={handlePost}/>
    {companyInfo && (
      <div className='flex justify-center space-x-[60px] mb-4'>
        <CompanySize />
        <CompanyDescription/>
      </div>
    ) }
    {financialStatus && (
      <Finance/>
    ) }  
    {postPage && (
      <Post/>
    ) } 

    </section>
    </>
  )
}

export default Profile
