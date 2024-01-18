import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { createUserAsync, selectLoggedInUser } from "../authSlice";
import { useState } from "react";
import { Navigate } from "react-router-dom";
function Signup() {
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const user = useSelector(selectLoggedInUser);
  return (
    <>
      {user && <Navigate to="/"></Navigate>}
      <div className="p-[40px]">
        <form
          noValidate
          onSubmit={handleSubmit((data) => {
            dispatch(
              createUserAsync({
                name: data.name,
                email: data.email,
                password: data.password,
                role:data.role,
              })
            );
            console.log(data);
          })}
          className="flex flex-col text-xl max-w-[500px] mx-auto space-y-2"
        >
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="border-2 border-gray-400 rounded-lg p-2"
            {...register("name", {
              required: "name required",
              maxLength: 20,
            })}
            placeholder="Enter your name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

          <label htmlFor="">Email</label>
          <input
            type="email"
            className="border-2 border-gray-400 rounded-lg p-2"
            placeholder="Enter your email"
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
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          <label htmlFor="">Password</label>
          <input
            type="password"
            className="border-2 border-gray-400 rounded-lg p-2"
            placeholder="Create your password"
            {...register("password", {
              required: "password required",
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
                message: ` - at least 8 characters \n
                - must contain at least 1 uppercase letter, 1 lowercase letter, and 1 number \n
                - Can contain special characters`,
              },
            })}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <label htmlFor="">Confirm Password</label>
          <input
            type="password"
            className="border-2 border-gray-400 rounded-lg p-2"
            placeholder="Confirm your password"
            {...register("confirmPassword", {
              required: "confirm password required",
              validate: (value, formValues) =>
                value === formValues.password || "password not matching",
            })}
            onChange={(e) => {
              setCPassword(e.target.value);
            }}
          />
          {errors.confirmPassword && (
            <p className="text-red-500">{errors.confirmPassword.message}</p>
          )}
          <div>
            <label htmlFor="userType">Select your role:</label>
            <select
              id="userType"
              onChange={(e) => {
                setRole(e.target.value);
              }}
            >
              <option value="">Select...</option>
              <option value="founder">Founder</option>
              <option value="startup">Startup</option>
            </select>

            <p>You selected: {role}</p>
            {/* Store the selected value in the state and use it as needed */}
          </div>

          <button
            className=" w-[50%]  rounded-xl text-white bg-black m-auto p-2 relative top-7"
            // onClick={submit}
          >
            Create Account
          </button>
        </form>
      </div>
    </>
  );
}

export default Signup;
