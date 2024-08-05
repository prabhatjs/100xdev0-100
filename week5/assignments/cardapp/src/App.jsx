import { useState } from 'react'
import './App.css'
import Card from './components/Card';
function App() {

  const interest=
  ["React","Nodejs","Open source",'Java']
    const [name,setname]=useState('');
    const [description,setdescription]=useState('');
    const [Interest,setIntrest]=useState([]);
    const [Linkedin,setLinkdin]=useState('');
    const [github,setgithub]=useState('');

  return (
    <>
    <div id='maindiv'>
    <div id='inputdiv'>
      <h2>E-Card</h2>
      <input type='text' placeholder='Enter Your Name' id='input1' onChange={(e)=>setname(e.target.value)}/> <br></br>
      <input type='text' placeholder='Enter Short Description' id='input1' onChange={(e)=>setdescription(e.target.value)}/><br></br>
      <input type='text' placeholder='Enter Url of Linkedin' id='input1' onChange={(e)=>setLinkdin(e.target.value)}/><br></br>
      <input type='text' placeholder='Enter Url of Github' id='input1' onChange={(e)=>setgithub(e.target.value)}/><br></br>

    </div>
    </div>
    <Card name={name} description={description} Linkedin={Linkedin} github={github} interest={interest}></Card>
    </>
  )
}





export default App
