import React, { useState } from 'react'
import GoogleIcon from './assets/google'
import { Link, json } from 'react-router-dom'
import SignUpPic from './assets/SignUp/signuppic'
import Midpic from './assets/SignUp/midpic'
import './signup.css'
import Esymbol from './assets/SignUp/esymbol'
function SignUp() {
  const[signUpData,setSignUpData]=useState({});
  const handleSignUp=(data)=>{
    localStorage.setItem("signUp",JSON.stringify(data))
  }

  return (
    <div className='main'>
        <div className='image'><Midpic/></div>
        <div className='signUp'>
          <div><Esymbol/></div>
          <div className='title'><h3>Sign Up</h3></div>
          <div className='title'>Make your onboarding a piece of cake</div>
          <div className>
            <form>
            <label >Please select your category:</label>
            <div >
            <input type="radio" name="category" value="option1"/> Option 1
            <input type="radio" name="category" value="option2"/> Option 2
            <input type="radio" name="category" value="option3"/> Option 3
            <input type="radio" name="category" value="option4"/> Option 4
            </div>
              <div className='details'>
                <input value={signUpData.companyname} 
                onChange={(e)=>{setSignUpData({...signUpData,companyname:e.target.value})}}
                type='text' placeholder='company name'></input>
                <div style={{'display':'flex'}}>
                <input value={signUpData.firstname}
                onChange={(e)=>{setSignUpData({...signUpData,firstname:e.target.value})}}
                 type='text' placeholder='first name' style={{'width':'50%'}}></input>
                <input value={signUpData.lastname} 
                onChange={(e)=>{setSignUpData({...signUpData,lastname:e.target.value})}}
                type='text' placeholder='last name'style={{'width':'50%'}}></input>
                </div>
                <input value={signUpData.email} 
                onChange={(e)=>{setSignUpData({...signUpData,email:e.target.value})}}
                type='text' placeholder='email'></input>
                <input value={signUpData.password} 
                onChange={(e)=>{setSignUpData({...signUpData,password:e.target.value})}}
                type='text'placeholder='password'></input>
                <input value={signUpData.confirmpassword} 
                onChange={(e)=>{setSignUpData({...signUpData,confirmpassword:e.target.value})}}
                type='text' placeholder='confirm password'></input>
              </div>
              <div className>
                <div>
              <input type='checkbox' required></input><a>I agree to <a href='#'>privacy policy & terms</a></a>
              </div>
              <div>
              <button onClick={handleSignUp(signUpData)} style={{'margin-left':'0px','backgroundColor':'blue'}}>SignUp</button>
              <div><button> <GoogleIcon width='15'/>continue with google</button></div>
              <div id='dont'>Already have an account<Link to='/SignIn'>SignIn</Link></div>
              </div>
             
              </div>
            </form>
          </div>
        </div>
  
       </div>
  
  )
}

export default SignUp
