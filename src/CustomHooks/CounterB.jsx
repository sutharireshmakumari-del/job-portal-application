import React from 'react'
import useCounter from './useCounter'

const CounterB = () => {
 let{count,handleIncrement,handleDecrement} =useCounter()
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>
        +
      </button>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}

export default CounterB