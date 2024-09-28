import React from 'react'
import Button from './Button'
import CountShow from './CountShow'
import InnerChild from './InnerChild'

function Count() {
  return (
    <div>
    <CountShow></CountShow>
    <Button></Button>
    <InnerChild></InnerChild>
        
    </div>
  )
}

export default Count