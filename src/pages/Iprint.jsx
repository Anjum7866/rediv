import React from 'react'
import Title from '../components/Title';

const Iprint = () => {
  return (
    <>
    <div className="p-2 md:p-6 ">
      <Title title={'Iprint'}/>
      <div className="bg-primary text-white">
      
      <img
        src="/iprint.png"
        className="w-4/8 mt-4 mx-auto border-4 border-gray-400 rounded-lg "
        alt=""
      />
    </div>
      </div>
      <div className='text-left'>
        <h2 className='font-bold text-xl'>PRODUCT NAME:</h2>
        <h1 className='text-xl'> iPrint</h1><br/>
        <h2 className='font-bold font-family-Manrope, sans-serif text-xl'>PRODUCT DETAILS:</h2>
        <p>
        Intelligent Industrial Printing System– This system provides automation for industrial printers (CIJ/TIJ/Laser/TTO/Thermal/DT/Etc)connected to centralized system with ERP/SAP integration inbackend.With this, usercan communicate with any printer using various modes (RS232/RS485/RJ45/Ethernet/ Etc).Our system is running with more than 25 printer OEM models 
        </p>
           </div>



    
  
    
    </>
  )
}

export default Iprint