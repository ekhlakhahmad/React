import { useState } from "react"

function App() {
  const [color, setColor] = useState()
  return (
    <div className="w-full h-screen" style={{backgroundColor:color}}>
      <div className= "w-full md:flex-row flex flex-col justify-center items-center h-screen">
        <button className="border border-red-500 p-2 w-20 font-bold rounded-md mx-1 cursor-pointer  bg-red-500" onClick={()=>setColor("red")}>Red</button>
        <button className="border border-red-500 p-2 w-20 font-bold rounded-md mx-1 cursor-pointer  bg-green-500" onClick={()=>setColor("green")}>Green</button>
        <button className="border border-red-500 p-2 w-20 font-bold rounded-md mx-1 cursor-pointer  bg-blue-500" onClick={()=>setColor("blue")}>Blue</button>
        <button className="border border-red-500 p-2 w-20 font-bold rounded-md mx-1 cursor-pointer  bg-yellow-500" onClick={()=>setColor("yellow")}>Yellow</button>
        <button className="border border-red-500 p-2 w-20 text-white font-bold rounded-md mx-1 cursor-pointer  bg-black" onClick={()=>setColor("black")}>Black</button>
        <button className="border border-red-500 p-2 w-20 font-bold rounded-md mx-1 cursor-pointer  bg-pink-500" onClick={()=>setColor("pink")}>Pink</button>
        <button className="border border-red-500 p-2 w-20 font-bold rounded-md mx-1 cursor-pointer  bg-white" onClick={()=>setColor("white")}>White</button>
        <button className="border border-red-500 p-2 w-20 font-bold rounded-md mx-1 cursor-pointer  bg-cyan-500" onClick={()=>setColor("cyan")}>Cyan</button>
      </div>
    </div>
  )
}

export default App
