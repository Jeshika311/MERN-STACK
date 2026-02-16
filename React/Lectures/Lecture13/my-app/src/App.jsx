import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  // const [count, setCount] = useState(0)
  // let val = useRef(0);

  let btnRef = useRef();

  // function handleIncrement(){
  //   val.current = val.current+1;
  //   setCount(count+1);
  // }

  // useEffect(() => {
  //   console.log("I am rendering")
  // })

  function changeColor() {
    btnRef.current.style.backgroundColor = "blue";
  }
//  onClick={handleIncrement}
  return (
    <div>
      <button ref = {btnRef}>Increment</button><br/><br/>
      <button onClick={changeColor}>Change color of 1st button</button>
      {/* <div>Count : {count}</div> */}
    </div>
  )
}

export default App
