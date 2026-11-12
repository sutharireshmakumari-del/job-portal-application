//!1) Click
//@example1(fuction creating separtae)

// const Events = () => {
//   let handleTime=()=>{
//     alert(new Date().toTimeString())
//   }
//   return (
//     <div>
//       <button onClick={handleTime}>Dipaly button</button>
//     </div>
//   )
// }

// export default Events
//@example 2
//eatindirect function and calling)

// const Events = () => {
//   return (
//     <div>
// <button onClick={()=>console.log(Math.random())}>
//   Generate random number
// </button>

//     </div>
//   )
// }

// export default Events
//@example 3(calling function with argument)


// const Events = () => {
//  let handleGreet=(user)=>{
//   console.log(`good afternoon ${user}`)
//  }
  
//   return (
//     <div>
//       <button onClick={()=>handleGreet("ravi")}>
// Greet user
//       </button>
//     </div>
//   )
// }

// export default Events
//#21-06-2026
//@Event object


// const Events = () => {
//   let demo=(e)=>{
//  console.log(e)
//  console.log(e.target)
//  console.log(e.type)
//  console.log(e.target.InnerHTML)
//   }
//   return (
//     <div>
//       <button onClick={demo}>
//         Click on button
//       </button>
//     </div>
//   )
// }

// export default Events
//! Focus blur and change
//  const Events = () => {
//   let handleFocus=(e)=>{
//     e.target.style.background="yellow"

//   }
//   let handleBlur=(e)=>{
//     e.target.style.background="green"

//   }
//   let handleChange=(e)=>{o
//     e.target.style.background="blue"
//   }
//   return (
//     <div>
//       <input type="text" onFocus={handleFocus} onBlur={handleBlur} onChange={handleChange} />
//     </div>
//   )
// }
// export default Events
//!submit

// const Events = () => {
//   let handleSubmit=(e)=>{
// e.preventDefault()//it prevents loading page continously
// //alert("Form submitted😁")// it gives alert message
// console.log("form submitted😄")
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="email" placeholder="Enter your email" />
//       <br/>
//       <input type="password" placeholder="Enter your password"/>
//       <br/>
//       <input type="submit" value="Login" />
//     </form>
  
//   )
// }

// export default Events

//!MouseEnter MouseMove and MouseLeave


//  const Events = () => {
//   let handleMouseEnter=(e)=>{
//   e.target.style.background="red"
//   }
//   let handleMouseMove=(e)=>{
//     let red=Math.floor(Math.random()*255) //these r to make multiple colors
//     let green=Math.floor(Math.random()*255)
//     let blue=Math.floor(Math.random()*255)

//     e.target.style.background=`rgb(${red},${green},${blue})`
//   }
//      let handleMouseLeave=(e)=>{
//     e.target.style.background="blue"
//   }

  
  
//   return (
//     <div>
//       <textarea  rows="20" col="300" onMouseEnter={handleMouseEnter} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}></textarea>

//     </div>
//   )
//  }

// export default Events
