import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const email = 'e@redivivus.tech';

  return (
    <div className="h-20 bg-gray-300 p-5 flex flex-col justify-center">
  <div className="w-full">
  <span className="px-4 py-2 text-black m-4 mr-2 font-semibold text-lg">English</span>
  </div>
  <div className="w-full">
    <span className="px-4 py-2 text-black m-4 mr-2 font-semibold text-lg">Already a Customer? Sign In</span>
  </div>
  <div className="w-full">
    <span className="px-4 py-2 text-black m-4 mr-2 font-semibold text-lg">Condition of use</span>
    
 <Link to={"/policy"} >
 <span className="font-semibold ">Privacy Policy</span>
          </Link> <span className="px-4 py-2 text-black m-4 mr-2 font-semibold text-lg">Intrest-Based ads </span>
  </div>
  <div className="w-full">
    <span className="px-4 py-2 text-black m-4 mr-2 font-semibold text-lg">2023 Redivivus Inc</span>
  </div>
  <div className="w-full">
    <span className="px-4 py-2 text-black m-4 mr-2 font-regular text-sm flex-end">developed by Anjum Shaikh</span>
  </div>
</div>

  )
}

export default Footer
