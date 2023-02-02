import React, { useState } from 'react';
// import Backsacks from '../images/Backsacks.png';
import '../App.css';

export const ApproveAccommodation = () => {
    
        const [prof, setProf] = useState("");
        const [course, setCourse] = useState("");
        
    
        return (
          <div>
            <h1>Approve Accommodations</h1>
            <br></br>
            <form className="content-container1">
            <h3> Please Provide the following details </h3>
            <br></br>
            <label>
              Professor Name:
              <input
                type="prof"
                value={prof}
                onChange={(e) => setProf(e.target.value)}
              />
            </label>
            <br /><br></br>
            <label>
              Course Name:
              <input
                type="course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
              />
            </label>
            
            <br /><br>
            </br>
            <button type="submit">Submit</button>
          </form>
          </div>
        );
      
    
 
}