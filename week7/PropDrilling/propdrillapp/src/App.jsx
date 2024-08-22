import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
     <>
      <Count count={count} setCount={setCount}></Count>
      
     </>
  )
}

function Count({count,setCount}){
return<>
  {count}
  <Buttons count={count} setCount={setCount}></Buttons>
</>
}

function Buttons({count,setCount}){
  return<>
  <button onClick={()=>{
    setCount(count+1)
  }}>Increase</button>
  <button onClick={()=>{
      setCount(count-1)
  }}>Decrease</button>
  </>
}

export default App
