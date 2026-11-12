

// const JavasccriptXml = () => {
//   return <h1>hello </h1>
// }

// export default JavasccriptXml


//!rules(rafce)
//@ 1)Multiple JSX elements must be wrapped in single parent


// const JavasccriptXml = () => {
//   return (
//     <div><h1>JavasccriptXml</h1>
//     <p>Lorem ipsum dolor sit amet.</p>
//     <button>clikck</button>
//     </div>
//   )
// }

// export default JavasccriptXml
//@2) unpaided tags must be closed properly

// const JavasccriptXml = () => {
//   return (
//     <section>
//       <img src="favicon.svg"/>
//       <input type ="text"></input>
//     </section>
//   )
// }

// export default JavasccriptXml

//@3) Attributes like class and should replaced  with className and htmlfor

// const JavasccriptXml = () => {
//   return (
//     <div><h1 className="heading">hello🧑‍💻</h1>
//     <label htmlFor="name">name</label>
//     <input id="name" type="text"/>
//     </div>
//   )
// }

// export default JavasccriptXml


// //@4) JSX elements must be written in lowercae

// const JavasccriptXml = () => {
//   return <button>Click me here😘</button>
// }

// export default JavasccriptXml

//$Fragment
// import { Fragment } from "react"

// const JavasccriptXml = () => {
//   return <>
//    <h1>hello</h1>
//    <p>Lorem ipsum dolor sit amet.</p>
//    <button>click</button>
//    </>
  
// }

// export default JavasccriptXml

//@5) Expression
const JavasccriptXml=()=>{
  let name="pavan"
  function subject(){
    return "core java"
  }
  let hobbies=["cooking","teaching","singing"]
  let isSingle=true

  return <div>
    <h1>hello i am {name}</h1>
    <h1>iam {26-4}years old</h1>
    <p>relationship status:{isSingle?"happy":"commited"}</p>
    <p> i teach {subject()} subject</p>
    <ol>
      {
        hobbies.map((ele)=>{
          return <li>{ele}</li>
        })
      }
    </ol>

  </div>
}
export default JavasccriptXml