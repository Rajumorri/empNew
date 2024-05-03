import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './addemployee.css'

function AddEmployee(props) {
  console.log(props)
const [formData,setFormData]=useState({})

const handleSave=(data)=>{
  localStorage.setItem("data",JSON.stringify(data))
}
  
  return (props.trigger)?(
    <div className='form'>
        <div className='innerform'  > 
        <form>
            <div className='nav'style={{}}>
                <div> Add Employee</div>
                <div><Link to={'/Dashboard1'}><button>X</button></Link></div>
            </div>
             
            <div><label>name</label></div>
            <div>  <input value={formData.name} onChange={(e)=>{
              console.log(formData)
              setFormData({...formData,name:e.target.value})}} type='text'/></div>
            <div style={{display:'flex'}}>
                <div>
                <div> <label>email</label></div>
                <input value={formData.email} onChange={(e)=>{
              console.log(formData)
              setFormData({...formData,email:e.target.value})}}  type='text'></input>
                </div>
                <div>
                <div><label>phone</label></div>
                <input type='text'></input>
                </div>
            </div>
            <div><h4>uploaded documents</h4></div>
            <div>please select what type of documents you want to submit?</div>
            <input type="radio" name="category" value="option1"/>viza
            <input type="radio" name="category" value="option2"/> passport
            <input type="radio" name="category" value="option3"/> H1B visa
            <input type="radio" name="category" value="option4"/> i9
            <input type="radio" name="category" value="option1"/> I94
            <input type="radio" name="category" value="option2"/> LFC
           <div><button style={{color:'white',background:'blue',width:"30%"}}>upload document</button></div>
 
           <div className="button-container">
                       <button>cancel</button>
                       <button onClick={handleSave(formData)} style={{backgroundColor:'blue',color:'white'}}>save</button>
           </div>
        </form>
        </div>
    </div>
  ):"";
}

export default AddEmployee
