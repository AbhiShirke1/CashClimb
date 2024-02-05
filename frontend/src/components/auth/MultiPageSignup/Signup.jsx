import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createUserAsync, selectLoggedInUser } from "../authSlice";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import myImg from "./signup-Photoroom.png-Photoroom__1_-removebg-preview (1).png";
import { PiHandWavingFill } from "react-icons/pi";


function Signup() {
  const [role, setRole] = useState("Founder");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [showNameError, setShowNameError] = useState(false);
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const [showCpasswordError, setShowCpasswordError] = useState(false);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  // useEffect(() => {
  //   setShowTick(!errors.name);
  // }, [errors.name]);

  const user = useSelector(selectLoggedInUser);
  return (
    <>
    {user && <Navigate to="/"></Navigate>}
    <div className='w-full flex justify-center items-center '> 
      <div className='w-[500px]'>
        <h3 className='flex justify-center items-center font-montserrat text-[40px] font-semibold mt-[-50px]'>SignUp</h3>
        <form
          noValidate
          onSubmit={handleSubmit((data) => {
            dispatch(
              createUserAsync({
                name: data.name,
                email: data.email,
                password: data.password,
                role: data.role,
                posts:[],
              })
            );
            console.log(data);
          })}
          className="flex flex-col justify-center font-montserrat mt-10 items-center text-xl space-y-8"
          >
          <div className="flex justify-around w-full m-2">
              <div className="flex space-x-2">
                <input
                  type="radio"
                  value="Investor"
                  {...register("role", { defaultValue: "investor" })}
                  checked={role === "Investor"}
                  onChange={() => setRole("Investor")}
                />
                <span>Investor</span>
              </div>

              <div className="flex space-x-2">
                <input
                  type="radio"
                  value="Founder"
                  {...register("role", { defaultValue: "founder" })}
                  checked={role === "Founder"}
                  onChange={() => setRole("Founder")}
                />
                <span>Founder</span>
              </div>
          </div>

          {/* <div>
            <label htmlFor="userType" className="font-semibold text-gray-500">Select your role : </label>
            <select
              id="userType"
              {...register("role", { defaultValue: "founder" })}
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="Investor">Investor</option>
              <option value="Founder">Founder</option>
            </select>
            <p>You selected: {role}</p>
          </div>  */}

          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-3 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <input
              type="text"
              className=" border-b-[2px] border-gray-400 focus:border-black py-2 pl-8 pr-2 focus:outline-none w-[400px]"
              {...register("name", {
                required: "name required",
                maxLength: 20,
              })}
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          {errors.name && (
            <div className="absolute left-[29rem] top-[8.5rem] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-600 cursor-pointer"
                onClick={() => setShowNameError(!showNameError)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>

              {showNameError && (
                <div className="absolute top-4  mt-2 p-2 bg-white border z-10 border-gray-300 rounded whitespace-nowrap shadow-lg">
                  <p className="text-red-600">{errors.name.message}</p>
                </div>
              )}
            </div>
          )}

          <div className="relative">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <input
              type="email"
              className=" border-b-[2px] border-gray-400 focus:border-black py-2 pl-8 pr-2 focus:outline-none w-[400px]"
              placeholder="Email"
              {...register("email", {
                required: "email required",
                pattern: {
                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                  message: "email not valid",
                },
              })}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          {errors.email && (
            <div className="absolute left-[29rem] top-[13rem]  ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-600 cursor-pointer"
                onClick={() => setShowEmailError(!showEmailError)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>

              {showEmailError && (
                <div className="absolute top-4  mt-2 p-2 bg-white border z-10 border-gray-300 rounded whitespace-nowrap ">
                  <p className="text-red-600">{errors.email.message}</p>
                </div>
              )}
            </div>
          )}

          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

            <input
              type="password"
              className="  border-b-[2px] border-gray-400 focus:border-black  py-2 pl-8 pr-2 focus:outline-none w-[400px]"
              placeholder="Password"
              {...register("password", {
                required: "password required",
                pattern: {
                  value:
                    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                  message: ` - at least 8 characters \n
            - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number \n
            - Can contain special characters`,
                },
              })}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          {errors.password && (
            <div className="absolute left-[29rem] top-[18rem] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-600 cursor-pointer"
                onClick={() => setShowPasswordError(!showPasswordError)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>
              {showPasswordError && (
                <div className="absolute top-4 z-10 w-[400px] mt-2 p-2 bg-white border border-gray-300 rounded shadow-lg">
                  <p className="text-red-600">{errors.password.message}</p>
                </div>
              )}
            </div>
          )}

          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 absolute top-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
            <input
              type="password"
              className=" border-b-[2px] border-gray-400 focus:border-black  py-2 pl-8 pr-2  focus:outline-none w-[400px]"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "confirm password required",
                validate: (value, formValues) =>
                  value === formValues.password || "password not matching",
              })}
              onChange={(e) => {
                setCPassword(e.target.value);
              }}
            />
          </div>
          {errors.confirmPassword && (
            <div className="absolute left-[29rem] top-[23rem] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-red-600 cursor-pointer"
                onClick={() => setShowCpasswordError(!showCpasswordError)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                />
              </svg>

              {showCpasswordError && (
                <div className="absolute top-4  mt-2 p-2 bg-white border border-gray-300 rounded whitespace-nowrap shadow-lg">
                  <p className="text-red-600">
                    {errors.confirmPassword.message}
                  </p>
                </div>
              )}
            </div>
          )}

          <p className="text-base flex justify-center items-center font-normal text-gray-500">Already Signed? <Link to='/login' className="underline text-[#194fffdd]">Login</Link> </p>
          {/* <button className=" w-[70%] rounded-[30px] text-white bg-[#194fffdd] m-auto p-4  whitespace-nowrap">
          Signup
          </button>  */}
          </form>
      
      </div> 

      {/* Image */}

      <div className='bg-[#050029] w-[500px] h-[600px] rounded-r-md'>
        <div className="w-[500px] h-[600px] p-2 bg-[#050029] rounded-r-md flex flex-col  mr-20">
          <div className="flex flex-col justify-center items-center mt-10 text-white font-montserrat text-xl font-semibold">
            <h2 className="flex justify-center items-center">
              <PiHandWavingFill className="mr-2 fill-yellow-500" size={0}/>Welcome to CashClimb
            </h2>
            <p className="text-sm font-normal">
              Where ideas meet's innovation
            </p>
          </div>
          <img
            src={myImg}
            className="w-[710px] h-[400px] rounded-md mt-10"
          />
        </div>

      </div>
  </div>
  </>
  );
}

export default Signup;
