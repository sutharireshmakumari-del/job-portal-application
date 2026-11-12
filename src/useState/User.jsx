import React, { useState } from 'react'

const User = () => {
 let[info,setInfo]= useState({name:"Anupama",age:30})
 let{name,age}=info
 let handleAge=()=>{
setInfo({...info,age:32})
 }
  return (
    <div>
      <h1>Name:{name}</h1>
      <h1>Age:{age}</h1>
      <button onClick={handleAge}>Update Age</button>
    </div>
  )
}

export default User