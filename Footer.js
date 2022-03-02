import React, { useEffect } from 'react';
import {useState} from 'react';

export default function Footer() {

  const[showButton,setShowButton]=useState(false);
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.pageYOffset>250)
            {
                setShowButton(true);
            }
            else{
                setShowButton(false);
            }
        })
    },[]);
    const ScrollTop=()=>{
        window.scrollTo({
            top:0,behavior:'smooth'
        })
    };

  return (
    <div>

<div className='bg-info'>

<div className="container">
<div className="row">
   <div className="col-lg-3 pt-5">
       
     <p className='para2'>Check mark is an  indian leading platform for all your utility payments which provides real time payment</p>
     <i class="fab fa-twitter"></i>&nbsp;&nbsp;&nbsp;&nbsp;
     <i class="fab fa-facebook"></i>&nbsp;&nbsp;&nbsp;&nbsp;
     <i class="fab fa-instagram"></i>&nbsp;&nbsp;&nbsp;&nbsp;
     <i class="fab fa-youtube"></i>&nbsp;&nbsp;&nbsp;&nbsp;
   </div>

   <div className="col-lg-3 text-center pt-3">
   <h3>CONTACT INFO</h3>
   <p className='para2'>PLOT NO-28 ROAD NO.3 SANTOSHIMATHA COLONY HYDERABAD TELANGANA<br/> (INDIA) +91-91xxxxxxxx<br/> SUPPORT@xxxx.IN<br/> TIMINGS-10AM to 6PM</p>
   </div>


   <div className="col-lg-3 text-center pt-3">
   <h3>SERVICES</h3>
   <div className='para2 mt-3'>
   <dt>RETURN & REFUND</dt><br/>
   <dt>TERM & CONDITION</dt><br/>
   <dt>CONTACT US</dt><br/>
   <dt>PRIVACY POLICY</dt><br/>
   </div>
   </div>

   <div className="col-lg-3 text-center pt-3">
   <h3>OTHERS</h3>
   <dt>HOME</dt><br/>
   <dt>ABOUT</dt><br/>
   <dt>PAYOUT</dt><br/>
   <dt>BPPS</dt><br/>
   </div>
</div><hr className='hr2'/>

<marquee><p className='text-center'>copyright © 2022 all rights reserved | DEVELOPED by CHECK MARK</p></marquee>
</div>
</div>
{showButton}
         <div className='top-btn' id='myBtn' onClick={ScrollTop}><i className='fas fa-angle-up fa-2x'></i></div>
  
    </div>
  )
}
