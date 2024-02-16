import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";

const MainComponent = () => {
  const [show, setShow] = useState(false);
  // const user=useSelector(selectLoggedInUser);
  // console.log(user);
  return (
    <main className="flex w-full sticky top-0 h-full min-h-screen flex-col border-l-[0.1px] border-r-[0.5px] border-gray-600">
      <h1 className="text-3xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0 border-b-[0.5px]">
        Home
      </h1>
      <div className="border-t-[0.5px] px-4 py-6 border-b-[0.5px] flex items-stretch space-x-2 border-gray-800 relative">
        <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
        <div className="w-full h-full flex flex-col">
          <input
            type="text"
            placeholder="What's Happening"
            className="w-full h-full bg-transparent text-2xl placeholder:border-b-[0.5px] p-2 border-gray-600 outline-none border-none"
          />
          <div className="flex items-center justify-between w-full">
            <CiImageOn size={30} onClick={() => setShow(!show)} />
            {show && (
              <div className="fixed top-0 left-0 z-[100] flex items-center justify-center backdrop-blur w-[100%] h-[100%]">
                <div className="bg-white px-[20px] py-[30px] relative w-[40%] shadow-lg">
                  <div className="flex items-center justify-between mb-[20px]">
                    <h2 className="text-black mt-0">Image URL</h2>
                    <div className="cursor-pointer">
                      <AiFillCloseCircle
                        className="text-[20px] text-black"
                        onClick={() => {
                          setShow(false);
                        }}
                      />
                    </div>
                  </div>

                  <input
                    type="file"            
                    className="h-[40px] border-2 text-black border-gray-400 block border-solid rounded mb-5 w-full p-2"
                  />
                  <button
                    type="button"
                    className="bg-[#1d9bf0] text-white px-[20px] py-[10px] block text-center w-full"
      
                  >
                   Add
                  </button>
                </div>
              </div>
            )}
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
                <div className="font-bold">Sandeep</div>
                {/* <div>
                    <BsDot />
                  </div> */}
                <div>1 hour ago</div>
              </div>
              <div className=" text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                distinctio voluptas, a at nostrum nesciunt fugit nobis corrupti
                ipsum consectetur molestias ducimus pariatur accusamus, totam
                unde necessitatibus! Aut, libero temporibus.
              </div>
              <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1707593655390-16ef4441e94b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1707593655390-16ef4441e94b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                  className="w-full h-full rounded-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainComponent;
