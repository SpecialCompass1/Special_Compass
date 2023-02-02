import React, { useState } from 'react';
import ok from '../images/ok.png';
import '../App.css';

export const RequestAccommodation = () => {

 
  return (
//    <div className="image">   
//     <a className="image" ><img  src={ok} alt="Kids" className="image"/></a>
//     <div ClassName="center">Book an Appointment</div>
//    </div>
<div className="container">
  <a><img  src={ok} alt="Kids" className="image"/>
  <div class="text-block">
    <h4>Have a Question? Schedule an Appointment</h4>
    <a href='https://calendly.com/mk0805511/30min'><button className="button">Book Now</button></a>
    
  </div>
  </a>
</div>
   
  );
}

