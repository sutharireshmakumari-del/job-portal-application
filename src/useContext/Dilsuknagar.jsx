import React, { useContext } from 'react'
import Chaitanyapuri from './Chaitanyapuri'
import { Icecreamecontext } from '../useState/Zepto'

const Dilsuknagar = () => {
  let icecream=useContext(Icecreamecontext)
  return (
    <div>
      <h1>I receivered my {icecream} 🍫</h1>
      <Chaitanyapuri/>
    </div>
  )
}

export default Dilsuknagar