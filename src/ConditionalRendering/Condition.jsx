//! 1) Ternary operator
//$Example 1

// const Condition = () => {
//   let Istejaface=true;
//   return (
//     <div>
//       {Istejaface ? <h1> teja face is ugly👺</h1>:<h1> teja face is pretty😁</h1>}
//     </div>
//   )
// }

//export default Condition
//$ example 2
// import Love from "./Love"
// import Money from "./Money"
// const Condition = () => {
//   let isLoveImp=true
//   return (
//     <div>
//       {isLoveImp ?<Love/>:<Money/> }
//     </div>
//   )
// }

// export default Condition
//#Example 3


// const Condition = () => {
//   let age=22
//   return (
//     <div>
//       {
//         age>=18?<h1>Elligible for vote😄</h1>:<h1>not elligible to vote🥺</h1>
//       }
//     </div>
//   )
// }

// export default Condition
//!2)Short Circuit &&
//!Exmaple 1

// const Condition = () => {
//   let weekend =true;
//   return (
//     <div>
//       {
//         weekend && <h1>Sleep nicely😄</h1>
//       }
//     </div>
//   )
// }

// export default Condition



//!Example 2
// import Love from "./Love"
// const Condition = () => {
//   let isLoveImp=true
//   return (
//     <div>
//       {
//         isLoveImp && <Love/>
//       }
//     </div>
//   )
// }
// export default Condition
//! If-Else statement
//#Example 1


// const Condition = () => {
//   let haveMoney=true
//   if(haveMoney){
//     return <h1>eat out side😋</h1>
//   }else{
//     return<h1>eat at hostel🥺</h1>
//   }
// }

// export default Condition
//#example 2

// const Condition = () => {
//   let marks=88
//   if(marks>=90){
//     return <h1>Grade A</h1>
//   }else if(marks>=70){
//     return <h1>Grade B</h1>
//   }else if(marks>=50){
//     return <h1>Grade C</h1>
//   }else{
//     return <h1>Fail</h1>
//   }
// }

// export default Condition
//!4) element variable
//#exapmle 1
// import React from 'react'

const Condition = () => {
  let trainer="pavan"
 let result;
 if(trainer=="pavan"){
  result ="core java Tainer"
 }else if(trainer=="yasin"){
  result="sql trainer"
 }else if(trainer=="Monty"){
  result="Python trainer"
 }else{
  result="not famous person"
 }
 return result
}

export default Condition
//#real world example

// const Condition = () => {
//   let darkmode=true
//  return
//  (
//   <button>{dabutton/>
//  )
// }

// export default Condition