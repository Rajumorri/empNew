
import './App.css';
import SignIn from './SignIn';
import SignUp from './SignUp';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from './dashboard';
import Dashboard1 from './sidebarcomponents/dashboard1';
import TimeSheets from './sidebarcomponents/timesheets';
import Settings from './sidebarcomponents/settings';
import HelpCentre from './sidebarcomponents/helpcentre';
import Logout from './sidebarcomponents/logout';
import AddEmployee from './sidebarcomponents/addemployee';

function App() {
  return (
  
      <Routes>
      <Route index path='/SignUp'  element={<SignUp/>} />
      <Route   path="/SignIn" element={<SignIn/>} />
      <Route  path="/" element={<Dashboard/>} >
      <Route  path="/Dashboard1" element={<Dashboard1/>}/>
      <Route  path='/Timesheets' element={<TimeSheets/>}/>
      <Route path='/Settings' element={<Settings/>}/>
      <Route path='/Helpcentre' element={<HelpCentre/>}/>
      <Route path='/Logout' element={<Logout/>}/>
      <Route path='/AddEmployee' element={<AddEmployee/>}/>
      </Route>
      
          
      </Routes>
     
  
  );
}

export default App;
