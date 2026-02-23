import React from 'react'
import './Count.css'

const Count = (props) => {
  return (
    <div className = "main_div">
      <button onClick={props.Decrease}>-</button>
        <span>{props.Count}</span>
      <button onClick={props.Increase}>+</button>
    </div>
  )
}

export default Count
