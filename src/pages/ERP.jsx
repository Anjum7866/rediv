import React from 'react'
import Title from '../components/Title';

const ERP = () => {
  return (
    <>
    <div className="p-2 md:p-6 ">
      <Title title={'REOSYS-Complete ERP solution'}/>
      <div>
      <img src="/ERP.png"  className="w-1/5 mt-4 " alt="" />
      </div>
      <div className='text-left'>
        <h2 className='font-bold text-xl'>PRODUCT NAME:</h2>
        <h1 className='text-xl'>REOSYS-Complete ERP solution</h1><br/>
        <h2 className='font-bold text-xl'>PRODUCT DETAILS:</h2>
        <p>
            <b>REOSYS</b>
            is an affordable integrated suite of business application designed specifically for the 

small and mid-sized manufacturing organizations having employee strength above 10. Business owners 

can leverage a single system to automate various business processes and deliver accurate, critical up-

to-the-minute business information across all business functions.
It is well suited for basic manufacturing (Process & Discrete) businesses.

<br/>
With our services, you can,
<br/>

Focus more on core business activities than spending time for Software usage <br/>

Increase productivity due to elimination of data duplication, redundancy & errors<br/>

Improve Customer relations with better management of customer data & communication<br/>

Have expertise in expenses management & tracking<br/>

Reduction in time to train employees and eventually reduced expenses<br/>

Increased business profits with integrated system<br/>
        </p>
           </div>



    </div>
    
    
    </>
  )
}

export default ERP