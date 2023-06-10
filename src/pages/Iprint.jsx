import React from 'react'
import Title from '../components/Title';

const Iprint = () => {
  return (
    <>
    <div className="p-2 md:p-6 ">
      <Title title={'iPrint'}/>

      <div className="stats flex md:flex-row flex-col">
     
              <img src="/automation.jpg"  className="w-1/2" alt="" />
              <img src="/automation1.jpeg"  className="w-1/2 ml-4" alt="" />
           
      </div>
      <div>
      <img src="/hrms.png"  className="w-full mt-4 " alt="" />
      </div>
      <div>
        <h2>Redivivus Technology Private Limited</h2>
        <p> is a software product development and services company, serving its customer and clients from its global delivary centre in Pune,India.
Redivius is focused to develop the various technical solutions for industrial automation, printing and inspection , image processing,data management.a software  product development and services company, serving its customer and clients from its global delivary centre in Pune,India.
</p>      </div>



    </div>
    
    
    </>
  )
}

export default Iprint