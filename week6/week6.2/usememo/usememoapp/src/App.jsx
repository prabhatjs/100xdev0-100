import { useMemo } from 'react';
import { useState } from 'react'


function App() {
  const [inputnum, setinputnum] = useState(1)
  const [counter, setcounter] = useState(0)

  
    let count=useMemo(()=>{
      let finalcount=0;
      for(let i=1;i<=inputnum;i++){
        finalcount=finalcount+i; 
    }
    return finalcount;
    },[inputnum])
  
  return (
    <>
     <input type='Number' onChange={(e)=>setinputnum(e.target.value)}></input>
      <p>Sum: from 1 to {inputnum} is {count}</p>
      <br></br>
      <button onClick={()=>{
          setcounter(counter+1)
      }}>counter {counter}</button>
    </>
  )
}

export default App
