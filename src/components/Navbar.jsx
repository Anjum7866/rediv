import React, {  useState } from "react";

import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  return (
    <>
      <p
        className="fixed p-2 z-50 text-xl md:hidden"
        onClick={() => setSidebar(!sidebar)}
      >
        =
      </p>
      
      <div
        className={`sidebar ${
          sidebar ? "" : "max-md:hidden"
        }  bg-black w-100 md:w-2/12  md:h-[100vh] rounded-md `}
      >
        <div className="fixed md:w-2/12 p-3 bg-black h-screen rounded-md">
        <div className="flex items-center justify-between">
            <div className="logo">
              <img src="/logonew.png" className="w-full" alt="" />
            </div>
            <div className="text-right">
              <h1 className="text-blue-500 text-opacity-75 text-2xl text-shadow-md font-style-oblique
               font-extrabold ">
                Redivivus</h1>
            </div>
          </div>
          <h4 className=" text-left font-bold text-xl text-white">Products</h4>
            
          <NavLink to={"/iPrint"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">iPRINT</span>
          </NavLink>

          <NavLink to={"/wimaRT"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">wimaRT </span>
          </NavLink>

          <NavLink to={"/management"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Management</span>
          </NavLink>

          <NavLink to={"/tracking"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">RT Tracking</span>
          </NavLink>

          

          <NavLink to={"/tracking"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Billing</span>
          </NavLink>

          <NavLink to={"/tracking"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Inventory</span>
          </NavLink>

          <NavLink to={"/"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">HRMS</span>
          </NavLink>

          <h4 className=" text-left font-bold text-xl text-white  mt-5">Services</h4>

          <NavLink to={"/dotnet"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Dot net</span>
          </NavLink>

          <NavLink to={"/websystem"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Web</span>
          </NavLink>

          <NavLink to={"/mobile"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Mobile</span>
          </NavLink>

          <NavLink to={"/mobile"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Consultancy</span>
          </NavLink>

          <NavLink to={"/industry"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Industry</span>
          </NavLink>

          
          {/* <h4 className=" text-left font-bold text-xl text-white  mt-5">About</h4>

          <NavLink to={"/about"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">About Us</span>
          </NavLink>

          <NavLink to={"/sitemap"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Site Map</span>
          </NavLink>

          <NavLink to={"/policy"} onClick={()=>setSidebar(false)}>
            <span className="font-semibold ">Privacy Policy</span>
          </NavLink> */}

           {/* <div className="flex items-center justify-between">
            <div className="logo">
              
            <h4 className=" text-left font-bold text-xl text-white  mt-5">Connect</h4>
            <img  alt="social"src="/social.png" className="w-2/3" />
            </div>
           
          </div>
           */}

        </div>
      </div>
    </>
  );
};

export default Navbar;

const NavLink = ({ to, children, ...props }) => {
  
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({path: resolvedPath.pathname, end:true})

  return (
    <>
    <Link to={to}>
      <span
      {...props}
        className={`tab  w-11/12 my-2 ${
            isActive ? "bg-blue-400 bg-opacity-50 text-white" : "text-white"
        }  rounded-excess flex m-auto `}
        >
        {children}
      </span>
          </Link>
    </>
  );
};
