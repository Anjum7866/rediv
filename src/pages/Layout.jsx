import React from "react";

import Dashboard from "./Dashboard";
import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Iprint from "./Iprint";
import Wimart from "./WimaRT";
import Management from "./Management";
import Tracking from "./Tracking";
import Dotnet from "./Dotnet";
import Websystem from "./Websystem";
import Mobile from "./Mobile";
import Industry from "./Industry";
import Contact from "./Contact";
import About from "./About";
import Sitemap from "./Sitemap";
import Policy from "./Policy";

import Footer from "../components/Footer";
import Hrms from "./Hrms";
const Layout = () => {

  return (
    <>
   
    <div className="flex md:flex-row flex-col  min-h-screen ">
          <Navbar/>
          
        <div className="maincomponent md:w-10/12 w-full ">

          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/iPrint" element={<Iprint/>}/>
            <Route path="/wimaRT" element={<Wimart/>}/>
            <Route path="/management" element={<Management/>}/>
            <Route path="/tracking" element={<Tracking/>}/>
            <Route path="/dotnet" element={<Dotnet/>}/>
            <Route path="/websystem" element={<Websystem/>}/>
            <Route path="/mobile" element={<Mobile/>}/>
            <Route path="/industry" element={<Industry/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/sitemap" element={<Sitemap/>}/>
            <Route path="/policy" element={<Policy/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/hrms" element={<Hrms/>}/>
          </Routes>
          
        </div>
      </div>
    <div className="maincomponent w-full ">
        <Footer/>
          </div>
   
     
    </>
  );
};

export default Layout;
