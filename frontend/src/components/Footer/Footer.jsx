import React from "react";
import Footer_Link from "./Footer_Link";
import Footer_Form from "./Footer_Form";
import Footer_Icon from "./Footer_Icon";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

const img_url =
  "https://assets-global.website-files.com/6218834c85e0406691f22826/62305b0f3a3882d68cd64cdb_Favicon%20256x256%20(1).svg";

const social_icons = [
  {
    id: 1,
    icon: <FaFacebookSquare className="fill-[#e8e8e8]" size={30} />,
  },
  {
    id: 2,
    icon: <AiFillInstagram className="fill-[#e8e8e8]" size={30} />,
  },
  {
    id: 3,
    icon: <FaLinkedinIn className="fill-[#e8e8e8]" size={30} />,
  },
  {
    id: 4,
    icon: <IoIosMail className="fill-[#e8e8e8]" size={30} />,
  },
];



const Footer = () => {
  return (
    <>
      <section className=" bg-[#050029] py-11 font-[Nunito,sans-serif] flex justify-center items-center">
        <div className="max-w-7xl relative ">
          <div className="footer flex flex-row justify-center mb-16 text-[#9ca3af] ">
            <div className=" float-left w-3/4">
              <div className="uppercase text-lg mb-4 font-bold">
                Subscribe to our newsletter
              </div>
              <div className="mb-5 pr-20 font-bold ">
                Enter your email address for regular content,tips and giudes
              </div>
              <Footer_Form />
            </div>
            <Footer_Link />
            <img
              src={img_url}
              className="max-w-1/2 absolute bottom-0 right-0 h-24 mt-6"
              alt=""
            />
          </div>
          <Footer_Icon />
        </div>
      </section>
    </>
  );
};

export default Footer;
