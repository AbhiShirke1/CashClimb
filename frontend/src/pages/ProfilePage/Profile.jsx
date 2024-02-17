import { useState } from "react";
import CompanyDescription from "./CompanyDescription";
import Finance from "./Finance";
import ProfileHeader from "./ProfileHeader";
import ToggleSection from "./ToggleSection";
import Navbar from "../../components/Navbar/Navbar";
import Post from "./Post";
import Pitch from "./Pitch";


const Profile = () => {
  const [editChange, setEditChange] = useState(true);
  const [companyInfo, setCompanyInfo] = useState(true);
  const [financialStatus, setFinancial] = useState(false);
  const [postPage, setPostPage] = useState(false);
  const [pitchPage, setPitchPage] = useState(false);

  const handleEditChange = () => setEditChange(!editChange);

  const handleCompanyInfo = () => {
    setCompanyInfo(!companyInfo);
    setFinancial(false);
    setPostPage(false);
    setPitchPage(false);
  };
  const handleFinance = () => {
    setFinancial(!financialStatus);
    setCompanyInfo(false);
    setPostPage(false);
    setPitchPage(false);
  };
  const handlePost = () => {
    setPostPage(!postPage);
    setCompanyInfo(false);
    setFinancial(false);
    setPitchPage(false);
  };
  const handlePitch = () => {
    setPitchPage(!pitchPage);
    setCompanyInfo(false);
    setFinancial(false);
    setPostPage(false);
  };

  return (
    <>
      <Navbar />

      <section className="flex justify-center  space-x-10  ">
        <ProfileHeader
          editChange={editChange}
          setEditChange={setEditChange}
          handleEditChange={handleEditChange}
        />
        {companyInfo && (
          <div className="flex justify-center items-center flex-col">
            <ToggleSection
              handleCompanyInfo={handleCompanyInfo}
              handleFinance={handleFinance}
              handlePost={handlePost}
              handlePitch={handlePitch}
            />
            <CompanyDescription
              editChange={editChange}
              setEditChange={setEditChange}
              handleEditChange={handleEditChange}
            />
            {/* <CompanySize  editChange= {editChange} setEditChange= {setEditChange}  handleEditChange= {handleEditChange} /> */}
          </div>
        )}
        {financialStatus && (
          <div className="flex flex-col items-center">
            <ToggleSection
              handleCompanyInfo={handleCompanyInfo}
              handleFinance={handleFinance}
              handlePost={handlePost}
              handlePitch={handlePitch}
            />
            <Finance
              editChange={editChange}
              setEditChange={setEditChange}
              handleEditChange={handleEditChange}
            />
          </div>
        )}
        {postPage && (
          <div className="flex flex-col items-center">
            <ToggleSection
              handleCompanyInfo={handleCompanyInfo}
              handleFinance={handleFinance}
              handlePost={handlePost}
              handlePitch={handlePitch}
            />
            <Post />

          </div>
        )}
        {pitchPage && (
          <div className="flex flex-col items-center">
            <ToggleSection
              handleCompanyInfo={handleCompanyInfo}
              handleFinance={handleFinance}
              handlePost={handlePost}
              handlePitch={handlePitch}
            />
            <Pitch />

          </div>
        )}
      </section>
    </>
  );
};

export default Profile;
