
import {useState} from 'react';
import {useHistory} from 'react-router-dom';




export const PSLogIn = () => {

    const [errorMessage, setErrorMessage] = useState('');
const [emailValue, setEmailValue] = useState('');
const [passwordValue, setPasswordValue] = useState('');

const history = useHistory();
const onLogInClicked = async () => {
  alert('abcd');
  
}

    return (
        <div className="content-container">
            <h1>Post-secondary Log In</h1>
            <hr />
            {errorMessage && <div className="fail">{errorMessage}</div>}

            <label htmlFor="email"><strong><i> Email :</i></strong></label>
            <input 
            value={emailValue}
            onChange={e => setEmailValue(e.target.value)}
            Placeholder="xyz@gmail.com" />

<label htmlFor="password"><strong><i> Password :</i></strong></label>
            <input type="password" 
            value={passwordValue}
            onChange={E => setPasswordValue(E.target.value)}

            Placeholder="password" />
            <hr />

            <button 
            disabled={!emailValue || !passwordValue}
            onClick={onLogInClicked}>Log In</button>
            <button onClick={() => history.push('/forgot-password')}>Forgot your password?</button>
            <button onClick={() => history.push('/pssignup')}>Don't have an account? Sign Up</button>
        </div>
    )
}