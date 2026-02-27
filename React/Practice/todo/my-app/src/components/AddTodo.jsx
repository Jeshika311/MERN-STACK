import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todosSlice'

const AddTodo = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    dispatch(addTodo(text))
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter todo"
        style={{ padding: '8px', width: '200px', marginRight: '10px' }}
      />
      <button type="submit" style={{ padding: '8px 15px' }}>
        Add
      </button>
    </form>
  )
}

export default AddTodo
