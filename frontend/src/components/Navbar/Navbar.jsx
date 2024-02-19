import React, { useState } from "react";
import { Link } from "react-router-dom";
import {FaBars,FaTimes, FaUserCircle} from 'react-icons/fa'
import {CiLogout} from 'react-icons/ci'



const logo_url ="https://assets-global.website-files.com/6218834c85e0406691f22826/62305b0f3a3882d68cd64cdb_Favicon%20256x256%20(1).svg"
const nav_elements = [{
  id: 1,
  item: "Home",
  to: "/",
}, {
  id: 2,
  item: "Update",
  to: "/profile/update",
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

const nav_elements2 = [{
  id: 1,
  item: "Home",
  to: "/",
}, {
  id: 2,
  item: "Update",
  to: "/profile/update",
},  {
  id: 5,
  item: "Explore Posts",
  to: "/home",
},
{
  id: 3,
  item: "Explore Founders",
  to: "/explore",
}, {
  id: 4,
  item: "Investor Profile",
  to: "/investorprofile",
}, {
  id: 5,
  item: "Investment Room",
  to: "/investment",
}
]

const Navbar = () => {

  const [click,setClick]=useState(false);
  const [role,setRole] = useState(JSON.parse(localStorage.getItem('role')));
  console.log(role)
  const handleClick =()=>setClick(!click);
  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout=()=>{
    localStorage.clear();
    setUser(null);
}


  return (
    <>
    
      <nav className="navbar h-20 w-full font-montserrat  bg-[#050029] text-[#9ca3af] sticky top-0 z-10 flex justify-between items-center px-3">
        <div className="flex justify-center items-center">
          <img src={logo_url} className="w-12" alt="logo" />
          <h3 className="text-white font-montserrat  leading-5 font-black tracking-wide text-2xl items-start">
            CashClimb
          </h3>
        </div>
        
        <ul className={click ? "nav_menu active flex flex-col text-3xl font-montserrat  font-black" 
        : "nav_menu py-15 flex space-x-4 justify-around items-center font-montserrat  font-bold text-base "}>
          {role === 'Founder' ? (
            nav_elements.map((nav_items) => (
              <li className="nav_list px-4 py-6 leading-5 text-left inline-block relative  cursor-pointer " 
              key={nav_items.id}>
                <Link to={nav_items.to} >
                  {nav_items.item}
                </Link>
              </li>
            ))):(
              nav_elements2.map((nav_items) => (
                <li className="nav_list px-4 py-6 leading-5 text-left inline-block relative  cursor-pointer " 
                key={nav_items.id}>
                  <Link to={nav_items.to} >
                    {nav_items.item}
                  </Link>
                </li>
              ))

            )
          }
        </ul>
        {user  ? (
            <div className="relative inline-block flex-start">
            <div className="group cursor-pointer flex justify-center items-center" onClick={toggleMenu}>
              <FaUserCircle className="text-gray-500 group-hover:text-gray-700" size={30} />
              {isMenuOpen && (
              <div className=" absolute bottom-0 left-[-50px] top-[50px] w-[170px] h-[80px] transform -translate-x-1/2 bg-gray-700 text-white text-center p-1 rounded-md">
                <span className="font-semibold flex justify-center items-center m-1">{user.company}</span>
                <div className="flex justify-center items-center">
                  <button className="text-white m-1 p-2 rounded-md  leading-5  hover:text-[#513ae9] font-semibold flex justify-center items-center" onClick={logout}>
                    <CiLogout fill="white" size={20}/>
                    Logout
                  </button>
                </div>
              </div>
              )}
            </div>
          </div>
        ):(
          <div className="button flex justify-between items-center space-x-4  font-montserrat  text-base font-medium text-white">
            <Link  to='/signup' className="bg-[#6952ff] w-28 h-10  rounded-md  leading-5 flex justify-center items-center hover:bg-[#513ae9]">Signup</Link>
            <Link  to='/login' className="bg-[#6952ff] w-28 h-10  rounded-md  leading-5 flex justify-center items-center hover:bg-[#513ae9]" >Login</Link>
          </div>
        )}

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