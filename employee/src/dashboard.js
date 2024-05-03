import React from 'react'
import './dashboard.css'
import { Link,Outlet, Route, Router,Switch,BrowserRouter, Routes  } from 'react-router-dom'
import Dashboard1 from './sidebarcomponents/dashboard1'
import Sidebar from './sidebarcomponents/sidebar'
import TimeSheets from './sidebarcomponents/timesheets'
import Settings from './sidebarcomponents/settings'
import HelpCentre from './sidebarcomponents/helpcentre'
import Logout from './sidebarcomponents/logout'
import Notification from './assets/notification'
function Dashboard() {
  return (
   
    <div >
        <div className='navbar'>
          <div><p>Empob</p></div>
          <div> <Notification/></div>
         
        </div>
        <div className='emp'></div>  
       <div className='below'>
        <div className='sidebar'>
      
          <Sidebar/>

        </div>
        <div className='rightmenu'>
            <Outlet/>
        </div>
        </div>
    </div>
  )
}

export default Dashboard
