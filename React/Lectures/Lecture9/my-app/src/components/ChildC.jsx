import React, { useContext } from 'react'
import { ThemeContext } from '../App'
// import { ThemeContext } from 'react'

const ChildC = () => {
    const {theme , settheme} = useContext(ThemeContext);

    function handleClick(){
      if(theme === 'light'){
        settheme('dark')
      }
      else{
        settheme('light')
      }
    }
  return (
    <div>
      <button onClick={handleClick}>Change Theme</button>
    </div>
  )
}

export default ChildC
