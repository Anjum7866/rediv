import React from 'react'
import Title from '../components/Title';

const Hrms = () => {
  return (
    <>
    <div className="p-2 md:p-6 ">
      <Title title={'HRS'}/>
      <div>
      <img src="/hrms.png"  className="w-1/5 mt-4 " alt="" />
      </div>
      <div className='text-left'>
        <h2 className='font-bold text-xl'>PRODUCT NAME:</h2>
        <h1 className='text-xl'> HRS</h1><br/>
        <h2 className='font-bold text-xl'>PRODUCT DETAILS:</h2>
        <p>
       <b>EMPHRS </b>
       <br/>
       gives you Attendance and Salary Management solution suitable For your company.
<br/>
EMPLOYEE MANAGER
<br/>
• ATTENDANCE.
<br/>
• SALARY PROCESSING
<br/>
• SALARY REGISTER
<br/>
• Accounts
<br/>
• MIS AND REPORTS    
    <br/>

        </p>
           </div>



    </div>
    
    
    </>
)
}

export default Hrms