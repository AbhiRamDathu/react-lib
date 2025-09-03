import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import './App.css'

function App() {
  

  return (
    <>
    <div className="min-h-screen bg-gray-600 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-center text-2xl font-bold text-black-800 mb-8">
            Learn about redux toolkit
          </h1>
    <AddTodo />
    <Todos />
    </div>
    </div>
    </>
  )
}

export default App
