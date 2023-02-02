import React from 'react'
import {ToastContainer, toast} from 'react-toastify';
import { useHistory, useParams, NavLink } from 'react-router-dom';
import axios from '../axios/axios';
import { useState } from 'react';
import { useEffect } from 'react';

export const ForgotPassword = () => {
  const {id, token} = useParams();
  const [data2, setData] = useState(false);
  const history = useHistory();
  
  const [passwordValue, setPasswordValue] = useState('');
  const[message, setMessage] =useState('');

const userValid = async () => {
  axios.get(`/forgotpassword/${id}/${token}` , {
    headers:{
      "Content-Type":"application/json"
    }
      
  }).then((res)=>{
      console.log("User Valid")
  }).catch((err)=>{
    history("*")
  })

}
const setval = (e) => {

  setPasswordValue(e.target.value)
}
  const sendpassword = async (e) => {
    e.preventDefault()
    axios.post(`/${id}/${token}` , {
      password:passwordValue,
      headers:{
        "Content-Type":"application/json"
      },body:JSON.stringify({passwordValue})
        
    }).then((res)=>{
     
      setPasswordValue("")
      setMessage(true)
      // history.push("/studentlogin")
  
    }).catch((err)=>{
      alert("! Token Expired. Generate New Link")
    })
  }


/*
export const ForgotPassword = () => {
const {id, token} = useParams();
const [data2, setData] = useState(false);
const history = useHistory();

const [passwordValue, setPasswordValue] = useState('');
const[message, setMessage] =useState('');

const userValid = async()=>{
  const res = await fetch(`/forgotpassword/${id}/${token}`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json"
    },body:JSON.stringify({passwordValue})
  });

  const data = await res.json()
  if(data.status === 200){
    console.log("user valid")
  }else{
    history("*")
  }
}

const setval = (e) => {

setPasswordValue(e.target.value)
}

const sendpassword = async(e) => {
  e.preventDefault()

  const res = await fetch(`/${id}/${token}`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({passwordValue})
  });

  const data = await res.json()
  if(data.status === 200){
    setPasswordValue("")
    setMessage(true)

  }else{
    toast.error("! Token Expired. Generate New Link",{
      position: "top-center"
    })
  }
}
*/
useEffect(() => {
  userValid()
  setTimeout(() => {
      setData(true)
  }, 3000)
})





  return (
    <>
       <div className="content-container">
       
            <h1>Enter Your New Password</h1>
            <hr />
           
<div>
{message ? <p style={{color:"green", fontWeight:"bold"}}>Password successfully Updated.Log In again with your New Password</p>:""}
            <label htmlFor="password"><strong><i> New Password :</i></strong></label>
            <input  type="password"
            value={passwordValue} 
            onChange={setval}
            
            Placeholder="Enter Your New Password" />


            <button 
           
            onClick={sendpassword}>Send</button>
            
        </div>
        <ToastContainer />
        </div>
         </>
       
  
  )
}





