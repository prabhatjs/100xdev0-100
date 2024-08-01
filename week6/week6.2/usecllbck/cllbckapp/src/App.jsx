import { useCallback } from "react";
import { useState,memo } from "react"

function App() {
  const inputfun =useCallback(function(){
    console.log("Input fun re-render");
  },[])
// function a(){
//   console.log("hi there!");
// }
/*
const a =useCallback(function(){
  console.log("hi there");
},[])

const [counter,setcounter]=useState(0);

  return (
    <>
      <button onClick={()=>setcounter(counter+1)}>counter :{counter}</button>
      <Demo a={a}/>
    </>
  )
}

const Demo=memo(function({a}){
  console.log("hello i am render ");
  return <div>
    hi there {a}
  </div>
})
example 1...
*/
const [counter,setcounter]=useState(0);

return <>
  <Child inputfun={inputfun}/>
  <button onClick={()=>{setcounter(counter+1)}}>click me {counter}</button>
</>

}

const Child=memo(({inputfun})=>{
  console.log("child renders");
  return <div>
    <button onClick={inputfun}>Button Click</button>
  </div>
})


export default App
/*
usecallback is a hook in react a popular javascript library for buliding user interface it is used
to memoize function which can help in optimizing the performance of your application especially in case
invloving child components that rely on refrence equality to prevent unnecessary renders
**/