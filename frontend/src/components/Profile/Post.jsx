import React from "react";
import { BsDot } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectLoggedInUser } from "../../components/auth/authSlice";

const Post = () => {
  const user=useSelector(selectLoggedInUser);
  console.log(user);
  return (

    <div className="w-[1080px]"> <main className="flex w-full sticky top-0 h-full min-h-screen flex-col border-l-[0.1px] border-r-[0.5px] border-gray-600">
      {/* <h1 className="text-3xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0">
       Home
     </h1> */}
      <div className="border-t-[0.5px] px-4 py-6 border-b-[0.5px] flex items-stretch space-x-2 border-gray-800 relative">
        <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
        <div className="w-full h-full flex flex-col">
          <input
            type="text"
            placeholder="Create new post"
           className="w-full h-full bg-transparent text-2xl placeholder:border-b-[0.5px] p-2 border-gray-600 outline-none border-none"
          />
          <div className="flex items-center justify-between w-full">
            <div></div>
            <div className="w-full max-w-[100px]">
              <button className="rounded-full bg-[#1d9bf0] hover:border-2 hover:border-white px-4 py-2 text-lg text-center hover:bg-opacity-70 font-bold transition duration-200">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="border-b-[0.5px] border-gray-600 p-4 flex space-x-4"
          >
            <div>
              <div className="rounded-full bg-slate-400 w-10 h-10"></div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-bold">{user[0].name}</div>
                {/* <div>
                 <BsDot />
               </div> */}
                <div>1 hour ago</div>
              </div>
              <div className=" text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                distinctio voluptas, a at nostrum nesciunt fugit nobis
                corrupti ipsum consectetur molestias ducimus pariatur
                accusamus, totam unde necessitatibus! Aut, libero temporibus.
              </div>
              <div className="bg-slate-400 aspect-square w-1/2 h-96 rounded-xl"></div>
            </div>
          </div>
        ))}
      </div>
    </main></div>

  );
};

export default Post;

