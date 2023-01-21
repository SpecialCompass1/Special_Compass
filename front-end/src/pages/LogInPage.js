
import React from 'react';

export const LogInPage = () => {
   
    return(
        <div className='content-container'>
              <h1>Log In As: </h1>
            <hr />
               <a href="/studentlogin"><button className="Button">Student
                </button></a> 
                 
               
                <a href="/pslogin"><button className="Button">School Advisor
                </button></a>

              
               
                <a href="/hclogin"><button className="Button">HealthCare Provider 
                </button></a>
                
        </div>
    )
    
   
            
}