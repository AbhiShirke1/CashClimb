import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../../components/auth/authSlice";
import { IoMdAddCircle } from "react-icons/io";
import { createPostAsync, setPosts } from "./postSlice";
import { useForm } from "react-hook-form";
import { getOwnPosts } from "./postAPI";
import moment from "moment";
const img_url =
  "https://assets-global.website-files.com/6218834c85e0406691f22826/62305b0f3a3882d68cd64cdb_Favicon%20256x256%20(1).svg";
const desc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus error adipisci, repudiandae consequatur molestias quia! Autem suscipit quod, animi nulla veritatis aut deserunt, laborum nisi quam corrupti expedita adipisci aliquam?";

const Post = () => {
  const [readMore, setReadMore] = useState(false);
  const [activeForm, setActiveForm] = useState(false);
  const [imgLink, setImgLink] = useState("");

  const [content, setContent] = useState("");
  const [logo, setLogo] = useState(
    JSON.parse(localStorage.getItem("user")).pic
  );
  const [creator, setCreator] = useState(
    JSON.parse(localStorage.getItem("user"))._id
  );
  // const [posts, setPosts] = useState([]);
  // console.log(posts);

  const dispatch = useDispatch();
  const [filename, setFilename] = useState("");

  const posts = useSelector((state) => state.post.posts);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getOwnPosts();
        dispatch(setPosts(response.data));
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, [content, imgLink]);

  console.log(posts);
  const handleImageUpload = (pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "chat-app");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setImgLink(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleCreatePost = () => {
    setActiveForm(!activeForm);
  };
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

  const newPost = {
    link: imgLink,
    content,
  };

  // const dispatch = useDispatch();
  return (
    <div className="w-[800px] font-montserrat">
      <main className="flex w-full sticky top-0 h-full min-h-screen flex-col ml-6">
        <div className="flex justify-start ml-10 mt-10 items-center m-2">
          {activeForm ? (
            <div className="flex flex-col m-2">
              <form
                action=""
                onSubmit={handleSubmit(() => {
                  dispatch(
                    createPostAsync({
                      ...newPost,
                    })
                  );
                  setContent("");
                  // navigate('/');
                })}
              >
                <div className="flex flex-col">
                  <textarea
                    type="text"
                    name="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Describe your Post"
                    className="shadow-xl focus:outline-none p-2 border-2 border-black-600 font-semibold h-[100px] w-[500px]"
                  />
                  <br />
                </div>

                <div className="flex justify-between">
                  <label
                    htmlFor="file-upload"
                    className="inline-block bg-black hover:bg-blue-200 text-white font-bold py-2 px-2 rounded"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 inline-block mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden"
                    onChange={(e) =>{ 
                      handleImageUpload(e.target.files[0]);
                      // setFilename(e.target.files[0])
                    }}
                  />
                  {/* <p>{filename}</p> */}

                  <button className="bg-[#1f1f1f] p-2 text-white rounded-md">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div>
              <button
                className="bg-black w-[150px] h-10 text-white rounded-md flex items-center"
                onClick={handleCreatePost}
              >
                <IoMdAddCircle size={20} className="ml-2 mr-2" />
                Create Post
              </button>
            </div>
          )}
        </div>

        <div className="flex flex-row flex-wrap justify-center items-center">
          {posts.map((post) => (
            <div key={post.creator} className="p-4 flex space-x-4 ">
              <div className=" w-[350px]  h-[500px] rounded-md shadow-xl">
                <div className="flex flex-row items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 shadow-lg rounded-full flex-none m-4">
                      <img
                        src={logo}
                        alt="company_logo"
                        className="w-[400px] "
                      />
                    </div>
                    <h2 className="font-semibold"></h2>
                  </div>
                  <span className="m-4 text-sm font-semibold text-[#575757]">
                    {formatTimestamp(post.createdAt)}
                  </span>
                </div>
                <p className="text-[#262626] text-sm m-4">
                  {readMore
                    ? `${post.content}`
                    : `${post.content.substring(0, 150)}  `}
                  <button
                    onClick={() => setReadMore(!readMore)}
                    className=" ml-3 text-blue-500"
                  >
                    {readMore ? "...show less" : "  ...read more"}
                  </button>
                </p>
                <div className="flex justify-center items-center">
                  <img
                    src={post.link}
                    className="h-[300px] w-[300px]"
                    alt="post"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Post;

// {user[0].name}

{
  /* <input
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
          </div> */
}

{
  /* <div>
              <div className="rounded-full bg-slate-400 w-10 h-10"></div>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center justify-between">
                <div className="font-bold">Siddharth</div>
                 <div>
                 <BsDot />
               </div> 
               <div>1 hour ago</div>
               </div>
               <div className=" text-sm">
                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
                 distinctio voluptas, a at nostrum nesciunt fugit nobis
                 corrupti ipsum consectetur molestias ducimus pariatur
                 accusamus, totam unde necessitatibus! Aut, libero temporibus.
               </div>
               <div className="bg-slate-400 aspect-square w-[300px] h-96 rounded-xl"></div>
             </div> */
}
