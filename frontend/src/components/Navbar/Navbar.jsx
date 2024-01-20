import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars,FaTimes} from 'react-icons/fa'
import './navbar.css';


const logo_url ="https://assets-global.website-files.com/6218834c85e0406691f22826/62305b0f3a3882d68cd64cdb_Favicon%20256x256%20(1).svg"
const nav_elements = [{
  id: 1,
  item: "Home",
  to: "/",
}, {
  id: 2,
  item: "About",
  to: "/about",
}, {
  id: 3,
  item: "Explore Founders",
  to: "/explore",
}, {
  id: 4,
  item: "Profile",
  to: "/profile",
}, {
  id: 5,
  item: "Investment Room",
  to: "/investment",
}
]

const Navbar = () => {

  const [click,setClick]=useState(false);
  const handleClick =()=>setClick(!click);


  return (
    <>
      <nav className="navbar h-20 w-full  bg-[#050029] text-[#9ca3af] fixed z-10 flex justify-between items-center px-3">
        <div className="flex justify-center items-center">
          <img src={logo_url} className="w-12" alt="logo" />
          <h3 className="text-white font-[Nunito,sans-serif] leading-5 font-black tracking-wide text-2xl items-start">
            CashClimb
          </h3>
        </div>
        
        <ul className={click ? "nav_menu active flex flex-col text-3xl font-Montserrat font-black" 
        : "nav_menu py-15 flex space-x-4 justify-around items-center font-Montserrat font-bold text-base "}>
          {
            nav_elements.map((nav_items) => (
              <li className="nav_list px-4 py-6 leading-5 text-left inline-block relative  cursor-pointer " 
              key={nav_items.id}>
                <Link to={nav_items.to} >
                  {nav_items.item}
                </Link>
              </li>
            ))
          }
        </ul>

        <div className="button flex justify-between items-center space-x-4  font-Montserrat text-base font-medium text-white">
            <button className="bg-[#6952ff] w-28 h-10  rounded-md  leading-5  hover:bg-[#513ae9]">Signup</button>
            <button className="bg-[#6952ff] w-28 h-10  rounded-md  leading-5  hover:bg-[#513ae9]" >Login</button>
        </div>
       

        <div className='hamburger hidden' onClick={handleClick}>
            {click ? 
              (<FaTimes size="20" style={{color:'#6952ff'}}/>)
              :
              (<FaBars size={20} className="fill-white"/>)
            }
        </div>
      </nav>
    </>
  )
};

export default Navbar;
