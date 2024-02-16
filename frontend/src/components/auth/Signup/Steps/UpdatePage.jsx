import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLoggedInUser, updateUserAsync } from "../../authSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const UpdatePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectLoggedInUser);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const updatedUser = {
      ...user[0],
      name: data.name,
      cname: data.cname,
      cin: data.cin,
      website: data.website,
    };

    // Dispatch the updateUserAsync thunk to update user in the backend
    await dispatch(updateUserAsync(updatedUser));

    // Redirect to '/profile' after successful update
    navigate('/profile');
  };

  return (
    <div>
      <form
        className="space-y-4 flex flex-col mt-20 items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <span>Name: </span>
          <input
            type="text"
            className="border-2 border-black"
            {...register("name")}
            defaultValue={user[0].name}
          />
        </div>
        <div>
          <span>Company Name: </span>
          <input
            type="text"
            className="border-2 border-black"
            {...register("cname")}
            defaultValue={user[0].cname}
          />
        </div>
        <div>
          <span>CIN : </span>
          <input
            type="text"
            className="border-2 border-black"
            {...register("cin")}
            defaultValue={user[0].cin}
          />
        </div>
        <div>
          <span>Website : </span>
          <input
            type="text"
            className="border-2 border-black"
            {...register("website")}
            defaultValue={user[0].website}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdatePage;
