import { useState } from 'react'

import './App.css'

function App() {
  const [country, setCountry] = useState({name:"",value:"",cities:[]});
  const countries=[
    {
      name:'India',
      value:'IN',
      cities:[
        'Delhi',
        'Mumbai',
        'Punjab'
      ]
    },
    {
      name:'Pakistan',
      value:'PK',
      cities:[
        'Karachi',
        'Lahore',
        'Insalamabad'
      ]
    },
    {
      name:'Bangladesh',
      value:'BG',
      cities:[
        'Dhaka',
        'Chittagaon',
      ]
    },
  ];
  console.log(countries[country].cities)
  // const data=countries[country].cities;

  return (
    <>
    <select value={country} onChange={(e)=>{
      console.log(e.target.value);
      setCountry(e.target.value)
    }}>
      {
       countries.map((item,index)=>{
       return <option value={index}>{item.name}</option>
        })
      }
    </select> 
       <select value={country}>
          {
           countries[country].cities.map((item,index)=>{
            return <option value={index}>{item}</option>;
           })
          }
      </select> 

    </>
  )
}

export default App
