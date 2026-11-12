//!example(focusing input field)
// import { useRef } from "react"

// const Reference = () => {
//   let inputRef=useRef(null)
//   let handleFocus=()=>{
// inputRef.current.focus()
//   }
//   return (
//     <div>
//       <input type="text" ref={inputRef}/>
//       <button  onClick={handleFocus}>Click to focus</button>
//     </div>
//   )
// }

// export default Reference
//!example 2(set the value of input)
// import  { useRef } from 'react'

// const Reference = () => {
//   let inputRef=useRef(null)
//   let handleValue=()=>{
// inputRef.current.value="Reshma"
// inputRef.current.style.background="skyblue"
// }
//   return (
//     <div>
//       <input type="text" ref={inputRef}/>
//       <button onClick={handleValue}>set value</button>
//     </div>
//   )
// }

// export default Reference
//!esxample3
import  { useRef } from 'react'

const Reference = () => {
  let count=useRef(0)

  let handleCount=()=>{
    console.log(count.current)
count.current++
  }
  return (
    <div>
      <button onClick={handleCount} >Count</button>
    </div>
  )
}

export default Reference