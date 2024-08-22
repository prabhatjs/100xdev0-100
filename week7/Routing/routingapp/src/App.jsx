import React, { Suspense, useState } from 'react'
import {BrowserRouter,Route,Routes, useNavigate} from 'react-router-dom'
//import DashBoard from './components/DashBoard'
const LandingPage =React.lazy(()=>import('./components/LandingPage'))
//lazy loading
const DashBoard =React.lazy(()=>import('./components/DashBoard'))
function App() {
  
 

    // function handleClick(){
    //   navigater('/');
    //  // navigater('/dashboard');
    // }
  return (
    <div>
  
  <BrowserRouter>
  <AppBar/>
    <Routes>
      <Route path='/dashboard' element={<Suspense fallback={"Loading...."}> <DashBoard/></Suspense>}/>
      <Route path='/' element={<Suspense fallback={"Loading...."}><LandingPage/></Suspense>} />
    </Routes>
  </BrowserRouter>
  </div>
  )
}


function AppBar(){
  const navigater=useNavigate();
  return<div>
     <div>
      <button onClick={()=>navigater('/')}>Landing Page</button>
      <button onClick={()=>navigater('/dashboard')}>DashBoard</button>
    </div>
  </div>
}



export default App
