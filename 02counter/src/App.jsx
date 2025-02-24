import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //hum bhut jagha is ko istamal kersakte hai aur aik sath hi change hota rahe ga
  //counter ko update kerne ke leye setcounter ko use kare gai
  const [counter , setCounter]= useState(0);   
  //let counter= 5;
  const AddValue=()=>{
    // console.log("hi")
    //counter++;
    //setCounter(counter) // is method ke leye const ke bagai let kerna ho ga
    //is tarike se bhi likh sakte hai
    if (counter<50){
      setCounter(counter + 1);
    }
  }
  const RemoveValue=()=>{
    if (counter>=1){
      setCounter(counter - 1);
    }
  }
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value: {counter}</h2>
     <button onClick={AddValue}>Add Value</button>
     <br/>
     <button onClick={RemoveValue}>Remove value</button>
    </>
  )
}

export default App
