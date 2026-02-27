import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todosSlice'
import './AddTodo.css'

const AddTodo = () => {
    const[text,setText] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!text.trim()){
            return
        }
        dispatch(addTodo(text))
        setText('')
    }
  return (
    <form onSubmit={handleSubmit}>
        <input className = "input-text" type='text' value={text} onChange={(e) => setText(e.target.value)} placeholder='Enter todo'/>
        <button className = "button" type='submit'>Add</button>
    </form>
  )
}

export default AddTodo
