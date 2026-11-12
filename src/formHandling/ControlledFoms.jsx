// import React, { useState } from 'react'



// const ControlledFoms = () => {
//  let [details,setDetails]=useState({
//     name:"",
//     email:"",
//     password:"",
//     phone:"",
//     gender:"",
//     skills:"",
//     photo:"",
//     country:"",
//     feedback:"",
//     color:"#000",
//     range:""

//   })
//   let{name,email,password,phone,gender,skills,photo,country,feedback,color,range}=details
//   let handleChange=(e)=>{
//     let{name,value,type,files,checked}=e.target
//   if(type==="checkbox"){
//    let copiedSkills=[...skills]
//    if(checked){
//     copiedSkills.push(value)
//    }else{
//     copiedSkills=copiedSkills.filter((item)=>{
//       return item!=value
//     })
//    }
//    setDetails({...details,[name]:copiedSkills})

//   }else if(type==="file") {
//     setDetails({...details,[name]: files[0].name})
//   }else{
//       setDetails({...details,[name]: value})
//   }

//   }

//   let handleSubmit=(e)=>{
//     e.preventDefault()
//     console.log(details)
//   }
//   return (
//    <form onSubmit={handleSubmit}>
//     <fieldset>
//       <legend>
//         Registration Form
//       </legend>
//       <label htmlFor="name">Name</label>
//       <input type="text" id="name=" name="name" value={name} onChange={handleChange} />
//       <br></br>
//       <br/>
//       <label htmlFor="email">Email</label>
//       <input type="email" id="email=" name="email" value={email} onChange={handleChange} />
//       <br></br>
//       <br/>
//       <label htmlFor="password">Password</label>
//       <input type="password" id="password=" name="password" value={password} onChange={handleChange}  />
//       <br></br>
//       <br/>
//       <label htmlFor='phone'>Phone</label>
//       <input type="tel" name="phone" id="phone" value={phone} onChange={handleChange}/>
//       <br/><br/>
//       <label htmlFor='gender'>Gender</label>
//       <input type="radio"id="male" name="gender" value="Male" onChange={handleChange} />
//       <label htmlFor='male'>Male</label>
//       <input type="radio" id="female" name="gender" value="Female" onChange={handleChange} />
//       <label htmlFor='female'>Female</label>
//       <br/><br/>
//       <label htmlFor='skills'>Skils:</label>
//       <input type="checkbox" name="skills" id="html" value="Html" onChange={handleChange} />
//       <label htmlFor="html">Html</label>
//       <input type="checkbox" name="skills" id="Css" value="CSS" onChange={handleChange} />
//       <label htmlFor="css">CSS</label>
//       <input type="checkbox" name="skills" id="js" value="Js" onChange={handleChange} />
//       <label htmlFor='js'>JS</label>
//       <input type="checkbox" name="skills" id="react.js" value="React.js" onChange={handleChange} />
//       <label htmlFor="react.js">React.Js</label>
//       <br/><br/>
//       <label htmlFor='photo'>Upload Id</label>
//       <input type="file" name="photo" id="photo" onChange={handleChange} />
//       <br/><br/>
//       <label htmlFor="country">Country:</label>
//       <select name="country" id="country" onChange={handleChange}>
//         <option value="india">India</option>
//         <option value="china">China</option>
//         <option value="srilanka">Srilanka</option>
//       </select>
//       <br/><br/>
//       <label htmlFor="feedback">Feedback</label>
//       <textarea name="feedback" id="feedback" value={feedback} onChange={handleChange}></textarea>
//       <br/><br/>
//       <label htmlFor="color">Color:</label>
//       <input type="color" name='color' id="color" value={color} onChange={handleChange} />
//       <br/><br/>
//       <label htmlFor="range">Range</label>
//       <input type="range" name="range" id="range" value={range} onChange={handleChange} />
//       <br/><br/>
//        <input type="submit" value="Register💐" />
//        <input type="reset" />
//     </fieldset>
//    </form>
//   )
// }

// export default ControlledFoms
//@form  using react library(react form hook)
//yup and hookforresolver uses for conditions like name is requried 
import {  useForm } from "react-hook-form"

 const ControlledFoms = () => {
  let{register,handleSubmit}=useForm()
  let formData=(data)=>{
    console.log(data)
  }
  return(
    <form onSubmit={handleSubmit(formData)}>
   <fieldset>
     <legend>
        Registration Form
       </legend>
      <label htmlFor="name">Name</label>
       <input type="text" id="name=" {...register("name")} />
      <br></br>
      <br/>
      <label htmlFor="email">Email</label>
      <input type="email" id="email=" {...register("email")} />
      
      <br></br>
      <br/>
      <label htmlFor="password">Password</label>
      <input type="password" id="password=" {...register("password")} />
      <br></br>
      <br/>
      <label htmlFor='phone'>Phone</label>
         <input type="tel" id="phone" {...register("phone")} />
       <br/><br/>
       <label htmlFor='gender'>Gender</label>
       <input type="radio"id="male"  value="Male" {...register("gender")} />
      <label htmlFor='male'>Male</label>
             <input type="radio" id="female" value="Female"  {...register("gender")}/>
     <label htmlFor='female'>Female</label>
      <br/><br/>
      <label htmlFor='skills'>Skils:</label>
       <input type="checkbox"  id="html" value="Html" {...register("skills")} />
      <label htmlFor="html">Html</label>
      <input type="checkbox" id="Css" value="CSS" {...register("skills")} />
       <label htmlFor="css">CSS</label>
      <input type="checkbox"  id="js" value="Js" {...register("skills")}/>
      <label htmlFor='js'>JS</label>
      <input type="checkbox" id="react.js" value="React.js" {...register("skills")} />
      <label htmlFor="react.js">React.Js</label>
     <br/><br/>
      <label htmlFor='photo'>Upload Id</label>
      <input type="file" id="photo"  {...register("photo")}/>
      <br/><br/>
       <label htmlFor="country">Country:</label>
       <select  id="country" {...register("country")}>
        <option value="india">India</option>
        <option value="china">China</option>
         <option value="srilanka">Srilanka</option>
     </select>
       <br/><br/>
       <label htmlFor="feedback">Feedback</label>
       <textarea  id="feedback" {...register("feedback")}></textarea>
       <br/><br/>
       <label htmlFor="color">Color:</label>/      
        <input type="color" id="color"  {...register("color")}/>
      <br/><br/>
       <label htmlFor="range">Range</label>
       <input type="range"  id="range" {...register("range")} />
       <br/><br/>
        <input type="submit" value="Register💐" />
        <input type="reset" />
     </fieldset>
    </form>
  )
 }

  
 export default ControlledFoms