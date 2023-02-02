import React,{useState} from 'react';
import GoogleForm from 'react';
import background from '../images/background.jpeg'
// import axios from 'axios';


export const CompleteProfile = () => {
    const [files, setFiles] = useState([]);

    function handleFileChange(event) {
      setFiles(event.target.files);
    }
    return (
        <div className="container">
        <a><img  src={background} alt="bgImage" id="bg-image" width="1150" height="700"/>
         <div class="text-block">
         <h3>Please Complete Your Profile</h3>
         <br></br><br></br>
         <form className="content-container1">
            <input type="file" onChange={handleFileChange} multiple />
            
            <button type="submit" >
              Upload
            </button>
          </form>
          <div>
            <br></br>
      <a href="https://forms.gle/gcpZdZnSKVDg49qk7">
        <button id="form-btn">School Disability Form</button>
      </a>
         </div>
    
  </div>
  </a>
</div>
        
      );
    }
  
// <button type="submit"onClick={handleSubmit} >
  

//   <br></br>
//           <div>
//             <h3>Uploaded Files:</h3>
//             <ul>
//               {files.map((file) => (
//                 <li key={file.name}>{file.name}</li>
//               ))}
//             </ul>
//           </div>







{/* <div >
            <a ><img  src={background} alt="bgImage" className="image"/>
            <h1>Please Complete Your Profile</h1>
            <br></br><br></br><br></br>
          <form className="content-container">
            <input type="file" onChange={handleFileChange} multiple />
            
            <button type="submit" >
              Upload
            </button>
          </form>
          <div>
            <br></br>
      <a href="https://forms.gle/gcpZdZnSKVDg49qk7">
        <button id="form-btn">School Disability Form</button>
      </a>
         </div>
            </a>
            
          
        </div> */}