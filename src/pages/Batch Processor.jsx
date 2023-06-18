import React from 'react'
import Title from '../components/Title';

const Batch = () => {
  return (
    <>
    <div className="p-2 md:p-6 ">
      <Title title={'Batch Process Atomizer System'}/>

      <img
        src="/Batch Processor.png"
        className="w-4/8 mt-4 mx-auto border-4 border-gray-400 rounded-lg "
        alt=""
      />
      <div className='text-left'>
        <h2 className='font-bold text-xl'>PRODUCT NAME:</h2>
        <h1 className='text-xl'> Batch Process Atomizer System</h1><br/>
        <h2 className='font-bold text-xl'>PRODUCT DETAILS:</h2>
        <p>
        WHY AUTOMATION ?<br/>
        Automation means authorization of activities to be performed without human intervention
<br/>
Automation delegates machine/equipment controlling to be performed by control system based on set input criteria
<br/>
Automation makes use of Control System & Data Information techniques to reduce the need for human intervention
<br/>
Automation performs accurate activity with predefined set of data & controlling
<br/>
Automation results in reduction of manual error and improved quality of production & efficiency    
    
        </p>
           </div>



    </div>
    
    
    </>
  )
}

export default Batch