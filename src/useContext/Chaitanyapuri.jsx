import React, { useContext } from 'react'
import { gulamabjamuncontext, ItemContext } from '../useState/Zepto'

const Chaitanyapuri = () => {
  let jamun=useContext(gulamabjamuncontext)
  let items=useContext(ItemContext)
  let {biscuits,chips,chocolate:{choco1,choco2},softDrinks}=items
  return (
    <div>
      <h1>i received my {jamun} </h1>
      <ol>
        <li>{biscuits}</li>
        <li>{chips}</li>
        <li>{softDrinks()}</li>
        <li>{choco1}</li>
        <li>{choco2}</li>
      </ol>
    </div>
  )
}

export default Chaitanyapuri