import React from 'react';
import { FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import './Footer.css';

const social_icons = [{
          id: 1,
          icon: <FaFacebookSquare className="fill-[#e8e8e8]" size={30} />,
        }, {
          id: 2,
          icon: <AiFillInstagram className="fill-[#e8e8e8]" size={30} />,
        }, {
          id: 3,
          icon: <FaLinkedinIn className="fill-[#e8e8e8]" size={30} />,
        }, {
          id: 4,
          icon: < IoIosMail className="fill-[#e8e8e8]" size={30} />,
        }
]

const Footer_Icon = () => {
  return (
    <>
          <div className='flex space-x-6 fill-[#e8e8e8]'>
            {
              social_icons.map((items) => (
                <>{items.icon}</>

              ))
            }
          </div>
    </>
  )
}

export default Footer_Icon
