import React from "react";

import Navbar from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Iprint from "./Iprint";
import Wimart from "./WimaRT";
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
import Batch from "./Batch Processor";
import Billing from "./Billing";
import Inventory from "./Inventory";
import ERP from "./ERP";
import Automation from "./Automation";
const Layout = () => {

  return (
    <>
   
    <div className="flex md:flex-row flex-col  min-h-screen ">
          <Navbar/>
          
        <div className="maincomponent md:w-10/12 w-full ">

          <Routes>
            {/* <Route path="/hrms" element={<Dashboard/>}/> */}
            <Route path="/iPrint" element={<Iprint/>}/>
            <Route path="/wimaRT" element={<Wimart/>}/>
            <Route path="/batch" element={<Batch/>}/>
            <Route path="/billing" element={<Billing/>}/>
            <Route path="/tracking" element={<Tracking/>}/>
            <Route path="/inventory" element={<Inventory/>}/>
            <Route path="/erp" element={<ERP/>}/>
            <Route path="/automation" element={<Automation/>}/>
            <Route path="/dotnet" element={<Dotnet/>}/>
            <Route path="/websystem" element={<Websystem/>}/>
            <Route path="/mobile" element={<Mobile/>}/>
            <Route path="/industry" element={<Industry/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/sitemap" element={<Sitemap/>}/>
            <Route path="/policy" element={<Policy/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Hrms/>}/>
          </Routes>
          
        </div>
        {/* <Marquee/> */}
      </div>
     
    <div className="maincomponent w-full ">
        <Footer/>
          </div>
   
     
    </>
  );
};

export default Layout;
