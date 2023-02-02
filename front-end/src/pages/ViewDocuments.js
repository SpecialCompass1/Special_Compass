import React, {useEffect, useState} from 'react';

export const ViewDocuments = () => {

    const[accommodation, setAccommodation] = useState([{
        prof:'',
        course:''
    }])
    useEffect(()=>{
       fetch("/viewdoc").then(res=>{
        if(res.ok){
            return res.json()
        }
       }).then(jsonRes=> setAccommodation(jsonRes));
    })
    return <div className='container'>
        <h1>You Can View Required Documents Here </h1>
        
        {accommodation.map(note=>
        <div>
           <h3>{accommodation.prof}</h3>
            <h3>{accommodation.course}</h3>
            </div>)}
    </div>
}

// const ViewDocuments = () =>{
//     return(
//         <div>
//             <h1>ViewDocuments page</h1>
//         </div>
//     );
// };
