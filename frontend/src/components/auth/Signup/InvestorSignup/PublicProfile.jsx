import React, { useState } from "react";
import myImg from "../signup-Photoroom.png-Photoroom__1_-removebg-preview (1).png";
import { PiHandWavingFill } from "react-icons/pi";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { createUserAsync } from "../../authSlice";
import { useDispatch } from "react-redux";

const PublicProfile = ({ onNextPage, setPage }) => {
  const dispatch=useDispatch();
  const [url, setUrl] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [bio, setBio] = useState("");
  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };
  const handleBioChange = (e) => {
    setBio(e.target.value);
  };
  const navigate=useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // Handle the file as needed, e.g., set it to state
    setProfileImage(file.name);

    // You can also perform additional actions, such as uploading the file to a server
    // For now, let's just log the file details
    console.log("Selected file:", file);
  };

  console.log(profileImage);
  const location = useLocation();
  const { data } = location.state;
  console.log(data);

  const dataToSubmit = {
    ...data,
    url,
    profileImage,
    bio,
  };
  console.log(dataToSubmit);
  return (
    <div className="flex w-full justify-between h-screen mb-[20px]">
      <div className="w-[50%] items-center mt-[60px] flex flex-col space-y-6 ">
        <div>
          <h2 className="text-[30px] font-bold">Create a public profile</h2>
          <h3>This is what founders or other investors can see</h3>
        </div>
        <form
          action=""
          onSubmit={handleSubmit(() => {
            dispatch(
              createUserAsync({
                ...dataToSubmit,
                posts: [], // Assuming 'posts' is part of createUserAsync payload
              })
            );
            navigate('/');
            console.log(dataToSubmit);
          })}
          className="w-full max-w-2xl mx-auto space-y-2"
        >
          {" "}
          <div
            role="button"
            className="border border-coolgray-500 border-dashed hover:bg-coolgray-100 cursor-pointer flex flex-col items-center justify-center h-[198px] rounded"
          >
            <label className="flex w-full h-full justify-center items-center cursor-pointer">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
              <div className="text-sm md:text-base h-[198px] w-full text-center flex flex-col justify-center items-center cursor-pointer">
                <p className="max-w-xs mx-auto text-center font-medium text-gray-900 cursor-pointer">
                  <span className="block">
                    Drag your high-resolution image here
                  </span>
                  <span className="block text-sm"></span>
                  <span className="block text-gray-600 text-xs my-2"></span>
                </p>
                <span className="border-none underline underline-offset-2 text-sm p-2 w-max">
                  Browse files
                </span>
              </div>
            </label>
            <div>{profileImage}</div>
          </div>
          <div className="w-full max-w-2xl  ">
            <div className="flex flex-col-reverse">
              <textarea
                id="bio"
                placeholder=""
                aria-invalid="false"
                rows="2"
                className=" min-h-[121px] py-7 text-sm md:text-base  border border-coolgray-400 "
                name="bio"
                value={bio}
                onChange={handleBioChange}
              ></textarea>
              <label for="bio" className="font-light">
                Your bio
              </label>
              <span className=""></span>
            </div>
          </div>
          <div className="w-full max-w-2xl">
            <div className=" ">
              <input
                id="home_url"
                placeholder="LinkedIn or personal website"
                aria-invalid="false"
                className=" min-h-[66px] w-full border border-coolgray-400 pl-8 md:pl-10 text-sm md:text-base "
                name="home_url"
                type="url"
                aria-labelledby="home_url"
                value={url}
                onChange={handleUrlChange}
              />
              <span className=" text-lg md:text-xl " aria-hidden="true"></span>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="bg-[#050029] w-[50%] h-full">
        <div className="flex flex-col justify-center items-center mt-20 text-white font-montserrat text-xl font-semibold">
          <h2 className="flex justify-center items-center text-4xl">
            <PiHandWavingFill className="mr-2 fill-yellow-500" size={0} />
            Welcome to CashClimb
          </h2>
          <p className="text-sm font-normal mt-2">
            Where ideas meet's innovation
          </p>
        </div>
        <img
          src={myImg}
          className=" h-[50%] w-[80%] mx-auto rounded-md mt-20"
        />
      </div>
    </div>
  );
};

export default PublicProfile;
