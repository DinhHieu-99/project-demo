import { useState } from 'react'
import Count from './components/Count'
import TodoList from './components/TodoList'
import ChangeColor from './components/ChangeColor'

function App() {

  return (
    <>
      <Count/>
      <TodoList/>
      <ChangeColor/>
    </>
  )
}

export default App
