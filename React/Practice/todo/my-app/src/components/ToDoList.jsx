import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../features/todos/todosSlice'

const TodoList = () => {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            marginBottom: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
              fontWeight: todo.completed ? 'bold' : 'normal',
              color: todo.completed ? 'green' : 'black',
            }}
          >
            {todo.text}
          </span>

          <div>
            <button
              style={{
                marginRight: '5px',
                backgroundColor: todo.completed ? '#28a745' : '#ffc107',
              }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.completed ? 'Completed' : 'Mark Complete'}
            </button>

            <button
              style={{ backgroundColor: '#dc3545' }}
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
