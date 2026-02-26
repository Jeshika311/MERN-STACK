import React, { useState } from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt={props.title} className="product-img" />
      <h3 className="product-title">{props.title}</h3>
      <p className="product-desc">{props.description}</p>
      <h4 className="product-price">${props.price}</h4>
      <div className="quantity">
        <button onClick={props.decrement}>-</button>
        <span>{props.quantity}</span>
        <button onClick={props.increment}>+</button>
      </div>
    </div>
  );
};

export default ProductCard;
