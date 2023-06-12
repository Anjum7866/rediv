import React from 'react'
import Title from '../components/Title';

const Hrms = () => {
  return (
    <>
    <div className="p-2 md:p-6 ">
      <Title title={'Human Resource Management System'}/>
      <div>
      <img src="/hrms.png"  className="w-full mt-4 " alt="" />
      </div>
      <div className='text-left'>
        <h2 className='font-bold text-xl'>Human Resource Management System</h2>
        <p> is a software solution that helps organizations streamline and automate various HR processes. Here are some key features of HRMS</p> 
<h2 className='font-bold text-xl'>Features:</h2>  
<p>Employee Database: HRMS allows organizations to maintain a centralized employee database, including personal information, employment history, performance records, and more.<br/>

Attendance and Time Tracking: HRMS provides tools for tracking employee attendance, leaves, and managing timesheets. It helps automate attendance management and ensures accurate record-keeping.<br/>

Payroll Management: HRMS simplifies payroll processing by automating calculations for salary, taxes, deductions, and benefits. It enables accurate and timely payroll generation</p>
   </div>



    </div>
    
    
    </>
  )
}

export default Hrms