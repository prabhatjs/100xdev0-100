import { useState,useEffect } from 'react'
import CreateTodo from './components/CreateTodo'
import Todos from './components/Todos'
function App() {

 const [todos,setTodos]=useState([]);
 
  
  useEffect(()=>{
    fetch("http://localhost:8080/todos")
  .then(async function(res){
    const data=await res.json();
    console.log(data);
    setTodos(data.todos);
  })
  },[])
  return (
    <>
    <CreateTodo/>
    <Todos todos={todos}></Todos>
    </>
  )
}

export default App
