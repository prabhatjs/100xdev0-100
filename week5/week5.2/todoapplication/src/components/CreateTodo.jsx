import React from 'react'
import { useState } from 'react';
function CreateTodo() {

    const [title,settitle]=useState("");
    const [description,setDescription]=useState("");

    function handletitle(e){
        settitle(e.target.value);
    }
    function handleDescription(e){
        setDescription(e.target.value);
    }
    function addtodos(){
            fetch('http://localhost:8080/todo',{
                method:'POST',
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "Content-type":"application/json"
                }
            }).then(async function(res){
                const data=await res.json();
                console.log(data);
                alert("Todo ADD")
            })
    }
  return (
    <div>
       <input type='text' placeholder='title' onChange={handletitle}/> <br></br>
        <input type='text' placeholder='description' onChange={handleDescription}/><br></br>
        <button onClick={addtodos}>Add</button> 
    </div>
  )
}

export default CreateTodo