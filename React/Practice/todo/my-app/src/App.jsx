import React from 'react'
import AddTodo from './components/AddTodo'
import TodoList from './components/ToDoList'

const App = () => {
  return (
    <div
      style={{
        maxWidth: '500px',
        margin: '50px auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '8px',
      }}
    >
      <h2>Todo App</h2>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
