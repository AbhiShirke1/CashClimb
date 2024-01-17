import React from 'react';
import { Link } from "react-router-dom";
import { FaFacebookSquare,FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";


const footer_link1 = ["About","Teams","Platform","Financial"]
const footer_link2 = ["Fundraising pricing","Fundraising accelerator","Parnters","Referral Scheme"]
const footer_link3= ["Privacy Policy","Terms and Condition","Contact us","Reviews","FAQ","Blog "]
const social_icons = [{
          id:1,
          icon:<FaFacebookSquare className="fill-[#e8e8e8]" size={30}/>,
},{
          id:2,
          icon:<AiFillInstagram className="fill-[#e8e8e8]" size={30}/>,
},{
          id:3,
          icon:<FaLinkedinIn  className="fill-[#e8e8e8]" size={30}/>,
},{
          id:4,
          icon:< IoIosMail  className="fill-[#e8e8e8]" size={30}/>,
}
]


const Footer = () => {
  return (
    <>
      <section className="bg-[#050029] py-11 font-Montserrat flex justify-center items-center">
          <div className="max-w-7xl relative ">
                    <div className="flex flex-row justify-center mb-16 text-[#9ca3af]  ">
                              <div className="float-left relative  w-3/4">
                                        <div className="uppercase text-lg mb-4 font-bold">Subscribe to our newsletter</div>
                                        <div className="mb-5 pr-20 font-bold ">
                                                  Enter your email address for regular
                                                  content,tips and giudes
                                        </div>
                                        <div className="w-3/4 mb-4 ">
                                                  <form action="">
                                                            <input type="email" 
                                                            className="w-3/5 h-10 float-left bg-[#e8e8e8] border border-solid border-transparent p-4
                                                                   rounded-l-md" 
                                                            placeholder="Enter your email"/>
                                                            <button type="submit" className="w-2/5 h-10 bg-[#6952ff] text-white rounded-r-md">
                                                                      Subscribe
                                                            </button>
                                                  </form>
                                        </div>
                              </div>

                              <div className="w-1/3 relative float-left px-10">
                                        <ul >
                                        { 
                                                  footer_link1.map((items)=>(
                                                            <li className='pb-2'>
                                                                      <Link to="/about" className="pb-2 font-Montserrat">
                                                                      {items}   
                                                                      </Link>
                                                            </li>
                                                  
                                                  ))
                                        }   
                                        </ul>
                              </div>
                              
                              <div className="w-1/2 px-2">
                                        <ul >
                                        { 
                                                  footer_link2.map((items)=>(
                                                            <li className='pb-2'>
                                                                      <Link to="/about" className="pb-2 font-Montserrat">
                                                                      {items}   
                                                                      </Link>
                                                            </li>
                                                  
                                                  ))
                                        }   
                                        </ul>
                              </div>

                              <div className="w-1/2 pl-20">
                                        <ul >
                                        { 
                                                  footer_link3.map((items)=>(
                                                            <li className='pb-2'>
                                                                      <Link to="/about" className="pb-2 font-Montserrat">
                                                                      {items}   
                                                                      </Link>
                                                            </li>
                                                  
                                                  ))
                                        }   
                                        </ul>
                              </div>
                              
                              <img src="https://assets-global.website-files.com/6218834c85e0406691f22826/62305b0f3a3882d68cd64cdb_Favicon%20256x256%20(1).svg" 
                              className="max-w-1/2 absolute bottom-0 right-0 h-24 mt-6" alt=""/>
                    </div>
                    <div className='flex space-x-6 fill-[#e8e8e8]'>
                    {
                              social_icons.map((items)=>(
                                        <>{items.icon}</>
                              
                              ))
                    } 
                    </div>
          </div>
      </section>
    </>
  )
}

export default Footer
