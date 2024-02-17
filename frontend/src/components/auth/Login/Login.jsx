import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { checkUserAsync, selectError, selectLoggedInUser } from "../authSlice";
import { useForm } from "react-hook-form";
import myImg from "../Signup/signup.svg";
const Login = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const user = useSelector(selectLoggedInUser);

  return (
    <>
      {user && <Navigate to="/"></Navigate>}

      <div className="flex items-center justify-center h-screen font-montserrat">
        <div className="w-[50%] flex flex-col items-center">
          <h1 className="text-[60px] font-semibold ">Login</h1>
          <div className="max-w-[400px]  pt-[30px] ">
            <form
              noValidate
              onSubmit={handleSubmit((data) => {
                dispatch(
                  checkUserAsync({ email: data.email, password: data.password })
                );
                console.log(data);
              })}
              className="flex flex-col text-xl space-y-8"
            >
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
                  className=" border-b-[2px] border-gray-400 focus:border-black py-2 pl-8 pr-2 focus:outline-none"
                  placeholder="Email"
                  {...register("email", {
                    required: "email required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "email not valid",
                    },
                  })}
                />
              </div>
              {errors.email && (
                <div className="absolute left-[29rem] top-[14rem]  ">
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
                  className=" border-b-[2px] border-gray-400 focus:border-black py-2 pl-8 pr-2 focus:outline-none"
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
                />
              </div>
              {error && (
                <div className="absolute left-[29rem] top-[19rem] ">
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
                      <p className="text-red-600">{error.message}</p>
                    </div>
                  )}
                </div>
              )}
              <p>
                New User?{" "}
                <Link to="/signup" className="underline text-[#194fffdd]">
                  Signup
                </Link>{" "}
              </p>
              <button className=" w-[70%] rounded-[30px] text-white bg-[#194fffdd] m-auto p-4  whitespace-nowrap">
                Signup
              </button>
            </form>
          </div>
        </div>
        {/* Image */}
        <div className="w-[60%] h-[100%]  ">
          <img src={myImg} className="w-[100%] h-[100%]" />
        </div>
      </div>
    </>
  );
};

export default Login;
