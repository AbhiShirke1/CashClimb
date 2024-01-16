import { Link } from "react-router-dom";

const nav_elements = [{
    id:1,
    item:"Home",
    to:"/",
  },{
    id:2,
    item:"About",
    to:"/about",
  },{
    id:3,
    item:"Contact Us",
    to:"/contact",
  },{
    id:4,
    item:"Profile",
    to:"/profile",
  },{
    id:5,
    item:"Investment Room",
    to:"/investment",
  }
]

const Navbar = () => {
  return (
    <>
        <nav class=" h-20 w-full bg-[#050029] text-white fixed z-10 flex justify-around items-center">
            <img src="https://assets-global.website-files.com/6218834c85e0406691f22826/62188451710db7031e56d674_Logo%20-%20DEFAULT%20(1).svg" alt=""/>
              {/* <!-- <h3 class="text-white font-[Nunito,sans-serif] leading-5 font-bold tracking-wide text-2xl items-start">Funding Hero</h3> --> */}
              <ul class="py-15 flex space-x-4 justify-around items-center">
                {
                  nav_elements.map((nav_items)=>(
                    <li class="px-4 py-6 font-Montserrat  leading-5 text-left inline-block relative font-medium text-lg cursor-pointer " key={nav_items.id}>
                        <Link to={nav_items.to} >
                          {nav_items.item}  
                        </Link>
                    </li>
                  )) 
                }  
              </ul>
              <div class="button  flex justify-around items-center space-x-2">
                <button class="bg-[#6952ff] w-28 h-10  font-Montserrat text-base rounded-md font-medium leading-5">Signup</button>
                <button class="bg-[#6952ff] w-28 h-10  font-Montserrat text-base rounded-md font-medium leading-5" >Login</button>
              </div>
        </nav>
    </>
  )
};

export default Navbar;
