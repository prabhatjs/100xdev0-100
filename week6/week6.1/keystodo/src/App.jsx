import { useState } from 'react'


function App() {
  const [todos, setTodos] = useState([
   {
    id:1,
    title:"Go to Gym",
    description:"Gym at 7pm daily"
   },
   {
    id:2,
    title:"Go to Market",
    description:"Market at 9am to buy vegitable"
   },
   {
    id:3,
    title:"Go to Gym",
    description:"Gym at 7pm daily"
   }
  ])
    function addtodo(){
      const newTodos=[];
      for(let i=0;i<todos.length;i++){
        newTodos.push(todos[i]);
      }
      newTodos.push({
        id:4,
        title:"Go to ofice",
        description:"Daily "
      });
      setTodos(newTodos);
    }
  return (

    <>
    <button onClick={addtodo}>Add Todo</button>
     {
      todos.map(e=>(
        <div key={e.id}>
        <li >{e.description}</li>
        <li>{e.title}</li>
      </div>
      ))
     }
    </>
  )
}

export default App
