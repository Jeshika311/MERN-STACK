import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice.jsx'

export const store =  configureStore({
    reducer : {
        counter: counterReducer
    },
})

// steps : 
// create store
// wrap app Component under provider
// create slice
// register reducer in store