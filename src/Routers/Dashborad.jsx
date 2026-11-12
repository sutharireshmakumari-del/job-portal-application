import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const Dashborad = () => {
  let navigate=useNavigate()
  let handleNavigate=()=>{
    localStorage.removeItem("isLoggedIn")
    navigate("/login")
  }
  return (
    <div>
      <NavLink to="/dashboard/jobportal">Job Portal</NavLink>
      <NavLink to="/dashboard/application>">Application</NavLink>
      <navlink to="/dashboard/rejectedoffer">Rejected Offer</navlink>
      <h1>welcome User💐</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, tempore.</p>
      <button onClick={handleNavigate}>Logout</button>
      <Outlet/>
    </div>
  )
}

export default Dashborad