import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleTodo, deleteTodo } from '../features/todos/todosSlice'

const TodoList = () => {
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    return (
        <ul style={{listStyle: 'none' , padding: 0}}>
            {todos.map((todo) => (
                <li key={todo.id} style={{ color: 'black', marginBottom: '10px'}}>
                    <button 
                    onClick={() => {
                        console.log("clicked" , todo.id)
                        dispatch(toggleTodo(todo.id))}
                    }
                    style={{ textDecoration: todo.completed ? 'line-through' : 'none', color: todo.completed ? 'gray' : 'black', cursor: 'pointer', marginRight: '10px',
            }}>
                    {todo.text}
                    </button>
                    <button onClick={() => dispatch(deleteTodo(todo.id))}>
                        Delete
                    </button>
                     {todo.completed === true && (
                    <button style={{ marginLeft: '10px', background: 'green', color: 'white' }}
                    >
                      Completed
                    </button>
                  )}
                </li>
            ))}
        </ul>
        
    )
    console.log("TodoList rendered", todos);

}
export default TodoList