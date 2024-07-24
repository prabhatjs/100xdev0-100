import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [todo, settodos] = useState([])

  useEffect(()=>{
    //setInterval(()=>{
      fetch('https://sum-server.100xdevs.com/todos')
    .then((async function (res){
      const json=await res.json();
      settodos(json.todos);
    }))
  //  })
    
},[])

  return (
    <>
     {todo.map(todos=><Todos key={todos.id}
     title={todos.title} description={todos.description}/>)}
    </>
  )
}

function Todos({title,description}){
  return <div>
    <h1>{title}</h1>
    <h4>{description}</h4>
  </div>
}

export default App
