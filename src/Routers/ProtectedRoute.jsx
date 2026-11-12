import React from 'react'
import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({children}) => {
let loginState=localStorage.getItem("isLoggedIn")
if(loginState){
  return children
}
return <Navigate to="/login"/>

}
export default ProtectedRoute