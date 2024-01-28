import React from "react";
import Navbar from "../components/Navbar/Navbar";
import ProfileHeader from "../components/Profile/ProfileHeader";
import CompanyDescription from "../components/Profile/CompanyDescription";
import CompanySize from "../components/Profile/CompanySize";


const Profile = () => {
  return (
    <>
    <Navbar/>
    <ProfileHeader/>
    <section >
      <div className='flex justify-center mb-4'>
        <CompanySize/>
        <CompanyDescription/>
      </div>
    </section>
    </>
  )
}

export default Profile
