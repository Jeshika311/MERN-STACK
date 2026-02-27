import { createSlice , nanoid } from '@reduxjs/toolkit'

const todosSlice = createSlice({
    name: 'todos',
    initialState: [{ id: 1, text: 'Test Todo', completed: false }],
    reducers: {
        addTodo: {
            reducer(state,action){
                state.push(action.payload)
            },
            prepare(text){
                return{
                    payload: {
                        id: nanoid(),   // used for unique id
                        text,
                        completed: false,
                    },
                }
            },
        },
        toggleTodo(state, action) {
            return state.map(todo =>
                todo.id === action.payload
                  ? { ...todo, completed: !todo.completed }
                  : todo
            );
        },
        deleteTodo(state, action){
            return state.filter((todo) => todo.id !== action.payload)
        }
    },
})

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions
export default todosSlice.reducer