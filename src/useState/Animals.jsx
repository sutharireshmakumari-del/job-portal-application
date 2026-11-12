//arrays using hooks (useState)
import {useState} from 'react'

const Animals = () => {
  let[animals,setAnimals]=useState(["🐐","🐵","🦓","🐽"])
  let handleAnimals=()=>{
    setAnimals([...animals,"🦘","🐘"])
  }
  return (
    <div>
      <h1>Types of Animals</h1>
      <ol>
        {
          animals.map((item,index)=>{
            return <li key={index}>{item}</li>
          })
        }
      </ol>
      <button onClick={handleAnimals}>Add animals</button>
    </div>
  )
}

export default Animals