import React from 'react'
import Title from '../components/Title';

const Wimart = () => {
  return (
    <>
    <div className="p-2 md:p-6 ">
      <Title title={'wimaRT Warehouse item'}/>

      <div>
      <img src="/wimaRts.png"  className="w-1/5 mt-4 " alt="" />
      </div>
      <div className='text-left'>
        <h2 className='font-bold text-xl'>PRODUCT NAME:</h2>
        <h1 className='text-xl'> wimaRts-Warehouse Item Management And Real-time Tracking System</h1><br/>
        <h2 className='font-bold text-xl'>PRODUCT DETAILS:</h2>
        <p>
        SOFTWARE: Technically Architected and Professionally Designed<br/>
        FEATURES:<br/>
        Centrally controlled, multi line & multi deck system
	Single Server to Control all the Lines, storage locations, and dispatch units
	Multiple Client PC to access server functionality from various location
	Capable of interacting in multi user environment with variable user rights
	Dynamic product generation and import facility
	Dynamic warehouse location management associations
	Complete Job management to have effective job planning and error free printing
	Activity tracking with detailed Audit Trail
	Live Reporting of production system
	Production Shift wise reports can be generated
	Detailed MIS to give clear idea to management ; which is easily customizable to specific user needs
	Automated & Scheduled database backup system
	Support for various coding system, viz. 1D/2D/DM/Etc , Fully GS1 Compliant
	Easily configurable system for various requirements    
    


        </p>
           </div>
      


    </div>
    
    
    </>
  )
}

export default Wimart