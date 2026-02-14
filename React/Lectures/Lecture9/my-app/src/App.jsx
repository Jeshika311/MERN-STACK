import { createContext } from 'react'
import './App.css'
import ChildA from './components/ChildA'
import { useState } from 'react';

const ThemeContext = createContext();

function App() {
  // const [user , setUser] = useState({name : "Jeshika"})
  const [ theme , settheme] = useState("light");

  return (
    <>
      {/* <UserContext.Provider value={user}>
        <ChildA /> 
      </UserContext.Provider> */}

      <ThemeContext.Provider value={{theme , settheme}}>
        <div id='container' style={{backgroundColor: theme === 'light'?'beige':'black'}}>
          <ChildA />          
        </div>

      </ThemeContext.Provider>
    </>
  )
}

export default App
export {ThemeContext}