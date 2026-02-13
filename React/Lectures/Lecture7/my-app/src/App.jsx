import { useState } from 'react'
import './App.css'

function App() {

  function handleClick() {
    alert("I am clicked");
  }

  function handleMouseOver(){
    alert("Mouse is hover on para")
  }

  function handleInputChange(){
    console.log("Value is changed in input")
  }

  function handleSubmit(e){
    e.preventDefault();

    alert("Can i submit form?")
  }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input type = "text" onChange = {handleInputChange}/>
        <button type='submit'>Submit</button>
      </form>

      <p onMouseOver={handleMouseOver}>
        I am a para
      </p>

      <button onClick={handleClick}>
        Click me
      </button>
    </div>
  )
}

export default App
