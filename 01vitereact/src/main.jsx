import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

//yaha pe bhi hum apna function bana sakte hai
function MyApp() {

  return (
    <div>
      <h1>laiba khan</h1>
    </div>
  )
}
//hum jo code custom mai likh rahe hai wo hum yaha bhi likh sakte hai ? kya wo chale ga?
//ye mera apna bana hoa object hai lekin react khod bhi create kerne ke leye deta hai

// const reactElement ={
//   type: 'a',
//   props:{
//       href: 'https://google.com',
//       target:'_blank'
//   },
//   Children:'click me to visit google'
// }




// const anotherElement=(
//   <a href="https://google.com" target="_blank" >click me</a>
// )
// createRoot(document.getElementById('root')).render(

//   <>
//       {anotherElement}
//       <MyApp/>
//       <App />
//     </>

// )
 /* sub a gai ga pher hum variable vali chese likhe gai */
const addmoreElement="Chai aur code"

//yaha pe hum key nahi dete hai
const reactElement=React.createElement(
 
  "a",
  {href:"https://google.com",target:"_blank"},
  "click me google ",
  addmoreElement

)
createRoot(document.getElementById('root')).render(
  
  reactElement
  
  )