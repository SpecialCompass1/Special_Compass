import React from 'react';

export const StudentDashboard = () => {
   
    return(
        <div className='content-container'>
              <h1>Student Dashboard </h1>
            <hr />
               <a href="/completeprof"><button className="Button">Complete Profile
                </button></a> 
                 
               
                <a href="/reqaccomodation"><button className="Button">Request Accomodation
                </button></a>

              
               
                <a href="/approveacc"><button className="Button">Approve Accomodation 
                </button></a>
                
                <a href="/viewdoc"><button className="Button">View Documents 
                </button></a>

               
                
                
        </div>
    )
}
