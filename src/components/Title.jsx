import React from "react";
import { Link } from "react-router-dom";

const Title = ({title}) => {
  return (
    <div>
   <div className="w-700 h-15 m-0 bg-blue-400 opacity-50 flex justify-end">
   <Link to={"/contact"}>
            <button className="px-4 py-2 bg-primary-700 text-white rounded-md m-4 mr-2 ">Contact-us</button> 
    </Link>
    <Link to={"/about"}>
    <button className="px-4 py-2 bg-primary-700 text-white rounded-md m-4">About-us</button>
    </Link>
  
 </div>

    <div className="top flex justify-between items-center pb-6 px-6">
      <h1 className="text-3xl font-semibold ">{title}</h1>
    </div>
    </div>
  );
};

export default Title;
