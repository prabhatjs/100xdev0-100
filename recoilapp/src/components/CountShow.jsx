import React from 'react'
import { useRecoilValue } from 'recoil'
import countAtom from '../store/atom/count'

function CountShow() {
    //this need count 
    const count=useRecoilValue(countAtom);
  return (
    <div>{count}</div>
  )
}

export default CountShow