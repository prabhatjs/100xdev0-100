import React from "react"
function Todos({todos}){
   return (
       <div>
         {
           todos?.map(function(todos){
               return <div>
               <h3>{todos.title}</h3>
               <p>{todos.description}</p>
               <button>{todos.completed=='true' ? "Completed":"Mark As complete"}</button>
               </div>
           })
         }
       </div>
   )
}

export default Todos