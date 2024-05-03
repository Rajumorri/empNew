import React from 'react'
import { Link } from 'react-router-dom'

function Logout() {
  return (
    <div>
     <Link to={"/SignUp"}>Logout</Link>
    </div>
  )
}

export default Logout
