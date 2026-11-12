import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
   let navigate=useNavigate()

  return <>
    <h1>Home</h1>
    <button onClick={()=>navigate("/about",{state:{name:"Reshma",age:20}})}>go to about page</button>
  </>
}

export default Home