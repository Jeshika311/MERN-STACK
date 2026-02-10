import React from 'react'
import jeshika from '../assets/jeshika.jpg'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div  className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={props.image} alt={props.name} height={200} width={200}></img>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
