import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const email = 'e@redivivus.tech';

  return (
    <div className="h-20 bg-blue-400  p-5 flex flex-col justify-center">
  <div className="w-full">
  <a className="font-semibold  text-lg" href={`mailto:${email}`}>Get In Touch</a>
  
 <Link to={"/policy"} >
            <span className="font-semibold ml-5  text-lg ">Privacy Policy</span>
          </Link> 
          </div>
  <div className="w-full">
    <span className="px-4 py-2 text-black m-4 mr-2 font-semibold text-sm">Copyright © 2023 All Rights Reserved | Redivivus Technologies Private Limited | WWW.REDIVS.COM</span>
  </div>
  <div className="w-full">
    <span className="px-4 py-2 text-black m-4 mr-2 font-regular text-sm flex-end">developed by Anjum Shaikh</span>
  </div>
</div>

  )
}

export default Footer
