import React, { useState } from 'react'
import './SignIn.css'
import GoogleIcon from './assets/google'
import Eye from './assets/eye'
import Dashboard from './dashboard'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Midpic from './assets/SignUp/midpic'
import Esymbol from './assets/SignUp/esymbol'

function SignIn() {
  const [signInData,setSignInData]=useState({})

  return (
    <div className='main'>
    <div className='image'><Midpic/></div>
    <div className='signIn'>
      <div><Esymbol/></div>
      <div><h3>SignIn</h3></div>
      <div>Welcome to easy Onboarding<br></br>please signin to your account start adventures</div>
    <input className="input" value={signInData.username}
     onChange={(e)=>{setSignInData({...signInData,username:e.target.value})}}
     type='text' placeholder='username'></input>
    <input className="input" value={signInData.password}
    onChange={(e)=>{setSignInData({...signInData,password:e.target.value})}}
     type='text'placeholder='password'></input>
    <div className='forgot'>
      <div className='forgot'>
      <input type='checkbox'></input>Remember me</div>
      <a href='#'>forgot password</a>
    </div>
    <div><button style={{backgroundColor:'blue',color:'white'}}><Link to='/Dashboard1'>SignIn</Link></button></div>
     
      <div><button><GoogleIcon width='15'/>continue with google</button></div>
      <div id='dont'> Dont have an account? <a href='#'>SignUp</a></div>
   
      </div>
    </div>
  )
}

export default SignIn
