import React from 'react'
import Logout from './logout'
import HelpCentre from './helpcentre'
import Settings from './settings'
import TimeSheets from './timesheets'
import Dashboard1 from './dashboard1'
import { Link, Outlet, useNavigate } from "react-router-dom";
import './sidebar.css';

function Sidebar() {
  const navigate=useNavigate();
  return (
    <div className='ul'>
      <ul style={{}}>
       <Link to='/Dashboard1'style={{ textDecoration: 'none' }} ><li>Dashboard1</li></Link>
       <Link to='/Timesheets'style={{ textDecoration: 'none' }}><li>TimeSheets</li></Link>
       <hr></hr>
       <Link to='/Helpcentre' style={{ textDecoration: 'none' }}><li>HelpCentre</li></Link>
       <Link to='/Settings' style={{ textDecoration: 'none' }}><li>Settings</li></Link>
       <Link to='/SignUp'style={{ textDecoration: 'none' }} ><li >Logout</li></Link>

      </ul>
    </div>
  )
}

export default Sidebar
