
import { useState } from 'react'
import './App.css'
import Header from './component/Header'

function App() {
  const [title,settitle]=useState("welcome to my todo app");

  function chnageHeader(){
    settitle(Math.random());
  }
  return ( 
  <div>
    <button onClick={chnageHeader}>change title of todo</button>
      <Header title={title}/>
      <Header title={"welcome to list of todo"}></Header>
      <Header title={"welcome to list of todo"}></Header>
      <Header title={"welcome to list of todo"}></Header>
      <Header title={"welcome to list of todo"}></Header>
      <Header title={"welcome to list of todo"}></Header>
      <Header title={"welcome to list of todo"}></Header>
      </div>
  )
}

export default App
