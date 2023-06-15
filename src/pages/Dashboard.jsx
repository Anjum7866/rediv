import React from 'react'
import Title from '../components/Title';

import {
  User,
  ShoppingCartSimple,
  CurrencyDollar
} from "phosphor-react";


const Dashboard = () => {
  return (
    <>
    <div className="p-2 md:p-6 ">
      <Title title={'Contact'}/>
      <div className='md:w-full'>
        <img src="/contact.jpg" alt="Contact Us"/>
      </div>
      

          <div className="stats2 mt-5 flex md:flex-row flex-col">
            <div className="md:w-1/2 mr-3">
              <h2 className="bg-primary-150 text-2xl p-5 text-left rounded-xl mb-2">
              < h1 className="text-2xl font-bold text-red-500 mb-4">Address</h1>
               <br/>
               <p>Redivivus Technologies Private Limited,
                  <br/>
                  8A & 8B Manisha Biltz,Solapur Road,Hadapsar,
                <br/>
                  Pune-13
                <br/>
                  Maharashtra,India
                </p>
                <br/>
                < h1 className="text-2xl font-bold text-red-500 mb-4">Email</h1>
                
                  <p>
                    info@redivs.com
                    <br/>
                    support@redivs.com
                    <br/>
                    admin.hr@redivs.com
                  </p>
                <br/>
                < h1 className="text-2xl font-bold text-red-500 mb-4">Ph.No.</h1>
                
                +91 8983531633
              </h2>

            
             
            </div>

            <div className="md:w-1/2 w-full mt-0 md:mt-2 md:pl-3">
              <div className="w-full pr-5">
                <img src="/map.png" alt="" className="w-full" />
              </div>

              <div className="flex flex-col  mt-4">
  
              <label htmlFor="name" className="text-lg font-semibold mb-2">
        Name
      </label>
      <input
        type="text"
        id="name"
        style={{ minWidth: '300px' }}
        className=" flex flex-row  border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="email" className="text-lg font-semibold mb-2">
       Email
      </label>
      <input
        type="text"
        id="email"
        className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="Contact No." className="text-lg font-semibold mb-2">
      Contact No.
      </label>
      <input
        type="text"
        id="contact"
        className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
            <label htmlFor="Contact No." className="text-lg font-semibold mb-2">
      Message
      </label>
      <input
        type="text"
        id="Message"
        className="border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 mt-2 rounded">
        Submit
      </button>
      </div>
             
            </div>
          </div>

          <div className='mt-10'>
          <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=Redivivus%20Technologies%20Private%20Limited,%208%20A&amp;B,%20Manisha%20Blitz,%20Hadapsar,%20Pune%2013,%20Pune,%20Maharashtra%20411013&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" scrolling="no" marginheight="0" marginwidth="0" width="600" height="500" frameborder="0"></iframe>
         </div>


    </div>
    
    
    </>
  )
}

export default Dashboard