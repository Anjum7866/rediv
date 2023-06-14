import React from 'react'
import Title from '../components/Title';

const Automation = () => {
  return (
    <>
    <div className="p-2 md:p-6 ">
      <Title title={'Parking Automation'}/>
      <div>
      <img src="/Parking Automation.png"  className="w-1/5 mt-4 " alt="" />
      </div>
      <div className='text-left'>
        <h2 className='font-bold text-xl'>PRODUCT NAME:</h2>
        <h1 className='text-xl'> Parking Automation</h1><br/>
        <h2 className='font-bold text-xl'>PRODUCT DETAILS:</h2>
        <p>
       
    During the entry exit process the vehicle movement will be identified and any deviation the same will be flashed to the control room through dashboard that can be generated as reports. To make the process easy issue passes for monthly, half yearly and yearly basis.
<br/>
<b>Functional Details</b>
<br/>

Manual check-in processes can cause errors and delay in accounting for vehicles, especially during peak times when vehicle backlogs often occur. Some vehicles might be missed altogether and vehicle or driver IDs can be logged in error. To automate the vehicle moment in we need to install Long Range RFID readers in entrance exit locations These readers are connected by internal LAN and are connected with central server. Our offered solution identifies the vehicles at all entry & exit points. The RFID tags are issued permanently to the vehicle. 

</p>
<div>
<img src="/maxresdefault.png"  className="w-full mt-4 " alt="" />
</div>
<p>
    <b>Automatic vehicle Entry and Exit</b>
<br/>

1.RFID stickers are applied on vehicle (on Front glass)<br/>

2.When vehicle enters near to reader which is placed at IN/OUT boom barrier , UHF reader reads data and sent to Software through LAN .If data is valid(Registered vehicle) then software will send Open command to Electronic controller.<br/>

3.Controller will send command to Boom and it gets opened.<br/>

4.After Passing vehicle through the boom, sensor sense the vehicle and automatically close the barrier.<br/>

<a href="Parking Automation.ppt">Click Here to download Parking Automation System</a>

</p>
    
           </div>
    </div>
    
    
    </>
  )
}

export default Automation