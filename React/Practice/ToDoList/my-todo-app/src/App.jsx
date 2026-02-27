import { useState } from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import './App.css'

function App() {

  return (
    <div className='container'>
      <h2>Todo App</h2>
      console.log("App rendered");
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
