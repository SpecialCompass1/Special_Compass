import React from "react";
import {ToastContainer, toast} from 'react-toastify';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios/axios";



export const PasswordReset = () => {
    const [emailValue, setEmailValue] = useState('');
    const setVal = (e)=>{
        setEmailValue(e.target.value)
    }
    const [message, setMessage] = useState("");
const history = useHistory();

const sendLink = async (e) => {
    
    e.preventDefault()
    
     
    axios.post('/sendpasswordlink' , {
        email: emailValue,
       // password: passwordValue
       headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ emailValue })

    }).then((res) =>{
        setEmailValue("");
         setMessage(true)

    });  
  
}


    







/*
export const PasswordReset = () => {
    const [emailValue, setEmailValue] = useState('');
    const setVal = (e)=>{
        setEmailValue(e.target.value)
    }
    const [message, setMessage] = useState("");

    const sendLink = async(e)=>{
        e.preventDefault()

        if (emailValue === "") {
            toast.error("email is required!", {
                position: "top-center"
            });
        } else if (!emailValue.includes("@")) {
            toast.warning("includes @ in your email!", {
                position: "top-center"
            });
        } else {
            const res = await fetch("/sendpasswordlink", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ emailValue })
            });

            const data = await res.json();

            if (data.status == 200) {
                setEmailValue("");
                setMessage(true)
            } else {
                toast.error("Invalid User",{
                    position: "top-center"
                })
            }
        }
    }
*/
    
    return (
        <div>
         <>
         <div className="content-container">
            <h1>Enter Your Email</h1>
            <hr />
           

            <label htmlFor="email"><strong><i> Email :</i></strong></label>
            <input  type="email"
            value={emailValue} 
            onChange={setVal}
            
            Placeholder="xyz@gmail.com" />
{message ? <p style={{color:"green", fontWeight:"bold"}}>password reset link sent successfully in your email</p>:""}

            <button 
           
            onClick={sendLink}>Send</button>
            
        </div>
      
         </>
        </div>
    )
    }
