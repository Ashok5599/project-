import React from 'react';
import {useFormik} from "formik";

export default function Consultation() {

    const ValidateFormik=empData =>{
        const errors={};
        if(!empData.name){
            errors.name="Please Enter Your Full Name";
        }
        else if(empData.name.length >10){
            errors.name="max length 10 char";
        }
        if (!empData.email){
           errors.email="Please Enter Your Email Address";
        }
        if (!empData.mobile){
            errors.mobile="Please Enter Your mobile number";
         }
         if (!empData.messg){
            errors.messg="Please Enter Your messg";
         }
        return errors;
     }
     const formik= useFormik({
        initialValues:{
            name: '',
            email: '',
            mobile:'',
            messg: ''
        },
       validate:ValidateFormik, 
       onSubmit:values =>{
           alert(JSON.stringify(values));
       }
    })

  return (
    <div>

         <h1 className='hd4'>REQUEST FREE CONSULTATION</h1>
        <div className='text-center' id='card_form'>
        <h3>Please fill in the form below</h3>
        <form onSubmit={formik.handleSubmit}>
                 <input type="text" 
                        placeholder='Enter Your Full Name' 
                        name='name' 
                        value={formik.values.name} 
                        onChange={formik.handleChange}
                         /><br/>
                 {formik.touched.name && formik.errors.name ?<span style={{color:'red'}}>{formik.errors.name}</span>:null}<br/>
                 <input type="text" 
                        placeholder='Enter Your Email Address' 
                        name='email' 
                        value={formik.values.email} 
                        onChange={formik.handleChange}/><br/>
                {formik.touched.email && formik.errors.email ?<span style={{color:'red'}}>{formik.errors.email}</span>:null}<br/>
                <input type="number" 
                        placeholder='Enter Your Mobile number' 
                        name='mobile' 
                        value={formik.values.mobile} 
                        onChange={formik.handleChange}/><br/>
                {formik.touched.mobile && formik.errors.mobile ?<span style={{color:'red'}}>{formik.errors.mobile}</span>:null}<br/>        
                <textarea type='text'
                        placeholder='Type a message here....'
                        name='messg'
                        value={formik.values.messg} 
                        onChange={formik.handleChange}/><br/>        
                  {formik.touched.messg && formik.errors.messg ?<span style={{color:'red'}}>{formik.errors.messg}</span>:null}<br/>
                  <button className='btn btn-xl btn-danger mb-2'>SUBMIT</button>
               </form>	
               </div>     	
      </div>  
  )
}
