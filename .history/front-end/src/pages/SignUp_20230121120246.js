
import React from 'react';

export const SignUp = () => {
   
    return(
        <div className='content-container'>
              <h1> Sign UP As: </h1>
            <hr />
               <a href="/studentsignup"><button className="Button">Student
                </button></a> 
                 
               
                <a href="/pssignup"><button className="Button">School Advisor
                </button></a>

              
               
                <a href="/hcsignup"><button className="Button">HealthCare Provider 
                </button></a>
                
        </div>
    )
    
   
            
}