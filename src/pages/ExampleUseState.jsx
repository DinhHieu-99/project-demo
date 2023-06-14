import React from 'react'
import Count from '../components/Count'
import TodoList from '../components/TodoList'
import ChangeColor from '../components/ChangeColor'
import '../index.css'


const useState = () => {
  return (
    <div className='content'>
      <Count/>
      <TodoList/>
      <ChangeColor/>
    </div>
  )
}

export default useState