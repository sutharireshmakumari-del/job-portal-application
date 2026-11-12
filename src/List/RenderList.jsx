//#Example 1

// const RenderList = () => {
//   let Restaurant=["mehfil","svm","pista house","swagath"]
//   return (
//    <>
//    <h1>List of Restaurant😋</h1>
//    <ol>
//     {
//       Restaurant.map((ele,index)=>{
//         return <li key={index}>{ele}</li>
//       })
//     }
//    </ol>
//    </>
//   )
// }

// export default RenderList
//#Exampale 2

// const RenderList = () => {
//   let marks=[20,50,68,94,99,47]
//   return (
//     <>
//     <h1>Marks gain by students📚</h1>
//     <ul type="square">
//       {
//         marks.map((marks,index)=><li key={index}>{marks}</li>
//         )
//       }
//     </ul>
//     </>
//   )
// }

// export default RenderList
// //#Example 3
// import { Fragment } from "react"
// const RenderList = () => {
//   let reastaurent=[{id:1,name:"svm",place:"medipally"},{id:2,name:"tulips",place:"boduppal"},{id:3,name:"parivar", place:"ghatkeser"}]
//   return (
//     <div>
//       <h1>list of Restaurant names &places🍝</h1>
//       {
//         reastaurent.map((item)=>{
//           return <Fragment key={item.id}>
//             <h1>{item.name}</h1>
//            <h1>{item.place}</h1>
           
//            </Fragment>
//         })
//       }
//     </div>
//   )
// }

// export default RenderList
//#example 4
// import { Fragment } from "react"

// const RenderList = () => {
//   let trainers=[{id:1,name:"pavan",sub:"java"},{id:2,name:"ravi",sub:"sql"}]
//   return (
//     <div>
//       <h1>list of trainers and their subjects👩‍💻</h1>
//       {
//         trainers.map((ele)=>{
//           return <fragment key= {ele.id}>
//             <h1>{ele.name}</h1>
//             <h1>{ele.sub}</h1>
//           </fragment>
//         })
//       }
//     </div>
//   )
// }

// export default RenderList
//#Example5

import Places from './Places'
const RenderList = () => {
  let FamousPlaces=[{id:1,name:"Badrakali temple🛕",loc:"warangal"},{id:2,mame:"chairminar",loc:"hyderabad"},{id:3,name:"RK beach🏖️",loc:"vizag"}]
  return <Places data={FamousPlaces}/>
  
}

export default RenderList