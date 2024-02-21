import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import { getAllPosts } from "./postAPI";
import moment from "moment";

const logo_url =
  "https://assets-global.website-files.com/6218834c85e0406691f22826/62305b0f3a3882d68cd64cdb_Favicon%20256x256%20(1).svg";
const MainComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getAllPosts();
        setPosts(response.data); // Assuming your API response has a "data" property
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);
  console.log(posts);
  const formatTimestamp = (timestamp) => {
    const now = moment();
    const postTime = moment(timestamp);

    const hoursAgo = now.diff(postTime, "hours");
    const minutesAgo = now.diff(postTime, "minutes");

    if (hoursAgo >= 24) {
      return postTime.format("MMM D, YYYY [at] h:mm A"); // Format for more than 24 hours
    } else if (hoursAgo > 0) {
      return `${hoursAgo}h ago`;
    } else if (minutesAgo > 0) {
      return `${minutesAgo}m ago`;
    } else {
      return "Just now";
    }
  };
  const [show, setShow] = useState(false);
  return (
    <main className="flex w-full sticky top-0 h-full min-h-screen flex-col font-montserrat ">
      <div className="flex flex-col mt-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className=" bg-white text-black shadow-2xl p-4 flex space-x-4 w-[600px] m-2 rounded-sm"
          >
            <div>
              <div className="rounded-full bg-gray-200 shadow-lg w-10 h-10">
                <img alt="logo" />
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-bold">Sandeep</div>
                {/* <div>
                    <BsDot />
                  </div> */}
                <div className="text-gray-600 font-semibold">
                  {formatTimestamp(post.createdAt)}
                </div>
              </div>
              <div className=" text-sm text-gray-600">{post.content}</div>
              <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl">
                <img
                  src={post.link}
                  alt=""
                  className="w-full h-full rounded-sm"
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
