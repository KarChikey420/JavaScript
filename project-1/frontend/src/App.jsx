import { useState } from 'react'
import { CreateTodo } from './component/createTodo'
import { Todos } from './component/todo'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CreateTodo />
      <Todos/>
    </>
  )
}

export default App
