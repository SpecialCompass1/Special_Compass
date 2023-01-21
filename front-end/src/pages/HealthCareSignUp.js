
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from '../axios/axios';
//import { useToken } from '../auth/useToken';


export const HealthCareSignUp = () => {
    
    const [errorMessage, setErrorMessage] = useState('');
const [emailValue, setEmailValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');
const[nameValue, setFullName] = useState('');
const[HCEmployeeIDValue, setHCEmployeeID] = useState();
const[OfficeValue, setOfficeName] = useState('');
const [confirmpasswordValue, setconfirmPasswordValue] = useState('');

const history = useHistory();
const onSignUpClicked = async () => {
    axios.post('/hcsignup' , {
        email: emailValue,
        password: passwordValue,
        HCProfessionalID: HCEmployeeIDValue,
        fullName: nameValue,
        OfficeName: OfficeValue

    }).then((res)=>{
        history.push("/hclogin");
    }).catch((err)=>{
        alert("email already exists!")
    })
}

    return (
        <div className="content-container">
            <h1> HealthCare Provider Sign UP</h1>
            <hr />
            {errorMessage && <div className="fail">{errorMessage}</div>}

            <label htmlFor="fullname"><strong><i> Full Name :</i></strong></label>
            <input 
            value={nameValue}
            onChange={e => setFullName(e.target.value)}
            Placeholder="Your Name.." />

<label htmlFor="HCid"><strong><i> HC Employee ID :</i></strong></label>
            <input 
            value={HCEmployeeIDValue}
            onChange={e => setHCEmployeeID(e.target.value)}
            Placeholder="Your HC employee Id.." />

<label htmlFor="officename"><strong><i> Office Name :</i></strong></label>
            <input 
            value={OfficeValue}
            onChange={e => setOfficeName(e.target.value)}
            Placeholder="Your Office Name.." />




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