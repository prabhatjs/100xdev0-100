import React from 'react'
import { useRecoilState, useSetRecoilState } from 'recoil'
import countAtom from '../store/atom/count'

function Button() {
    //this need setcount
    const [count,setCount]=useRecoilState(countAtom)
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
    </div>
  )
}

export default Button