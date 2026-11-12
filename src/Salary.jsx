import React, { useState } from 'react'

export const Salary = () => {
let[salary,setSalary]=useState(10000)
let handleSalary=()=>{
setSalary((preState)=>{
  console.log(preState)
  return preState+1000
})
}
  return (
    <div>
      <h1>Salary:{salary}</h1>
      <button onClick={handleSalary}>Increment Salary</button>
    </div>
  )
}
