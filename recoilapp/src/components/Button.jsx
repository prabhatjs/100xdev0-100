import React from 'react'
import { useSetRecoilState } from 'recoil'
import countAtom from '../store/atom/count'

function Button() {
    //this need setcount
    const setCount=useSetRecoilState(countAtom)//only count value re-render button component is not re-renders
    console.log("re-render")
  return (
    <div>
        <button onClick={()=>setCount(count=>count+1)}>Increment</button>
        <button onClick={()=>setCount(count=>count-1)}>Decrement</button>
    </div>
  )
}

export default Button