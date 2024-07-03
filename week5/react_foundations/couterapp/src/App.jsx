import { useState } from 'react'
import Todos from './Components/Todos';


function App() {
  const [count, setCount] = useState(0)
  const [secount,setSeccount]=useState(0);
  const [Increment,SetIncrement]=useState(0);
  function onCounterplus(){
    // alert("hello");
    
    setSeccount(secount+1);
  }
  function onCountMinus(){
    setSeccount(secount-1);
  }
  function incrementbyfive(){
    SetIncrement((steps)=>steps+1);
    SetIncrement((steps)=>steps+1);
    SetIncrement((steps)=>steps+1);
    SetIncrement((steps)=>steps+1);

    SetIncrement((steps)=>steps+1);

    // SetIncrement((prevcount)=>prevcount+1);
    // SetIncrement((prevcount)=>prevcount+1);
    // SetIncrement((prevcount)=>prevcount+1);
    // SetIncrement((prevcount)=>prevcount+1);
  }

  return (
    <>
    <h1>{secount}</h1>
    <h2>{Increment}</h2>
    <Button count={count} setCount={setCount}></Button>
    <button onClick={onCounterplus}>Increment+</button>
    <button onClick={onCountMinus}>Decrement</button>
    <button onClick={()=>incrementbyfive(5)}>Incremnt by 5</button>
    <button onClick={()=>incrementbyfive(1)}>Decrement</button>

    <Todos/>
    </>
  )
}
/**button components */
function Button(props){
    function onButtonClick(){
        props.setCount(props.count+1)
    }
    return <button onClick={onButtonClick}>counter:{props.count}</button>
}

export default App
