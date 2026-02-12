import React from 'react'
import { useState } from 'react'

const Cards = (props) => {
  return (
    <div>
      <input type = 'text' onChange={(e) => props.setName(e.target.value)}/>
      <p>Name State value inside {props.title} : {props.name}</p>
    </div>
  )
}

export default Cards
 