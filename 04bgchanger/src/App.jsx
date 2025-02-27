import { useState } from "react"

function App() {
  const [colour, setColour] = useState("Pink")

  return (
    <>
     <div className="w-full h-screen duration-200" style={{backgroundColor: colour}}>
     <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
      <div className="flex flex-wrap gap-3 justify-center shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button 
        onClick={()=>setColour("#3a0008")}
        className=" outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor:"#3a0008"}}>MAROON</button>
        <button
        onClick={()=>setColour("#858585")}
        className=" outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor:"#858585"}}>GRAY</button>
        <button
        onClick={()=>setColour("#0e2219")}
        className=" outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor:"#0e2219"}}>GREEN</button>
        <button
        onClick={()=>setColour("#850127")}
        className=" outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor:"#850127"}}>PINK</button>
        <button
        onClick={()=>setColour("#080e1e")}
        className=" outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor:"#080e1e"}}>BLUE</button>
        <button
        onClick={()=>setColour("#f7cb03")}
        className=" outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor:"#f7cb03"}}>YELLOW</button>
        <button
        onClick={()=>setColour("black")}
        className=" outline-none px-4 py-1 text-white shadow-lg rounded-full" style={{backgroundColor:"black"}}>BLACK</button>
        <button 
        onClick={()=>setColour("white")}
        className=" outline-none px-4 py-1 text-black shadow-lg rounded-full" style={{backgroundColor:"white"}}>WHITE</button>
      </div>
     </div>
     </div>
    </>
  )
}

export default App
