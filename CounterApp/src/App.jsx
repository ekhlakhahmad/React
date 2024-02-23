import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="w-full h-screen flex items-center content-center flex-col gap-3 mt-20 mx-auto">
      <div className='w-44 p-5 text-center border-2 rounded-xl border-rose-700 text-2xl font-medium'>{count}</div>
      <button className='w-40 p-2 text-center bg-green-800 rounded-xl text-white' onClick={() => {
        if (count != 10) {
          setCount(count+1)
        }
      }}>Increased +1</button>
      <button className='w-40 p-2 text-center bg-red-800 rounded-xl text-white' onClick={() => {
        if (count != 0) {
          setCount(count-1)
        }
      }}>Decreased -1</button>
    </div>
  )
}

export default App
