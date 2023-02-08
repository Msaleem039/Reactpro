import React from 'react'
import CustomHook from './CustomHook'

const Counter = () => {
    const data = CustomHook();
  return (
    <div>
    <h1>{data.count}</h1> 
    <button type='button' onClick={data.cutomcounter}></button>
    </div>
  )
}

export default Counter