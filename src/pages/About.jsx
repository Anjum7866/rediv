import React from 'react'
import Title from '../components/Title';

const About = () => {
  return (
    <>
    <div className="p-2 md:p-6 ">
      <Title title={'About Us'}/>
      <div>
      <img src="/abtus.jpg"  className="w-full mt-4 " alt="" /><br/>
      </div>
      <div className='text-left'>
        <p>
          <b>From Innovation To Success</b><br/>
        At <a href="http://www.redivs.com">Redivivus</a>, we help technology companies transform their ideas into successful products. Our customers are small and midsized product companies and We help startups as well as established product companies take advantage of global talent to reduce time with our unique operational maodel.
						 Our aim is to provide technology solutions with quality at its best. As a company driven by innovation, we look forward in understanding practical business needs and requirement for developing product & solution.
            <br/>
            <br/>
            <b>Redivivus offers a focused emphasis on the following:</b><br/>
            
						1.Embedded Application Development.<br/>
            2.Manufacturing & Process Automation.<br/>
            
						3.Mobility Development.<br/>
            
						4.Image processing.<br/>
            
						Over the last 5 years, <a href="http://www.redivs.com">Redivivus</a>
            teams have successfully built, implemented and supported various technology products with our various 
            <a href="https://en.wikipedia.org/wiki/Original_equipment_manufacturer">EOM partners</a>
            with strong customer focus.


            </p>
           </div>



    </div>
    
    
    </>
  )
}

export default About