import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-semibold mb-6 text-gray-800">Yalali Engine</h1>
        <div className="w-full max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-6 py-3 border rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-center space-x-4 mt-4">
            <button className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300">
              Apa yang Anda cari?
            </button>
            <button className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300">
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
