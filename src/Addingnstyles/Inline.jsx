import React from 'react'

const Inline = () => {
  let styleforPara={
    color:"yellow",
    backgroundColor:"green",
    padding:"40px"
  }
  let styleforbtn={
    color:"lightgreen",
    backgroundColor:"yellow",
    width:"100%",
    padding:"15px"
  }
  return (
    <div>
      //styling in same line
      <h1 style={{color:"pink",backgroundColor:"royalblue",textAlign:"center"}}>Happy birthday🎂🍫</h1>
      //styling by creating object separate
      <p style={styleforPara}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, aut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Non possimus aliquid unde.</p>
      <button style={styleforbtn}>Click</button>
    </div>
  )
}

export default Inline