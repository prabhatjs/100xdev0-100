import React from 'react'
import { useRecoilValue } from 'recoil'
import countAtom, { evenSelector } from '../store/atom/count'

function InnerChild() {
    const count=useRecoilValue(countAtom);
    // const message=count%2==0?'IS EVEN':'';
    const isEven=useRecoilValue(evenSelector);
  return (
    <div>
    <b> 
       {isEven ? "Its Even" : null }
    </b>

    </div>
  )
}

export default InnerChild