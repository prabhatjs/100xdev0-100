import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [selectbtn,setSelectbtn]=useState(1);
  return (
    <>
    <button onClick={()=>setSelectbtn(1)}>1</button>
    <button onClick={()=>setSelectbtn(2)}>2</button>
    <button onClick={()=>setSelectbtn(3)}>3</button>
    <button onClick={()=>setSelectbtn(4)}>4</button>
      <Todo id={selectbtn} />
    </>
  )
}
function Todo({id})
{
  const [todo,settodos]=useState([])
  useEffect(()=>{
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then(function(resp){
    settodos(resp.data.todo);
    console.log(resp.data)
    })
    },[id])

    return<>
    id:{id}
    <h1>{todo.title}</h1>
    <h1>{todo.description}</h1>
    </>
}

export default App
