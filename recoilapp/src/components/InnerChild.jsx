import React from 'react'
import { useRecoilValue } from 'recoil'
import countAtom from '../store/atom/count'

function InnerChild() {
    const count=useRecoilValue(countAtom);
  return (
    <div>
    <b>
       I am Inner Child {count}
    </b>

    </div>
  )
}

export default InnerChild