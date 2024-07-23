import { useState } from 'react'
function App() {
  // return<div>
  //   <CardWrapper headingcomp={<CardHeaderComp/>} aboutcomp={<CardDeatilsComp/>}></CardWrapper>
  // </div>

  return<div>
    <CardWrapper >
      <h1>Shoes</h1>
    </CardWrapper>
    <CardWrapper>
    <p>This shoes is nice!</p>
    </CardWrapper>
  </div>

}

// function CardHeaderComp(){
//   return <div>
//     <h1>shoes</h1>
//   </div>
// }

// function CardDeatilsComp(){
//   return<div>
//     <p>This shoes is so nice!</p>
//   </div>
// }

function CardWrapper({children}){
return <div style={{border:"2px solid red"}}>
  {children}
</div>

  // return <>
  // <div>
  //     {headingcomp}
  // </div>
  // <div style={{border:"2px solid blue"}}>
  //     {aboutcomp}
  // </div>
  // </>
}
export default App
