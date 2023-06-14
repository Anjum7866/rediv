import React from 'react'
import Title from '../components/Title';

const Billing = () => {
  return (
    <>
    <div className="p-2 md:p-6 ">
      <Title title={'Billing'}/>
      <div>
      <img src="/billing.png"  className="w-1/5 mt-4 " alt="" />
      </div>
      <div className='text-left'>
        <h2 className='font-bold text-xl'>PRODUCT NAME:</h2>
        <h1 className='text-xl'> REOSYS-Billing Software</h1><br/>
        <h2 className='font-bold text-xl'>PRODUCT DETAILS:</h2>
        <p>
            <b>Document Preparation is Quick and Easy</b>
            <br/>
            Automatic document numbering
<br/>
Customer & Item info can be loaded from pre-defined list
<br/>
Tax/VAT, Total Amount will be calculated automatically
<br/>
Photos and PDF files can be appended to the document
<br/>
Signature image can be added into document
<br/>
Stamp with highlight words: URGENT, COPY, REVISED ...
<br/>
Export document to PDF, HTML, or Excel format
<br/>
Email document as attachment
<br/>
Just one click, document will be converted into PDF file and add to Email as attachment.<br/>
Documents can also be exported into HTML or Excel format.<br/>
Customize to Fit Company Needs<br/>
Set with your own header, footer and logo. You can also set the numbering pattern, rename the document label and adjust the colors/shadows to fit your business. 

<br/>
Item List Columns and fields like Shipping, Discount, Tax, Sub-total are optional. 

<br/>
Support multiple tax rates and tax calculation can be made against total amount or other tax amount.
<br/>
<b>Comprehensive Report</b><br/>
Sales and payment information can be traced globally, monthly or by customers. Monthly Statement can be generated for customer, which lists the invoice number and transaction amount per month. 
<br/>
Raw Data Export can export every fields in the documents into excel format. It can exports every fields into excel file for further analysis.

<br/>
<b>Support Multiple Companies</b><br/>
Documents, Reports and Company Settings are stored in a workspace. Create multiple workspaces to handle data from different companies.
<br/>
Connect & Share Database from Different Easy Billing
<br/>
Different Easy Billing can be set to use the same Workspace folder in network drive/shared folder. Data can be shared between Easy Billing in different computers. 

<br/>
To protect from data conflict, Database is locked for single connection and other Easy Billing will be blocked from access at the same time.
<br/>
<b>Integration with Hand Scanner</b><br/>
Easy integration with hand scanner,which will helpful for fast and accurate billing.    
    
           </p>
           </div>



    </div>
    
    
    </>
  )
}

export default Billing