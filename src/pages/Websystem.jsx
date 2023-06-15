import React from 'react'
import Title from '../components/Title';

const Websystem = () => {
  return (
    <>
    <div className="p-2 md:p-6 ">
      <Title title={'WEBSYSTEM Development'}/>
      <div>
      <img src="/iprint.png"  className="w-1/5 mt-4 " alt="" />
      </div>
      <div className='text-left'>
        <h2 className='font-bold text-xl'>PRODUCT NAME:</h2>
        <h1 className='text-xl'> WEBSYSTEM Development</h1><br/>
        <h2 className='font-bold text-xl'>PRODUCT DETAILS:</h2>
        <p>
        New generation websites by new generation developers. 
For new generation entrepreneurs.. </p>
           </div>



    </div>
    
    
    </>
  )
}

export default Websystem