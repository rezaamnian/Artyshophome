'use client'

import React, { useEffect, useState } from 'react'
import './test1.css'
export default function Test1() {

const [w,setw]=useState(window.innerWidth);

useEffect(()=>{

window.addEventListener('resize',handelresize)

return ()=> window.removeEventListener('resize',handelresize)

}




,[window.innerWidth])





const handelresize=()=>{
  console.log(window.innerWidth)
  setw(window.innerWidth)
}

  return (
    <div >
      <div className='p1' style={{width:`${w-50}px`}}>
      
        

      </div>
    </div>
  )
}
