import { useState } from 'react'
function App() {
  return<div>
    <CardWrapper headingcomp={<CardHeaderComp/>} aboutcomp={<CardDeatilsComp/>}></CardWrapper>
  </div>
}

function CardHeaderComp(){
  return <div>
    <h1>shoes</h1>
  </div>
}

function CardDeatilsComp(){
  return<div>
    <p>This shoes is so nice!</p>
  </div>
}

function CardWrapper({headingcomp,aboutcomp}){
  return <>
  <div style={{border:"2px solid red"}}>
      {headingcomp}
  </div>
  <div style={{border:"2px solid blue"}}>
      {aboutcomp}
  </div>
  </>
}
export default App
