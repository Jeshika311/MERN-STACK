import { createSlice, nanoid } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        state.push(action.payload)
      },
      prepare(text) {
        return {
          payload: {
            id: nanoid(),
            text,
            completed: false,
          },
        }
      },
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload)
    },
  },
})

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer
