import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
 let navigate= useNavigate()
 let handleNavigate=()=>{
  localStorage.setItem("isLoggedIn",true)
  navigate("/dashborad")
 }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleNavigate}>Login</button>
    </div>
  )
}

export default Login