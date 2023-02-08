import React from 'react'

const Map = () => {
const arr=[10,20,30,40];
const newarr=
    arr.map((num)=>{
        return <li>{num*2}</li>
    })
console.log("oldArray=", arr);
console.log("NewArray=", newarr)
  return (
   <>
  {newarr}
   </>
  )
}

export default Map