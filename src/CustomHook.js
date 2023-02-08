import React from 'react'
import { useState } from 'react'
const CustomHook = () => {
    const [count, setCount]=useState(0)
const Customcounter=()=>{
    setCount(count+1)
}
  return (
    <>
    count,Customcounter
    
    </>
  )
}

export default CustomHook