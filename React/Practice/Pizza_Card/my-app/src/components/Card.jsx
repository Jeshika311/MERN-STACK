import React, { useState } from 'react';
import pizza from '../assets/pizza.jpg'
import "./Card.css"

const Card = () => {
  return (
    <div className="pizza-card">
      <img src = {pizza} alt = "Italian Pizza" height={260} width={200} />

      <div className="pizza-details">
        <h3>Italian Pizza</h3>
        <p className="price">$2</p>
      </div>
      <div className="overlay">
        <button className="add-to-cart">ADD TO CART</button>
      </div>
    </div>
  )
}

export default Card
