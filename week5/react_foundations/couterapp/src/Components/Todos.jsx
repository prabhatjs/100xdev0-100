import React, { useState } from 'react'

function Todos() {
    const [todos,setTodos]=useState([{
        title:'Lunch',
        description:'Lunch at 2pm',
        completed:true
    },
    {   
    title:'Dinner',
    description:'Dinner at 10pm',
    completed:true
    }
])
  return (
    <div>
        {todos.map((todo)=>
        {
        return <TodosList title={todo.title} description={todo.description} completed={todo.completed}></TodosList>
        }
        )}
        {/* <TodosList title="Lunch" description="at 2pm" completed="true"></TodosList> */}
    </div>
  )
}


    function TodosList(props){
        return <div>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <h3>{props.completed}</h3>
        </div>
    }

export default Todos