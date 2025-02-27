import { useState , useCallback ,useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useFormState } from 'react-dom'

function App() {
  const [length , setlength] =useState(8)
  const [ numberAllowed, setnumberAllowed] =useState(false)
  const [CharAllowed, setCharAllowed] =useState(false)
  const [Password , setPassword] =useState("")
  const [count, setCount] = useState(0)

  //ref hook
  const passwordRef = useRef(null)

  const PasswordGenerator = useCallback(()=>{
    let pass = ""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(CharAllowed) str += "!@#$%^&*()_+-=[]{}?:;/"
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random()*str.length +1)
      pass += str.charAt(char)
      
    }
    setPassword(pass)
  } , [length , numberAllowed , CharAllowed , setPassword])


  const copypasswordToClipboard =useCallback(()=>{
    passwordRef.current?.select()
    //hame jab khuch range chaye ho ga to hum ye bhi linkh sakte hai
    // passwordRef.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=>{
    PasswordGenerator()
  },[length , numberAllowed , CharAllowed, PasswordGenerator])
  return (
    <>
      <h1 className='text-4xl font-bold text-center text-white m-10'>PASSWORD GENERATOR</h1>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-5 py-3 my-8  text-orange-500 bg-gray-700'>
        <div className='flex shadow rounded-lg overflow-hidden my-4'>
          <input type="text"
           value={Password}
            className='outline-none w-full py-2 px-3 ' 
            placeholder='password' 
            readOnly
            ref={passwordRef}
             />
          <button 
          onClick={copypasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-1 '>
            Copy
            </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1 pr-3'>
            <input 
            type="range"
             min={6} 
             max={100} 
             value={length} 
             className='cursor-pointer'
             onChange={(e)=>{setlength(e.target.value)}}/>
            <label >Length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1 pr-3'>
              <input
               type="checkbox"
               id='numberInput' 
               defaultChecked={numberAllowed} 
               onChange={()=>{setnumberAllowed((prev)=>!prev)}} />
              <label htmlFor='numberInput'>Numbers</label>
            </div> 
            <div className='flex items-center gap-x-1 pr-3'>
              <input 
              type="checkbox" 
              id='CharInput' 
              defaultChecked={CharAllowed} 
              onChange={()=>{setCharAllowed((prev)=>!prev)}} />
              <label htmlFor='CharInput'>Characters</label>
            </div> 
          </div>
      </div>

    </>
  )
}

export default App

