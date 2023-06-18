import React from 'react'
import Title from '../components/Title';

const Inventory = () => {
  return (
    <>
    <div  className="p-2 md:p-6 ">
      <Title title={'REOSYS-Inventory Software'}/>
      <img
        src="/Inventory.png"
        className="w-4/8 mt-4 mx-auto border-4 border-gray-400 rounded-lg "
        alt=""
      />
      <div className='text-left'>
        <h2 className='font-bold text-xl'>PRODUCT NAME:</h2>
        <h1 className='text-xl'> REOSYS-Inventory Software</h1><br/>
        <h2 className='font-bold text-xl'>PRODUCT DETAILS:</h2>
        <p>
        <b>PURPOSE OF INVENTORY MANAGEMENT</b>
        <br/>
        To gain economy in purchasing<br/>
        To satisfy the  demand during period of replenishment
<br/>
To carry reserve stock to avoid stock out
<br/>
To stabilize fluctuations in consumption
<br/>
To provide  reasonable level of client services    
    <br/>

        </p>
           </div>



    </div>
    
    
    </>
  )
}

export default Inventory