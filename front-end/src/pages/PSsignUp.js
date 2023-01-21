import React from 'react';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from '../axios/axios';
//import { useToken } from '../auth/useToken';

export const PSsignUp = () => {
    
    const [errorMessage, setErrorMessage] = useState('');
const [emailValue, setEmailValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');
const[nameValue, setFullName] = useState('');
const[PSEmployeeIDValue, setPSEmployeeID] = useState();
const[collegeNameValue, setCollegeName] = useState();
const [confirmpasswordValue, setconfirmPasswordValue] = useState('');

const history = useHistory();
const onSignUpClicked = async () => {
    axios.post('/pssignup' , {
        email: emailValue,
        password: passwordValue,
        PSEmployeeID: PSEmployeeIDValue,
        fullName: nameValue,
        collegeName: collegeNameValue

    }).then((res)=>{
        history.push("/pslogin");
    }).catch((err)=>{
        alert("email already exists!")
    })

    
    
}

    return (
        <div className="content-container">
            <h1> Post-Secondary Sign UP</h1>
            <hr />
            {errorMessage && <div className="fail">{errorMessage}</div>}

            <label htmlFor="fullname"><strong><i> Full Name :</i></strong></label>
            <input 
            value={nameValue}
            onChange={e => setFullName(e.target.value)}
            Placeholder="Your Name.." />

            <label htmlFor="PSid"><strong><i> PS Employee ID :</i></strong></label>
                        <input 
                        value={PSEmployeeIDValue}
                        onChange={e => setPSEmployeeID(e.target.value)}
                        Placeholder="Your PS employee Id.." />

            <label htmlFor="collegename"><strong><i> College Name :</i></strong></label>
                        <input 
                        value={collegeNameValue}
                        onChange={e => setCollegeName(e.target.value)}
                        Placeholder="Your College Name.." />



            <label htmlFor="email"><strong><i> Email :</i></strong></label>
            <input 
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
            Placeholder="xyz@gmail.com" />

<label htmlFor="password"><strong><i>Password :</i></strong></label>
            <input type="password" 
            value={passwordValue}
            onChange={E => setPasswordValue(E.target.value)}

            Placeholder="password" />
<label htmlFor="confirmpassword"><strong><i>Confirm Password :</i></strong></label>
<input type="password" 
            value={confirmpasswordValue}
            onChange={E => setconfirmPasswordValue(E.target.value)}

            Placeholder="Confirm password" />

            <hr />

            <button 
            disabled={!emailValue || !passwordValue || passwordValue !== confirmpasswordValue}
            onClick={onSignUpClicked}>Sign Up</button>
           
            <button onClick={() => history.push('/login')}>Already have an account? Log In</button>
        </div>
    )
}