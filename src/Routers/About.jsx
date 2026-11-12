import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const About = () => {
  let location=useLocation()
  let navigate=useNavigate()
  return (
    <>
    <h1>About</h1>
    <p>{location?.state?.name}{location?.state?.age}</p>
    <button onClick={()=>navigate(-2)}> 🚶‍♂️‍➡️move back</button>
    </>
  )
}

export default About